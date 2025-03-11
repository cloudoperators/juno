/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { useGlobalsQueryClientFnReady } from "../../store/StoreProvider"
import useNavigationStore from "../../store/useNavigationStore"
import { Pages } from "../constants"

import { Peak } from "../../mocks/db"
import PeaksPage from "../pages/PeaksPage"
import AlertsPage from "../pages/AlertsPage"
import CountriesPage from "../pages/CountriesPage"
import PeakDetailPage from "../pages/PeakDetailPage"
import CountryDetailPage from "../pages/CountryDetailPage"

const PageRenderer: React.FC = () => {
  const { currentPage } = useNavigationStore()
  const queryClientFnReady = useGlobalsQueryClientFnReady()

  const { isLoading, data: peaks = [] } = useQuery<Peak[]>({
    queryKey: ["peaks"],
    enabled: queryClientFnReady,
  })

  const [selectedPeak, setSelectedPeak] = useState<Peak | null>(null)
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  useEffect(() => {
    clearSelections() // Clear selections when navigation changes
  }, [currentPage])

  const clearSelections = (): void => {
    setSelectedPeak(null)
    setSelectedCountry(null)
  }

  // When a country is selected, show the detail page
  if (currentPage === Pages.COUNTRIES && selectedCountry) {
    return <CountryDetailPage countryName={selectedCountry} peaks={peaks} onBack={clearSelections} />
  }

  // When a peak is selected, show the detail page
  if (currentPage === Pages.PEAKS && selectedPeak) {
    return <PeakDetailPage peak={selectedPeak} onBack={clearSelections} />
  }

  if (!selectedPeak && !selectedCountry) {
    switch (currentPage) {
      case Pages.PEAKS:
        return <PeaksPage peaks={peaks} onSelect={(peak: Peak) => setSelectedPeak(peak)} isLoading={isLoading} />
      case Pages.COUNTRIES:
        return <CountriesPage peaks={peaks} onSelectCountry={(country) => setSelectedCountry(country)} />
      case Pages.ALERTS:
        return <AlertsPage />
    }
  }

  return null
}

export default PageRenderer
