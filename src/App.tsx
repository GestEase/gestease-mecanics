import { useState } from 'react'
import type { TabId, UnitSystem } from './types'
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

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('imperial')
  const [search, setSearch] = useState('')
  const [units, setUnits] = useState<UnitSystem>('metric')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header + Tabs — sticky */}
      <div className="sticky top-0 z-20">
      <header className="w-full px-4 py-3 sm:px-6" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-[1600px] mx-auto flex items-center gap-4">

          {/* LEFT — Logo + Title */}
          <div className="flex items-center gap-3 shrink-0">
            <img src="/logoGestEase.png" alt="GestEase" className="w-8 h-8" />
            <div>
              <h1 className="text-lg font-bold text-sky leading-tight">Mecanics</h1>
              <p className="text-xs text-steel-400 hidden sm:block">Outils de conception mecanique</p>
            </div>
          </div>

          {/* CENTER — Search */}
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
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT — Nav links + controls */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Nav buttons */}
            <a
              href="https://gestease.ca/conception"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              style={{ background: 'var(--muted)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
              Conception
            </a>
            <a
              href="https://gestease.ca/gestflow"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              style={{ background: 'var(--accent)', color: 'var(--text-on-accent)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              GestFlow
            </a>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 mx-1" style={{ background: 'var(--border)' }} />

            {/* Theme switcher */}
            <ThemeSwitcher />

            {/* Unit toggle */}
            <div className="flex items-center gap-1 rounded-lg p-0.5" style={{ background: 'var(--muted)' }}>
              <button
                onClick={() => setUnits('metric')}
                className="px-3 py-1.5 text-xs font-bold rounded-md transition-colors"
                style={units === 'metric'
                  ? { background: 'var(--accent)', color: 'var(--text-on-accent)' }
                  : { color: 'var(--text-secondary)' }
                }
              >
                mm
              </button>
              <button
                onClick={() => setUnits('imperial')}
                className="px-3 py-1.5 text-xs font-bold rounded-md transition-colors"
                style={units === 'imperial'
                  ? { background: 'var(--accent)', color: 'var(--text-on-accent)' }
                  : { color: 'var(--text-secondary)' }
                }
              >
                in
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Tabs */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto">
          {activeTab === 'imperial' && <ImperialTab search={search} units={units} />}
          {activeTab === 'metric' && <MetricTab search={search} units={units} />}
          {activeTab === 'pipe' && <PipeTab search={search} units={units} />}
          {activeTab === 'special' && <SpecialTab search={search} units={units} />}
          {activeTab === 'hydraulic' && <HydraulicTab search={search} units={units} />}
          {activeTab === 'api' && <APITab search={search} units={units} />}
          {activeTab === 'pneumatic' && <PneumaticTab search={search} units={units} />}
          {activeTab === 'conversions' && <ConversionsTab />}
          {activeTab === 'milling' && <MillingTab units={units} />}
          {activeTab === 'calculator' && <CalculatorTab units={units} />}
          {activeTab === 'reference' && <ReferenceTab />}
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 z-10 px-4 py-2 text-center text-xs" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
        <a href="https://gestease.ca" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">
          GestEase Technologie Inc.
        </a>
        <span className="mx-2">·</span>
        <a href="https://gestease.ca" target="_blank" rel="noopener noreferrer" className="hover:text-sky transition-colors">
          ERP &amp; IoT pour l'industrie manufacturiere
        </a>
      </footer>
    </div>
  )
}
