/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const calculateMetrics = (peaks) => {
  const totalPeaks = peaks.length.toString()
  const totalCountries = new Set(peaks.map((peak) => peak.countries)).size.toString()

  const highestPeak = peaks.reduce(
    (prev, current) => (parseInt(prev.height, 10) > parseInt(current.height, 10) ? prev : current),
    peaks[0] || { height: "0", name: "N/A", region: "", countries: "" }
  )

  const lowestPeak = peaks.reduce(
    (prev, current) => (parseInt(prev.height, 10) < parseInt(current.height, 10) ? prev : current),
    peaks[0] || { height: "0", name: "N/A", region: "", countries: "" }
  )

  const highestPeakDetails = `${highestPeak.height}`
  const lowestPeakDetails = `${lowestPeak.height}`

  const determineStatus = (height) => {
    if (height < 2000) return { status: "Safe", recommendation: "Proceed with caution." }
    if (height >= 2000 && height <= 4000)
      return { status: "Caution", recommendation: "Moderate difficulty; caution advised." }
    return { status: "Unsafe", recommendation: "Challenging; experienced climbers only." }
  }

  const highestPeakStatus = determineStatus(parseInt(highestPeak.height, 10))
  const lowestPeakStatus = determineStatus(parseInt(lowestPeak.height, 10))

  return {
    totalPeaks,
    totalCountries,
    highestPeak: {
      label: "Highest Peak",
      value: highestPeakDetails,
      peakDetails: {
        name: highestPeak.name,
        region: highestPeak.region,
        country: highestPeak.countries,
        height: highestPeakDetails,
        status: highestPeakStatus.status,
        recommendation: highestPeakStatus.recommendation,
      },
      hoverable: true,
      peakType: "highest",
    },
    lowestPeak: {
      label: "Lowest Peak",
      value: lowestPeakDetails,
      peakDetails: {
        name: lowestPeak.name,
        region: lowestPeak.region,
        country: lowestPeak.countries,
        height: lowestPeakDetails,
        status: lowestPeakStatus.status,
        recommendation: lowestPeakStatus.recommendation,
      },
      hoverable: true,
      peakType: "lowest",
    },
    totalMetrics: [
      { label: "Total Peaks", value: totalPeaks, peakType: "total" },
      { label: "Total Countries", value: totalCountries, peakType: "place" },
    ],
  }
}
