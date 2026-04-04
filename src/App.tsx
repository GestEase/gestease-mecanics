import { useState, useEffect, useRef, useCallback } from 'react'
import { Routes, Route, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import type { UnitSystem } from './types/index'
import { routes, defaultRoute } from './routes'
import { trackPageView, trackSearch, trackCtaClick } from './lib/analytics'
import TabNav from './components/TabNav'
import ThemeSwitcher from './components/ThemeSwitcher'
import ImperialTab from './components/ImperialTab'
import MetricTab from './components/MetricTab'
import PipeTab from './components/PipeTab'
import SpecialTab from './components/SpecialTab'
import HydraulicTab from './components/HydraulicTab'
import APITab from './components/APITab'
import PneumaticTab from './components/PneumaticTab'
import ConversionsTab from './components/ConversionsTab'
import MillingTab from './components/MillingTab'
import CalculatorTab from './components/CalculatorTab'
import ReferenceTab from './components/ReferenceTab'

// ─── SEO: update <title>, <meta description> and <link canonical> ────────────
function useSeoMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const route = routes.find(r => r.path === pathname) ?? defaultRoute

    document.title = route.title

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.name = 'description'
      document.head.appendChild(meta)
    }
    meta.content = route.description

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = `https://mecanics.gestease.ca${pathname}`

    // GA4: track page_view on each SPA route change
    trackPageView(pathname, route.title)
  }, [pathname])
}

// ─── GA4: debounced search tracking ──────────────────────────────────────────
function useSearchTracking(search: string) {
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)
  useEffect(() => {
    clearTimeout(timerRef.current)
    if (search.length >= 2) {
      timerRef.current = setTimeout(() => trackSearch(search), 800)
    }
    return () => clearTimeout(timerRef.current)
  }, [search])
}

// ─── Layout shell (header + tabnav + footer) ─────────────────────────────────
interface ShellProps {
  search: string
  setSearch: (v: string) => void
  units: UnitSystem
  setUnits: (v: UnitSystem) => void
}

function AppShell({ search, setSearch, units, setUnits }: ShellProps) {
  const location = useLocation()
  const navigate = useNavigate()
  useSeoMeta()
  useSearchTracking(search)

  const activeRoute = routes.find(r => r.path === location.pathname) ?? defaultRoute

  const handleCtaClick = useCallback((ctaName: string, url: string) => {
    trackCtaClick(ctaName, url)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">

      {/* ── Sticky header + tabs ── */}
      <div className="sticky top-0 z-20">
        <header className="w-full px-4 py-3 sm:px-6" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
          <div className="max-w-[1600px] mx-auto flex items-center gap-4">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3 shrink-0 no-underline">
              <img src="/logoGestEase.png" alt="GestEase" className="w-8 h-8" />
              <div>
                <div className="text-lg font-bold text-sky leading-tight">Mecanics</div>
                <p className="text-xs hidden sm:block" style={{ color: 'var(--text-secondary)' }}>
                  Outils de conception mecanique
                </p>
              </div>
            </a>

            {/* Search */}
            <div className="flex-1">
              <div className="relative max-w-lg mx-auto">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-secondary)' }}>
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Rechercher (ex: M10, 1/4, NPT...)"
                  className="w-full pl-10 pr-4 py-2 rounded-lg text-sm transition-colors focus:outline-none"
                  style={{ background: 'var(--muted)', border: '1px solid var(--border)', color: 'var(--text)' }}
                />
                {search && (
                  <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
                  </button>
                )}
              </div>
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="https://gestease.ca/conception" target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                style={{ background: 'var(--muted)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--accent)'; el.style.borderColor = 'var(--accent)' }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'var(--text-secondary)'; el.style.borderColor = 'var(--border)' }}
                onClick={() => handleCtaClick('Conception', 'https://gestease.ca/conception')}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                Conception
              </a>
              <a
                href="https://gestease.ca/gestflow" target="_blank" rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
                onClick={() => handleCtaClick('GestFlow', 'https://gestease.ca/gestflow')}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                GestFlow
              </a>
              <div className="hidden md:block w-px h-6 mx-1" style={{ background: 'var(--border)' }} />
              <ThemeSwitcher />
              <div className="flex items-center gap-1 rounded-lg p-0.5" style={{ background: 'var(--muted)' }}>
                <button onClick={() => setUnits('metric')} className="px-3 py-1.5 text-xs font-bold rounded-md transition-colors"
                  style={units === 'metric' ? { background: 'var(--accent)', color: 'var(--text-on-accent)' } : { color: 'var(--text-secondary)' }}>mm</button>
                <button onClick={() => setUnits('imperial')} className="px-3 py-1.5 text-xs font-bold rounded-md transition-colors"
                  style={units === 'imperial' ? { background: 'var(--accent)', color: 'var(--text-on-accent)' } : { color: 'var(--text-secondary)' }}>in</button>
              </div>
            </div>
          </div>
        </header>

        <TabNav
          activeTab={activeRoute.tab}
          onTabChange={tab => navigate(routes.find(r => r.tab === tab)?.path ?? defaultRoute.path)}
        />
      </div>

      {/* ── Content (injected by child route) ── */}
      <main className="flex-1 px-4 py-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto">
          <Outlet />
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="sticky bottom-0 z-10 px-4 py-2 text-center text-xs" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
        <a href="https://gestease.ca" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">
          GestEase Technologie Inc.
        </a>
        <span className="mx-2">·</span>
        <span>Outils CNC gratuits pour l'industrie manufacturière</span>
      </footer>
    </div>
  )
}

// ─── App root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [search, setSearch] = useState('')
  const [units, setUnits] = useState<UnitSystem>('metric')
  const shellProps = { search, setSearch, units, setUnits }

  return (
    <Routes>
      {/* Redirect root to default tab */}
      <Route path="/" element={<Navigate to={defaultRoute.path} replace />} />

      {/* All tabs share the same shell layout */}
      <Route element={<AppShell {...shellProps} />}>
        <Route path="/imperial"    element={<ImperialTab    search={search} units={units} />} />
        <Route path="/metric"      element={<MetricTab      search={search} units={units} />} />
        <Route path="/pipe"        element={<PipeTab        search={search} units={units} />} />
        <Route path="/special"     element={<SpecialTab     search={search} units={units} />} />
        <Route path="/hydraulic"   element={<HydraulicTab   search={search} units={units} />} />
        <Route path="/api"         element={<APITab         search={search} units={units} />} />
        <Route path="/pneumatic"   element={<PneumaticTab   search={search} units={units} />} />
        <Route path="/conversions" element={<ConversionsTab />} />
        <Route path="/milling"     element={<MillingTab     units={units} />} />
        <Route path="/calculator"  element={<CalculatorTab  units={units} />} />
        <Route path="/reference"   element={<ReferenceTab />} />
        {/* 404 fallback → default tab */}
        <Route path="*"            element={<Navigate to={defaultRoute.path} replace />} />
      </Route>
    </Routes>
  )
}
