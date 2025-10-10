/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { Button, InputGroup, SearchInput, Stack } from "@cloudoperators/juno-ui-components"
import { FilterSelect } from "./FilterSelect"
import { Filter, FilterSettings, SelectedFilter } from "./types"
import { SelectedFilters } from "./SelectedFilters"

export type FiltersProps = {
  searchInputPlaceholder?: string
  filters: Filter[]
  filterSettings: FilterSettings
  onFilterChange: (filterSettings: FilterSettings) => void
}

export const Filters = ({ filters, filterSettings, onFilterChange, searchInputPlaceholder }: FiltersProps) => {
  const handleFilterDelete = useCallback(
    (filterToRemove: SelectedFilter) => {
      onFilterChange({
        ...filterSettings,
        selectedFilters: filterSettings.selectedFilters?.filter(
          (filter) => !(filter.name === filterToRemove.name && filter.value === filterToRemove.value)
        ),
      })
    },
    [filterSettings, onFilterChange]
  )

  return (
    <Stack direction="vertical" gap="4" className="bg-theme-background-lvl-1 py-2 px-4 ">
      <Stack alignment="center" gap="4">
        <InputGroup>
          <FilterSelect
            filters={filters}
            onChange={(selectedFilter) => {
              const filterExists = filterSettings.selectedFilters?.some(
                (filter) => filter.name === selectedFilter.name && filter.value === selectedFilter.value
              )
              //only add the filter if it does not already exist
              if (!filterExists) {
                onFilterChange({
                  ...filterSettings,
                  selectedFilters: [...(filterSettings.selectedFilters || []), selectedFilter],
                })
              }
            }}
          />
        </InputGroup>
        <Button
          label="Clear all"
          className="ml-4"
          onClick={() =>
            onFilterChange({
              ...filterSettings,
              selectedFilters: [],
            })
          }
          variant="subdued"
        />
        <SearchInput
          placeholder={searchInputPlaceholder ? searchInputPlaceholder : `search term for`}
          className="w-96 ml-auto"
          data-testid="searchbar"
          value={filterSettings.searchTerm}
          onSearch={(searchTerm) => {
            onFilterChange({
              ...filterSettings,
              searchTerm,
            })
          }}
          onClear={() =>
            onFilterChange({
              ...filterSettings,
              searchTerm: "",
            })
          }
        />
      </Stack>
      {filterSettings.selectedFilters && filterSettings.selectedFilters.length > 0 && (
        <SelectedFilters selectedFilters={filterSettings.selectedFilters} onDelete={handleFilterDelete} />
      )}
    </Stack>
  )
}
