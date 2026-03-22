import { useState } from 'react'
import type { TabId } from './types'
import TabNav from './components/TabNav'
import ImperialTab from './components/ImperialTab'
import MetricTab from './components/MetricTab'
import PipeTab from './components/PipeTab'
import SpecialTab from './components/SpecialTab'
import ReferenceTab from './components/ReferenceTab'

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('imperial')
  const [search, setSearch] = useState('')

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-steel-900 border-b border-steel-800 px-4 py-3 sm:px-6">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-3 shrink-0">
            <svg className="w-8 h-8 text-imperial" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M1 12h4M19 12h4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
            <div>
              <h1 className="text-lg font-bold text-steel-50 leading-tight">Mecanics</h1>
              <p className="text-xs text-steel-400">Tap Drill Size Charts</p>
            </div>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Rechercher (ex: M10, 1/4, NPT...)"
                className="w-full pl-10 pr-4 py-2 bg-steel-800 border border-steel-700 rounded-lg text-sm text-steel-100 placeholder-steel-500 focus:outline-none focus:border-steel-500 focus:ring-1 focus:ring-steel-500 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-steel-500 hover:text-steel-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Count */}
          <div className="text-xs text-steel-500 shrink-0 hidden sm:block">
            Normes: ASME B1.1 / ISO 68-1 / ANSI B1.20.1
          </div>
        </div>
      </header>

      {/* Tabs */}
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Content */}
      <main className="flex-1 px-4 py-4 sm:px-6">
        <div className="max-w-[1600px] mx-auto">
          {activeTab === 'imperial' && <ImperialTab search={search} />}
          {activeTab === 'metric' && <MetricTab search={search} />}
          {activeTab === 'pipe' && <PipeTab search={search} />}
          {activeTab === 'special' && <SpecialTab search={search} />}
          {activeTab === 'reference' && <ReferenceTab />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-steel-900 border-t border-steel-800 px-4 py-2 text-center text-xs text-steel-600">
        GestEase Technologie Inc. — Engagement 75% (standard)
      </footer>
    </div>
  )
}
