/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PeakMetrics } from "../../constants"
import { Peak, Safety } from "../../../mocks/db"

export interface PeakMetric {
  label: string
  value: string
  peakDetails: Peak
  hoverable: boolean
  peakType: string
}

export interface TotalMetric {
  label: string
  value: string
  peakType: string
}

export interface Metrics {
  totalPeaks: string
  totalCountries: string
  highestPeak: PeakMetric
  lowestPeak: PeakMetric
  totalMetrics: TotalMetric[]
}

export const calculateMetrics = (peaks: Peak[]): Metrics => {
  const parseHeight = (height: string): number => parseInt(height.match(/(\d+)/)?.[0] || "0", 10)

  const totalPeaks = peaks.length.toString()
  const countriesSet = new Set(peaks.map((peak) => peak.countries))
  const totalCountries = countriesSet.size.toString()

  const defaultSafety: Safety = {
    status: "Unknown",
    recommendation: "No data available.",
    variant: "info",
  }

  const initialPeak = peaks[0] || {
    id: null,
    height: "0",
    name: "N/A",
    region: "",
    countries: "",
    safety: defaultSafety,
  }

  const highestPeak = peaks.reduce(
    (prev, current) => (parseHeight(prev.height) > parseHeight(current.height) ? prev : current),
    initialPeak
  )

  const lowestPeak = peaks.reduce(
    (prev, current) => (parseHeight(prev.height) < parseHeight(current.height) ? prev : current),
    initialPeak
  )

  const highestSafety: Safety = highestPeak.safety ?? defaultSafety
  const lowestSafety: Safety = lowestPeak.safety ?? defaultSafety

  return {
    totalPeaks,
    totalCountries,
    highestPeak: {
      label: PeakMetrics.HIGHEST,
      value: highestPeak.height,
      peakDetails: {
        id: highestPeak.id,
        variant: highestPeak.safety.variant,
        name: highestPeak.name,
        region: highestPeak.region,
        country: highestPeak.countries,
        height: highestPeak.height,
        status: highestSafety.status,
        recommendation: highestSafety.recommendation,
      },
      hoverable: true,
      peakType: "highest",
    },
    lowestPeak: {
      label: PeakMetrics.LOWEST,
      value: lowestPeak.height,
      peakDetails: {
        id: lowestPeak.id,
        variant: lowestPeak.safety.variant,
        name: lowestPeak.name,
        region: lowestPeak.region,
        country: lowestPeak.countries,
        height: lowestPeak.height,
        status: lowestSafety.status,
        recommendation: lowestSafety.recommendation,
      },
      hoverable: true,
      peakType: "lowest",
    },
    totalMetrics: [
      { label: PeakMetrics.TOTAL, value: totalPeaks, peakType: "total" },
      { label: PeakMetrics.TOTAL_COUNTRIES, value: totalCountries, peakType: "place" },
    ],
  }
}
