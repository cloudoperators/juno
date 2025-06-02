/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import { Stack, ContentHeading, Button } from "@cloudoperators/juno-ui-components"

import { Peak } from "../../mocks/db"
import usePeaksStore from "../../store/usePeaksStore"

import PeaksList from "../peaks/list/PeaksList"
import { usePaginatedItems } from "../hooks/usePeaks"
import MetricsDisplay from "../metrics/MetricsDisplay"
import CreatePeakModal from "../peaks/list/CreatePeakModal"
import PeaksFilterToolbar from "../peaks/list/PeaksFilterToolbar"
import { calculateMetrics, Metrics } from "../peaks/utils/calculateMetrics"
import PeaksPaginationControls from "../peaks/list/PeaksPaginationControls"

// Needs refactoring

const ITEMS_PER_PAGE = 15

interface PeaksPageProps {
  // eslint-disable-next-line no-unused-vars
  onSelect: (peak: Peak) => void
}

const PeaksPage: React.FC<PeaksPageProps> = ({ onSelect }) => {
  const [viewType, setViewType] = useState<"grid" | "card" | "json">("grid")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [countryFilter, setCountryFilter] = useState<string>("")

  const { peaks } = usePeaksStore()

  const handleNewPeakClick = () => setIsModalOpen(true)

  const clearAllFilters = () => {
    setSearchTerm("")
    setCountryFilter("")
  }

  const addFilter = (key: string, value: string) => {
    setCountryFilter(value)
  }

  const removeFilter = (key: string, value: string) => {
    if (countryFilter === value) {
      setCountryFilter("")
    }
  }

  const availableCountries = useMemo(() => {
    const countriesSet = new Set(peaks.map((peak) => peak.countries))
    return Array.from(countriesSet)
  }, [peaks])

  const filteredAndSortedItems = peaks.filter((peak) => {
    const matchesSearch = peak.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilter ? peak.countries === countryFilter : true
    return matchesSearch && matchesCountry
  })

  const paginatedItems = usePaginatedItems(filteredAndSortedItems, currentPage, ITEMS_PER_PAGE)
  const pages = Math.ceil(filteredAndSortedItems.length / ITEMS_PER_PAGE)
  const metrics: Metrics = calculateMetrics(peaks)

  const handleViewTypeChange = (newViewType: string) => {
    if (newViewType === "grid" || newViewType === "card" || newViewType === "json") {
      setViewType(newViewType)
    }
  }

  return (
    <>
      <Stack direction="vertical" gap="10">
        <ContentHeading>Overview</ContentHeading>
        <MetricsDisplay
          metrics={[...metrics.totalMetrics, metrics.highestPeak, metrics.lowestPeak].map((metric) => ({
            ...metric,
            hoverable: true,
          }))}
        />
        <Stack direction="horizontal" distribution="between" alignment="center">
          <ContentHeading>Peak Details</ContentHeading>
          <Button
            icon="addCircle"
            onClick={handleNewPeakClick}
            label="Add New Peak"
            variant="primary"
            className="ml-auto"
          />
        </Stack>
        <Stack direction="vertical">
          <PeaksFilterToolbar
            filterKeys={["countries"]}
            filterSelections={{ countries: countryFilter ? [countryFilter] : [] }}
            droplistSelections={{ countries: countryFilter }}
            selectedFilterKey="countries"
            setSelectedFilterKey={setCountryFilter}
            availableOptions={{ countries: availableCountries }}
            addFilter={addFilter}
            removeFilter={removeFilter}
            clearAllFilters={clearAllFilters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewType={viewType}
            setViewType={handleViewTypeChange}
          />
          <PeaksList viewType={viewType} paginatedItems={paginatedItems} onSelect={onSelect} />
        </Stack>
        <PeaksPaginationControls currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
      </Stack>
      <CreatePeakModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Peak" />
    </>
  )
}

export default PeaksPage
