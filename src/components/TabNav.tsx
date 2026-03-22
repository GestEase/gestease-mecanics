import type { TabId } from '../types'

interface Tab { id: TabId; label: string; color: string; activeColor: string }
interface TabGroup { label: string; tabs: Tab[] }

const groups: TabGroup[] = [
  {
    label: 'Filets',
    tabs: [
      { id: 'imperial', label: 'Imperial (UNC/UNF)', color: 'text-steel-400 hover:text-imperial', activeColor: 'text-imperial border-imperial' },
      { id: 'metric', label: 'Metric ISO (M)', color: 'text-steel-400 hover:text-metric', activeColor: 'text-metric border-metric' },
      { id: 'pipe', label: 'Pipe (NPT/BSP)', color: 'text-steel-400 hover:text-pipe', activeColor: 'text-pipe border-pipe' },
      { id: 'special', label: 'Special', color: 'text-steel-400 hover:text-special', activeColor: 'text-special border-special' },
    ],
  },
  {
    label: 'Domaines',
    tabs: [
      { id: 'hydraulic', label: 'Hydraulique', color: 'text-steel-400 hover:text-hydraulic', activeColor: 'text-hydraulic border-hydraulic' },
      { id: 'api', label: 'API Forage', color: 'text-steel-400 hover:text-api', activeColor: 'text-api border-api' },
      { id: 'pneumatic', label: 'Pneumatique', color: 'text-steel-400 hover:text-pneumatic', activeColor: 'text-pneumatic border-pneumatic' },
    ],
  },
  {
    label: 'Convertisseur',
    tabs: [
      { id: 'conversions', label: 'Conversions', color: 'text-steel-400 hover:text-metric', activeColor: 'text-metric border-metric' },
    ],
  },
  {
    label: 'Usinage',
    tabs: [
      { id: 'milling', label: 'Fraisage', color: 'text-steel-400 hover:text-imperial', activeColor: 'text-imperial border-imperial' },
      { id: 'calculator', label: 'Speed & Feed', color: 'text-steel-400 hover:text-ref', activeColor: 'text-ref border-ref' },
      { id: 'reference', label: 'Reference', color: 'text-steel-400 hover:text-steel-300', activeColor: 'text-steel-300 border-steel-300' },
    ],
  },
]

interface Props {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav className="bg-steel-950 border-b border-steel-800 overflow-x-auto">
      <div className="max-w-[1600px] mx-auto flex items-center">
        {groups.map((group, gi) => (
          <div key={group.label} className="flex items-center">
            {gi > 0 && <div className="w-px h-6 bg-steel-700 mx-1 shrink-0" />}
            <span className="px-2 text-[10px] font-bold uppercase tracking-widest text-steel-600 shrink-0">{group.label}</span>
            {group.tabs.map(tab => (
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
        ))}
      </div>
    </nav>
  )
}
