/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Stack, Select, SelectOption, InputGroup, Button, Pill, SearchInput } from "@cloudoperators/juno-ui-components"

import ViewToggleButtons from "../../common/ViewToggleButtons"
import { DEFAULT_SMALL_APP_MARGIN } from "../../constants"
import CreatePeakModal from "./CreatePeakModal"

interface PeaksFilterToolbarProps {
  searchTerm: string
  setSearchTerm: (_term: string) => void
  availableCountries: string[]
  onFilterChange: (_selectedCountries: string[]) => void
  viewType: "grid" | "card" | "json"
  setViewType: (_view: "grid" | "card" | "json") => void
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
  const [debounceTimer, setDebounceTimer] = useState<number | undefined>(undefined)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearchChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    const newTimer = window.setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)
    setDebounceTimer(newTimer)
  }

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

  const filtersStyles = `
  bg-theme-background-lvl-1
  py-4
  px-4
  pb-4
  pt-4
  my-px
`

  const handleNewPeakClick = () => setIsModalOpen(true)

  return (
    <>
      <Stack alignment="center" gap="8" className={filtersStyles}>
        <Stack direction="vertical" gap="3" className="w-full">
          <Stack gap="6" className="flex flex-row items-center flex-wrap w-full">
            <SearchInput
              placeholder="Search by Name..."
              value={searchTerm || ""}
              className="w-full md:w-80 flex-shrink-0"
              onInput={handleSearchChange}
              onClear={() => setSearchTerm("")}
            />
            <Stack gap={DEFAULT_SMALL_APP_MARGIN} className="flex flex-row items-center">
              <InputGroup className="flex-shrink-0 w-full md:w-80">
                <Select
                  name="filterValue"
                  value={selectedCountries}
                  label={selectedCountries.length === 0 ? "" : "Filter by Country"}
                  multiple
                  onChange={handleFilterValueChange}
                  className="filter-value-select w-full md:w-80 bg-theme-background-lvl-0"
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

            {/* Separate Stack to ensure button positioning */}
            <Stack direction="horizontal" className="flex-grow items-center justify-end">
              <Button icon="addCircle" onClick={handleNewPeakClick} label="Add New Peak" variant="primary" />
            </Stack>

            <CreatePeakModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Peak" />
          </Stack>
          {selectedCountries.length > 0 && (
            <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} alignment="start" className="w-full">
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
        </Stack>
      </Stack>
    </>
  )
}

export default PeaksFilterToolbar
