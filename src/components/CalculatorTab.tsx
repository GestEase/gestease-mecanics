import { useState, useMemo } from 'react'
import { materials } from '../data/materials'
import type { Material, TapEntry } from '../data/materials'
import type { UnitSystem } from '../types'
import { buildTapEntries } from '../data/tapEntries'

const tapEntries = buildTapEntries()
const MM_PER_IN = 25.4
const FT_PER_M = 3.28084

type OpMode = 'drilling' | 'tapping'

function mmToIn(mm: number) { return mm / MM_PER_IN }
function inToMm(inches: number) { return inches * MM_PER_IN }
function mMinToSfm(mMin: number) { return mMin * FT_PER_M }

interface Props { units: UnitSystem }

export default function CalculatorTab({ units }: Props) {
  const [opMode, setOpMode] = useState<OpMode>('drilling')
  const [materialIdx, setMaterialIdx] = useState(0)
  const [tapIdx, setTapIdx] = useState<number>(-1)
  const [customDiameter, setCustomDiameter] = useState('')
  const [speedPct, setSpeedPct] = useState(50)

  const mat: Material = materials[materialIdx]
  const selectedTap: TapEntry | null = tapIdx >= 0 ? tapEntries[tapIdx] : null

  // ALL internal calculations in mm
  const diameterMm = useMemo(() => {
    if (tapIdx >= 0 && tapIdx < tapEntries.length) {
      return tapEntries[tapIdx].drillMm
    }
    const v = parseFloat(customDiameter)
    if (isNaN(v) || v <= 0) return 0
    return units === 'metric' ? v : inToMm(v)
  }, [tapIdx, customDiameter, units])

  // Cutting speed in m/min (always metric internal)
  const vcMmin = useMemo(() => {
    const range = opMode === 'drilling' ? mat.cuttingSpeedDrill : mat.cuttingSpeedTap
    return range[0] + (range[1] - range[0]) * (speedPct / 100)
  }, [mat, opMode, speedPct])

  // RPM = (Vc × 1000) / (π × D_mm)
  const rpm = useMemo(() => {
    if (diameterMm <= 0) return 0
    return (vcMmin * 1000) / (Math.PI * diameterMm)
  }, [vcMmin, diameterMm])

  // Feed per revolution in mm/rev
  const feedPerRevMm = useMemo(() => {
    if (opMode === 'tapping') {
      if (selectedTap?.pitch) return selectedTap.pitch
      if (selectedTap?.tpi) return MM_PER_IN / selectedTap.tpi
      if (diameterMm > 0) return diameterMm * 0.15
      return 0
    }
    // Drilling: chip load × 2 flutes
    const base = (mat.chipLoadDrill[0] + mat.chipLoadDrill[1]) / 2
    const adjusted = base + mat.chipLoadFactor * Math.max(0, diameterMm - 6)
    return adjusted * 2
  }, [opMode, selectedTap, diameterMm, mat])

  // Feed rate in mm/min
  const feedRateMmMin = rpm * feedPerRevMm

  const rpmRounded = Math.round(rpm)
  const vcSfm = mMinToSfm(vcMmin)

  // Group materials
  const groupedMaterials = useMemo(() => {
    const groups: { category: string; items: { idx: number; name: string }[] }[] = []
    materials.forEach((m, i) => {
      let group = groups.find(g => g.category === m.category)
      if (!group) {
        group = { category: m.category, items: [] }
        groups.push(group)
      }
      group.items.push({ idx: i, name: m.name })
    })
    return groups
  }, [])

  // Tap search
  const [tapSearch, setTapSearch] = useState('')
  const filteredTaps = useMemo(() => {
    if (!tapSearch.trim()) return tapEntries.map((t, i) => ({ ...t, idx: i }))
    const q = tapSearch.toLowerCase()
    return tapEntries
      .map((t, i) => ({ ...t, idx: i }))
      .filter(t => t.label.toLowerCase().includes(q))
  }, [tapSearch])

  // Display formatters
  const fmtDia = units === 'metric'
    ? `${diameterMm.toFixed(2)} mm`
    : `${mmToIn(diameterMm).toFixed(4)} in (${diameterMm.toFixed(2)} mm)`

  const fmtVc = units === 'metric'
    ? `${vcMmin.toFixed(1)} m/min (${vcSfm.toFixed(0)} SFM)`
    : `${vcSfm.toFixed(0)} SFM (${vcMmin.toFixed(1)} m/min)`

  const fmtFeedPerRev = units === 'metric'
    ? `${feedPerRevMm.toFixed(3)} mm/rev`
    : `${mmToIn(feedPerRevMm).toFixed(4)} in/rev (${feedPerRevMm.toFixed(3)} mm/rev)`

  const fmtFeedRate = units === 'metric'
    ? `${feedRateMmMin.toFixed(1)} mm/min`
    : `${mmToIn(feedRateMmMin).toFixed(2)} in/min (${feedRateMmMin.toFixed(1)} mm/min)`

  const fmtSpeedRange = (range: [number, number]) => units === 'metric'
    ? `${range[0]}–${range[1]} m/min`
    : `${mMinToSfm(range[0]).toFixed(0)}–${mMinToSfm(range[1]).toFixed(0)} SFM`

  const fmtChipLoad = units === 'metric'
    ? `${mat.chipLoadDrill[0]}–${mat.chipLoadDrill[1]} mm/tooth`
    : `${mmToIn(mat.chipLoadDrill[0]).toFixed(4)}–${mmToIn(mat.chipLoadDrill[1]).toFixed(4)} in/tooth`

  return (
    <div className="max-w-5xl space-y-4">
      {/* Mode + Units */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-steel-500">Operation:</span>
          {(['drilling', 'tapping'] as const).map(m => (
            <button
              key={m}
              onClick={() => setOpMode(m)}
              className={`px-4 py-1.5 text-xs rounded-full font-medium transition-colors ${
                opMode === m ? 'bg-ref text-steel-950' : 'bg-steel-800 text-steel-400 hover:text-ref'
              }`}
            >
              {m === 'drilling' ? 'Percage' : 'Taraudage'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        {/* LEFT — Inputs */}
        <div className="card rounded-lg p-4 space-y-4">
          <h3 className="text-sm font-bold text-ref">Parametres</h3>

          {/* Material */}
          <div>
            <label className="block text-xs text-steel-400 mb-1">Materiau</label>
            <select
              value={materialIdx}
              onChange={e => setMaterialIdx(Number(e.target.value))}
              className="w-full card-inner rounded-lg px-3 py-2 text-sm focus:outline-none"
            >
              {groupedMaterials.map(g => (
                <optgroup key={g.category} label={g.category}>
                  {g.items.map(item => (
                    <option key={item.idx} value={item.idx}>{item.name}</option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="mt-1 text-xs text-steel-500">
              Lubrifiant: {mat.coolant}
            </div>
          </div>

          {/* Tap/Drill selection */}
          <div>
            <label className="block text-xs text-steel-400 mb-1">
              {opMode === 'tapping' ? 'Taraud (depuis les tables)' : 'Foret (depuis les tables)'}
            </label>
            <div className="relative">
              <input
                type="text"
                value={tapSearch}
                onChange={e => { setTapSearch(e.target.value); setTapIdx(-1) }}
                placeholder="Rechercher un taraud (ex: M10, 1/4, 3/8...)"
                className="w-full card-inner rounded-lg px-3 py-2 text-sm focus:outline-none"
              />
              {tapSearch && filteredTaps.length > 0 && tapIdx < 0 && (
                <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-steel-800 border border-steel-700 rounded-lg max-h-48 overflow-auto">
                  {filteredTaps.slice(0, 20).map(t => (
                    <button
                      key={t.idx}
                      onClick={() => { setTapIdx(t.idx); setTapSearch(t.label); setCustomDiameter('') }}
                      className="w-full text-left px-3 py-1.5 text-sm text-steel-200 hover:bg-steel-700 transition-colors"
                    >
                      <span className="font-mono">{t.label}</span>
                      <span className="text-steel-500 ml-2">
                        — {t.drillMm.toFixed(2)} mm / {mmToIn(t.drillMm).toFixed(4)} in
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {selectedTap && (
              <div className="mt-1 text-xs text-steel-400">
                Foret: {selectedTap.drillMm.toFixed(2)} mm / {mmToIn(selectedTap.drillMm).toFixed(4)} in
                {selectedTap.pitch && ` | Pas: ${selectedTap.pitch} mm (${selectedTap.tpi ?? (MM_PER_IN / selectedTap.pitch).toFixed(1)} TPI)`}
                {selectedTap.tpi && !selectedTap.pitch && ` | TPI: ${selectedTap.tpi} (${(MM_PER_IN / selectedTap.tpi).toFixed(3)} mm pas)`}
              </div>
            )}
          </div>

          {/* Custom diameter */}
          <div>
            <label className="block text-xs text-steel-400 mb-1">
              ou Diametre manuel ({units === 'metric' ? 'mm' : 'in'})
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              value={customDiameter}
              onChange={e => { setCustomDiameter(e.target.value); setTapIdx(-1); setTapSearch('') }}
              placeholder={units === 'metric' ? 'Ex: 8.5' : 'Ex: 0.3346'}
              className="w-full card-inner rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Cutting speed slider */}
          <div>
            <div className="flex justify-between text-xs text-steel-400 mb-1">
              <span>Vitesse de coupe ({opMode === 'drilling' ? 'percage' : 'taraudage'})</span>
              <span className="font-mono text-ref">
                {units === 'metric' ? `${vcMmin.toFixed(1)} m/min` : `${vcSfm.toFixed(0)} SFM`}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={speedPct}
              onChange={e => setSpeedPct(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: 'var(--color-ref)' }}
            />
            <div className="flex justify-between text-xs text-steel-600 mt-0.5">
              <span>Conservateur ({fmtSpeedRange(opMode === 'drilling' ? mat.cuttingSpeedDrill : mat.cuttingSpeedTap).split('–')[0]})</span>
              <span>Agressif ({fmtSpeedRange(opMode === 'drilling' ? mat.cuttingSpeedDrill : mat.cuttingSpeedTap).split('–')[1]})</span>
            </div>
          </div>
        </div>

        {/* RIGHT — Results */}
        <div className="space-y-4">
          <div className="card rounded-lg p-4">
            <h3 className="text-sm font-bold text-ref mb-3">Resultats</h3>
            {diameterMm <= 0 ? (
              <p className="text-steel-500 text-sm py-4 text-center">
                Selectionne un taraud ou entre un diametre pour calculer
              </p>
            ) : (
              <div className="space-y-3">
                <ResultRow label="Diametre outil" value={fmtDia} />
                <ResultRow label="Vitesse de coupe" value={fmtVc} />
                <div className="border-t border-steel-700 pt-3">
                  <ResultRow label="RPM" value={rpmRounded.toLocaleString()} large accent />
                  <ResultRow label="Avance par revolution" value={fmtFeedPerRev} />
                  <ResultRow label="Avance" value={fmtFeedRate} large accent />
                </div>
                {opMode === 'tapping' && diameterMm > 0 && (
                  <div className="border-t border-steel-700 pt-3 text-xs text-steel-400 space-y-1">
                    <div className="font-semibold text-steel-300">Taraudage rigide:</div>
                    {selectedTap?.tpi ? (
                      <div>Feed = RPM / TPI = {rpmRounded} / {selectedTap.tpi} = {(rpmRounded / selectedTap.tpi).toFixed(1)} in/min ({((rpmRounded / selectedTap.tpi) * MM_PER_IN).toFixed(1)} mm/min)</div>
                    ) : selectedTap?.pitch ? (
                      <div>Feed = RPM × Pitch = {rpmRounded} × {selectedTap.pitch} = {(rpmRounded * selectedTap.pitch).toFixed(1)} mm/min ({mmToIn(rpmRounded * selectedTap.pitch).toFixed(2)} in/min)</div>
                    ) : (
                      <div>Feed = RPM × Pitch = {feedRateMmMin.toFixed(1)} mm/min ({mmToIn(feedRateMmMin).toFixed(2)} in/min)</div>
                    )}
                  </div>
                )}
                {/* Formulas shown */}
                <div className="border-t border-steel-700 pt-3 text-xs text-steel-600 space-y-0.5">
                  <div>RPM = (Vc × 1000) / (π × D) = ({vcMmin.toFixed(1)} × 1000) / (π × {diameterMm.toFixed(2)}) = {rpmRounded}</div>
                  <div>Feed = RPM × f/rev = {rpmRounded} × {feedPerRevMm.toFixed(3)} = {feedRateMmMin.toFixed(1)} mm/min</div>
                </div>
              </div>
            )}
          </div>

          {/* Material quick ref */}
          <div className="card rounded-lg p-4">
            <h3 className="text-sm font-bold text-steel-400 mb-2">Plage vitesses — {mat.name}</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="card-inner rounded p-2">
                <div className="text-steel-500">Percage</div>
                <div className="font-mono text-steel-200">{fmtSpeedRange(mat.cuttingSpeedDrill)}</div>
              </div>
              <div className="card-inner rounded p-2">
                <div className="text-steel-500">Taraudage</div>
                <div className="font-mono text-steel-200">{fmtSpeedRange(mat.cuttingSpeedTap)}</div>
              </div>
              <div className="card-inner rounded p-2">
                <div className="text-steel-500">Chip load (percage)</div>
                <div className="font-mono text-steel-200">{fmtChipLoad}</div>
              </div>
              <div className="card-inner rounded p-2">
                <div className="text-steel-500">Lubrifiant</div>
                <div className="text-steel-200">{mat.coolant}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ResultRow({ label, value, large, accent }: { label: string; value: string; large?: boolean; accent?: boolean }) {
  return (
    <div className="flex justify-between items-baseline py-1">
      <span className="text-xs text-steel-400">{label}</span>
      <span className={`font-mono ${large ? 'text-lg font-bold' : 'text-sm'} ${accent ? 'text-ref' : 'text-steel-100'}`}>
        {value}
      </span>
    </div>
  )
}
