import type { TabId } from './types/index'

export interface RouteConfig {
  path: string
  tab: TabId
  title: string
  description: string
}

export const routes: RouteConfig[] = [
  {
    path: '/imperial',
    tab: 'imperial',
    title: 'UNC/UNF Imperial Thread & Tap Drill Chart | Mecanics',
    description:
      'Complete UNC and UNF imperial tap drill chart. Find tap drill sizes, TPI, minor and major diameters for #0 to 4" screws. Free online reference tool.',
  },
  {
    path: '/metric',
    tab: 'metric',
    title: 'ISO Metric Tap Drill Chart (M2–M100) | Mecanics',
    description:
      'ISO metric thread tap drill chart from M2 to M100. Coarse and fine pitch, tap drill diameter in mm and inches, minor diameter. Free engineering reference.',
  },
  {
    path: '/pipe',
    tab: 'pipe',
    title: 'NPT & BSP Pipe Thread Chart | Mecanics',
    description:
      'Complete NPT and BSP pipe thread reference chart. Thread dimensions, tap drill sizes, OD, TPI and engagement length for 1/8" to 6" pipe.',
  },
  {
    path: '/special',
    tab: 'special',
    title: 'Special Thread Forms Chart (ACME, TR, STUB) | Mecanics',
    description:
      'Reference chart for special thread forms: ACME, Trapezoidal TR, Stub ACME, Buttress, UN, UNJ, and more. Tap drill sizes and dimensions.',
  },
  {
    path: '/hydraulic',
    tab: 'hydraulic',
    title: 'Hydraulic Fitting Thread Chart (JIC, ORFS, BSP, SAE) | Mecanics',
    description:
      'Hydraulic fitting thread reference: JIC 37°, ORFS, BSP, SAE, Komatsu and more. Thread sizes, pressure ratings, seal types and port dimensions.',
  },
  {
    path: '/api',
    tab: 'api',
    title: 'API Drill Pipe & Casing Thread Chart | Mecanics',
    description:
      'API oilfield connection thread reference: API NC, IF, FH, REG, PAC, EU, NU tubing and casing connections. OD, ID, TPI and make-up torque.',
  },
  {
    path: '/pneumatic',
    tab: 'pneumatic',
    title: 'Pneumatic Port & Fitting Thread Chart (BSPP, NPT, M) | Mecanics',
    description:
      'Pneumatic thread and port reference: BSPP, NPT, metric M thread fittings. Pressure ratings, seal method and applications for pneumatic systems.',
  },
  {
    path: '/conversions',
    tab: 'conversions',
    title: 'Mechanical Unit Converter (mm/in, torque, pressure) | Mecanics',
    description:
      'Free mechanical unit converter: millimeters to inches, N·m to ft·lb torque, bar to PSI pressure, and more. Instant conversion for machinists and engineers.',
  },
  {
    path: '/milling',
    tab: 'milling',
    title: 'Milling & Drilling Reference Chart (DOC, WOC, feeds) | Mecanics',
    description:
      'Milling and drilling reference: depth of cut, width of cut, chip load, recommended feeds and speeds by material. For CNC machinists and manual mills.',
  },
  {
    path: '/calculator',
    tab: 'calculator',
    title: 'CNC Speed & Feed Calculator (SFM, RPM, IPM) | Mecanics',
    description:
      'CNC speeds and feeds calculator: enter tool diameter and material to get RPM, SFM, IPM and chip load. Works for milling, drilling and turning.',
  },
  {
    path: '/reference',
    tab: 'reference',
    title: 'Machining Reference — Formulas, Tolerances & Materials | Mecanics',
    description:
      'Quick machining reference: thread formulas, ISO tolerance fits, material hardness conversion (HRC/HB/HV), surface finish Ra chart and drill number/letter sizes.',
  },
]

export const defaultRoute = routes[0]

export function getRouteByTab(tab: TabId): RouteConfig {
  return routes.find(r => r.tab === tab) ?? defaultRoute
}
