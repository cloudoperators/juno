/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Stack, ContentHeading, Button } from "@cloudoperators/juno-ui-components"

import PeaksFilterToolbar from "../peaks/list/PeaksFilterToolbar"
import PeaksList from "../peaks/list/PeaksList"
import PeaksPaginationControls from "../peaks/list/PeaksPaginationControls"
import MetricsDisplay from "../metrics/MetricsDisplay"
import { useGlobalsActions } from "../../store/StoreProvider"
import { calculateMetrics, Metrics } from "../peaks/utils/calculateMetrics"
import {
  useFilteredAndSortedItems,
  usePaginatedItems,
  calculateAvailableOptions,
  uniqueValues,
} from "../hooks/usePeaks"
import { Panels } from "../constants"
import { Peak } from "../../mocks/db"

const ITEMS_PER_PAGE = 15

interface PeaksPageProps {
  peaks: Peak[]
  isLoading: boolean
  // eslint-disable-next-line no-unused-vars
  onSelect: (peak: Peak) => void
}

const PeaksPage: React.FC<PeaksPageProps> = ({ peaks, isLoading, onSelect }) => {
  const { setCurrentPanel } = useGlobalsActions()
  const [viewType, setViewType] = useState<"grid" | "card" | "json">("grid")
  const [currentPage, setCurrentPage] = useState<number>(1)

  const filterKeys = ["safety", "name", "mainrange", "region", "countries"]

  const [filterSelections, setFilterSelections] = useState<Record<string, string[]>>({
    name: [],
    mainrange: [],
    region: [],
    countries: [],
    safety: [],
  })

  const [droplistSelections, setDroplistSelections] = useState<Record<string, string>>({
    name: "",
    mainrange: "",
    region: "",
    countries: "",
    safety: "",
  })

  const [selectedFilterKey, setSelectedFilterKey] = useState<string | null>(null)
  const [selectedSortKey, setSelectedSortKey] = useState<string>("name")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const [minHeight, setMinHeight] = useState<string>("")
  const [maxHeight, setMaxHeight] = useState<string>("")

  // @ts-ignore
  const availableOptions = calculateAvailableOptions(peaks, uniqueValues)
  const handleNewPeakClick = () => setCurrentPanel({ type: Panels.ADD_PEAKS })

  const addFilter = (key: string, value: string) => {
    setFilterSelections((prev) => ({
      ...prev,
      [key]: [...prev[key], value],
    }))
    setDroplistSelections((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const removeFilter = (key: string, value: string) => {
    setFilterSelections((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item !== value),
    }))
  }

  const clearAllFilters = () => {
    setFilterSelections({
      name: [],
      mainrange: [],
      region: [],
      countries: [],
      safety: [],
    })
    setDroplistSelections({
      name: "",
      mainrange: "",
      region: "",
      countries: "",
      safety: "",
    })
    setMinHeight("")
    setMaxHeight("")
  }

  const filteredAndSortedItems = useFilteredAndSortedItems(
    // @ts-ignore
    peaks,
    filterSelections,
    minHeight,
    maxHeight,
    selectedSortKey,
    sortDirection
  )

  const paginatedItems = usePaginatedItems(filteredAndSortedItems, currentPage, ITEMS_PER_PAGE)
  const pages = Math.ceil(filteredAndSortedItems.length / ITEMS_PER_PAGE)
  const metrics: Metrics = calculateMetrics(peaks)

  return (
    <Stack direction="vertical" gap="10">
      <ContentHeading>Overview</ContentHeading>
      <MetricsDisplay
        metrics={[...metrics.totalMetrics, metrics.highestPeak, metrics.lowestPeak].map((metric) => ({
          ...metric,
          isLoading, // Ensure this is correctly defined and passed
          hoverable: true, // Passed as needed
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
          filterKeys={filterKeys}
          filterSelections={filterSelections}
          droplistSelections={droplistSelections}
          selectedFilterKey={selectedFilterKey}
          setSelectedFilterKey={setSelectedFilterKey}
          selectedSortKey={selectedSortKey}
          setSelectedSortKey={setSelectedSortKey}
          availableOptions={availableOptions}
          addFilter={addFilter}
          removeFilter={removeFilter}
          clearAllFilters={clearAllFilters}
          setSortDirection={setSortDirection}
          sortDirection={sortDirection}
          minHeight={minHeight}
          setMinHeight={setMinHeight}
          maxHeight={maxHeight}
          setMaxHeight={setMaxHeight}
          viewType={viewType}
          // @ts-ignore
          setViewType={(type: "grid" | "card" | "json") => setViewType(type)}
        />
        {/* @ts-ignore */}
        <PeaksList viewType={viewType} paginatedItems={paginatedItems} onSelect={onSelect} isLoading={isLoading} />
      </Stack>

      <PeaksPaginationControls currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
    </Stack>
  )
}

export default PeaksPage
