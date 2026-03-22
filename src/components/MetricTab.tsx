import { useState } from 'react'
import DataTable from './DataTable'
import { metricData } from '../data/metric'
import type { MetricThread } from '../types'

interface Props { search: string }

export default function MetricTab({ search }: Props) {
  const [seriesFilter, setSeriesFilter] = useState<'ALL' | 'Coarse' | 'Fine'>('ALL')

  const data = seriesFilter === 'ALL'
    ? metricData
    : metricData.filter(r => r.series === seriesFilter)

  const columns = [
    { key: 'tapSize' as const, label: 'Tap Size', render: (v: unknown) => <span className="font-mono font-bold text-metric">{String(v)}</span> },
    { key: 'series' as const, label: 'Series', render: (v: unknown) => (
      <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${v === 'Coarse' ? 'bg-metric/20 text-metric' : 'bg-emerald-800/30 text-emerald-300'}`}>
        {String(v)}
      </span>
    )},
    { key: 'pitch' as const, label: 'Pitch (mm)', align: 'right' as const },
    { key: 'tapDrillMm' as const, label: 'Tap Drill (mm)', align: 'right' as const, render: (v: unknown) => <span className="font-mono font-semibold">{String(v)}</span> },
    { key: 'nearestFraction' as const, label: 'Nearest Frac.' },
    { key: 'decimalIn' as const, label: 'Decimal (in)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(4)}</span> },
    { key: 'minorDia' as const, label: 'Minor \u00d8 (mm)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(3)}</span> },
    { key: 'majorDia' as const, label: 'Major \u00d8 (mm)', align: 'right' as const },
    { key: 'threadDepth' as const, label: 'Depth (mm)', align: 'right' as const },
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
