/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Peak } from "../../mocks/db"

interface CountrySafetyCounts {
  Safe: number
  Caution: number
  Unsafe: number
}

interface CountryStats {
  peaks: Peak[]
  highestPeak: number
  safetyCounts: CountrySafetyCounts
}

const useCountryStats = (peaks: Peak[]) => {
  const countryStats = peaks.reduce(
    (acc, peak) => {
      const peakHeight = parseInt(peak.height, 10)
      const { countries, safety } = peak

      if (!acc[countries]) {
        acc[countries] = {
          peaks: [],
          highestPeak: 0,
          safetyCounts: { Safe: 0, Caution: 0, Unsafe: 0 },
        }
      }

      acc[countries].peaks.push(peak)
      acc[countries].highestPeak = Math.max(acc[countries].highestPeak, peakHeight)
      acc[countries].safetyCounts[safety.status as keyof CountrySafetyCounts] += 1

      return acc
    },
    {} as Record<string, CountryStats>
  )

  const sortedCountries = Object.keys(countryStats).sort(
    (a, b) => countryStats[b].peaks.length - countryStats[a].peaks.length
  )

  return { countryStats, sortedCountries }
}

export default useCountryStats
