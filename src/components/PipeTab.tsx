import { useState } from 'react'
import DataTable from './DataTable'
import { pipeData } from '../data/pipe'
import type { PipeThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

const STANDARDS = ['ALL', 'NPT', 'NPTF', 'BSPP (G)', 'BSPT (R)'] as const

export default function PipeTab({ search, units }: Props) {
  const isIn = units === 'imperial'
  const [stdFilter, setStdFilter] = useState<string>('ALL')

  const data = stdFilter === 'ALL'
    ? pipeData
    : pipeData.filter(r => r.standard === stdFilter)

  const columns = [
    { key: 'nominalSize' as const, label: 'Nominal Size', render: (v: unknown) => <span className="font-mono font-bold text-pipe">{String(v)}</span> },
    { key: 'standard' as const, label: 'Standard', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'NPT': 'text-pipe',
        'NPTF': 'text-orange-700',
        'BSPP (G)': 'text-blue-700',
        'BSPT (R)': 'text-cyan-700',
      }
      return <span className={`font-mono text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'tpi' as const, label: 'TPI', align: 'right' as const },
    { key: 'taper' as const, label: 'Taper' },
    { key: 'tapDrillDecimal' as const, label: isIn ? 'Tap Drill (in)' : 'Tap Drill (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono font-semibold">{isIn ? n.toFixed(4) : (n * MM).toFixed(2)}</span>
    }},
    { key: 'tapDrillMm' as const, label: isIn ? 'Tap Drill (mm)' : 'Tap Drill (in)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isIn ? n.toFixed(2) : (n / MM).toFixed(4)}</span>
    }},
    { key: 'odMajorDia' as const, label: isIn ? 'OD Major Ø (in)' : 'OD Major Ø (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isIn ? n.toFixed(4) : (n * MM).toFixed(2)}</span>
    }},
    { key: 'sealantRequired' as const, label: 'Etancheite' },
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
                ? 'bg-pipe text-white'
                : 'bg-steel-800 text-steel-400 hover:text-pipe'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<PipeThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['nominalSize', 'standard', 'sealantRequired', 'useCase', 'notes']}
        accentColor="pipe"
        highlightFn={row => row.notes.toLowerCase().includes('commun') || row.notes.toLowerCase().includes('standard')}
        sectionFn={(row, i, arr) => {
          if (i === 0) return row.standard
          if (arr[i - 1] && (arr[i - 1] as PipeThread).standard !== row.standard) return row.standard
          return null
        }}
      />
    </div>
  )
}
