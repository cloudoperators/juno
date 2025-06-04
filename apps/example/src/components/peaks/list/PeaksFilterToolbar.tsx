/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */

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

// Needs refactoring

interface PeaksFilterToolbarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  availableCountries: string[]
  onFilterChange: (selectedCountries: string[]) => void
  viewType: "grid" | "card" | "json"
  setViewType: (view: "grid" | "card" | "json") => void
}

const PeaksFilterToolbar: React.FC<PeaksFilterToolbarProps> = ({
  searchTerm,
  setSearchTerm,
  viewType,
  setViewType,
  availableCountries,
  onFilterChange,
}) => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  const handleFilterValueChange = (value?: string | string[] | number) => {
    if (Array.isArray(value)) {
      setSelectedCountries(value)
      onFilterChange(value) // Notify the parent component of changes
    }
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedCountries([])
    onFilterChange([]) // Reset filters in parent component
  }

  return (
    <DataGridToolbar className="jn-ml-0">
      <Stack className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <SearchInput
          placeholder="Search by Name..."
          value={searchTerm || ""}
          className="w-full md:w-64 flex-shrink-0"
          onSearch={(value: string) => setSearchTerm(value)}
          onClear={() => setSearchTerm("")}
        />
        <Stack className="flex flex-col items-stretch md:flex-row md:items-center gap-2 w-full">
          <InputGroup className="w-full md:w-64">
            <Select
              name="filterValue"
              value={selectedCountries}
              label={selectedCountries.length === 0 ? "" : "Filter by Country"}
              multiple
              onChange={handleFilterValueChange}
              className="filter-value-select w-full md:w-64 bg-theme-background-lvl-0"
              placeholder="Filter by Country"
            >
              {availableCountries.map((country: string) => (
                <SelectOption key={country} value={country}>
                  {country}
                </SelectOption>
              ))}
            </Select>
          </InputGroup>
          <Button
            label="Clear All"
            onClick={clearAllFilters}
            variant="subdued"
            className="w-full md:w-auto flex-shrink-0"
          />
        </Stack>

        <ViewToggleButtons currentView={viewType} toggleView={setViewType} />
      </Stack>

      {selectedCountries.length > 0 && (
        <Stack direction="horizontal" gap="2" alignment="center" className="justify-start w-full ml-0 mt-2">
          <span className="text-sm font-normal text-gray-600 mr-2">Countries:</span>
          {selectedCountries.map((country, index) => (
            <Pill
              key={`${country}:${index}`}
              pillValue={country}
              closeable
              onClose={() => handleFilterValueChange(selectedCountries.filter((c) => c !== country))}
            />
          ))}
        </Stack>
      )}
    </DataGridToolbar>
  )
}

export default PeaksFilterToolbar
