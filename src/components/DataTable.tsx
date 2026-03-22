import { useState, useMemo } from 'react'
import type { SortConfig, SortDirection } from '../types'

interface Column<T> {
  key: keyof T & string
  label: string
  align?: 'left' | 'right' | 'center'
  render?: (value: unknown, row: T) => React.ReactNode
  sortable?: boolean
  width?: string
}

interface Props<T> {
  data: T[]
  columns: Column<T>[]
  search: string
  searchKeys: (keyof T & string)[]
  accentColor: string
  highlightFn?: (row: T) => boolean
  sectionFn?: (row: T, index: number, data: T[]) => string | null
  footerNote?: string | null
}

function getVal(row: unknown, key: string): unknown {
  return (row as Record<string, unknown>)[key]
}

function getSortValue(val: unknown): string | number {
  if (typeof val === 'number') return val
  if (typeof val === 'string') {
    const num = parseFloat(val)
    if (!isNaN(num)) return num
    return val.toLowerCase()
  }
  return String(val ?? '')
}

export default function DataTable<T extends object>({
  data, columns, search, searchKeys, accentColor, highlightFn, sectionFn, footerNote
}: Props<T>) {
  const [sort, setSort] = useState<SortConfig>({ key: '', direction: null })

  const filtered = useMemo(() => {
    if (!search.trim()) return data
    const q = search.toLowerCase()
    return data.filter(row =>
      searchKeys.some(key => String(getVal(row, key) ?? '').toLowerCase().includes(q))
    )
  }, [data, search, searchKeys])

  const sorted = useMemo(() => {
    if (!sort.key || !sort.direction) return filtered
    const dir = sort.direction === 'asc' ? 1 : -1
    return [...filtered].sort((a, b) => {
      const av = getSortValue(getVal(a, sort.key))
      const bv = getSortValue(getVal(b, sort.key))
      if (av < bv) return -1 * dir
      if (av > bv) return 1 * dir
      return 0
    })
  }, [filtered, sort])

  const handleSort = (key: string) => {
    setSort(prev => {
      if (prev.key !== key) return { key, direction: 'asc' as SortDirection }
      if (prev.direction === 'asc') return { key, direction: 'desc' as SortDirection }
      return { key: '', direction: null }
    })
  }

  const SortIcon = ({ col }: { col: string }) => {
    if (sort.key !== col) return <span className="text-steel-700 ml-1">{'\u21C5'}</span>
    return (
      <span className="ml-1" style={{ color: `var(--color-${accentColor})` }}>
        {sort.direction === 'asc' ? '\u25b2' : '\u25bc'}
      </span>
    )
  }

  return (
    <div className="table-wrap rounded-lg border border-steel-800 bg-steel-900/50 max-h-[calc(100vh-220px)] overflow-auto">
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-10 bg-steel-900 shadow-[0_1px_0_0_var(--color-steel-800)]">
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={`px-3 py-2.5 font-semibold text-steel-300 whitespace-nowrap bg-steel-900 ${
                  col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                } ${col.sortable !== false ? 'cursor-pointer select-none hover:text-steel-100' : ''}`}
                style={col.width ? { width: col.width } : undefined}
                onClick={() => col.sortable !== false && handleSort(col.key)}
              >
                {col.label}
                {col.sortable !== false && <SortIcon col={col.key} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-3 py-8 text-center text-steel-500">
                Aucun resultat pour &laquo; {search} &raquo;
              </td>
            </tr>
          ) : (
            sorted.map((row, i) => {
              const section = sectionFn?.(row, i, sorted)
              const highlight = highlightFn?.(row)
              return [
                section && (
                  <tr key={`section-${i}`}>
                    <td
                      colSpan={columns.length}
                      className="px-3 py-2 text-xs font-bold uppercase tracking-wider border-t border-steel-700"
                      style={{ color: `var(--color-${accentColor})`, background: `color-mix(in srgb, var(--color-${accentColor}) 6%, transparent)` }}
                    >
                      {section}
                    </td>
                  </tr>
                ),
                <tr
                  key={i}
                  className={`border-t border-steel-800/50 transition-colors hover:bg-steel-800/50 ${
                    highlight ? 'bg-steel-800/30' : ''
                  }`}
                  style={highlight ? { borderLeft: `3px solid var(--color-${accentColor})` } : undefined}
                >
                  {columns.map(col => {
                    const val = getVal(row, col.key)
                    return (
                      <td
                        key={col.key}
                        className={`px-3 py-2 ${
                          col.align === 'right' ? 'text-right' : col.align === 'center' ? 'text-center' : 'text-left'
                        } ${col.key === 'notes' ? 'text-steel-500 text-xs' : 'text-steel-200'}`}
                      >
                        {col.render ? col.render(val, row) : String(val ?? '')}
                      </td>
                    )
                  })}
                </tr>
              ]
            })
          )}
        </tbody>
      </table>
      <div className="px-3 py-2 border-t border-steel-800 text-xs text-steel-500 flex justify-between">
        <span>{sorted.length} entrees{search ? ' (filtre)' : ''}</span>
        {footerNote !== null && <span>{footerNote ?? '75% engagement standard'}</span>}
      </div>
    </div>
  )
}
