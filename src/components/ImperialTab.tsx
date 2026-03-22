import { useState } from 'react'
import DataTable from './DataTable'
import { imperialData } from '../data/imperial'
import type { ImperialThread } from '../types'

interface Props { search: string }

export default function ImperialTab({ search }: Props) {
  const [seriesFilter, setSeriesFilter] = useState<'ALL' | 'UNC' | 'UNF'>('ALL')

  const data = seriesFilter === 'ALL'
    ? imperialData
    : imperialData.filter(r => r.series === seriesFilter)

  const columns = [
    { key: 'tapSize' as const, label: 'Tap Size', render: (v: unknown) => <span className="font-mono font-bold text-imperial">{String(v)}</span> },
    { key: 'series' as const, label: 'Series', render: (v: unknown) => (
      <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${v === 'UNC' ? 'bg-imperial/20 text-imperial' : 'bg-amber-800/30 text-amber-300'}`}>
        {String(v)}
      </span>
    )},
    { key: 'tpi' as const, label: 'TPI', align: 'right' as const },
    { key: 'tapDrillFraction' as const, label: 'Tap Drill' },
    { key: 'tapDrillDecimal' as const, label: 'Decimal (in)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(4)}</span> },
    { key: 'tapDrillNearest' as const, label: 'Nearest #/Letter' },
    { key: 'minorDia' as const, label: 'Minor \u00d8 (in)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(4)}</span> },
    { key: 'majorDia' as const, label: 'Major \u00d8 (in)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(4)}</span> },
    { key: 'clearanceDrill' as const, label: 'Clearance' },
    { key: 'notes' as const, label: 'Notes' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs text-steel-500">Filtre:</span>
        {(['ALL', 'UNC', 'UNF'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSeriesFilter(s)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              seriesFilter === s
                ? 'bg-imperial text-steel-950'
                : 'bg-steel-800 text-steel-400 hover:text-imperial'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<ImperialThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['tapSize', 'series', 'tapDrillFraction', 'tapDrillNearest', 'clearanceDrill', 'notes']}
        accentColor="imperial"
        highlightFn={row => row.notes.toLowerCase().includes('common')}
        sectionFn={(row, i, arr) => {
          if (i === 0) return `${row.series} — Unified National ${row.series === 'UNC' ? 'Coarse' : 'Fine'}`
          if (arr[i - 1] && (arr[i - 1] as ImperialThread).series !== row.series) {
            return `${row.series} — Unified National ${row.series === 'UNC' ? 'Coarse' : 'Fine'}`
          }
          return null
        }}
      />
    </div>
  )
}
