/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import { Stack, ContentHeading, Button } from "@cloudoperators/juno-ui-components"

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
  onSelect: () => void
}

const PeaksPage: React.FC<PeaksPageProps> = ({ onSelect }) => {
  const [viewType, setViewType] = useState<"grid" | "card" | "json">("grid")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [countryFilters, setCountryFilters] = useState<string[]>([])

  const { peaks } = usePeaksStore()

  const handleNewPeakClick = () => setIsModalOpen(true)

  const availableCountries = useMemo(() => {
    const countriesSet = new Set(peaks.map((peak) => peak.countries))
    return Array.from(countriesSet)
  }, [peaks])

  const filteredAndSortedItems = peaks.filter((peak) => {
    const matchesSearch = peak.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilters.length === 0 || countryFilters.includes(peak.countries)
    return matchesSearch && matchesCountry
  })

  const paginatedItems = usePaginatedItems(filteredAndSortedItems, currentPage, ITEMS_PER_PAGE)
  const pages = Math.ceil(filteredAndSortedItems.length / ITEMS_PER_PAGE)
  const metrics: Metrics = calculateMetrics(peaks)

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
            availableCountries={availableCountries}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onFilterChange={setCountryFilters}
            viewType={viewType}
            setViewType={setViewType}
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
