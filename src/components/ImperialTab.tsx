import { useState } from 'react'
import DataTable from './DataTable'
import { imperialData } from '../data/imperial'
import type { ImperialThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

export default function ImperialTab({ search, units }: Props) {
  const [seriesFilter, setSeriesFilter] = useState<'ALL' | 'UNC' | 'UNF'>('ALL')
  const isIn = units === 'imperial'

  const data = seriesFilter === 'ALL'
    ? imperialData
    : imperialData.filter(r => r.series === seriesFilter)

  const fmtDia = (v: unknown) => {
    const n = Number(v)
    return <span className="font-mono">{isIn ? n.toFixed(4) : (n * MM).toFixed(2)}</span>
  }

  const columns = [
    { key: 'tapSize' as const, label: 'Tap Size', render: (v: unknown) => <span className="font-mono font-bold text-imperial">{String(v)}</span> },
    { key: 'series' as const, label: 'Series', render: (v: unknown) => (
      <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${v === 'UNC' ? 'bg-imperial/20 text-imperial' : 'bg-amber-800/30 text-amber-300'}`}>
        {String(v)}
      </span>
    )},
    { key: 'tpi' as const, label: 'TPI', align: 'right' as const },
    { key: 'tapDrillFraction' as const, label: 'Tap Drill' },
    { key: 'tapDrillDecimal' as const, label: isIn ? 'Tap Drill (in)' : 'Tap Drill (mm)', align: 'right' as const, render: fmtDia },
    { key: 'tapDrillNearest' as const, label: 'Nearest #/Letter' },
    { key: 'minorDia' as const, label: isIn ? 'Minor Ø (in)' : 'Minor Ø (mm)', align: 'right' as const, render: fmtDia },
    { key: 'majorDia' as const, label: isIn ? 'Major Ø (in)' : 'Major Ø (mm)', align: 'right' as const, render: fmtDia },
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
