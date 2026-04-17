import { useState } from 'react'
import DataTable from './DataTable'
import { metricData } from '../data/metric'
import type { MetricThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

export default function MetricTab({ search, units }: Props) {
  const [seriesFilter, setSeriesFilter] = useState<'ALL' | 'Coarse' | 'Fine'>('ALL')
  const isMm = units === 'metric'

  const data = seriesFilter === 'ALL'
    ? metricData
    : metricData.filter(r => r.series === seriesFilter)

  const fmtMm = (v: unknown) => {
    const n = Number(v)
    return <span className="font-mono">{isMm ? n.toFixed(2) : (n / MM).toFixed(4)}</span>
  }

  const fmtMmBold = (v: unknown) => {
    const n = Number(v)
    return <span className="font-mono font-semibold">{isMm ? String(n) : (n / MM).toFixed(4)}</span>
  }

  const columns = [
    { key: 'tapSize' as const, label: 'Tap Size', render: (v: unknown) => <span className="font-mono font-bold text-metric">{String(v)}</span> },
    { key: 'series' as const, label: 'Series', render: (v: unknown) => (
      <span className={`font-mono text-xs font-semibold ${v === 'Coarse' ? 'text-metric' : 'text-emerald-700'}`}>
        {String(v)}
      </span>
    )},
    { key: 'pitch' as const, label: isMm ? 'Pitch (mm)' : 'Pitch (in)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isMm ? String(n) : (n / MM).toFixed(4)}</span>
    }},
    { key: 'tapDrillMm' as const, label: isMm ? 'Tap Drill (mm)' : 'Tap Drill (in)', align: 'right' as const, render: fmtMmBold },
    { key: 'nearestFraction' as const, label: 'Nearest Frac.' },
    { key: 'minorDia' as const, label: isMm ? 'Minor Ø (mm)' : 'Minor Ø (in)', align: 'right' as const, render: fmtMm },
    { key: 'majorDia' as const, label: isMm ? 'Major Ø (mm)' : 'Major Ø (in)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isMm ? String(n) : (n / MM).toFixed(4)}</span>
    }},
    { key: 'threadDepth' as const, label: isMm ? 'Depth (mm)' : 'Depth (in)', align: 'right' as const, render: fmtMm },
    { key: 'notes' as const, label: 'Notes' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs text-steel-500">Filtre:</span>
        {(['ALL', 'Coarse', 'Fine'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSeriesFilter(s)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              seriesFilter === s
                ? 'bg-metric text-steel-950'
                : 'bg-steel-800 text-steel-400 hover:text-metric'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<MetricThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['tapSize', 'series', 'nearestFraction', 'notes']}
        accentColor="metric"
        highlightFn={row => row.notes.toLowerCase().includes('standard') || row.notes.toLowerCase().includes('commun')}
        sectionFn={(row, i, arr) => {
          if (i === 0) return `${row.series} — ISO Metric ${row.series === 'Coarse' ? '(pas standard)' : '(pas fin)'}`
          if (arr[i - 1] && (arr[i - 1] as MetricThread).series !== row.series) {
            return `${row.series} — ISO Metric ${row.series === 'Coarse' ? '(pas standard)' : '(pas fin)'}`
          }
          return null
        }}
      />
    </div>
  )
}
