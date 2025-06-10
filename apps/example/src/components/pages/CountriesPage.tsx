/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading, Icon, Badge, Stack } from "@cloudoperators/juno-ui-components"

import GenericCard from "../common/GenericCard"
import useCountryStats from "../hooks/useCountryStats"

import usePeaksStore from "../../store/usePeaksStore"

const notificationStyle = "w-8 h-8 flex items-center justify-center rounded-full text-theme-highest"

const CountriesPage: React.FC<{ onSelectCountry: (_country: string) => void }> = ({ onSelectCountry }) => {
  const { peaks } = usePeaksStore()
  const { countryStats, sortedCountries } = useCountryStats(peaks)

  return (
    <>
      <Stack className="flex justify-between items-center mb-4">
        <ContentHeading>All Countries</ContentHeading>
      </Stack>

      <Stack className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCountries.map((country) => {
          const { safetyCounts, peaks } = countryStats[country]
          return (
            <GenericCard
              key={country}
              iconElement={<Icon icon="place" />}
              title={country}
              badgeContainer={
                <div className="flex gap-2">
                  {safetyCounts.Safe > 0 && (
                    <Badge text={`${safetyCounts.Safe}`} variant="success" className={notificationStyle} />
                  )}
                  {safetyCounts.Caution > 0 && (
                    <Badge text={`${safetyCounts.Caution}`} variant="warning" className={notificationStyle} />
                  )}
                  {safetyCounts.Unsafe > 0 && (
                    <Badge text={`${safetyCounts.Unsafe}`} variant="error" className={notificationStyle} />
                  )}
                </div>
              }
              content={
                <p className="text-sm text-gray-300 mb-2">
                  <span className="font-semibold">Total Peaks:</span> {peaks.length}
                </p>
              }
              onClick={() => onSelectCountry(country)}
            />
          )
        })}
      </Stack>
    </>
  )
}

export default CountriesPage
