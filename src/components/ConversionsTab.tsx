import { useState, useCallback } from 'react'

/* ── Conversion groups ── */
interface Unit { label: string; toBase: (v: number) => number; fromBase: (v: number) => number }
interface ConvGroup { name: string; color: string; units: Unit[] }

const groups: ConvGroup[] = [
  {
    name: 'Longueur',
    color: 'metric',
    units: [
      { label: 'mm',    toBase: v => v,           fromBase: v => v },
      { label: 'in',    toBase: v => v * 25.4,    fromBase: v => v / 25.4 },
      { label: 'cm',    toBase: v => v * 10,      fromBase: v => v / 10 },
      { label: 'm',     toBase: v => v * 1000,    fromBase: v => v / 1000 },
      { label: 'ft',    toBase: v => v * 304.8,   fromBase: v => v / 304.8 },
      { label: 'thou',  toBase: v => v * 0.0254,  fromBase: v => v / 0.0254 },
      { label: '\u00b5m', toBase: v => v * 0.001,  fromBase: v => v / 0.001 },
    ],
  },
  {
    name: 'Pression',
    color: 'hydraulic',
    units: [
      { label: 'PSI',   toBase: v => v,              fromBase: v => v },
      { label: 'bar',   toBase: v => v * 14.5038,    fromBase: v => v / 14.5038 },
      { label: 'MPa',   toBase: v => v * 145.038,    fromBase: v => v / 145.038 },
      { label: 'kPa',   toBase: v => v * 0.145038,   fromBase: v => v / 0.145038 },
      { label: 'atm',   toBase: v => v * 14.696,     fromBase: v => v / 14.696 },
      { label: 'kg/cm\u00b2', toBase: v => v * 14.2233, fromBase: v => v / 14.2233 },
    ],
  },
  {
    name: 'Couple (Torque)',
    color: 'api',
    units: [
      { label: 'N\u00b7m',    toBase: v => v,            fromBase: v => v },
      { label: 'ft-lb',  toBase: v => v * 1.35582,   fromBase: v => v / 1.35582 },
      { label: 'in-lb',  toBase: v => v * 0.112985,  fromBase: v => v / 0.112985 },
      { label: 'kg\u00b7cm',  toBase: v => v * 0.0980665, fromBase: v => v / 0.0980665 },
      { label: 'kg\u00b7m',   toBase: v => v * 9.80665,  fromBase: v => v / 9.80665 },
    ],
  },
  {
    name: 'Force',
    color: 'pipe',
    units: [
      { label: 'N',     toBase: v => v,            fromBase: v => v },
      { label: 'lbf',   toBase: v => v * 4.44822,  fromBase: v => v / 4.44822 },
      { label: 'kgf',   toBase: v => v * 9.80665,  fromBase: v => v / 9.80665 },
      { label: 'kN',    toBase: v => v * 1000,     fromBase: v => v / 1000 },
      { label: 'daN',   toBase: v => v * 10,       fromBase: v => v / 10 },
    ],
  },
  {
    name: 'Temperature',
    color: 'imperial',
    units: [
      { label: '\u00b0C', toBase: v => v,              fromBase: v => v },
      { label: '\u00b0F', toBase: v => (v - 32) / 1.8, fromBase: v => v * 1.8 + 32 },
      { label: 'K',    toBase: v => v - 273.15,     fromBase: v => v + 273.15 },
    ],
  },
  {
    name: 'Masse',
    color: 'special',
    units: [
      { label: 'kg',    toBase: v => v,             fromBase: v => v },
      { label: 'lb',    toBase: v => v * 0.453592,  fromBase: v => v / 0.453592 },
      { label: 'oz',    toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495 },
      { label: 'g',     toBase: v => v * 0.001,     fromBase: v => v / 0.001 },
      { label: 'ton (metric)', toBase: v => v * 1000, fromBase: v => v / 1000 },
    ],
  },
  {
    name: 'Debit',
    color: 'pneumatic',
    units: [
      { label: 'L/min',  toBase: v => v,              fromBase: v => v },
      { label: 'GPM',    toBase: v => v * 3.78541,    fromBase: v => v / 3.78541 },
      { label: 'CFM',    toBase: v => v * 28.3168,    fromBase: v => v / 28.3168 },
      { label: 'cm\u00b3/min', toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { label: 'm\u00b3/h',   toBase: v => v * 16.6667, fromBase: v => v / 16.6667 },
    ],
  },
  {
    name: 'Vitesse de coupe',
    color: 'ref',
    units: [
      { label: 'm/min',  toBase: v => v,              fromBase: v => v },
      { label: 'SFM',    toBase: v => v * 0.3048,     fromBase: v => v / 0.3048 },
      { label: 'ft/min', toBase: v => v * 0.3048,     fromBase: v => v / 0.3048 },
      { label: 'mm/min', toBase: v => v * 0.001,      fromBase: v => v / 0.001 },
      { label: 'in/min', toBase: v => v * 0.0254,     fromBase: v => v / 0.0254 },
    ],
  },
  {
    name: 'Rugosite (Ra)',
    color: 'steel-300',
    units: [
      { label: 'Ra \u00b5m',   toBase: v => v,                       fromBase: v => v },
      { label: 'Ra \u00b5in',  toBase: v => v * 0.0254,              fromBase: v => v / 0.0254 },
      { label: 'RMS \u00b5in', toBase: v => v * 0.0254 / 1.11,       fromBase: v => v * 1.11 / 0.0254 },
      { label: 'CLA \u00b5in', toBase: v => v * 0.0254,              fromBase: v => v / 0.0254 },
    ],
  },
]

/* ── Single converter card ── */
function ConverterCard({ group }: { group: ConvGroup }) {
  const [values, setValues] = useState<Record<string, string>>({})
  const [active, setActive] = useState<string | null>(null)

  const handleChange = useCallback((label: string, raw: string) => {
    setActive(label)
    const n = parseFloat(raw)
    if (raw === '' || raw === '-') {
      setValues({ [label]: raw })
      return
    }
    if (isNaN(n)) return

    const unit = group.units.find(u => u.label === label)!
    const base = unit.toBase(n)
    const next: Record<string, string> = { [label]: raw }
    for (const u of group.units) {
      if (u.label === label) continue
      const converted = u.fromBase(base)
      next[u.label] = smartFormat(converted)
    }
    setValues(next)
  }, [group.units])

  const handleClear = () => { setValues({}); setActive(null) }

  return (
    <div className="card rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold" style={{ color: `var(--color-${group.color})` }}>{group.name}</h3>
        {Object.keys(values).length > 0 && (
          <button onClick={handleClear} className="text-xs text-steel-600 hover:text-steel-400 transition-colors">Clear</button>
        )}
      </div>
      <div className="space-y-2">
        {group.units.map(u => (
          <div key={u.label} className="flex items-center gap-2">
            <span className={`w-20 text-right text-xs font-mono shrink-0 ${active === u.label ? 'text-steel-100 font-bold' : 'text-steel-400'}`}>{u.label}</span>
            <input
              type="number"
              value={values[u.label] ?? ''}
              onChange={e => handleChange(u.label, e.target.value)}
              placeholder="0"
              className="flex-1 card-inner rounded px-3 py-1.5 text-sm font-mono focus:outline-none transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Smart number formatting ── */
function smartFormat(n: number): string {
  if (n === 0) return '0'
  const abs = Math.abs(n)
  if (abs >= 1000000) return n.toFixed(0)
  if (abs >= 100) return n.toFixed(2)
  if (abs >= 1) return n.toFixed(4)
  if (abs >= 0.001) return n.toFixed(6)
  return n.toExponential(4)
}

/* ── Fractions / decimals quick converter ── */
function FractionConverter() {
  const [decimal, setDecimal] = useState('')
  const [num, setNum] = useState('')
  const [den, setDen] = useState('64')

  const decVal = parseFloat(decimal)
  const numVal = parseInt(num)
  const denVal = parseInt(den) || 64

  const fractionToDecimal = !isNaN(numVal) && denVal > 0 ? (numVal / denVal) : null
  const decimalToFraction = !isNaN(decVal) && decVal > 0 ? closestFraction(decVal, 64) : null

  return (
    <div className="card rounded-lg p-4">
      <h3 className="text-sm font-bold text-imperial mb-3">Fraction / Decimal (pouces)</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-xs text-steel-400">Decimal (in)</label>
          <input type="number" step="0.0001" value={decimal} onChange={e => setDecimal(e.target.value)}
            placeholder="0.3125" className="w-full card-inner rounded px-3 py-1.5 text-sm font-mono focus:outline-none" />
          {decimalToFraction && (
            <div className="text-sm font-mono">
              <span className="text-steel-400">= </span>
              <span className="text-imperial font-bold">{decimalToFraction.num}/{decimalToFraction.den}"</span>
              <span className="text-steel-500 ml-2">({(decVal * 25.4).toFixed(3)} mm)</span>
            </div>
          )}
        </div>
        <div className="space-y-2">
          <label className="block text-xs text-steel-400">Fraction</label>
          <div className="flex items-center gap-1">
            <input type="number" value={num} onChange={e => setNum(e.target.value)}
              placeholder="5" className="w-16 card-inner rounded px-2 py-1.5 text-sm font-mono focus:outline-none" />
            <span className="text-steel-500 text-lg">/</span>
            <select value={den} onChange={e => setDen(e.target.value)}
              className="bg-steel-800 border border-steel-700 rounded px-2 py-1.5 text-sm font-mono text-steel-100 focus:outline-none focus:border-steel-500">
              {[2, 4, 8, 16, 32, 64].map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          {fractionToDecimal !== null && (
            <div className="text-sm font-mono">
              <span className="text-steel-400">= </span>
              <span className="text-metric font-bold">{fractionToDecimal.toFixed(4)}"</span>
              <span className="text-steel-500 ml-2">({(fractionToDecimal * 25.4).toFixed(3)} mm)</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function closestFraction(dec: number, maxDen: number): { num: number; den: number } {
  let bestNum = 1, bestDen = 1, bestErr = Infinity
  for (const den of [2, 4, 8, 16, 32, 64]) {
    if (den > maxDen) break
    const num = Math.round(dec * den)
    const err = Math.abs(dec - num / den)
    if (err < bestErr) { bestNum = num; bestDen = den; bestErr = err }
  }
  // Reduce
  let g = gcd(bestNum, bestDen)
  return { num: bestNum / g, den: bestDen / g }
}

function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b) }

/* ── Gauge / drill number converter ── */
function DrillGaugeConverter() {
  const [input, setInput] = useState('')

  const gauges: Record<string, number> = {
    '80': 0.0135, '79': 0.0145, '78': 0.016, '77': 0.018, '76': 0.020,
    '75': 0.021, '74': 0.0225, '73': 0.024, '72': 0.025, '71': 0.026,
    '70': 0.028, '69': 0.0292, '68': 0.031, '67': 0.032, '66': 0.033,
    '65': 0.035, '64': 0.036, '63': 0.037, '62': 0.038, '61': 0.039,
    '60': 0.040, '59': 0.041, '58': 0.042, '57': 0.043, '56': 0.0465,
    '55': 0.052, '54': 0.055, '53': 0.0595, '52': 0.0635, '51': 0.067,
    '50': 0.070, '49': 0.073, '48': 0.076, '47': 0.0785, '46': 0.081,
    '45': 0.082, '44': 0.086, '43': 0.089, '42': 0.0935, '41': 0.096,
    '40': 0.098, '39': 0.0995, '38': 0.1015, '37': 0.104, '36': 0.1065,
    '35': 0.110, '34': 0.111, '33': 0.113, '32': 0.116, '31': 0.120,
    '30': 0.1285, '29': 0.136, '28': 0.1405, '27': 0.144, '26': 0.147,
    '25': 0.1495, '24': 0.152, '23': 0.154, '22': 0.157, '21': 0.159,
    '20': 0.161, '19': 0.166, '18': 0.1695, '17': 0.173, '16': 0.177,
    '15': 0.180, '14': 0.182, '13': 0.185, '12': 0.189, '11': 0.191,
    '10': 0.1935, '9': 0.196, '8': 0.199, '7': 0.201, '6': 0.204,
    '5': 0.2055, '4': 0.209, '3': 0.213, '2': 0.221, '1': 0.228,
    'A': 0.234, 'B': 0.238, 'C': 0.242, 'D': 0.246, 'E': 0.250,
    'F': 0.257, 'G': 0.261, 'H': 0.266, 'I': 0.272, 'J': 0.277,
    'K': 0.281, 'L': 0.290, 'M': 0.295, 'N': 0.302, 'O': 0.316,
    'P': 0.323, 'Q': 0.332, 'R': 0.339, 'S': 0.348, 'T': 0.358,
    'U': 0.368, 'V': 0.377, 'W': 0.386, 'X': 0.397, 'Y': 0.404,
    'Z': 0.413,
  }

  const q = input.trim().toUpperCase()
  const match = gauges[q]

  return (
    <div className="card rounded-lg p-4">
      <h3 className="text-sm font-bold text-ref mb-3">Drill Gauge (# et lettres)</h3>
      <div className="flex items-center gap-3">
        <input type="text" value={input} onChange={e => setInput(e.target.value)}
          placeholder="Ex: 7, 29, A, Q..."
          className="w-32 card-inner rounded px-3 py-1.5 text-sm font-mono focus:outline-none" />
        {match !== undefined ? (
          <div className="text-sm font-mono">
            <span className="text-steel-400">#{q} = </span>
            <span className="text-ref font-bold">{match.toFixed(4)}"</span>
            <span className="text-steel-500 ml-2">({(match * 25.4).toFixed(3)} mm)</span>
          </div>
        ) : q ? (
          <span className="text-steel-600 text-xs">Entrer un numero (1-80) ou lettre (A-Z)</span>
        ) : null}
      </div>
    </div>
  )
}

/* ── Main tab ── */
export default function ConversionsTab() {
  return (
    <div className="max-w-6xl space-y-4">
      {/* Special converters */}
      <div className="grid md:grid-cols-2 gap-4">
        <FractionConverter />
        <DrillGaugeConverter />
      </div>

      {/* Unit converters grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map(g => (
          <ConverterCard key={g.name} group={g} />
        ))}
      </div>
    </div>
  )
}
