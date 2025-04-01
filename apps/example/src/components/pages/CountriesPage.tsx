/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading, Icon, Badge } from "@cloudoperators/juno-ui-components"

import GenericCard from "../common/GenericCard"
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

interface CountryDashboardPageProps {
  peaks: Peak[]
  // eslint-disable-next-line no-unused-vars
  onSelectCountry: (country: string) => void
}

// Needs refactoring

const CountriesPage: React.FC<CountryDashboardPageProps> = ({ peaks, onSelectCountry }) => {
  const countryStats: Record<string, CountryStats> = peaks.reduce(
    (acc, peak) => {
      if (!acc[peak.countries]) {
        acc[peak.countries] = { peaks: [], highestPeak: 0, safetyCounts: { Safe: 0, Caution: 0, Unsafe: 0 } }
      }
      const currentCountryStats = acc[peak.countries]
      currentCountryStats.peaks.push(peak)

      // Ensure height is a number
      const peakHeight = typeof peak.height === "string" ? parseInt(peak.height, 10) : peak.height
      currentCountryStats.highestPeak = Math.max(currentCountryStats.highestPeak, peakHeight)

      // Use keyof for indexing
      const safetyStatus = peak.safety.status as keyof CountrySafetyCounts

      if (currentCountryStats.safetyCounts[safetyStatus] !== undefined) {
        currentCountryStats.safetyCounts[safetyStatus] += 1
      }

      return acc
    },
    {} as Record<string, CountryStats>
  )

  const sortedCountries = Object.keys(countryStats).sort(
    (a, b) => countryStats[b].peaks.length - countryStats[a].peaks.length
  )

  const handleCountryClick = (country: string) => {
    onSelectCountry(country)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <ContentHeading>All Countries</ContentHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCountries.map((country) => (
          <GenericCard
            key={country}
            iconElement={<Icon icon="place" className="mr-2" />}
            title={country}
            badgeContainer={
              <div className="flex gap-2">
                {countryStats[country].safetyCounts.Safe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Safe}`}
                    variant="success"
                    className="px-2 py-1 rounded-full text-theme-highest"
                  />
                )}
                {countryStats[country].safetyCounts.Caution > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Caution}`}
                    variant="warning"
                    className="px-2 py-1 rounded-full text-theme-highest"
                  />
                )}
                {countryStats[country].safetyCounts.Unsafe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Unsafe}`}
                    variant="error"
                    className="px-2 py-1 rounded-full text-theme-highest"
                  />
                )}
              </div>
            }
            content={
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-semibold">Total Peaks:</span> {countryStats[country].peaks.length}
              </p>
            }
            onClick={() => handleCountryClick(country)}
          />
        ))}
      </div>
    </div>
  )
}

export default CountriesPage
