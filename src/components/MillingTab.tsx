import { useState, useMemo } from 'react'
import { faceMills, insertGrades, insertGeometries, millingMaterials } from '../data/tooling'
import type { MillingMaterial } from '../data/tooling'
import type { UnitSystem } from '../types'

const MM_PER_IN = 25.4
const FT_PER_M = 3.28084

type SubTab = 'calculator' | 'facemills' | 'inserts' | 'grades'
type MillType = 'face45' | 'square90' | 'highfeed'

function mmToIn(mm: number) { return mm / MM_PER_IN }
function mMinToSfm(v: number) { return v * FT_PER_M }

interface Props { units: UnitSystem }

export default function MillingTab({ units }: Props) {
  const [subTab, setSubTab] = useState<SubTab>('calculator')
  const isIn = units === 'imperial'

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        {([
          { id: 'calculator' as SubTab, label: 'Calculateur' },
          { id: 'facemills' as SubTab, label: 'Face Mills' },
          { id: 'inserts' as SubTab, label: 'Geometries Inserts' },
          { id: 'grades' as SubTab, label: 'Grades Carbure' },
        ]).map(t => (
          <button
            key={t.id}
            onClick={() => setSubTab(t.id)}
            className={`px-4 py-1.5 text-xs rounded-full font-medium transition-colors ${
              subTab === t.id ? 'bg-imperial text-steel-950' : 'bg-steel-800 text-steel-400 hover:text-imperial'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {subTab === 'calculator' && <MillingCalculator isIn={isIn} />}
      {subTab === 'facemills' && <FaceMillTable isIn={isIn} />}
      {subTab === 'inserts' && <InsertTable />}
      {subTab === 'grades' && <GradeTable />}
    </div>
  )
}

/* ==================== CALCULATOR ==================== */
function MillingCalculator({ isIn }: { isIn: boolean }) {
  const [millType, setMillType] = useState<MillType>('face45')
  const [materialIdx, setMaterialIdx] = useState(0)
  // Internal state ALWAYS in mm
  const [dMm, setDMm] = useState(80)
  const [teeth, setTeeth] = useState('6')
  const [apMm, setApMm] = useState(2)
  const [aeMm, setAeMm] = useState(50)
  const [speedPct, setSpeedPct] = useState(50)
  const [feedPct, setFeedPct] = useState(50)

  const mat: MillingMaterial = millingMaterials[materialIdx]
  const z = parseInt(teeth) || 1
  const uLabel = isIn ? 'in' : 'mm'

  // Display values: convert mm → current unit for inputs
  const dDisplay = isIn ? mmToIn(dMm).toFixed(3) : dMm.toString()
  const apDisplay = isIn ? mmToIn(apMm).toFixed(3) : apMm.toString()
  const aeDisplay = isIn ? mmToIn(aeMm).toFixed(3) : aeMm.toString()

  // Parse input: convert current unit → mm for storage
  const handleD = (val: string) => {
    const n = parseFloat(val)
    if (!isNaN(n) && n >= 0) setDMm(isIn ? n * MM_PER_IN : n)
  }
  const handleAp = (val: string) => {
    const n = parseFloat(val)
    if (!isNaN(n) && n >= 0) setApMm(isIn ? n * MM_PER_IN : n)
  }
  const handleAe = (val: string) => {
    const n = parseFloat(val)
    if (!isNaN(n) && n >= 0) setAeMm(isIn ? n * MM_PER_IN : n)
  }

  // Vc range based on mill type
  const vcRange = millType === 'face45' ? mat.vcFace45
    : millType === 'square90' ? mat.vcSquare90
    : mat.vcHighFeed

  const fzRange = millType === 'face45' ? mat.fzFace
    : millType === 'square90' ? mat.fzSquare
    : mat.fzHighFeed

  // All calculations in mm
  const vc = vcRange[0] + (vcRange[1] - vcRange[0]) * (speedPct / 100)
  const fz = fzRange[0] + (fzRange[1] - fzRange[0]) * (feedPct / 100)

  const rpm = dMm > 0 ? (vc * 1000) / (Math.PI * dMm) : 0
  const vf = rpm * z * fz                            // mm/min
  const mrr = (apMm * aeMm * vf) / 1000              // cm³/min
  const power = (mrr * mat.kc) / (60 * 1000)          // kW
  const powerHP = power * 1.341

  const rpmR = Math.round(rpm)
  const vfR = Math.round(vf)

  const groupedMats = useMemo(() => {
    const groups: { cat: string; items: { idx: number; name: string }[] }[] = []
    millingMaterials.forEach((m, i) => {
      let g = groups.find(x => x.cat === m.category)
      if (!g) { g = { cat: m.category, items: [] }; groups.push(g) }
      g.items.push({ idx: i, name: m.name })
    })
    return groups
  }, [])

  // Dual display helper: primary unit first, secondary in parentheses
  const dual = (mm: number, dec?: number) => {
    const dIn = dec ?? (isIn ? 3 : 1)
    return isIn
      ? `${mmToIn(mm).toFixed(dIn)} in (${mm.toFixed(1)} mm)`
      : `${mm.toFixed(dIn)} mm (${mmToIn(mm).toFixed(3)} in)`
  }

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {/* Inputs */}
      <div className="bg-steel-900/50 border border-steel-800 rounded-lg p-4 space-y-4">
        <h3 className="text-sm font-bold text-imperial">Parametres Fraisage</h3>

        {/* Mill type */}
        <div>
          <label className="block text-xs text-steel-400 mb-1">Type de fraise</label>
          <div className="flex gap-2 flex-wrap">
            {([
              { id: 'face45' as MillType, label: '45° Surfacage' },
              { id: 'square90' as MillType, label: '90° Epaulement' },
              { id: 'highfeed' as MillType, label: 'High Feed' },
            ]).map(t => (
              <button key={t.id} onClick={() => setMillType(t.id)}
                className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
                  millType === t.id ? 'bg-imperial text-steel-950' : 'bg-steel-800 text-steel-400 hover:text-imperial'
                }`}>{t.label}</button>
            ))}
          </div>
        </div>

        {/* Material */}
        <div>
          <label className="block text-xs text-steel-400 mb-1">Materiau</label>
          <select value={materialIdx} onChange={e => setMaterialIdx(Number(e.target.value))}
            className="w-full bg-steel-800 border border-steel-700 rounded-lg px-3 py-2 text-sm text-steel-100 focus:outline-none focus:border-imperial">
            {groupedMats.map(g => (
              <optgroup key={g.cat} label={g.cat}>
                {g.items.map(i => <option key={i.idx} value={i.idx}>{i.name}</option>)}
              </optgroup>
            ))}
          </select>
          <div className="mt-1 text-xs text-steel-500">Kc: {mat.kc} N/mm² | {mat.coolant}</div>
        </div>

        {/* Tool params */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-steel-400 mb-1">Diametre fraise ({uLabel})</label>
            <input type="number" step={isIn ? '0.001' : '1'} value={dDisplay} onChange={e => handleD(e.target.value)}
              className="w-full bg-steel-800 border border-steel-700 rounded-lg px-3 py-2 text-sm text-steel-100 focus:outline-none focus:border-imperial" />
            <div className="mt-0.5 text-xs text-steel-600 font-mono">= {isIn ? `${dMm.toFixed(1)} mm` : `${mmToIn(dMm).toFixed(3)} in`}</div>
          </div>
          <div>
            <label className="block text-xs text-steel-400 mb-1">Nombre de dents</label>
            <input type="number" value={teeth} onChange={e => setTeeth(e.target.value)}
              className="w-full bg-steel-800 border border-steel-700 rounded-lg px-3 py-2 text-sm text-steel-100 focus:outline-none focus:border-imperial" />
          </div>
          <div>
            <label className="block text-xs text-steel-400 mb-1">Prof. de passe ap ({uLabel})</label>
            <input type="number" step={isIn ? '0.001' : '0.1'} value={apDisplay} onChange={e => handleAp(e.target.value)}
              className="w-full bg-steel-800 border border-steel-700 rounded-lg px-3 py-2 text-sm text-steel-100 focus:outline-none focus:border-imperial" />
            <div className="mt-0.5 text-xs text-steel-600 font-mono">= {isIn ? `${apMm.toFixed(1)} mm` : `${mmToIn(apMm).toFixed(3)} in`}</div>
          </div>
          <div>
            <label className="block text-xs text-steel-400 mb-1">Largeur de passe ae ({uLabel})</label>
            <input type="number" step={isIn ? '0.001' : '0.1'} value={aeDisplay} onChange={e => handleAe(e.target.value)}
              className="w-full bg-steel-800 border border-steel-700 rounded-lg px-3 py-2 text-sm text-steel-100 focus:outline-none focus:border-imperial" />
            <div className="mt-0.5 text-xs text-steel-600 font-mono">= {isIn ? `${aeMm.toFixed(1)} mm` : `${mmToIn(aeMm).toFixed(3)} in`}</div>
          </div>
        </div>

        {/* Vc slider */}
        <div>
          <div className="flex justify-between text-xs text-steel-400 mb-1">
            <span>Vitesse de coupe (Vc)</span>
            <span className="font-mono text-imperial">
              {isIn
                ? `${mMinToSfm(vc).toFixed(0)} SFM (${vc.toFixed(0)} m/min)`
                : `${vc.toFixed(0)} m/min (${mMinToSfm(vc).toFixed(0)} SFM)`}
            </span>
          </div>
          <input type="range" min={0} max={100} value={speedPct} onChange={e => setSpeedPct(Number(e.target.value))}
            className="w-full" style={{ accentColor: 'var(--color-imperial)' }} />
          <div className="flex justify-between text-xs text-steel-600">
            <span>{isIn ? `${mMinToSfm(vcRange[0]).toFixed(0)} SFM` : `${vcRange[0]} m/min`}</span>
            <span>{isIn ? `${mMinToSfm(vcRange[1]).toFixed(0)} SFM` : `${vcRange[1]} m/min`}</span>
          </div>
        </div>

        {/* fz slider */}
        <div>
          <div className="flex justify-between text-xs text-steel-400 mb-1">
            <span>Avance par dent (fz)</span>
            <span className="font-mono text-imperial">
              {isIn
                ? `${mmToIn(fz).toFixed(4)} in/dent (${fz.toFixed(3)} mm)`
                : `${fz.toFixed(3)} mm/dent (${mmToIn(fz).toFixed(4)} in)`}
            </span>
          </div>
          <input type="range" min={0} max={100} value={feedPct} onChange={e => setFeedPct(Number(e.target.value))}
            className="w-full" style={{ accentColor: 'var(--color-imperial)' }} />
          <div className="flex justify-between text-xs text-steel-600">
            <span>{isIn ? `${mmToIn(fzRange[0]).toFixed(4)} in` : `${fzRange[0]} mm`}</span>
            <span>{isIn ? `${mmToIn(fzRange[1]).toFixed(4)} in` : `${fzRange[1]} mm`}</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="bg-steel-900/50 border border-steel-800 rounded-lg p-4">
          <h3 className="text-sm font-bold text-imperial mb-3">Resultats</h3>
          {dMm <= 0 ? (
            <p className="text-steel-500 text-sm py-4 text-center">Entre les parametres pour calculer</p>
          ) : (
            <div className="space-y-3">
              <Row label="Diametre" value={dual(dMm)} />
              <Row label="Vc" value={isIn ? `${mMinToSfm(vc).toFixed(0)} SFM (${vc.toFixed(0)} m/min)` : `${vc.toFixed(0)} m/min (${mMinToSfm(vc).toFixed(0)} SFM)`} />
              <Row label="fz" value={isIn ? `${mmToIn(fz).toFixed(4)} in/tooth (${fz.toFixed(3)} mm)` : `${fz.toFixed(3)} mm/dent (${mmToIn(fz).toFixed(4)} in)`} />
              <div className="border-t border-steel-700 pt-3">
                <Row label="RPM (n)" value={rpmR.toLocaleString()} large accent />
                <Row label="Avance table (Vf)" value={isIn ? `${mmToIn(vfR).toFixed(1)} in/min (${vfR.toLocaleString()} mm/min)` : `${vfR.toLocaleString()} mm/min (${mmToIn(vfR).toFixed(1)} in/min)`} large accent />
              </div>
              <div className="border-t border-steel-700 pt-3">
                <Row label="Debit copeaux (Q)" value={isIn ? `${(mrr * 0.06102).toFixed(2)} in³/min (${mrr.toFixed(1)} cm³/min)` : `${mrr.toFixed(1)} cm³/min`} />
                <Row label="Puissance requise" value={isIn ? `${powerHP.toFixed(1)} HP (${power.toFixed(1)} kW)` : `${power.toFixed(1)} kW (${powerHP.toFixed(1)} HP)`} accent />
                <Row label="ap × ae" value={isIn ? `${mmToIn(apMm).toFixed(3)} × ${mmToIn(aeMm).toFixed(3)} in` : `${apMm.toFixed(1)} × ${aeMm.toFixed(1)} mm`} />
              </div>
              <div className="border-t border-steel-700 pt-3 text-xs text-steel-600 space-y-0.5">
                {isIn ? (
                  <>
                    <div>n = (Vc × 12) / (π × D) = ({mMinToSfm(vc).toFixed(0)} × 12) / (π × {mmToIn(dMm).toFixed(3)}) = {rpmR}</div>
                    <div>Vf = n × z × fz = {rpmR} × {z} × {mmToIn(fz).toFixed(4)} = {mmToIn(vfR).toFixed(1)} in/min</div>
                    <div>Q = ap × ae × Vf = {mmToIn(apMm).toFixed(3)} × {mmToIn(aeMm).toFixed(3)} × {mmToIn(vfR).toFixed(1)} = {(mrr * 0.06102).toFixed(2)} in³/min</div>
                    <div>Pc = Q × Kc / 396000 = {(mrr * 0.06102).toFixed(2)} × {mat.kc} / 396000 = {powerHP.toFixed(1)} HP</div>
                  </>
                ) : (
                  <>
                    <div>n = (Vc × 1000) / (π × D) = ({vc.toFixed(0)} × 1000) / (π × {dMm.toFixed(1)}) = {rpmR}</div>
                    <div>Vf = n × z × fz = {rpmR} × {z} × {fz.toFixed(3)} = {vfR} mm/min</div>
                    <div>Q = ap × ae × Vf / 1000 = {apMm.toFixed(1)} × {aeMm.toFixed(1)} × {vfR} / 1000 = {mrr.toFixed(1)} cm³/min</div>
                    <div>Pc = Q × Kc / 60000 = {mrr.toFixed(1)} × {mat.kc} / 60000 = {power.toFixed(1)} kW</div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ==================== FACE MILL TABLE ==================== */
function FaceMillTable({ isIn }: { isIn: boolean }) {
  const [typeFilter, setTypeFilter] = useState('ALL')
  const types = ['ALL', ...new Set(faceMills.map(f => f.type))]
  const data = typeFilter === 'ALL' ? faceMills : faceMills.filter(f => f.type === typeFilter)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-steel-500">Type:</span>
        {types.map(t => (
          <button key={t} onClick={() => setTypeFilter(t)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              typeFilter === t ? 'bg-imperial text-steel-950' : 'bg-steel-800 text-steel-400 hover:text-imperial'
            }`}>{t === 'ALL' ? 'Tous' : t}</button>
        ))}
      </div>
      <div className="table-wrap rounded-lg border border-steel-800 bg-steel-900/50 max-h-[calc(100vh-280px)] overflow-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10 bg-steel-900 shadow-[0_1px_0_0_var(--color-steel-800)]">
            <tr>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">{isIn ? 'Dia (in)' : 'Dia (mm)'}</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">{isIn ? 'Dia (mm)' : 'Dia (in)'}</th>
              <th className="px-3 py-2.5 text-right font-semibold text-steel-300">Dents</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Type</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Insert</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Taille</th>
              <th className="px-3 py-2.5 text-right font-semibold text-steel-300">DOC max ({isIn ? 'in' : 'mm'})</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Arbre</th>
              <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Application</th>
            </tr>
          </thead>
          <tbody>
            {data.map((f, i) => (
              <tr key={i} className="border-t border-steel-800/50 hover:bg-steel-800/50 transition-colors">
                <td className="px-3 py-2 font-mono font-bold text-imperial">{isIn ? `${f.diameterIn}"` : f.diameter}</td>
                <td className="px-3 py-2 font-mono text-steel-300">{isIn ? f.diameter : `${f.diameterIn}"`}</td>
                <td className="px-3 py-2 text-right text-steel-200">{f.teeth}</td>
                <td className="px-3 py-2">
                  <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${
                    f.type.includes('45') ? 'bg-imperial/20 text-imperial' :
                    f.type.includes('90') ? 'bg-metric/20 text-metric' :
                    f.type.includes('High') ? 'bg-pipe/20 text-pipe' :
                    'bg-special/20 text-special'
                  }`}>{f.type}</span>
                </td>
                <td className="px-3 py-2 font-mono text-steel-200">{f.insertType}</td>
                <td className="px-3 py-2 font-mono text-steel-400">{f.insertSize}</td>
                <td className="px-3 py-2 text-right text-steel-200">{isIn ? `${mmToIn(f.maxDOC).toFixed(3)}"` : `${f.maxDOC} mm`}</td>
                <td className="px-3 py-2 text-steel-400 text-xs">{f.arbor}</td>
                <td className="px-3 py-2 text-steel-500 text-xs">{f.application}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-3 py-2 border-t border-steel-800 text-xs text-steel-500">
          {data.length} fraises
        </div>
      </div>
    </div>
  )
}

/* ==================== INSERT GEOMETRY TABLE ==================== */
function InsertTable() {
  return (
    <div className="table-wrap rounded-lg border border-steel-800 bg-steel-900/50 max-h-[calc(100vh-220px)] overflow-auto">
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-10 bg-steel-900 shadow-[0_1px_0_0_var(--color-steel-800)]">
          <tr>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">ISO / ANSI</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Forme</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Angle</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Montage</th>
            <th className="px-3 py-2.5 text-right font-semibold text-steel-300">Aretes</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Robustesse</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Application</th>
          </tr>
        </thead>
        <tbody>
          {insertGeometries.map((g, i) => (
            <tr key={i} className="border-t border-steel-800/50 hover:bg-steel-800/50 transition-colors">
              <td className="px-3 py-2 font-mono font-bold text-special">{g.iso}</td>
              <td className="px-3 py-2 text-steel-200">{g.name}</td>
              <td className="px-3 py-2 font-mono text-steel-300">{g.shape}</td>
              <td className="px-3 py-2 text-steel-300">{g.angle}</td>
              <td className="px-3 py-2 text-right font-mono text-imperial font-bold">{g.edges}</td>
              <td className="px-3 py-2">
                <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${
                  g.strength === 'Tres haute' ? 'bg-metric/20 text-metric' :
                  g.strength === 'Haute' ? 'bg-imperial/20 text-imperial' :
                  'bg-steel-700 text-steel-300'
                }`}>{g.strength}</span>
              </td>
              <td className="px-3 py-2 text-steel-400 text-xs">{g.application}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3 py-2 border-t border-steel-800 text-xs text-steel-500">
        {insertGeometries.length} geometries | Plus d'aretes = meilleur cout par piece
      </div>
    </div>
  )
}

/* ==================== GRADE TABLE ==================== */
function GradeTable() {
  return (
    <div className="table-wrap rounded-lg border border-steel-800 bg-steel-900/50 max-h-[calc(100vh-220px)] overflow-auto">
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-10 bg-steel-900 shadow-[0_1px_0_0_var(--color-steel-800)]">
          <tr>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Grade</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Revetement</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Substrat</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Materiaux</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Application</th>
            <th className="px-3 py-2.5 text-left font-semibold text-steel-300">Vc</th>
          </tr>
        </thead>
        <tbody>
          {insertGrades.map((g, i) => (
            <tr key={i} className="border-t border-steel-800/50 hover:bg-steel-800/50 transition-colors">
              <td className="px-3 py-2 font-mono font-bold text-imperial">{g.grade}</td>
              <td className="px-3 py-2 text-steel-200">{g.coating}</td>
              <td className="px-3 py-2 text-steel-300">{g.substrate}</td>
              <td className="px-3 py-2 text-steel-200">{g.materials}</td>
              <td className="px-3 py-2 text-steel-400 text-xs">{g.application}</td>
              <td className="px-3 py-2 font-mono text-steel-300 text-xs">{g.vcRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-3 py-2 border-t border-steel-800 text-xs text-steel-500">
        {insertGrades.length} grades | Ref. Kennametal (equivalents generiques)
      </div>
    </div>
  )
}

function Row({ label, value, large, accent }: { label: string; value: string; large?: boolean; accent?: boolean }) {
  return (
    <div className="flex justify-between items-baseline py-1">
      <span className="text-xs text-steel-400">{label}</span>
      <span className={`font-mono ${large ? 'text-lg font-bold' : 'text-sm'} ${accent ? 'text-imperial' : 'text-steel-100'}`}>
        {value}
      </span>
    </div>
  )
}
