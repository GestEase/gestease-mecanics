import type { PneumaticThread } from '../types'

export const pneumaticData: PneumaticThread[] = [
  // ═══════════════════════════════════════════════════════════════
  // NPT — ANSI/ASME B1.20.1
  // Filet conique, etancheite teflon — Standard nord-americain
  // ═══════════════════════════════════════════════════════════════
  { portSize: '1/8 NPT',  standard: 'NPT', threadSpec: '27 TPI',   majorDia: 10.29, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'Capteurs pression, silencieux, purges',              brands: 'Parker, Norgren, SMC (KQ2)',            notes: 'Conique 1\u00b047\'' },
  { portSize: '1/4 NPT',  standard: 'NPT', threadSpec: '18 TPI',   majorDia: 13.72, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'FRL, electrovannes, cylindres standards',            brands: 'Parker, Norgren, SMC, Festo (adapt.)',  notes: 'Le plus commun en pneumatique NA' },
  { portSize: '3/8 NPT',  standard: 'NPT', threadSpec: '18 TPI',   majorDia: 17.15, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'FRL, collecteurs, distributeurs, cylindres moyens',  brands: 'Parker, Norgren, Numatics, ARO',        notes: 'Debit moyen NA' },
  { portSize: '1/2 NPT',  standard: 'NPT', threadSpec: '14 TPI',   majorDia: 21.34, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'Gros cylindres, reservoirs, FRL haut debit',         brands: 'Parker, Norgren, Ross, Watts',          notes: 'Haut debit NA' },
  { portSize: '3/4 NPT',  standard: 'NPT', threadSpec: '14 TPI',   majorDia: 26.67, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'Reseau principal, compresseurs, gros FRL',           brands: 'Parker, Norgren, Ross, Watts',          notes: 'Distribution principale' },
  { portSize: '1 NPT',    standard: 'NPT', threadSpec: '11.5 TPI', majorDia: 33.40, pressureBar: 17, pressurePSI: 250, sealMethod: 'Teflon tape / pipe dope',            applications: 'Sortie compresseur, reseau principal, secheurs',     brands: 'Parker, Norgren, Ross',                 notes: 'Tres gros debit NA' },

  // ═══════════════════════════════════════════════════════════════
  // BSPP (G) — ISO 228 (filet parallele)
  // Joint torique ou bonded washer — Standard europeen/international
  // ═══════════════════════════════════════════════════════════════
  { portSize: 'G1/8',  standard: 'BSPP (G)', threadSpec: '28 TPI',  majorDia: 9.73,  pressureBar: 16, pressurePSI: 232, sealMethod: 'O-ring / bonded washer',             applications: 'Capteurs, electrovannes compactes, silencieux',       brands: 'Festo (QS), SMC (KQ2), Camozzi, Aignep', notes: 'ISO 228 — parallele' },
  { portSize: 'G1/4',  standard: 'BSPP (G)', threadSpec: '19 TPI',  majorDia: 13.16, pressureBar: 16, pressurePSI: 232, sealMethod: 'O-ring / bonded washer',             applications: 'FRL, distributeurs 5/2, cylindres ISO 6432, panneaux', brands: 'Festo, SMC, Camozzi, Parker Legris',     notes: 'Le plus commun en pneumatique EU' },
  { portSize: 'G3/8',  standard: 'BSPP (G)', threadSpec: '19 TPI',  majorDia: 16.66, pressureBar: 16, pressurePSI: 232, sealMethod: 'O-ring / bonded washer',             applications: 'FRL, ilots de vannes, cylindres ISO 15552',           brands: 'Festo, SMC, Camozzi, Parker Legris',     notes: 'Debit moyen EU' },
  { portSize: 'G1/2',  standard: 'BSPP (G)', threadSpec: '14 TPI',  majorDia: 20.96, pressureBar: 16, pressurePSI: 232, sealMethod: 'O-ring / bonded washer',             applications: 'Gros cylindres ISO 15552, FRL haut debit',            brands: 'Festo, SMC, Parker Legris, Aventics',    notes: 'Haut debit EU' },
  { portSize: 'G3/4',  standard: 'BSPP (G)', threadSpec: '14 TPI',  majorDia: 26.44, pressureBar: 12, pressurePSI: 175, sealMethod: 'O-ring / bonded washer',             applications: 'Gros FRL, collecteurs principaux, preparateurs air',  brands: 'Festo, SMC, Parker, Norgren',             notes: 'Debit eleve' },
  { portSize: 'G1',    standard: 'BSPP (G)', threadSpec: '11 TPI',  majorDia: 33.25, pressureBar: 10, pressurePSI: 145, sealMethod: 'O-ring / bonded washer',             applications: 'Alimentation principale, secheurs, reservoirs',       brands: 'Festo, SMC, Parker, Norgren',             notes: 'Reseau principal' },

  // ═══════════════════════════════════════════════════════════════
  // BSPT (R) — ISO 7 (filet conique)
  // Standard asiatique/japonais — SMC, CKD, Koganei
  // ═══════════════════════════════════════════════════════════════
  { portSize: 'R1/8',  standard: 'BSPT (R)', threadSpec: '28 TPI',  majorDia: 9.73,  pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'Electrovannes SMC/CKD, capteurs, silencieux',         brands: 'SMC, CKD, Koganei, Pisco',               notes: 'ISO 7 — conique 1:16' },
  { portSize: 'R1/4',  standard: 'BSPT (R)', threadSpec: '19 TPI',  majorDia: 13.16, pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'Distributeurs, FRL, cylindres japonais, panneaux',    brands: 'SMC, CKD, Koganei, Pisco',               notes: 'Le plus commun en Asie' },
  { portSize: 'R3/8',  standard: 'BSPT (R)', threadSpec: '19 TPI',  majorDia: 16.66, pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'FRL, ilots vannes, cylindres moyens',                 brands: 'SMC, CKD, Koganei',                      notes: 'Debit moyen Asie' },
  { portSize: 'R1/2',  standard: 'BSPT (R)', threadSpec: '14 TPI',  majorDia: 20.96, pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'Gros cylindres, FRL, reservoirs',                     brands: 'SMC, CKD, Koganei',                      notes: 'Haut debit Asie' },
  { portSize: 'R3/4',  standard: 'BSPT (R)', threadSpec: '14 TPI',  majorDia: 26.44, pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'Gros FRL, collecteurs principaux',                    brands: 'SMC, CKD, Koganei',                      notes: 'Debit eleve Asie' },
  { portSize: 'R1',    standard: 'BSPT (R)', threadSpec: '11 TPI',  majorDia: 33.25, pressureBar: 10, pressurePSI: 145, sealMethod: 'Teflon tape (conique)',              applications: 'Reseau principal, secheurs, reservoirs',              brands: 'SMC, CKD',                                notes: 'Tres gros debit Asie' },

  // ═══════════════════════════════════════════════════════════════
  // Metric Mini — ISO metrique pas fin
  // Electrovannes compactes, micro-cylindres — Festo, SMC
  // ═══════════════════════════════════════════════════════════════
  { portSize: 'M3x0.5', standard: 'Metric Mini', threadSpec: 'P=0.5 mm', majorDia: 3.0,  pressureBar: 8,  pressurePSI: 116, sealMethod: 'O-ring miniature / face seal',     applications: 'Micro-electrovannes, analytique, medical',            brands: 'Festo (VUVS micro), SMC (SY micro), Burkert', notes: 'Tres compact' },
  { portSize: 'M5x0.8', standard: 'Metric Mini', threadSpec: 'P=0.8 mm', majorDia: 5.0,  pressureBar: 10, pressurePSI: 145, sealMethod: 'O-ring / push-in direct (M5)',     applications: 'Electrovannes compactes, micro-cylindres, panneaux',  brands: 'Festo (QSM), SMC (KQ2 M5), Camozzi',          notes: 'Standard compact Festo/SMC' },
  { portSize: 'M6x1.0', standard: 'Metric Mini', threadSpec: 'P=1.0 mm', majorDia: 6.0,  pressureBar: 10, pressurePSI: 145, sealMethod: 'O-ring / bonded washer',           applications: 'Cylindres compacts, distributeurs miniatures',        brands: 'Festo, SMC, Camozzi, Metal Work',              notes: 'Moins courant que M5' },
  { portSize: 'M7x1.0', standard: 'Metric Mini', threadSpec: 'P=1.0 mm', majorDia: 7.0,  pressureBar: 10, pressurePSI: 145, sealMethod: 'O-ring / bonded washer',           applications: 'Electrovannes japonaises, capteurs miniatures',       brands: 'SMC (SY serie), CKD, Koganei',                 notes: 'Specifique SMC/CKD' },

  // ═══════════════════════════════════════════════════════════════
  // UNF Mini — Unified National Fine
  // Panel mount, raccords miniatures nord-americains
  // ═══════════════════════════════════════════════════════════════
  { portSize: '10-32 UNF',  standard: 'UNF Mini', threadSpec: '32 TPI',   majorDia: 4.83, pressureBar: 7,  pressurePSI: 100, sealMethod: 'O-ring face seal / push-in',       applications: 'Panel mount, analytique, medical, labo',             brands: 'Clippard, Parker, Beswick, Pneumadyne',        notes: 'Standard miniature NA' },
  { portSize: '1/4-28 UNF', standard: 'UNF Mini', threadSpec: '28 TPI',   majorDia: 6.35, pressureBar: 10, pressurePSI: 150, sealMethod: 'O-ring face seal / push-in',       applications: 'Panel mount, instrumentation, raccords miniatures',  brands: 'Clippard, Parker, Beswick, Pneumadyne',        notes: 'Plus de debit que 10-32' },
]
