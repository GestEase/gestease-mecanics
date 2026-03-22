import type { SpecialThread } from '../types'

export const specialData: SpecialThread[] = [
  // ACME — General Purpose
  { tapSize: '1/4-16', threadType: 'ACME General', tpiPitch: '16 TPI', flankAngle: '29\u00b0', tapDrill: '3/16" (0.1875)', minorDia: '0.1250 in', majorDia: '0.2500 in', threadDepth: '0.03125 in', lead: '0.0625 in', engagement: 75, notes: 'Vis d\'avance, presses, tours' },
  { tapSize: '5/16-14', threadType: 'ACME General', tpiPitch: '14 TPI', flankAngle: '29\u00b0', tapDrill: '15/64" (0.2344)', minorDia: '0.1875 in', majorDia: '0.3125 in', threadDepth: '0.0357 in', lead: '0.0714 in', engagement: 75, notes: '' },
  { tapSize: '3/8-12', threadType: 'ACME General', tpiPitch: '12 TPI', flankAngle: '29\u00b0', tapDrill: '5/16" (0.3125)', minorDia: '0.2500 in', majorDia: '0.3750 in', threadDepth: '0.0417 in', lead: '0.0833 in', engagement: 75, notes: 'Vis a billes — course courte' },
  { tapSize: '1/2-10', threadType: 'ACME General', tpiPitch: '10 TPI', flankAngle: '29\u00b0', tapDrill: '7/16" (0.4375)', minorDia: '0.3750 in', majorDia: '0.5000 in', threadDepth: '0.0500 in', lead: '0.1000 in', engagement: 75, notes: 'Commun en outillage' },
  { tapSize: '5/8-8', threadType: 'ACME General', tpiPitch: '8 TPI', flankAngle: '29\u00b0', tapDrill: '9/16" (0.5625)', minorDia: '0.5000 in', majorDia: '0.6250 in', threadDepth: '0.0625 in', lead: '0.1250 in', engagement: 75, notes: '' },
  { tapSize: '3/4-6', threadType: 'ACME General', tpiPitch: '6 TPI', flankAngle: '29\u00b0', tapDrill: '11/16" (0.6875)', minorDia: '0.6250 in', majorDia: '0.7500 in', threadDepth: '0.0833 in', lead: '0.1667 in', engagement: 75, notes: 'Vis de serrage lourdes' },
  { tapSize: '1"-5', threadType: 'ACME General', tpiPitch: '5 TPI', flankAngle: '29\u00b0', tapDrill: '7/8" (0.8750)', minorDia: '0.8000 in', majorDia: '1.0000 in', threadDepth: '0.1000 in', lead: '0.2000 in', engagement: 75, notes: '' },
  { tapSize: '1-1/4-5', threadType: 'ACME General', tpiPitch: '5 TPI', flankAngle: '29\u00b0', tapDrill: '1-1/8" (1.1250)', minorDia: '1.0500 in', majorDia: '1.2500 in', threadDepth: '0.1000 in', lead: '0.2000 in', engagement: 75, notes: 'Presses industrielles' },
  { tapSize: '1-1/2-4', threadType: 'ACME General', tpiPitch: '4 TPI', flankAngle: '29\u00b0', tapDrill: '1-3/8" (1.3750)', minorDia: '1.3000 in', majorDia: '1.5000 in', threadDepth: '0.1250 in', lead: '0.2500 in', engagement: 75, notes: '' },
  { tapSize: '2"-4', threadType: 'ACME General', tpiPitch: '4 TPI', flankAngle: '29\u00b0', tapDrill: '1-7/8" (1.8750)', minorDia: '1.8000 in', majorDia: '2.0000 in', threadDepth: '0.1250 in', lead: '0.2500 in', engagement: 75, notes: 'Tres gros filets de puissance' },

  // Stub ACME
  { tapSize: '1/2-10', threadType: 'Stub ACME', tpiPitch: '10 TPI', flankAngle: '29\u00b0', tapDrill: '7/16" (0.4375)', minorDia: '0.3975 in', majorDia: '0.5000 in', threadDepth: '0.0313 in', lead: '0.1000 in', engagement: 75, notes: 'Espace limite — pas reduit 40%' },
  { tapSize: '3/4-6', threadType: 'Stub ACME', tpiPitch: '6 TPI', flankAngle: '29\u00b0', tapDrill: '11/16" (0.6875)', minorDia: '0.6458 in', majorDia: '0.7500 in', threadDepth: '0.0417 in', lead: '0.1667 in', engagement: 75, notes: '' },
  { tapSize: '1"-5', threadType: 'Stub ACME', tpiPitch: '5 TPI', flankAngle: '29\u00b0', tapDrill: '7/8" (0.8750)', minorDia: '0.8350 in', majorDia: '1.0000 in', threadDepth: '0.0500 in', lead: '0.2000 in', engagement: 75, notes: '' },

  // Buttress
  { tapSize: '1/2-10', threadType: 'Buttress 45\u00b0/7\u00b0', tpiPitch: '10 TPI', flankAngle: '45\u00b0/7\u00b0', tapDrill: '7/16" (0.4375)', minorDia: '0.4001 in', majorDia: '0.5000 in', threadDepth: '0.0500 in', lead: '0.1000 in', engagement: 75, notes: 'Charge axiale unidirectionnelle' },
  { tapSize: '3/4-6', threadType: 'Buttress 45\u00b0/7\u00b0', tpiPitch: '6 TPI', flankAngle: '45\u00b0/7\u00b0', tapDrill: '11/16" (0.6875)', minorDia: '0.6201 in', majorDia: '0.7500 in', threadDepth: '0.0833 in', lead: '0.1667 in', engagement: 75, notes: 'Verins, crics, armes' },
  { tapSize: '1"-5', threadType: 'Buttress 45\u00b0/7\u00b0', tpiPitch: '5 TPI', flankAngle: '45\u00b0/7\u00b0', tapDrill: '7/8" (0.8750)', minorDia: '0.8376 in', majorDia: '1.0000 in', threadDepth: '0.1000 in', lead: '0.2000 in', engagement: 75, notes: '' },
  { tapSize: '1-1/2-4', threadType: 'Buttress 45\u00b0/7\u00b0', tpiPitch: '4 TPI', flankAngle: '45\u00b0/7\u00b0', tapDrill: '1-3/8" (1.3750)', minorDia: '1.2835 in', majorDia: '1.5000 in', threadDepth: '0.1250 in', lead: '0.2500 in', engagement: 75, notes: 'Energie, presses' },
  { tapSize: '2"-4', threadType: 'Buttress 45\u00b0/7\u00b0', tpiPitch: '4 TPI', flankAngle: '45\u00b0/7\u00b0', tapDrill: '1-7/8" (1.8750)', minorDia: '1.7835 in', majorDia: '2.0000 in', threadDepth: '0.1250 in', lead: '0.2500 in', engagement: 75, notes: '' },

  // UNEF — Extra Fine
  { tapSize: '1/4-32', threadType: 'UNEF', tpiPitch: '32 TPI', flankAngle: '60\u00b0', tapDrill: 'No.0 (0.2280)', minorDia: '0.2117 in', majorDia: '0.2500 in', threadDepth: '0.0191 in', lead: '0.0313 in', engagement: 75, notes: 'Extra-fin — optique, electronique' },
  { tapSize: '5/16-32', threadType: 'UNEF', tpiPitch: '32 TPI', flankAngle: '60\u00b0', tapDrill: 'Q (0.3320)', minorDia: '0.2742 in', majorDia: '0.3125 in', threadDepth: '0.0191 in', lead: '0.0313 in', engagement: 75, notes: '' },
  { tapSize: '3/8-32', threadType: 'UNEF', tpiPitch: '32 TPI', flankAngle: '60\u00b0', tapDrill: '11/32 (0.3438)', minorDia: '0.3367 in', majorDia: '0.3750 in', threadDepth: '0.0191 in', lead: '0.0313 in', engagement: 75, notes: '' },
  { tapSize: '7/16-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '25/64 (0.3906)', minorDia: '0.3762 in', majorDia: '0.4375 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: '' },
  { tapSize: '1/2-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '29/64 (0.4531)', minorDia: '0.4387 in', majorDia: '0.5000 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: 'Filet gaz — optique, aviation' },
  { tapSize: '9/16-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '33/64 (0.5156)', minorDia: '0.5012 in', majorDia: '0.5625 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: '' },
  { tapSize: '5/8-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '37/64 (0.5781)', minorDia: '0.5637 in', majorDia: '0.6250 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: '' },
  { tapSize: '3/4-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '45/64 (0.7031)', minorDia: '0.6887 in', majorDia: '0.7500 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: 'Aviation — armement' },
  { tapSize: '1"-28', threadType: 'UNEF', tpiPitch: '28 TPI', flankAngle: '60\u00b0', tapDrill: '61/64 (0.9531)', minorDia: '0.9387 in', majorDia: '1.0000 in', threadDepth: '0.0231 in', lead: '0.0357 in', engagement: 75, notes: '' },

  // Trapezoidal ISO (Tr)
  { tapSize: 'Tr 8x1.5', threadType: 'Trapezoidal ISO', tpiPitch: 'P=1.5 mm', flankAngle: '30\u00b0', tapDrill: '6.5 mm', minorDia: '5.917 mm', majorDia: '8.000 mm', threadDepth: '0.750 mm', lead: '1.5 mm', engagement: 75, notes: 'ISO 2902 — vis d\'avance' },
  { tapSize: 'Tr 10x2', threadType: 'Trapezoidal ISO', tpiPitch: 'P=2.0 mm', flankAngle: '30\u00b0', tapDrill: '8.0 mm', minorDia: '7.459 mm', majorDia: '10.000 mm', threadDepth: '1.000 mm', lead: '2.0 mm', engagement: 75, notes: 'Tours CNC' },
  { tapSize: 'Tr 12x3', threadType: 'Trapezoidal ISO', tpiPitch: 'P=3.0 mm', flankAngle: '30\u00b0', tapDrill: '9.0 mm', minorDia: '8.188 mm', majorDia: '12.000 mm', threadDepth: '1.500 mm', lead: '3.0 mm', engagement: 75, notes: '' },
  { tapSize: 'Tr 16x4', threadType: 'Trapezoidal ISO', tpiPitch: 'P=4.0 mm', flankAngle: '30\u00b0', tapDrill: '12.0 mm', minorDia: '11.500 mm', majorDia: '16.000 mm', threadDepth: '2.000 mm', lead: '4.0 mm', engagement: 75, notes: 'Commun en mecanique generale' },
  { tapSize: 'Tr 20x4', threadType: 'Trapezoidal ISO', tpiPitch: 'P=4.0 mm', flankAngle: '30\u00b0', tapDrill: '16.0 mm', minorDia: '15.500 mm', majorDia: '20.000 mm', threadDepth: '2.000 mm', lead: '4.0 mm', engagement: 75, notes: '' },
  { tapSize: 'Tr 24x5', threadType: 'Trapezoidal ISO', tpiPitch: 'P=5.0 mm', flankAngle: '30\u00b0', tapDrill: '19.0 mm', minorDia: '18.376 mm', majorDia: '24.000 mm', threadDepth: '2.500 mm', lead: '5.0 mm', engagement: 75, notes: '' },
  { tapSize: 'Tr 28x5', threadType: 'Trapezoidal ISO', tpiPitch: 'P=5.0 mm', flankAngle: '30\u00b0', tapDrill: '23.0 mm', minorDia: '22.376 mm', majorDia: '28.000 mm', threadDepth: '2.500 mm', lead: '5.0 mm', engagement: 75, notes: '' },
  { tapSize: 'Tr 32x6', threadType: 'Trapezoidal ISO', tpiPitch: 'P=6.0 mm', flankAngle: '30\u00b0', tapDrill: '26.0 mm', minorDia: '25.188 mm', majorDia: '32.000 mm', threadDepth: '3.000 mm', lead: '6.0 mm', engagement: 75, notes: 'Vis meres, fraiseuses' },
  { tapSize: 'Tr 40x7', threadType: 'Trapezoidal ISO', tpiPitch: 'P=7.0 mm', flankAngle: '30\u00b0', tapDrill: '33.0 mm', minorDia: '32.001 mm', majorDia: '40.000 mm', threadDepth: '3.500 mm', lead: '7.0 mm', engagement: 75, notes: '' },
  { tapSize: 'Tr 50x8', threadType: 'Trapezoidal ISO', tpiPitch: 'P=8.0 mm', flankAngle: '30\u00b0', tapDrill: '42.0 mm', minorDia: '40.813 mm', majorDia: '50.000 mm', threadDepth: '4.000 mm', lead: '8.0 mm', engagement: 75, notes: 'Grandes machines' },
]
