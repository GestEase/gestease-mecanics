import { useState } from 'react'
import DataTable from './DataTable'
import { apiData } from '../data/api'
import type { APIThread, UnitSystem } from '../types'

const MM = 25.4

interface Props { search: string; units: UnitSystem }

const STANDARDS = ['ALL', 'NC', 'REG', 'FH', 'IF', 'STC', 'LTC', 'BTC', 'EUE', 'NUE'] as const
const CATEGORIES = ['ALL', 'Rotary Shouldered', 'Casing', 'Tubing'] as const

export default function APITab({ search, units }: Props) {
  const isIn = units === 'imperial'
  const [stdFilter, setStdFilter] = useState<string>('ALL')
  const [catFilter, setCatFilter] = useState<string>('ALL')

  const data = apiData.filter(r => {
    if (stdFilter !== 'ALL' && r.standard !== stdFilter) return false
    if (catFilter !== 'ALL' && r.category !== catFilter) return false
    return true
  })

  const columns = [
    { key: 'connectionSize' as const, label: 'Connection', render: (v: unknown) => <span className="font-mono font-bold text-api">{String(v)}</span> },
    { key: 'standard' as const, label: 'Standard', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'NC':  'text-api',
        'REG': 'text-orange-700',
        'FH':  'text-blue-700',
        'IF':  'text-cyan-700',
        'STC': 'text-emerald-700',
        'LTC': 'text-green-700',
        'BTC': 'text-red-700',
        'EUE': 'text-violet-700',
        'NUE': 'text-purple-700',
      }
      return <span className={`font-mono text-xs font-semibold ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'category' as const, label: 'Type', render: (v: unknown) => {
      const colors: Record<string, string> = {
        'Rotary Shouldered': 'text-api',
        'Casing': 'text-emerald-700',
        'Tubing': 'text-violet-700',
      }
      return <span className={`font-semibold text-xs ${colors[String(v)] || ''}`}>{String(v)}</span>
    }},
    { key: 'apiSpec' as const, label: 'Norme' },
    { key: 'tpi' as const, label: 'TPI', align: 'right' as const },
    { key: 'taperPerFoot' as const, label: 'Taper' },
    { key: 'threadForm' as const, label: 'Forme filet' },
    { key: 'connectionOD' as const, label: isIn ? 'Conn OD (in)' : 'Conn OD (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono font-semibold">{isIn ? n.toFixed(3) : (n * MM).toFixed(1)}</span>
    }},
    { key: 'connectionID' as const, label: isIn ? 'Bore ID (in)' : 'Bore ID (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isIn ? n.toFixed(3) : (n * MM).toFixed(1)}</span>
    }},
    { key: 'bevelDia' as const, label: isIn ? 'Bevel \u00d8 (in)' : 'Bevel \u00d8 (mm)', align: 'right' as const, render: (v: unknown) => {
      const n = Number(v)
      return <span className="font-mono">{isIn ? n.toFixed(3) : (n * MM).toFixed(1)}</span>
    }},
    { key: 'makeUpTorque' as const, label: 'Make-up (ft-lb)', align: 'right' as const, render: (v: unknown) => <span className="font-mono text-xs">{String(v)}</span> },
    { key: 'grade' as const, label: 'Grade', render: (v: unknown) => {
      const g = String(v)
      const color = g === 'S135' ? 'text-api font-bold' : g === 'P110' ? 'text-pipe font-bold' : 'text-steel-200'
      return <span className={`font-mono ${color}`}>{g}</span>
    }},
    { key: 'useCase' as const, label: 'Usage' },
    { key: 'notes' as const, label: 'Notes' },
  ]

  return (
    <div className="space-y-3">
      {/* Category filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-steel-500">Categorie:</span>
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => { setCatFilter(c); setStdFilter('ALL') }}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              catFilter === c
                ? 'bg-api text-steel-950'
                : 'bg-steel-800 text-steel-400 hover:text-api'
            }`}
          >
            {c === 'ALL' ? 'Tous' : c}
          </button>
        ))}
      </div>

      {/* Standard filter */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-steel-500">Standard:</span>
        {STANDARDS.map(s => (
          <button
            key={s}
            onClick={() => setStdFilter(s)}
            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors ${
              stdFilter === s
                ? 'bg-api/80 text-steel-950'
                : 'bg-steel-800 text-steel-400 hover:text-api'
            }`}
          >
            {s === 'ALL' ? 'Tous' : s}
          </button>
        ))}
      </div>

      <DataTable<APIThread>
        data={data}
        columns={columns}
        search={search}
        searchKeys={['connectionSize', 'standard', 'category', 'apiSpec', 'threadForm', 'grade', 'useCase', 'notes']}
        accentColor="api"
        footerNote={null}
        highlightFn={row => row.notes.toLowerCase().includes('commun') || row.grade === 'S135'}
        sectionFn={(row, i, arr) => {
          if (i === 0) return `${row.standard} \u2014 ${row.category}`
          const prev = arr[i - 1] as APIThread
          if (prev.standard !== row.standard) return `${row.standard} \u2014 ${row.category}`
          return null
        }}
      />
    </div>
  )
}
