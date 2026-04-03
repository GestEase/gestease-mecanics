import type { TabId } from '../types'

interface Tab {
  id: TabId
  label: string
  colorVar: string
}

interface TabGroup {
  label: string
  badgeColor: string
  badgeBg: string
  tabs: Tab[]
}

const groups: TabGroup[] = [
  {
    label: 'Filets',
    badgeColor: 'var(--color-imperial)',
    badgeBg: 'color-mix(in srgb, var(--color-imperial) 12%, transparent)',
    tabs: [
      { id: 'imperial', label: 'Imperial (UNC/UNF)', colorVar: 'var(--color-imperial)' },
      { id: 'metric',   label: 'Metric ISO (M)',     colorVar: 'var(--color-metric)'   },
      { id: 'pipe',     label: 'Pipe (NPT/BSP)',     colorVar: 'var(--color-pipe)'     },
      { id: 'special',  label: 'Special',            colorVar: 'var(--color-special)'  },
    ],
  },
  {
    label: 'Domaines',
    badgeColor: 'var(--color-hydraulic)',
    badgeBg: 'color-mix(in srgb, var(--color-hydraulic) 12%, transparent)',
    tabs: [
      { id: 'hydraulic', label: 'Hydraulique', colorVar: 'var(--color-hydraulic)' },
      { id: 'api',       label: 'API Forage',  colorVar: 'var(--color-api)'       },
      { id: 'pneumatic', label: 'Pneumatique', colorVar: 'var(--color-pneumatic)' },
    ],
  },
  {
    label: 'Convertisseur',
    badgeColor: 'var(--color-metric)',
    badgeBg: 'color-mix(in srgb, var(--color-metric) 12%, transparent)',
    tabs: [
      { id: 'conversions', label: 'Conversions', colorVar: 'var(--color-metric)' },
    ],
  },
  {
    label: 'Usinage',
    badgeColor: 'var(--color-ref)',
    badgeBg: 'color-mix(in srgb, var(--color-ref) 12%, transparent)',
    tabs: [
      { id: 'milling',    label: 'Fraisage',     colorVar: 'var(--color-imperial)' },
      { id: 'calculator', label: 'Speed & Feed',  colorVar: 'var(--color-ref)'     },
      { id: 'reference',  label: 'Référence',     colorVar: 'var(--color-special)' },
    ],
  },
]

interface Props {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export default function TabNav({ activeTab, onTabChange }: Props) {
  return (
    <nav
      className="overflow-x-auto"
      style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
    >
      <div className="max-w-[1600px] mx-auto flex items-center gap-0.5 px-3 py-2">
        {groups.map((group, gi) => (
          <div key={group.label} className="flex items-center gap-0.5">

            {/* Separator between groups */}
            {gi > 0 && (
              <div
                className="w-px h-6 mx-2 shrink-0"
                style={{ background: 'var(--border)' }}
              />
            )}

            {/* Group badge */}
            <span
              className="shrink-0 mr-1 px-2 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider leading-none select-none"
              style={{
                color: group.badgeColor,
                background: group.badgeBg,
              }}
            >
              {group.label}
            </span>

            {/* Tabs */}
            {group.tabs.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <TabButton
                  key={tab.id}
                  label={tab.label}
                  active={isActive}
                  colorVar={tab.colorVar}
                  onClick={() => onTabChange(tab.id)}
                />
              )
            })}
          </div>
        ))}
      </div>
    </nav>
  )
}

function TabButton({
  label,
  active,
  colorVar,
  onClick,
}: {
  label: string
  active: boolean
  colorVar: string
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-150 focus:outline-none"
      style={
        active
          ? { background: colorVar, color: '#ffffff', fontWeight: 600 }
          : { color: 'var(--text-secondary)', background: 'transparent' }
      }
      onMouseEnter={e => {
        if (!active) {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'var(--muted)'
          ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text)'
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          ;(e.currentTarget as HTMLButtonElement).style.background = 'transparent'
          ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--text-secondary)'
        }
      }}
    >
      {label}
    </button>
  )
}
