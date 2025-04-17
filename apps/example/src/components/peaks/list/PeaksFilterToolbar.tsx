import React, { useState } from "react"
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
  setSelectedFilterKey: (key: string) => void
  availableOptions: Record<string, string[]>
  addFilter: (key: string, value: string) => void
  removeFilter: (key: string, value: string) => void
  clearAllFilters: () => void
  searchTerm: string
  setSearchTerm: (term: string) => void
  viewType: string
  setViewType: (viewType: string) => void
}

const PeaksFilterToolbar: React.FC<PeaksFilterToolbarProps> = ({
  filterKeys,
  filterSelections,
  droplistSelections,
  selectedFilterKey,
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
  const [filterLabel, setFilterLabel] = useState<string>("")
  const [filterValue, setFilterValue] = useState<string>("")

  const handleFilterChange = (label: string) => {
    setFilterLabel(label)
    setFilterValue("") // Reset filterValue when changing label
  }

  const handleFilterValueChange = (value: string) => {
    if (filterLabel && value) {
      addFilter(filterLabel, value)
      setFilterValue("") // Reset filter value after adding
    }
  }

  // Determine filter options based on the selected label and filter out already selected values
  const filterOptions =
    filterLabel !== ""
      ? availableOptions[filterLabel]?.filter((value: string) => !filterSelections[filterLabel]?.includes(value))
      : []

  return (
    <DataGridToolbar className="filter-label-select ml-0 jn-ml-0">
      <Stack
        direction="horizontal"
        alignment="center"
        gap="8"
        className="m-0 jn-ml-0"
        style={{ justifyContent: "space-between", width: "100%", margin: 0 }} // Ensure no left margin
      >
        <InputGroup style={{ margin: 0 }}>
          {/* Ensure no left margin */}
          <Select
            name="filter"
            className="filter-label-select w-64 m-0 jn-ml-0"
            label="Filter"
            value={filterLabel}
            onChange={handleFilterChange}
            style={{ marginLeft: 0 }}
          >
            {filterKeys.map((filterKey) => (
              <SelectOption key={filterKey} value={filterKey}>
                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
              </SelectOption>
            ))}
          </Select>
          <Select
            name="filterValue"
            value={filterValue}
            label="Filter Value"
            onChange={handleFilterValueChange}
            disabled={!filterLabel}
            className="filter-value-select w-96 bg-theme-background-lvl-0"
          >
            {filterOptions.map((value: string) => (
              <SelectOption key={value} value={value}>
                {value}
              </SelectOption>
            ))}
          </Select>
          <Button icon="filterAlt" className="py-[0.3rem]" />
        </InputGroup>
        <Button label="Clear All" onClick={clearAllFilters} variant="subdued" />

        <SearchInput
          placeholder="Search by name..."
          value={searchTerm || ""}
          className="w-96 ml-auto"
          onSearch={(value: string) => setSearchTerm(value)}
          onClear={() => setSearchTerm("")}
        />
        <ViewToggleButtons currentView={viewType} toggleView={setViewType} />
      </Stack>
      <Stack
        direction="horizontal"
        gap="4"
        alignment="center"
        style={{ justifyContent: "flex-start", width: "100%", marginLeft: 0 }}
      >
        {Object.entries(filterSelections).map(([key, values]) =>
          values.map((value, index) => (
            <Pill
              key={`${key}:${value}:${index}`}
              pillValue={value}
              closeable
              onClose={() => removeFilter(key, value)}
            />
          ))
        )}
      </Stack>
    </DataGridToolbar>
  )
}

export default PeaksFilterToolbar
