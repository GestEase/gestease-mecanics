import { useState } from 'react'
import DataTable from './DataTable'
import { specialData } from '../data/special'
import type { SpecialThread } from '../types'

interface Props { search: string }

const TYPES = ['ALL', 'ACME General', 'Stub ACME', 'Buttress 45\u00b0/7\u00b0', 'UNEF', 'Trapezoidal ISO'] as const

export default function SpecialTab({ search }: Props) {
  const [typeFilter, setTypeFilter] = useState<string>('ALL')

  const data = typeFilter === 'ALL'
    ? specialData
    : specialData.filter(r => r.threadType === typeFilter)

  const columns = [
    { key: 'tapSize' as const, label: 'Tap Size', render: (v: unknown) => <span className="font-mono font-bold text-special">{String(v)}</span> },
    { key: 'threadType' as const, label: 'Type', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'ACME General': 'bg-special/20 text-special',
        'Stub ACME': 'bg-purple-800/30 text-purple-300',
        'Buttress 45\u00b0/7\u00b0': 'bg-pink-800/30 text-pink-300',
        'UNEF': 'bg-indigo-800/30 text-indigo-300',
        'Trapezoidal ISO': 'bg-fuchsia-800/30 text-fuchsia-300',
      }
      return <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'tpiPitch' as const, label: 'TPI / Pitch' },
    { key: 'flankAngle' as const, label: 'Angle' },
    { key: 'tapDrill' as const, label: 'Tap Drill', render: (v: unknown) => <span className="font-mono font-semibold">{String(v)}</span> },
    { key: 'minorDia' as const, label: 'Minor \u00d8' },
    { key: 'majorDia' as const, label: 'Major \u00d8' },
    { key: 'threadDepth' as const, label: 'Depth' },
    { key: 'lead' as const, label: 'Lead' },
    { key: 'notes' as const, label: 'Notes / Applications' },
  ]

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-steel-500">Type:</span>
        {TYPES.map(t => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              typeFilter === t
                ? 'bg-special text-white'
                : 'bg-steel-800 text-steel-400 hover:text-special'
            }`}
          >
            {t === 'ALL' ? 'Tous' : t}
          </button>
        ))}
      </div>

      <DataTable<SpecialThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['tapSize', 'threadType', 'tapDrill', 'notes']}
        accentColor="special"
        sectionFn={(row, i, arr) => {
          if (i === 0) return row.threadType
          if (arr[i - 1] && (arr[i - 1] as SpecialThread).threadType !== row.threadType) return row.threadType
          return null
        }}
      />
    </div>
  )
}
