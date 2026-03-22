export interface ImperialThread {
  tapSize: string
  series: 'UNC' | 'UNF'
  tpi: number
  tapDrillFraction: string
  tapDrillDecimal: number
  tapDrillNearest: string
  minorDia: number
  majorDia: number
  threadDepth: number
  threadEngagement: number
  clearanceDrill: string
  notes: string
}

export interface MetricThread {
  tapSize: string
  series: 'Coarse' | 'Fine'
  pitch: number
  tapDrillMm: number
  nearestFraction: string
  decimalIn: number
  minorDia: number
  majorDia: number
  threadDepth: number
  threadEngagement: number
  notes: string
}

export interface PipeThread {
  nominalSize: string
  standard: string
  tpi: number
  taper: string
  odMajorDia: number
  tapDrillDecimal: number
  tapDrillMm: number
  minorDia: number
  engagementLength: number
  drillAngle: string
  sealantRequired: string
  useCase: string
  notes: string
}

export interface SpecialThread {
  tapSize: string
  threadType: string
  tpiPitch: string
  flankAngle: string
  tapDrill: string
  minorDia: string
  majorDia: string
  threadDepth: string
  lead: string
  engagement: number
  notes: string
}

export type SortDirection = 'asc' | 'desc' | null

export interface SortConfig {
  key: string
  direction: SortDirection
}

export type TabId = 'imperial' | 'metric' | 'pipe' | 'special' | 'reference'
