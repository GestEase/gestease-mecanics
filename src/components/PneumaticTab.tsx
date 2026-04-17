import { useState } from 'react'
import DataTable from './DataTable'
import { pneumaticData } from '../data/pneumatic'
import type { PneumaticThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

const STANDARDS = ['ALL', 'NPT', 'BSPP (G)', 'BSPT (R)', 'Metric Mini', 'UNF Mini'] as const

export default function PneumaticTab({ search, units }: Props) {
  const isIn = units === 'imperial'
  const [stdFilter, setStdFilter] = useState<string>('ALL')

  const data = stdFilter === 'ALL'
    ? pneumaticData
    : pneumaticData.filter(r => r.standard === stdFilter)

  const columns = [
    { key: 'portSize' as const, label: 'Port', render: (v: unknown) => <span className="font-mono font-bold text-pneumatic">{String(v)}</span> },
    { key: 'standard' as const, label: 'Standard', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'NPT':         'text-red-700',
        'BSPP (G)':    'text-emerald-700',
        'BSPT (R)':    'text-amber-700',
        'Metric Mini':  'text-pneumatic',
        'UNF Mini':     'text-purple-700',
      }
      return <span className={`font-mono text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'threadSpec' as const, label: 'Filet' },
    { key: 'majorDia' as const, label: isIn ? 'Major \u00d8 (in)' : 'Major \u00d8 (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono font-semibold">{isIn ? (n / MM).toFixed(3) : n.toFixed(1)}</span>
    }},
    { key: 'pressureBar' as const, label: 'Pression', align: 'right' as const, render: (_v: unknown, row: PneumaticThread) => (
      <span className="font-mono">{row.pressureBar} bar ({row.pressurePSI} PSI)</span>
    )},
    { key: 'sealMethod' as const, label: 'Etancheite' },
    { key: 'applications' as const, label: 'Applications' },
    { key: 'brands' as const, label: 'Marques', render: (v: unknown) => <span className="text-steel-400 text-xs">{String(v)}</span> },
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
                ? 'bg-pneumatic text-white'
                : 'bg-steel-800 text-steel-400 hover:text-pneumatic'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<PneumaticThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['portSize', 'standard', 'sealMethod', 'applications', 'brands', 'notes']}
        accentColor="pneumatic"
        footerNote={null}
        highlightFn={row => row.notes.toLowerCase().includes('commun') || row.notes.toLowerCase().includes('standard')}
        sectionFn={(row, i, arr) => {
          if (i === 0) return row.standard
          if (arr[i - 1] && (arr[i - 1] as PneumaticThread).standard !== row.standard) return row.standard
          return null
        }}
      />
    </div>
  )
}
