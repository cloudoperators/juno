import React from "react"
import {
  DataGridToolbar,
  Stack,
  Select,
  SelectOption,
  InputGroup,
  Button,
  Pill,
  SearchInput,
} from "@cloudoperators/juno-ui-components"
import ViewToggleButtons from "../../common/ViewToggleButtons"

interface PeaksFilterToolbarProps {
  filterKeys: string[]
  filterSelections: Record<string, string[]>
  droplistSelections: Record<string, string>
  selectedFilterKey: string | null
  setSelectedFilterKey: () => void
  availableOptions: Record<string, string[]>
  addFilter: () => void
  removeFilter: () => void
  clearAllFilters: () => void
  searchTerm: string
  setSearchTerm: () => void
  viewType: string
  setViewType: () => void
}

const PeaksFilterToolbar: React.FC<PeaksFilterToolbarProps> = ({
  filterSelections,
  droplistSelections,
  setSelectedFilterKey,
  availableOptions,
  addFilter,
  removeFilter,
  clearAllFilters,
  searchTerm,
  setSearchTerm,
  viewType,
  setViewType,
}) => {
  const filterLabel = "countries" // Focus on country filter only
  const filterValue = filterSelections.countries?.[0] || ""

  const handleFilterValueChange = (value: string) => {
    if (value) {
      addFilter(filterLabel, value)
      setSelectedFilterKey(value)
    }
  }

  // Determine country options and filter out already selected values
  const filterOptions = availableOptions[filterLabel]?.filter(
    (value: string) => !filterSelections[filterLabel]?.includes(value)
  )

  return (
    <DataGridToolbar className="jn-ml-0">
      <Stack direction="horizontal" alignment="center" gap="8">
        <SearchInput
          placeholder="Search by Name..."
          value={searchTerm || ""}
          className="w-96"
          onSearch={(value: string) => setSearchTerm(value)}
          onClear={() => setSearchTerm("")}
        />
        <Stack gap="2">
          <InputGroup>
            <Select
              name="filterValue"
              value={droplistSelections.countries || ""}
              label="Filter by Country"
              onChange={handleFilterValueChange}
              className="filter-value-select w-96 bg-theme-background-lvl-0"
            >
              {filterOptions?.map((value: string) => (
                <SelectOption key={value} value={value}>
                  {value}
                </SelectOption>
              ))}
            </Select>
          </InputGroup>
          <Button label="Clear All" onClick={clearAllFilters} variant="subdued" />
        </Stack>

        <ViewToggleButtons currentView={viewType} toggleView={setViewType} />
      </Stack>
      <Stack direction="horizontal" gap="4" alignment="center" className="justify-start w-full ml-0">
        {filterSelections.countries?.map((value, index) => (
          <Pill
            key={`${filterLabel}:${value}:${index}`}
            pillValue={value}
            closeable
            onClose={() => removeFilter(filterLabel, value)}
          />
        ))}
      </Stack>
    </DataGridToolbar>
  )
}

export default PeaksFilterToolbar
