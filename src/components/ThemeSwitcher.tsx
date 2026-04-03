import { useState, useEffect, useRef } from 'react'

interface ThemeOption { key: string; label: string; color: string }

const standardThemes: ThemeOption[] = [
  { key: 'default',  label: 'Default',  color: '#D9A441' },
  { key: 'ocean',    label: 'Ocean',    color: '#3B82F6' },
  { key: 'forest',   label: 'Forest',   color: '#10B981' },
  { key: 'royal',    label: 'Royal',    color: '#8B5CF6' },
  { key: 'coral',    label: 'Coral',    color: '#F97316' },
  { key: 'slate',    label: 'Slate',    color: '#64748B' },
  { key: 'rose',     label: 'Rose',     color: '#F43F5E' },
  { key: 'teal',     label: 'Teal',     color: '#14B8A6' },
  { key: 'amber',    label: 'Amber',    color: '#D97706' },
  { key: 'crimson',  label: 'Crimson',  color: '#DC2626' },
  { key: 'indigo',   label: 'Indigo',   color: '#4F46E5' },
  { key: 'sky',      label: 'Sky',      color: '#0EA5E9' },
]

const genxThemes: ThemeOption[] = [
  { key: 'hotrod',    label: 'Hot Rod',   color: '#E85D04' },
  { key: 'formula',   label: 'Formula',   color: '#E8001A' },
  { key: 'garage',    label: 'Garage',    color: '#00A854' },
  { key: 'synthwave', label: 'Synthwave', color: '#7B2FBE' },
  { key: 'marvel',    label: 'Marvel',    color: '#D90429' },
  { key: 'harley',    label: 'Harley',    color: '#FC4C02' },
  { key: 'forge',     label: 'Forge',     color: '#E8420A' },
]

const ALL_THEME_CLASSES = [...standardThemes, ...genxThemes].map(t => `theme-${t.key}`)

export function applyTheme(colorTheme: string, isDark: boolean) {
  const html = document.documentElement
  ALL_THEME_CLASSES.forEach(cls => html.classList.remove(cls))
  html.classList.remove('dark')
  if (colorTheme !== 'default') html.classList.add(`theme-${colorTheme}`)
  if (isDark) html.classList.add('dark')
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => localStorage.getItem('mecanics-dark') === 'true')
  const [colorTheme, setColorTheme] = useState(() => localStorage.getItem('mecanics-theme') || 'sky')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { applyTheme(colorTheme, isDark) }, [colorTheme, isDark])

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const toggleDark = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem('mecanics-dark', String(next))
  }

  const selectTheme = (key: string) => {
    setColorTheme(key)
    localStorage.setItem('mecanics-theme', key)
    setOpen(false)
  }

  const accentColor = [...standardThemes, ...genxThemes].find(t => t.key === colorTheme)?.color ?? '#0EA5E9'

  return (
    <div className="relative shrink-0" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        title="Personnaliser le thème"
        className="p-2 rounded-lg transition-colors hover:opacity-80"
        style={{ color: accentColor }}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
        </svg>
      </button>

      {open && (
        <div
          className="absolute right-0 top-full mt-2 w-72 rounded-lg shadow-xl z-50 p-4"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          {/* Dark / Light toggle */}
          <div className="flex items-center justify-between mb-4 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
            <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>Mode</span>
            <button
              onClick={toggleDark}
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              style={{ background: 'var(--muted)', color: 'var(--text-secondary)' }}
            >
              {isDark ? (
                <><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>Clair</>
              ) : (
                <><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>Sombre</>
              )}
            </button>
          </div>

          {/* Standard themes */}
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Standards</p>
            <div className="flex flex-wrap gap-2">
              {standardThemes.map(t => (
                <button
                  key={t.key}
                  title={t.label}
                  onClick={() => selectTheme(t.key)}
                  className="w-8 h-8 rounded-full transition-transform hover:scale-110 relative flex items-center justify-center"
                  style={{
                    background: t.color,
                    outline: colorTheme === t.key ? `3px solid ${t.color}` : '2px solid transparent',
                    outlineOffset: '2px',
                  }}
                >
                  {colorTheme === t.key && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Gen X themes */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-secondary)' }}>Gen X</p>
            <div className="flex flex-wrap gap-2">
              {genxThemes.map(t => (
                <button
                  key={t.key}
                  title={t.label}
                  onClick={() => selectTheme(t.key)}
                  className="w-8 h-8 rounded-full transition-transform hover:scale-110 relative flex items-center justify-center"
                  style={{
                    background: t.color,
                    outline: colorTheme === t.key ? `3px solid ${t.color}` : '2px solid transparent',
                    outlineOffset: '2px',
                  }}
                >
                  {colorTheme === t.key && (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
