/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { useGlobalsQueryClientFnReady } from "../../store/StoreProvider"
import useNavigationStore from "../../store/useNavigationStore"
import usePeaksStore from "../../store/usePeaksStore"
import useSelectedPeak from "../../store/createSelectedPeakSlice"
import PeaksPage from "../pages/PeaksPage"
import AlertsPage from "../pages/AlertsPage"
import CountriesPage from "../pages/CountriesPage"
import PeakDetailPage from "../pages/PeakDetailPage"
import CountryDetailPage from "../pages/CountryDetailPage"
import { Pages } from "../constants"
import { Peak } from "../../mocks/db"

const PageRenderer: React.FC = () => {
  const { currentPage } = useNavigationStore()
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const { peaks, setPeaks } = usePeaksStore()
  const { selectedPeakId, setSelectedPeakId } = useSelectedPeak()

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  // Query to fetch peaks mock data
  const { isLoading, data: peaksData = [] } = useQuery<Peak[]>({
    queryKey: ["peaks"],
    enabled: queryClientFnReady,
  })

  useEffect(() => {
    if (queryClientFnReady && peaksData.length > 0) {
      setPeaks(peaksData) // Store fetched data in peaks store
    }
  }, [peaksData, setPeaks, queryClientFnReady])

  useEffect(() => {
    clearSelections() // Clear selections when navigation changes
  }, [currentPage])

  const clearSelections = (): void => {
    setSelectedPeakId(null) // Clear global peak selection
    setSelectedCountry(null) // Clear local country selection
  }

  const selectedPeak = peaks.find((peak) => peak.id === Number(selectedPeakId))

  if (currentPage === Pages.COUNTRIES && selectedCountry) {
    return <CountryDetailPage countryName={selectedCountry} peaks={peaks} onBack={clearSelections} />
  }

  if (currentPage === Pages.PEAKS && selectedPeakId && selectedPeak) {
    // Only show peak detail page if explicitly navigated to from a peak panel
    return <PeakDetailPage peak={selectedPeak} onBack={clearSelections} />
  }

  if (!selectedPeak && !selectedCountry) {
    switch (currentPage) {
      case Pages.PEAKS:
        return <PeaksPage peaks={peaks} onSelect={(peak) => setSelectedPeakId(String(peak.id))} isLoading={isLoading} />
      case Pages.COUNTRIES:
        return <CountriesPage peaks={peaks} onSelectCountry={(country) => setSelectedCountry(country)} />
      case Pages.ALERTS:
        return <AlertsPage />
      default:
        return null
    }
  }

  return null
}

export default PageRenderer
