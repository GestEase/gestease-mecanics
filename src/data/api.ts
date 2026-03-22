import type { APIThread } from '../types'

export const apiData: APIThread[] = [
  // ═══════════════════════════════════════════════════════════════════
  // NC — Numbered Connection (API 7-2)
  // Standard moderne rotary shouldered — remplace REG/IF/FH
  // Taper: 2 in/ft | Filet: V-0.038R | 4 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: 'NC10',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 1.625,  connectionID: 0.500, bevelDia: 1.500,  makeUpTorque: '600-900',       grade: 'S135', useCase: 'Slim hole, coiled tubing',         notes: '' },
  { connectionSize: 'NC23',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 3.063,  connectionID: 1.250, bevelDia: 2.876,  makeUpTorque: '3,500-5,200',   grade: 'S135', useCase: 'Drill pipe 2-3/8"',                notes: '' },
  { connectionSize: 'NC26',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 3.375,  connectionID: 1.500, bevelDia: 3.188,  makeUpTorque: '5,000-7,500',   grade: 'S135', useCase: 'Drill pipe 2-7/8"',                notes: 'Remplace 2-3/8 IF' },
  { connectionSize: 'NC31',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 4.000,  connectionID: 1.750, bevelDia: 3.813,  makeUpTorque: '8,000-12,000',  grade: 'S135', useCase: 'Drill pipe 3-1/2"',                notes: 'Remplace 2-7/8 IF' },
  { connectionSize: 'NC38',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 4.938,  connectionID: 2.250, bevelDia: 4.750,  makeUpTorque: '14,000-21,000', grade: 'S135', useCase: 'Drill collars 4-3/4"',              notes: 'Tres commun' },
  { connectionSize: 'NC40',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 5.250,  connectionID: 2.500, bevelDia: 5.063,  makeUpTorque: '17,000-25,500', grade: 'S135', useCase: 'Drill collars 5"',                  notes: '' },
  { connectionSize: 'NC44',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 5.750,  connectionID: 2.750, bevelDia: 5.563,  makeUpTorque: '21,000-32,000', grade: 'S135', useCase: 'Drill collars 5-1/2"',              notes: '' },
  { connectionSize: 'NC46',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 6.250,  connectionID: 2.813, bevelDia: 6.000,  makeUpTorque: '24,000-36,000', grade: 'S135', useCase: 'Drill collars 6-1/4"',              notes: 'Tres commun' },
  { connectionSize: 'NC50',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 6.625,  connectionID: 3.000, bevelDia: 6.438,  makeUpTorque: '29,000-43,000', grade: 'S135', useCase: 'Drill pipe 5" / collars 6-1/2"',    notes: 'Tres commun' },
  { connectionSize: 'NC56',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 7.250,  connectionID: 3.250, bevelDia: 7.063,  makeUpTorque: '37,000-55,000', grade: 'S135', useCase: 'Drill collars 7-1/4"',              notes: '' },
  { connectionSize: 'NC61',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 7.750,  connectionID: 3.500, bevelDia: 7.563,  makeUpTorque: '43,000-64,000', grade: 'S135', useCase: 'Drill collars 8"',                  notes: '' },
  { connectionSize: 'NC70',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 9.000,  connectionID: 4.000, bevelDia: 8.813,  makeUpTorque: '58,000-87,000', grade: 'S135', useCase: 'Drill collars 9-1/2"',              notes: '' },
  { connectionSize: 'NC77',  standard: 'NC',  category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 10.000, connectionID: 4.500, bevelDia: 9.813,  makeUpTorque: '71,000-107,000', grade: 'S135', useCase: 'Drill collars 11"',                notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // REG — Regular (API 7-2)
  // Ancien standard rotary — encore tres repandu sur drill collars
  // Taper: 3 in/ft | Filet: V-0.040 | 4-5 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '2-3/8 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 5, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 3.375,  connectionID: 1.000, bevelDia: 3.125,  makeUpTorque: '4,000-6,000',   grade: 'S135', useCase: 'Drill collars petits',            notes: '' },
  { connectionSize: '2-7/8 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 5, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 3.875,  connectionID: 1.250, bevelDia: 3.625,  makeUpTorque: '6,500-9,800',   grade: 'S135', useCase: 'Drill collars 3-1/2"',            notes: '' },
  { connectionSize: '3-1/2 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 4.875,  connectionID: 1.750, bevelDia: 4.625,  makeUpTorque: '12,000-18,000', grade: 'S135', useCase: 'Drill collars standard',            notes: 'Tres commun' },
  { connectionSize: '4-1/2 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 6.375,  connectionID: 2.250, bevelDia: 6.125,  makeUpTorque: '22,000-33,000', grade: 'S135', useCase: 'Drill collars 6-1/4"',              notes: 'Tres commun' },
  { connectionSize: '5-1/2 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 7.500,  connectionID: 2.750, bevelDia: 7.250,  makeUpTorque: '35,000-52,000', grade: 'S135', useCase: 'Drill collars 7-1/2"',              notes: '' },
  { connectionSize: '6-5/8 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 8.500,  connectionID: 3.000, bevelDia: 8.250,  makeUpTorque: '50,000-75,000', grade: 'S135', useCase: 'Drill collars 8"+ / stabilisers', notes: '' },
  { connectionSize: '7-5/8 REG',  standard: 'REG', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '3 in/ft',   threadForm: 'V-0.040', connectionOD: 9.625,  connectionID: 3.500, bevelDia: 9.375,  makeUpTorque: '65,000-97,000', grade: 'S135', useCase: 'Drill collars 9-1/2"+',             notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // FH — Full Hole (API 7-2)
  // Maximum bore pour passage d'outils (MWD, LWD, fishing)
  // Taper: 2 in/ft | Filet: V-0.040 | 4-5 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '2-3/8 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 5, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 3.250,  connectionID: 1.500, bevelDia: 3.000,  makeUpTorque: '3,500-5,300',   grade: 'S135', useCase: 'Slim hole, max bore',              notes: '' },
  { connectionSize: '2-7/8 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 5, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 3.750,  connectionID: 2.000, bevelDia: 3.500,  makeUpTorque: '5,500-8,300',   grade: 'S135', useCase: 'MWD/LWD passage',                  notes: '' },
  { connectionSize: '3-1/2 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 4.750,  connectionID: 2.500, bevelDia: 4.500,  makeUpTorque: '10,000-15,000', grade: 'S135', useCase: 'MWD/LWD standard',                  notes: 'Commun' },
  { connectionSize: '4-1/2 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 6.250,  connectionID: 3.250, bevelDia: 6.000,  makeUpTorque: '20,000-30,000', grade: 'S135', useCase: 'BHA avec passage large',             notes: '' },
  { connectionSize: '5-1/2 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 7.375,  connectionID: 4.000, bevelDia: 7.125,  makeUpTorque: '32,000-48,000', grade: 'S135', useCase: 'Fishing tools, gros bore',          notes: '' },
  { connectionSize: '6-5/8 FH',  standard: 'FH', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.040', connectionOD: 8.375,  connectionID: 4.500, bevelDia: 8.125,  makeUpTorque: '46,000-69,000', grade: 'S135', useCase: 'Gros equipement directionnel',      notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // IF — Internal Flush (API 7-2)
  // Flush interne — meme ID que le tube, pas de restriction
  // Taper: 2 in/ft | Filet: V-0.038R | 4 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '2-3/8 IF',  standard: 'IF', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 3.063,  connectionID: 1.750, bevelDia: 2.876,  makeUpTorque: '3,000-4,500',   grade: 'S135', useCase: 'Drill collars flush ID',           notes: '= NC26' },
  { connectionSize: '2-7/8 IF',  standard: 'IF', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 3.750,  connectionID: 2.250, bevelDia: 3.563,  makeUpTorque: '6,000-9,000',   grade: 'S135', useCase: 'Drill collars flush ID',           notes: '= NC31' },
  { connectionSize: '3-1/2 IF',  standard: 'IF', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 4.688,  connectionID: 2.813, bevelDia: 4.500,  makeUpTorque: '11,000-16,500', grade: 'S135', useCase: 'Drill collars flush ID',           notes: '= NC38' },
  { connectionSize: '4-1/2 IF',  standard: 'IF', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 5.875,  connectionID: 3.500, bevelDia: 5.688,  makeUpTorque: '19,000-28,500', grade: 'S135', useCase: 'Drill collars flush ID',           notes: '= NC46' },
  { connectionSize: '5-1/2 IF',  standard: 'IF', category: 'Rotary Shouldered', apiSpec: 'API 7-2', tpi: 4, taperPerFoot: '2 in/ft',   threadForm: 'V-0.038R', connectionOD: 7.125,  connectionID: 4.250, bevelDia: 6.938,  makeUpTorque: '30,000-45,000', grade: 'S135', useCase: 'Drill collars flush ID',           notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // STC — Short Thread Coupling (API 5B)
  // Casing — 8-round thread — le plus commun pour casing surface/intermediaire
  // Taper: 3/4 in/ft | Filet: V-0.060R | 8 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '4-1/2"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 4.500,  connectionID: 4.000, bevelDia: 4.334,  makeUpTorque: '4,900-7,300',   grade: 'J55',  useCase: 'Surface casing',           notes: '' },
  { connectionSize: '5"',       standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 5.000,  connectionID: 4.494, bevelDia: 4.834,  makeUpTorque: '5,400-8,100',   grade: 'J55',  useCase: 'Surface casing',           notes: '' },
  { connectionSize: '5-1/2"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 5.500,  connectionID: 4.950, bevelDia: 5.334,  makeUpTorque: '6,700-10,000',  grade: 'J55',  useCase: 'Intermediaire casing',     notes: 'Tres commun' },
  { connectionSize: '6-5/8"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 6.625,  connectionID: 6.049, bevelDia: 6.459,  makeUpTorque: '8,500-12,700',  grade: 'J55',  useCase: 'Intermediaire casing',     notes: '' },
  { connectionSize: '7"',       standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 7.000,  connectionID: 6.366, bevelDia: 6.834,  makeUpTorque: '9,100-13,600',  grade: 'N80',  useCase: 'Production casing',       notes: 'Tres commun' },
  { connectionSize: '7-5/8"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 7.625,  connectionID: 6.969, bevelDia: 7.459,  makeUpTorque: '10,200-15,300', grade: 'N80',  useCase: 'Production casing',       notes: '' },
  { connectionSize: '8-5/8"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 8.625,  connectionID: 7.921, bevelDia: 8.459,  makeUpTorque: '12,500-18,800', grade: 'N80',  useCase: 'Intermediaire casing',     notes: '' },
  { connectionSize: '9-5/8"',   standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 9.625,  connectionID: 8.835, bevelDia: 9.459,  makeUpTorque: '14,600-21,900', grade: 'N80',  useCase: 'Surface / intermediaire', notes: 'Tres commun' },
  { connectionSize: '10-3/4"',  standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 10.750, connectionID: 9.950, bevelDia: 10.584, makeUpTorque: '17,500-26,300', grade: 'N80',  useCase: 'Surface casing',           notes: '' },
  { connectionSize: '13-3/8"',  standard: 'STC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 13.375, connectionID: 12.415, bevelDia: 13.209, makeUpTorque: '22,000-33,000', grade: 'N80',  useCase: 'Surface casing',          notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // LTC — Long Thread Coupling (API 5B)
  // Casing — plus de filets engages = meilleur pull-out
  // Taper: 3/4 in/ft | Filet: V-0.060R | 8 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '4-1/2"',   standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 4.500,  connectionID: 4.000, bevelDia: 4.334,  makeUpTorque: '5,600-8,400',   grade: 'J55',  useCase: 'Casing profond',           notes: '+40% pull-out vs STC' },
  { connectionSize: '5-1/2"',   standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 5.500,  connectionID: 4.950, bevelDia: 5.334,  makeUpTorque: '7,700-11,600',  grade: 'N80',  useCase: 'Intermediaire profond',    notes: '' },
  { connectionSize: '7"',       standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 7.000,  connectionID: 6.366, bevelDia: 6.834,  makeUpTorque: '10,500-15,700', grade: 'N80',  useCase: 'Production profond',      notes: 'Tres commun' },
  { connectionSize: '7-5/8"',   standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 7.625,  connectionID: 6.969, bevelDia: 7.459,  makeUpTorque: '11,800-17,600', grade: 'N80',  useCase: 'Production profond',      notes: '' },
  { connectionSize: '9-5/8"',   standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 9.625,  connectionID: 8.835, bevelDia: 9.459,  makeUpTorque: '16,800-25,200', grade: 'N80',  useCase: 'Intermediaire profond',    notes: 'Tres commun' },
  { connectionSize: '13-3/8"',  standard: 'LTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 8, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 13.375, connectionID: 12.415, bevelDia: 13.209, makeUpTorque: '25,300-37,900', grade: 'N80',  useCase: 'Surface profond',         notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // BTC — Buttress Thread Casing (API 5B)
  // Haute pression / haute tension — puits profonds, HPHT
  // Taper: 3/4 in/ft | Filet: Buttress | 5 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '4-1/2"',   standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 4.500,  connectionID: 4.000, bevelDia: 4.334,  makeUpTorque: '3,800-5,700',   grade: 'N80',  useCase: 'Puits profonds',           notes: 'Meilleur torque vs STC' },
  { connectionSize: '5-1/2"',   standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 5.500,  connectionID: 4.950, bevelDia: 5.334,  makeUpTorque: '5,200-7,800',   grade: 'N80',  useCase: 'Intermediaire HPHT',       notes: '' },
  { connectionSize: '7"',       standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 7.000,  connectionID: 6.366, bevelDia: 6.834,  makeUpTorque: '7,100-10,600',  grade: 'N80',  useCase: 'Production HPHT',         notes: 'Tres commun' },
  { connectionSize: '7-5/8"',   standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 7.625,  connectionID: 6.969, bevelDia: 7.459,  makeUpTorque: '8,000-12,000',  grade: 'P110', useCase: 'Production profond',       notes: '' },
  { connectionSize: '9-5/8"',   standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 9.625,  connectionID: 8.835, bevelDia: 9.459,  makeUpTorque: '11,500-17,200', grade: 'P110', useCase: 'Intermediaire HPHT',        notes: 'Tres commun' },
  { connectionSize: '10-3/4"',  standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 10.750, connectionID: 9.950, bevelDia: 10.584, makeUpTorque: '14,000-21,000', grade: 'P110', useCase: 'Surface HPHT',              notes: '' },
  { connectionSize: '13-3/8"',  standard: 'BTC', category: 'Casing', apiSpec: 'API 5B',  tpi: 5, taperPerFoot: '3/4 in/ft', threadForm: 'Buttress', connectionOD: 13.375, connectionID: 12.415, bevelDia: 13.209, makeUpTorque: '18,000-27,000', grade: 'P110', useCase: 'Surface profond/HPHT',     notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // EUE — External Upset End Tubing (API 5B / 5CT)
  // Tubing bout renforce — standard pour completion
  // Taper: 3/4 in/ft | Filet: V-0.060R | 8-10 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '1.050"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.315,  connectionID: 0.824, bevelDia: 0.984,  makeUpTorque: '800-1,200',     grade: 'J55',  useCase: 'Slim completion',          notes: '' },
  { connectionSize: '1.315"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.660,  connectionID: 1.049, bevelDia: 1.221,  makeUpTorque: '1,000-1,500',   grade: 'J55',  useCase: 'Slim completion',          notes: '' },
  { connectionSize: '1.660"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.900,  connectionID: 1.380, bevelDia: 1.566,  makeUpTorque: '1,500-2,200',   grade: 'J55',  useCase: 'Completion standard',     notes: '' },
  { connectionSize: '1.900"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 2.200,  connectionID: 1.610, bevelDia: 1.806,  makeUpTorque: '1,800-2,700',   grade: 'J55',  useCase: 'Completion standard',     notes: '' },
  { connectionSize: '2-3/8"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 2.875,  connectionID: 1.995, bevelDia: 2.209,  makeUpTorque: '3,000-4,500',   grade: 'N80',  useCase: 'Standard completion',     notes: 'Tres commun' },
  { connectionSize: '2-7/8"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 3.500,  connectionID: 2.441, bevelDia: 2.709,  makeUpTorque: '4,500-6,800',   grade: 'N80',  useCase: 'Standard completion',     notes: 'Tres commun' },
  { connectionSize: '3-1/2"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 4.000,  connectionID: 2.992, bevelDia: 3.334,  makeUpTorque: '6,000-9,000',   grade: 'N80',  useCase: 'Gros tubing',             notes: '' },
  { connectionSize: '4"',       standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 4.500,  connectionID: 3.476, bevelDia: 3.834,  makeUpTorque: '7,500-11,200',  grade: 'N80',  useCase: 'Gros tubing / flowline',  notes: '' },
  { connectionSize: '4-1/2"',   standard: 'EUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 5.000,  connectionID: 3.958, bevelDia: 4.334,  makeUpTorque: '9,000-13,500',  grade: 'N80',  useCase: 'Gros tubing',             notes: '' },

  // ═══════════════════════════════════════════════════════════════════
  // NUE — Non-Upset End Tubing (API 5B / 5CT)
  // Tubing bout non renforce — plus economique, puits peu profonds
  // Taper: 3/4 in/ft | Filet: V-0.060R | 8-10 TPI
  // ═══════════════════════════════════════════════════════════════════
  { connectionSize: '1.050"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.050,  connectionID: 0.824, bevelDia: 0.984,  makeUpTorque: '500-750',       grade: 'J55',  useCase: 'Slim, puits peu profonds',  notes: 'Pas de renfort au bout' },
  { connectionSize: '1.315"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.315,  connectionID: 1.049, bevelDia: 1.221,  makeUpTorque: '700-1,050',     grade: 'J55',  useCase: 'Slim, economique',          notes: '' },
  { connectionSize: '1.660"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.660,  connectionID: 1.380, bevelDia: 1.566,  makeUpTorque: '1,000-1,500',   grade: 'J55',  useCase: 'Economique',                notes: '' },
  { connectionSize: '1.900"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 10, taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 1.900,  connectionID: 1.610, bevelDia: 1.806,  makeUpTorque: '1,200-1,800',   grade: 'J55',  useCase: 'Economique',                notes: '' },
  { connectionSize: '2-3/8"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 2.375,  connectionID: 1.995, bevelDia: 2.209,  makeUpTorque: '2,000-3,000',   grade: 'J55',  useCase: 'Standard economique',       notes: 'Commun' },
  { connectionSize: '2-7/8"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 2.875,  connectionID: 2.441, bevelDia: 2.709,  makeUpTorque: '3,000-4,500',   grade: 'J55',  useCase: 'Standard economique',       notes: '' },
  { connectionSize: '3-1/2"',   standard: 'NUE', category: 'Tubing', apiSpec: 'API 5CT', tpi: 8,  taperPerFoot: '3/4 in/ft', threadForm: 'V-0.060R', connectionOD: 3.500,  connectionID: 2.992, bevelDia: 3.334,  makeUpTorque: '4,200-6,300',   grade: 'N80',  useCase: 'Gros tubing economique',    notes: '' },
]
