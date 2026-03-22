export interface FaceMill {
  diameter: number       // mm
  diameterIn: number     // in
  teeth: number
  leadAngle: number      // degrees
  type: string
  insertType: string
  insertSize: string
  maxDOC: number         // mm
  arbor: string
  application: string
}

export const faceMills: FaceMill[] = [
  // 45° Lead Angle — General Purpose
  { diameter: 50, diameterIn: 2, teeth: 4, leadAngle: 45, type: '45° General', insertType: 'SEKT/SEKN', insertSize: '1204', maxDOC: 4, arbor: 'Arbre 22mm', application: 'Surfacage general, acier, fonte' },
  { diameter: 63, diameterIn: 2.5, teeth: 5, leadAngle: 45, type: '45° General', insertType: 'SEKT/SEKN', insertSize: '1204', maxDOC: 4, arbor: 'Arbre 22mm', application: 'Surfacage general' },
  { diameter: 80, diameterIn: 3, teeth: 6, leadAngle: 45, type: '45° General', insertType: 'SEKT/SEKN', insertSize: '1204', maxDOC: 4, arbor: 'Arbre 27mm', application: 'Surfacage productif' },
  { diameter: 100, diameterIn: 4, teeth: 7, leadAngle: 45, type: '45° General', insertType: 'SNMT/SNMX', insertSize: '1206', maxDOC: 6, arbor: 'Arbre 32mm', application: 'Surfacage haute productivite' },
  { diameter: 125, diameterIn: 5, teeth: 8, leadAngle: 45, type: '45° General', insertType: 'SNMT/SNMX', insertSize: '1206', maxDOC: 6, arbor: 'Arbre 40mm', application: 'Surfacage grandes pieces' },
  { diameter: 160, diameterIn: 6, teeth: 10, leadAngle: 45, type: '45° General', insertType: 'SNMT/SNMX', insertSize: '1206', maxDOC: 6, arbor: 'Arbre 40mm', application: 'Production volume' },
  { diameter: 200, diameterIn: 8, teeth: 12, leadAngle: 45, type: '45° General', insertType: 'SNMT/SNMX', insertSize: '1508', maxDOC: 8, arbor: 'Arbre 50mm', application: 'Grosses machines' },
  { diameter: 250, diameterIn: 10, teeth: 14, leadAngle: 45, type: '45° General', insertType: 'SNMT/SNMX', insertSize: '1508', maxDOC: 8, arbor: 'Arbre 60mm', application: 'Centres d\'usinage lourds' },

  // 90° Lead Angle — Square Shoulder
  { diameter: 25, diameterIn: 1, teeth: 2, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1003', maxDOC: 10, arbor: 'Queue cylindrique', application: 'Epaulement, rainurage leger' },
  { diameter: 32, diameterIn: 1.25, teeth: 3, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1003', maxDOC: 10, arbor: 'Queue cylindrique', application: 'Epaulement precision' },
  { diameter: 40, diameterIn: 1.5, teeth: 4, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1604', maxDOC: 15, arbor: 'Arbre 16mm', application: 'Epaulement profond' },
  { diameter: 50, diameterIn: 2, teeth: 4, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1604', maxDOC: 15, arbor: 'Arbre 22mm', application: 'Polyvalent epaulement + surfacage' },
  { diameter: 63, diameterIn: 2.5, teeth: 5, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1604', maxDOC: 15, arbor: 'Arbre 22mm', application: 'Epaulement productif' },
  { diameter: 80, diameterIn: 3, teeth: 6, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1604', maxDOC: 15, arbor: 'Arbre 27mm', application: 'Grands epaulements' },
  { diameter: 100, diameterIn: 4, teeth: 7, leadAngle: 90, type: '90° Epaulement', insertType: 'APKT/APMT', insertSize: '1604', maxDOC: 15, arbor: 'Arbre 32mm', application: 'Surfacage 90° grandes pieces' },

  // High Feed — Round Insert
  { diameter: 32, diameterIn: 1.25, teeth: 3, leadAngle: 10, type: 'High Feed', insertType: 'RPMW/RPMT', insertSize: '0802', maxDOC: 1, arbor: 'Queue cylindrique', application: 'Ebauche rapide, hautes avances' },
  { diameter: 40, diameterIn: 1.5, teeth: 4, leadAngle: 10, type: 'High Feed', insertType: 'RPMW/RPMT', insertSize: '1003', maxDOC: 1.2, arbor: 'Queue cylindrique', application: 'Ebauche rapide' },
  { diameter: 50, diameterIn: 2, teeth: 4, leadAngle: 10, type: 'High Feed', insertType: 'RPMW/RPMT', insertSize: '1003', maxDOC: 1.2, arbor: 'Arbre 22mm', application: 'Ebauche haute productivite' },
  { diameter: 63, diameterIn: 2.5, teeth: 5, leadAngle: 10, type: 'High Feed', insertType: 'RPMW/RPMT', insertSize: '1204', maxDOC: 1.5, arbor: 'Arbre 22mm', application: 'Ebauche volume' },
  { diameter: 80, diameterIn: 3, teeth: 6, leadAngle: 10, type: 'High Feed', insertType: 'ONMU/ODMW', insertSize: '0505', maxDOC: 1, arbor: 'Arbre 27mm', application: 'Ebauche aggressive' },

  // Round Insert — Copie / 3D
  { diameter: 25, diameterIn: 1, teeth: 2, leadAngle: 0, type: 'Rond Copie', insertType: 'RCKT/RPMW', insertSize: '1204', maxDOC: 6, arbor: 'Queue cylindrique', application: 'Copie 3D, moules, matrices' },
  { diameter: 32, diameterIn: 1.25, teeth: 3, leadAngle: 0, type: 'Rond Copie', insertType: 'RCKT/RPMW', insertSize: '1204', maxDOC: 6, arbor: 'Queue cylindrique', application: 'Semi-finition 3D' },
  { diameter: 50, diameterIn: 2, teeth: 4, leadAngle: 0, type: 'Rond Copie', insertType: 'RCKT/RPMW', insertSize: '1605', maxDOC: 8, arbor: 'Arbre 22mm', application: 'Ebauche moules' },
  { diameter: 63, diameterIn: 2.5, teeth: 5, leadAngle: 0, type: 'Rond Copie', insertType: 'RCKT/RPMW', insertSize: '1605', maxDOC: 8, arbor: 'Arbre 22mm', application: 'Ebauche grande surface 3D' },
]

export interface InsertGrade {
  grade: string
  coating: string
  substrate: string
  materials: string
  application: string
  vcRange: string
}

export const insertGrades: InsertGrade[] = [
  // Kennametal-style grade designations
  { grade: 'KC725M', coating: 'PVD TiAlN', substrate: 'Micro-grain', materials: 'Acier, Inox', application: 'General, finition a semi-finition', vcRange: '150–300 m/min' },
  { grade: 'KCPK30', coating: 'CVD TiCN+Al2O3', substrate: 'Carbure cemente', materials: 'Acier, Fonte', application: 'Ebauche a semi-finition', vcRange: '120–250 m/min' },
  { grade: 'KCPK10', coating: 'CVD Al2O3+TiN', substrate: 'Carbure fin', materials: 'Acier, Fonte', application: 'Finition haute vitesse', vcRange: '200–400 m/min' },
  { grade: 'KC510M', coating: 'PVD TiAlN', substrate: 'Micro-grain', materials: 'Inox, Superalliages', application: 'Materiau difficile', vcRange: '80–180 m/min' },
  { grade: 'KC410M', coating: 'PVD AlTiN', substrate: 'Submicron', materials: 'Titane, Inconel', application: 'Superalliages, haute temperature', vcRange: '30–80 m/min' },
  { grade: 'KCK20', coating: 'PVD TiN', substrate: 'Micro-grain', materials: 'Aluminium, Non-ferreux', application: 'Haute vitesse, alu et cuivre', vcRange: '300–1000 m/min' },
  { grade: 'KCK15', coating: 'Non-revetu poli', substrate: 'Carbure K', materials: 'Aluminium, Plastique', application: 'Alu haute vitesse, finition miroir', vcRange: '500–2000 m/min' },
  { grade: 'KC5010', coating: 'CVD Multi-couche', substrate: 'Cermet', materials: 'Acier doux', application: 'Finition superieure, Ra < 0.8', vcRange: '200–350 m/min' },
  { grade: 'KD1400', coating: 'Diamant CVD', substrate: 'Carbure', materials: 'Alu-Si, Composites', application: 'Aluminium haute silicium, CFRP', vcRange: '500–3000 m/min' },
]

export interface InsertGeometry {
  iso: string
  name: string
  shape: string
  angle: string
  edges: number
  strength: string
  application: string
}

export const insertGeometries: InsertGeometry[] = [
  { iso: 'APKT/APMT', name: 'Parallelogramme', shape: '85°', angle: '90° epaulement', edges: 2, strength: 'Moyenne', application: 'Fraisage 90°, epaulement, rainurage' },
  { iso: 'SEKT/SEKN', name: 'Carre', shape: '90°', angle: '45° surfacage', edges: 4, strength: 'Haute', application: 'Surfacage general, bonne economie' },
  { iso: 'SNMT/SNMX', name: 'Carre neg.', shape: '90°', angle: '45° surfacage', edges: 8, strength: 'Tres haute', application: 'Surfacage lourd, 8 aretes/insert' },
  { iso: 'ONMU/ODMW', name: 'Octogone', shape: '135°', angle: 'High feed', edges: 8, strength: 'Haute', application: 'High feed, ebauche rapide' },
  { iso: 'RPMW/RPMT', name: 'Rond', shape: '360°', angle: 'Variable', edges: 1, strength: 'Tres haute', application: 'Copie 3D, high feed, moules' },
  { iso: 'RCKT', name: 'Rond positif', shape: '360°', angle: 'Variable', edges: 1, strength: 'Haute', application: 'Copie 3D, finition contours' },
  { iso: 'TPKN/TPMX', name: 'Triangle', shape: '60°', angle: '90° epaulement', edges: 3, strength: 'Moyenne', application: 'Epaulement, economique (3 aretes)' },
  { iso: 'WNMU', name: 'Trigone', shape: '80°', angle: '90° epaulement', edges: 6, strength: 'Haute', application: 'Epaulement, 6 aretes, economique' },
  { iso: 'XDHT/XDHX', name: 'Special HF', shape: 'Speciale', angle: '10-17° high feed', edges: 4, strength: 'Tres haute', application: 'High feed dedies, fz > 2mm' },
  { iso: 'SDMT/SDKT', name: 'Carre positif', shape: '90°', angle: '45° surfacage', edges: 4, strength: 'Moyenne', application: 'Surfacage leger, finition' },
]

export interface MillingMaterial {
  name: string
  category: string
  vcFace45: [number, number]    // m/min surfacage 45°
  vcSquare90: [number, number]  // m/min epaulement 90°
  vcHighFeed: [number, number]  // m/min high feed
  fzFace: [number, number]      // mm/tooth surfacage
  fzSquare: [number, number]    // mm/tooth epaulement
  fzHighFeed: [number, number]  // mm/tooth high feed
  kc: number                    // specific cutting force N/mm²
  coolant: string
}

export const millingMaterials: MillingMaterial[] = [
  { name: 'Acier doux (< 200 HB)', category: 'Acier', vcFace45: [180, 300], vcSquare90: [150, 250], vcHighFeed: [150, 250], fzFace: [0.15, 0.30], fzSquare: [0.08, 0.18], fzHighFeed: [0.8, 2.0], kc: 1800, coolant: 'Arrosage ou sec' },
  { name: 'Acier moyen (200-350 HB)', category: 'Acier', vcFace45: [150, 250], vcSquare90: [120, 200], vcHighFeed: [120, 200], fzFace: [0.12, 0.25], fzSquare: [0.06, 0.15], fzHighFeed: [0.6, 1.5], kc: 2200, coolant: 'Arrosage ou sec' },
  { name: 'Acier dur (> 350 HB)', category: 'Acier', vcFace45: [80, 150], vcSquare90: [60, 120], vcHighFeed: [80, 150], fzFace: [0.08, 0.18], fzSquare: [0.04, 0.12], fzHighFeed: [0.4, 1.0], kc: 2800, coolant: 'Sec recommande' },
  { name: 'Inox 304/316', category: 'Inox', vcFace45: [120, 200], vcSquare90: [100, 170], vcHighFeed: [100, 180], fzFace: [0.10, 0.22], fzSquare: [0.06, 0.15], fzHighFeed: [0.5, 1.2], kc: 2400, coolant: 'Arrosage abondant' },
  { name: 'Inox durci / Duplex', category: 'Inox', vcFace45: [60, 120], vcSquare90: [50, 100], vcHighFeed: [60, 120], fzFace: [0.08, 0.18], fzSquare: [0.04, 0.12], fzHighFeed: [0.4, 1.0], kc: 2800, coolant: 'Arrosage haute pression' },
  { name: 'Aluminium 6061/7075', category: 'Aluminium', vcFace45: [500, 1500], vcSquare90: [400, 1200], vcHighFeed: [400, 1000], fzFace: [0.15, 0.35], fzSquare: [0.08, 0.20], fzHighFeed: [1.0, 3.0], kc: 700, coolant: 'Arrosage ou MQL' },
  { name: 'Aluminium coule (Si < 12%)', category: 'Aluminium', vcFace45: [300, 800], vcSquare90: [250, 700], vcHighFeed: [300, 700], fzFace: [0.12, 0.30], fzSquare: [0.06, 0.18], fzHighFeed: [0.8, 2.5], kc: 800, coolant: 'Arrosage' },
  { name: 'Fonte grise (GG25)', category: 'Fonte', vcFace45: [150, 300], vcSquare90: [120, 250], vcHighFeed: [150, 250], fzFace: [0.15, 0.30], fzSquare: [0.08, 0.18], fzHighFeed: [0.8, 2.0], kc: 1100, coolant: 'Sec (prefere)' },
  { name: 'Fonte ductile (GGG50)', category: 'Fonte', vcFace45: [120, 220], vcSquare90: [100, 180], vcHighFeed: [120, 200], fzFace: [0.12, 0.25], fzSquare: [0.06, 0.15], fzHighFeed: [0.6, 1.5], kc: 1500, coolant: 'Sec ou arrosage' },
  { name: 'Titane Ti-6Al-4V', category: 'Exotique', vcFace45: [40, 70], vcSquare90: [30, 55], vcHighFeed: [40, 70], fzFace: [0.08, 0.15], fzSquare: [0.04, 0.10], fzHighFeed: [0.4, 0.8], kc: 1400, coolant: 'Arrosage haute pression' },
  { name: 'Inconel 718', category: 'Exotique', vcFace45: [20, 40], vcSquare90: [15, 30], vcHighFeed: [20, 40], fzFace: [0.06, 0.12], fzSquare: [0.03, 0.08], fzHighFeed: [0.3, 0.6], kc: 3000, coolant: 'Arrosage haute pression' },
]
