/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

import React from "react"
import { ContentHeading, Icon, Badge } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../mocks/db"
import GenericCard from "../common/GenericCard"
import usePeaksStore from "../../store/usePeaksStore"

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
  onSelectCountry: (country: string) => void
}

const notificationStyle = "w-8 h-8 flex items-center justify-center rounded-full text-theme-highest"

const CountriesPage: React.FC<CountryDashboardPageProps> = ({ onSelectCountry }) => {
  const { peaks } = usePeaksStore()

  const countryStats = peaks.reduce(
    (acc, peak) => {
      // Process peaks and accumulate country statistics
      const currentCountryStats = acc[peak.countries] || {
        peaks: [],
        highestPeak: 0,
        safetyCounts: { Safe: 0, Caution: 0, Unsafe: 0 },
      }
      const peakHeight = typeof peak.height === "string" ? parseInt(peak.height, 10) : peak.height

      currentCountryStats.peaks.push(peak)
      currentCountryStats.highestPeak = Math.max(currentCountryStats.highestPeak, peakHeight)

      const safetyStatus = peak.safety.status as keyof CountrySafetyCounts

      if (currentCountryStats.safetyCounts[safetyStatus] !== undefined) {
        currentCountryStats.safetyCounts[safetyStatus] += 1
      }

      acc[peak.countries] = currentCountryStats
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
            iconElement={<Icon icon="place" />}
            title={country}
            badgeContainer={
              <div className="flex gap-2">
                {countryStats[country].safetyCounts.Safe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Safe}`}
                    variant="success"
                    className={notificationStyle}
                  />
                )}
                {countryStats[country].safetyCounts.Caution > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Caution}`}
                    variant="warning"
                    className={notificationStyle}
                  />
                )}
                {countryStats[country].safetyCounts.Unsafe > 0 && (
                  <Badge
                    text={`${countryStats[country].safetyCounts.Unsafe}`}
                    variant="error"
                    className={notificationStyle}
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
