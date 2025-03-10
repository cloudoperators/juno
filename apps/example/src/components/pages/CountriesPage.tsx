/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { ContentHeading, Icon, Badge } from "@cloudoperators/juno-ui-components"
import GenericCard from "../common/GenericCard"

interface CountryDashboardPageProps {
  peaks: Peak[]
  onSelectCountry: (country: string) => void
}

const CountriesPage: React.FC<CountryDashboardPageProps> = ({ peaks, onSelectCountry }) => {
  const countryStats = useMemo(() => {
    return peaks.reduce((acc, peak) => {
      if (!acc[peak.countries]) {
        acc[peak.countries] = { peaks: [], highestPeak: 0, safetyCounts: { Safe: 0, Caution: 0, Unsafe: 0 } }
      }
      acc[peak.countries].peaks.push(peak)
      acc[peak.countries].highestPeak = Math.max(acc[peak.countries].highestPeak, peak.height)
      acc[peak.countries].safetyCounts[peak.safety.status] += 1
      return acc
    }, {})
  }, [peaks])

  const sortedCountries = Object.entries(countryStats)
    .sort(([, a], [, b]) => b.peaks.length - a.peaks.length)
    .map(([country]) => country)

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
            iconElement={<Icon icon="place" className="mr-2 text-blue-400 text-2xl" />}
            title={country}
            badgeContainer={
              <div className="flex gap-2">
                {countryStats[country].safetyCounts.Safe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Safe}`}
                    variant="success"
                    className="px-2 py-1 rounded-full text-white"
                  />
                )}
                {countryStats[country].safetyCounts.Caution > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Caution}`}
                    variant="warning"
                    className="px-2 py-1 rounded-full text-white"
                  />
                )}
                {countryStats[country].safetyCounts.Unsafe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Unsafe}`}
                    variant="error"
                    className="px-2 py-1 rounded-full text-white"
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
