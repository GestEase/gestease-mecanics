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

export type UnitSystem = 'metric' | 'imperial'

export type SortDirection = 'asc' | 'desc' | null

export interface SortConfig {
  key: string
  direction: SortDirection
}

export interface HydraulicThread {
  dashSize: string
  standard: string
  nominalSize: string
  tubeOD: number
  threadSize: string
  tpiOrPitch: string
  sealType: string
  seatAngle: string
  majorDia: number
  pressureRating: number
  portDepth: number
  useCase: string
  notes: string
}

export interface APIThread {
  connectionSize: string
  standard: string
  category: string
  apiSpec: string
  tpi: number
  taperPerFoot: string
  threadForm: string
  connectionOD: number
  connectionID: number
  bevelDia: number
  makeUpTorque: string
  grade: string
  useCase: string
  notes: string
}

export interface PneumaticThread {
  portSize: string
  standard: string
  threadSpec: string
  majorDia: number
  pressureBar: number
  pressurePSI: number
  sealMethod: string
  applications: string
  brands: string
  notes: string
}

export type TabId = 'imperial' | 'metric' | 'pipe' | 'special' | 'hydraulic' | 'api' | 'pneumatic' | 'milling' | 'calculator' | 'reference' | 'conversions'
