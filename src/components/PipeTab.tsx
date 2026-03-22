import { useState } from 'react'
import DataTable from './DataTable'
import { pipeData } from '../data/pipe'
import type { PipeThread } from '../types'

interface Props { search: string }

const STANDARDS = ['ALL', 'NPT', 'NPTF', 'BSPP (G)', 'BSPT (R)'] as const

export default function PipeTab({ search }: Props) {
  const [stdFilter, setStdFilter] = useState<string>('ALL')

  const data = stdFilter === 'ALL'
    ? pipeData
    : pipeData.filter(r => r.standard === stdFilter)

  const columns = [
    { key: 'nominalSize' as const, label: 'Nominal Size', render: (v: unknown) => <span className="font-mono font-bold text-pipe">{String(v)}</span> },
    { key: 'standard' as const, label: 'Standard', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'NPT': 'bg-pipe/20 text-pipe',
        'NPTF': 'bg-orange-800/30 text-orange-300',
        'BSPP (G)': 'bg-blue-800/30 text-blue-300',
        'BSPT (R)': 'bg-cyan-800/30 text-cyan-300',
      }
      return <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'tpi' as const, label: 'TPI', align: 'right' as const },
    { key: 'taper' as const, label: 'Taper' },
    { key: 'tapDrillDecimal' as const, label: 'Tap Drill (in)', align: 'right' as const, render: (v: unknown) => <span className="font-mono font-semibold">{Number(v).toFixed(4)}</span> },
    { key: 'tapDrillMm' as const, label: 'Tap Drill (mm)', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(2)}</span> },
    { key: 'odMajorDia' as const, label: 'OD Major \u00d8', align: 'right' as const, render: (v: unknown) => <span className="font-mono">{Number(v).toFixed(4)}</span> },
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
