import React, { useState, useMemo } from "react"
import { Stack, ContentHeading, Button } from "@cloudoperators/juno-ui-components"
import PeaksFilterToolbar from "../peaks/list/PeaksFilterToolbar"
import PeaksList from "../peaks/list/PeaksList"
import PeaksPaginationControls from "../peaks/list/PeaksPaginationControls"
import MetricsDisplay from "../metrics/MetricsDisplay"
import useUIStore from "../../store/useUIStore"
import { calculateMetrics, Metrics } from "../peaks/utils/calculateMetrics"
import { usePaginatedItems } from "../hooks/usePeaks"
import { Peak } from "../../mocks/db"
import CreatePeakModal from "../peaks/list/CreatePeakModal"
import usePeaksStore from "../../store/usePeaksStore"

const ITEMS_PER_PAGE = 15

interface PeaksPageProps {
  isLoading: boolean
  onSelect: (peak: Peak) => void
}

const PeaksPage: React.FC<PeaksPageProps> = ({ isLoading, onSelect }) => {
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

  // Get unique countries for dropdown options
  const availableCountries = useMemo(() => {
    const countriesSet = new Set(peaks.map((peak) => peak.countries))
    return Array.from(countriesSet)
  }, [peaks])

  // Filter peaks based on searchTerm and countryFilter
  const filteredAndSortedItems = peaks.filter((peak) => {
    const matchesSearch = peak.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCountry = countryFilter ? peak.countries === countryFilter : true
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
            isLoading,
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
            selectedFilterKey={"countries"}
            setSelectedFilterKey={setCountryFilter}
            availableOptions={{ countries: availableCountries }}
            addFilter={addFilter}
            removeFilter={removeFilter}
            clearAllFilters={clearAllFilters}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            viewType={viewType}
            setViewType={setViewType}
          />
          <PeaksList viewType={viewType} paginatedItems={paginatedItems} onSelect={onSelect} isLoading={isLoading} />
        </Stack>
        <PeaksPaginationControls currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
      </Stack>
      <CreatePeakModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Peak" />
    </>
  )
}

export default PeaksPage
