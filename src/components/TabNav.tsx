import type { TabId } from '../types'

const tabs: { id: TabId; label: string; color: string; activeColor: string }[] = [
  { id: 'imperial', label: 'Imperial (UNC/UNF)', color: 'text-steel-400 hover:text-imperial', activeColor: 'text-imperial border-imperial' },
  { id: 'metric', label: 'Metric ISO (M)', color: 'text-steel-400 hover:text-metric', activeColor: 'text-metric border-metric' },
  { id: 'pipe', label: 'Pipe (NPT/BSP)', color: 'text-steel-400 hover:text-pipe', activeColor: 'text-pipe border-pipe' },
  { id: 'special', label: 'Special', color: 'text-steel-400 hover:text-special', activeColor: 'text-special border-special' },
  { id: 'reference', label: 'Reference', color: 'text-steel-400 hover:text-ref', activeColor: 'text-ref border-ref' },
]

interface Props {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav className="bg-steel-900/50 border-b border-steel-800 overflow-x-auto">
      <div className="max-w-[1600px] mx-auto flex">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
              activeTab === tab.id
                ? tab.activeColor
                : `${tab.color} border-transparent`
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
