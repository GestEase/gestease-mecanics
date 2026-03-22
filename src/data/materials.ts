export interface Material {
  name: string
  category: string
  cuttingSpeedDrill: [number, number]  // m/min [min, max]
  cuttingSpeedTap: [number, number]
  chipLoadDrill: [number, number]      // mm/tooth [min, max] for ~6mm drill
  chipLoadFactor: number               // multiplier per mm of diameter
  coolant: string
}

export const materials: Material[] = [
  { name: 'Acier doux (1018, 1020)', category: 'Acier', cuttingSpeedDrill: [25, 35], cuttingSpeedTap: [8, 15], chipLoadDrill: [0.05, 0.12], chipLoadFactor: 0.008, coolant: 'Huile soluble' },
  { name: 'Acier moyen (1045, 4140)', category: 'Acier', cuttingSpeedDrill: [18, 28], cuttingSpeedTap: [6, 12], chipLoadDrill: [0.04, 0.10], chipLoadFactor: 0.007, coolant: 'Huile soluble' },
  { name: 'Acier dur (4340, D2)', category: 'Acier', cuttingSpeedDrill: [8, 15], cuttingSpeedTap: [3, 8], chipLoadDrill: [0.03, 0.07], chipLoadFactor: 0.005, coolant: 'Huile de coupe' },
  { name: 'Acier inoxydable 304/316', category: 'Inox', cuttingSpeedDrill: [10, 18], cuttingSpeedTap: [5, 8], chipLoadDrill: [0.03, 0.08], chipLoadFactor: 0.006, coolant: 'Huile sulfuree' },
  { name: 'Acier inoxydable 17-4 PH', category: 'Inox', cuttingSpeedDrill: [8, 14], cuttingSpeedTap: [3, 6], chipLoadDrill: [0.02, 0.06], chipLoadFactor: 0.005, coolant: 'Huile sulfuree' },
  { name: 'Aluminium 6061-T6', category: 'Aluminium', cuttingSpeedDrill: [60, 120], cuttingSpeedTap: [15, 30], chipLoadDrill: [0.08, 0.20], chipLoadFactor: 0.012, coolant: 'Huile soluble / WD-40' },
  { name: 'Aluminium 7075', category: 'Aluminium', cuttingSpeedDrill: [50, 100], cuttingSpeedTap: [12, 25], chipLoadDrill: [0.07, 0.18], chipLoadFactor: 0.011, coolant: 'Huile soluble' },
  { name: 'Aluminium coule (A356)', category: 'Aluminium', cuttingSpeedDrill: [40, 80], cuttingSpeedTap: [10, 20], chipLoadDrill: [0.06, 0.15], chipLoadFactor: 0.010, coolant: 'Huile soluble' },
  { name: 'Laiton', category: 'Non-ferreux', cuttingSpeedDrill: [40, 70], cuttingSpeedTap: [15, 25], chipLoadDrill: [0.06, 0.15], chipLoadFactor: 0.010, coolant: 'Sec ou huile legere' },
  { name: 'Bronze', category: 'Non-ferreux', cuttingSpeedDrill: [20, 40], cuttingSpeedTap: [8, 15], chipLoadDrill: [0.05, 0.12], chipLoadFactor: 0.008, coolant: 'Huile soluble' },
  { name: 'Cuivre', category: 'Non-ferreux', cuttingSpeedDrill: [30, 50], cuttingSpeedTap: [10, 20], chipLoadDrill: [0.06, 0.14], chipLoadFactor: 0.009, coolant: 'Huile soluble' },
  { name: 'Fonte grise', category: 'Fonte', cuttingSpeedDrill: [20, 35], cuttingSpeedTap: [6, 12], chipLoadDrill: [0.05, 0.15], chipLoadFactor: 0.009, coolant: 'Sec ou air' },
  { name: 'Fonte ductile', category: 'Fonte', cuttingSpeedDrill: [15, 25], cuttingSpeedTap: [5, 10], chipLoadDrill: [0.04, 0.12], chipLoadFactor: 0.008, coolant: 'Huile soluble' },
  { name: 'Titane Grade 5 (Ti-6Al-4V)', category: 'Exotique', cuttingSpeedDrill: [8, 15], cuttingSpeedTap: [3, 6], chipLoadDrill: [0.02, 0.06], chipLoadFactor: 0.004, coolant: 'Huile haute pression' },
  { name: 'Plastique (Delrin, Nylon)', category: 'Plastique', cuttingSpeedDrill: [30, 60], cuttingSpeedTap: [10, 20], chipLoadDrill: [0.08, 0.20], chipLoadFactor: 0.012, coolant: 'Sec ou air' },
  { name: 'Plastique (ABS, Polycarbonate)', category: 'Plastique', cuttingSpeedDrill: [20, 50], cuttingSpeedTap: [8, 15], chipLoadDrill: [0.06, 0.15], chipLoadFactor: 0.010, coolant: 'Sec ou air' },
]

export interface TapEntry {
  label: string
  drillMm: number
  drillIn: number
  pitch?: number   // mm (metric)
  tpi?: number     // threads per inch (imperial)
  system: 'metric' | 'imperial'
}
