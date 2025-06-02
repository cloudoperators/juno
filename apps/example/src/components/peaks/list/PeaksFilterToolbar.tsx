/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

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
  ComboBox,
  ComboBoxOption,
} from "@cloudoperators/juno-ui-components"

import ViewToggleButtons from "../../common/ViewToggleButtons"

// Needs refactoring

interface PeaksFilterToolbarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  viewType: "grid" | "card" | "json"
  setViewType: (viewType: string) => void
  filterKeys: string[]
  filterSelections: Record<string, string[]>
  droplistSelections: Record<string, string>
  selectedFilterKey: string | null
  setSelectedFilterKey: (key: string) => void
  availableOptions: Record<string, string[]>
  addFilter: (key: string, value: string) => void
  removeFilter: (key: string, value: string) => void
  clearAllFilters: () => void
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
  const filterLabel = "countries"

  const handleFilterValueChange = (value?: string | number | string[]) => {
    const selectedValue = typeof value === "string" ? value : ""
    if (selectedValue) {
      addFilter(filterLabel, selectedValue)
      setSelectedFilterKey(selectedValue)
    }
  }

  const filterOptions = availableOptions[filterLabel]?.filter(
    (value: string) => !filterSelections[filterLabel]?.includes(value)
  )

  const isDroplistSelectionEmpty = !droplistSelections.countries

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
        <Stack>
          <InputGroup>
            <Select
              name="filterValue"
              value={droplistSelections.countries || ""}
              label={isDroplistSelectionEmpty ? "" : "Filter by Country"}
              onChange={handleFilterValueChange}
              className="filter-value-select w-96 bg-theme-background-lvl-0"
              placeholder="Filter by Country"
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
