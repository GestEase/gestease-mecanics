import { useState } from 'react'
import DataTable from './DataTable'
import { hydraulicData } from '../data/hydraulic'
import type { HydraulicThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

const STANDARDS = ['ALL', 'SAE ORB', 'JIC 37\u00b0', 'ORFS', 'Metric ISO 6149'] as const

export default function HydraulicTab({ search, units }: Props) {
  const isIn = units === 'imperial'
  const [stdFilter, setStdFilter] = useState<string>('ALL')

  const data = stdFilter === 'ALL'
    ? hydraulicData
    : hydraulicData.filter(r => r.standard === stdFilter)

  const isMetricStd = (row: HydraulicThread) => row.standard === 'Metric ISO 6149'

  const columns = [
    { key: 'dashSize' as const, label: 'Dash / Size', render: (v: unknown) => <span className="font-mono font-bold text-hydraulic">{String(v)}</span> },
    { key: 'standard' as const, label: 'Standard', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'SAE ORB': 'bg-hydraulic/20 text-hydraulic',
        'JIC 37\u00b0': 'bg-orange-800/30 text-orange-300',
        'ORFS': 'bg-blue-800/30 text-blue-300',
        'Metric ISO 6149': 'bg-emerald-800/30 text-emerald-300',
      }
      return <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'threadSize' as const, label: 'Filet' },
    { key: 'tpiOrPitch' as const, label: 'TPI / Pas' },
    { key: 'tubeOD' as const, label: isIn ? 'Tube OD (in)' : 'Tube OD (mm)', align: 'right' as const, render: (v: unknown, row: HydraulicThread) => {
      const n = Number(v)
      if (isMetricStd(row)) return <span className="font-mono">{isIn ? (n / MM).toFixed(3) : n.toFixed(1)}</span>
      return <span className="font-mono">{isIn ? n.toFixed(3) : (n * MM).toFixed(1)}</span>
    }},
    { key: 'majorDia' as const, label: isIn ? 'Major \u00d8 (in)' : 'Major \u00d8 (mm)', align: 'right' as const, render: (v: unknown, row: HydraulicThread) => {
      const n = Number(v)
      if (isMetricStd(row)) return <span className="font-mono font-semibold">{isIn ? (n / MM).toFixed(3) : n.toFixed(1)}</span>
      return <span className="font-mono font-semibold">{isIn ? n.toFixed(4) : (n * MM).toFixed(2)}</span>
    }},
    { key: 'sealType' as const, label: 'Etancheite' },
    { key: 'seatAngle' as const, label: 'Siege' },
    { key: 'pressureRating' as const, label: 'Pression (PSI)', align: 'right' as const, render: (v: unknown) => <span className="font-mono font-semibold">{Number(v).toLocaleString()}</span> },
    { key: 'portDepth' as const, label: isIn ? 'Prof. port (in)' : 'Prof. port (mm)', align: 'right' as const, render: (v: unknown, row: HydraulicThread) => {
      const n = Number(v)
      if (n === 0) return <span className="text-steel-600">---</span>
      if (isMetricStd(row)) return <span className="font-mono">{isIn ? (n / MM).toFixed(3) : n.toFixed(1)}</span>
      return <span className="font-mono">{isIn ? n.toFixed(3) : (n * MM).toFixed(1)}</span>
    }},
    { key: 'useCase' as const, label: 'Usage' },
    { key: 'notes' as const, label: 'Notes' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-steel-500">Standard:</span>
        {STANDARDS.map(s => (
          <button
            key={s}
            onClick={() => setStdFilter(s)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              stdFilter === s
                ? 'bg-hydraulic text-white'
                : 'bg-steel-800 text-steel-400 hover:text-hydraulic'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<HydraulicThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['dashSize', 'standard', 'nominalSize', 'threadSize', 'sealType', 'useCase', 'notes']}
        accentColor="hydraulic"
        footerNote={null}
        highlightFn={row => row.notes.toLowerCase().includes('commun') || row.notes.toLowerCase().includes('utilise')}
        sectionFn={(row, i, arr) => {
          if (i === 0) return row.standard
          if (arr[i - 1] && (arr[i - 1] as HydraulicThread).standard !== row.standard) return row.standard
          return null
        }}
      />
    </div>
  )
}
