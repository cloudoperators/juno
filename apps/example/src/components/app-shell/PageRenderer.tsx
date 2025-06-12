/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"

import { Peak } from "../../mocks/db"
import useUIStore from "../../store/useUIStore"
import usePeaksStore from "../../store/usePeaksStore"
import useConfigStore from "../../store/useConfigStore"
import useNavigationStore from "../../store/useNavigationStore"

import { Pages } from "../constants"
import PanelManager from "./PanelManager"
import PeaksPage from "../pages/PeaksPage"
import AlertsPage from "../pages/AlertsPage"
import CountriesPage from "../pages/CountriesPage"
import PeakDetailPage from "../pages/PeakDetailPage"
import CountryDetailPage from "../pages/CountryDetailPage"

const PageRenderer: React.FC = () => {
  const { currentPage } = useNavigationStore()
  const { isQueryClientReady } = useConfigStore()
  const { setPeaks, selectedPeakId, setSelectedPeakId } = usePeaksStore()
  const { setCurrentPanel, showPeakDetails, setShowPeakDetails } = useUIStore()

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const { data: peaksData = [] } = useQuery<Peak[]>({
    queryKey: ["peaks"],
    enabled: isQueryClientReady,
  })

  useEffect(() => {
    if (peaksData.length > 0) setPeaks(peaksData)
  }, [peaksData])

  useEffect(() => {
    setShowPeakDetails(false)
    setSelectedCountry(null)
  }, [currentPage])

  const selectPeakById = (peakId: string) => {
    setSelectedPeakId(peakId)
    setShowPeakDetails(true)
    setCurrentPanel(null)
  }

  const selectPeak = (peak: Peak) => selectPeakById(peak.id)

  const renderCountryPage = () => {
    if (currentPage === Pages.COUNTRIES && selectedCountry)
      return <CountryDetailPage countryName={selectedCountry} onBack={() => setSelectedCountry(null)} />

    return <CountriesPage onSelectCountry={setSelectedCountry} />
  }

  const renderPeaksPage = () => {
    if (showPeakDetails && selectedPeakId) return <PeakDetailPage onBack={() => setShowPeakDetails(false)} />
    return <PeaksPage onSelect={selectPeak} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case Pages.PEAKS:
        return renderPeaksPage()
      case Pages.COUNTRIES:
        return renderCountryPage()
      case Pages.ALERTS:
        return <AlertsPage />
      default:
        return null
    }
  }

  return (
    <>
      {renderPage()}
      <PanelManager openDetailPageWithPeak={selectPeakById} closePanel={() => setCurrentPanel(null)} />
    </>
  )
}

export default PageRenderer
