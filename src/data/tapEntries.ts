import type { TapEntry } from './materials'
import { imperialData } from './imperial'
import { metricData } from './metric'

export function buildTapEntries(): TapEntry[] {
  const entries: TapEntry[] = []

  for (const row of metricData) {
    entries.push({
      label: `${row.tapSize} ${row.series} (P=${row.pitch})`,
      drillMm: row.tapDrillMm,
      drillIn: row.decimalIn,
      pitch: row.pitch,
      system: 'metric',
    })
  }

  for (const row of imperialData) {
    entries.push({
      label: `${row.tapSize}-${row.tpi} ${row.series}`,
      drillMm: row.tapDrillDecimal * 25.4,
      drillIn: row.tapDrillDecimal,
      tpi: row.tpi,
      system: 'imperial',
    })
  }

  return entries
}
