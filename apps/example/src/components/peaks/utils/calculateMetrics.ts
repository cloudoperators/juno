/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { PeakMetrics } from "../../constants"
import { Peak, Safety } from "../../../mocks/db"
import { MetricsProps } from "../../metrics/MetricsBox"

export interface TotalMetric {
  label: string
  value: string
  peakType: string
}

export interface Metrics {
  totalPeaks: string
  totalCountries: string
  lowestPeak: MetricsProps
  highestPeak: MetricsProps
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

  const initialPeak: Peak = peaks[0] || {
    id: null,
    height: "0",
    name: "N/A",
    region: "",
    countries: "",
    safety: defaultSafety,
  }

  const lowestPeak = peaks.reduce(
    (prev, current) => (parseHeight(prev.height) < parseHeight(current.height) ? prev : current),
    initialPeak
  )

  const highestPeak = peaks.reduce(
    (prev, current) => (parseHeight(prev.height) > parseHeight(current.height) ? prev : current),
    initialPeak
  )

  return {
    totalPeaks,
    totalCountries,
    lowestPeak: {
      label: PeakMetrics.LOWEST,
      value: lowestPeak.height,
      peakDetails: lowestPeak,
      peakType: "lowest",
    },
    highestPeak: {
      label: PeakMetrics.HIGHEST,
      value: highestPeak.height,
      peakDetails: highestPeak,
      peakType: "highest",
    },
    totalMetrics: [
      { label: PeakMetrics.TOTAL, value: totalPeaks, peakType: "total" },
      { label: PeakMetrics.TOTAL_COUNTRIES, value: totalCountries, peakType: "place" },
    ],
  }
}
