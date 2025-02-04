/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"

// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Button, InputGroup, SelectOption, Select, Stack, SearchInput } from "@cloudoperators/juno-ui-components"
import {
  useFilterLabels,
  useFilterLabelValues,
  useFilterActions,
  useActiveFilters,
  useSearchTerm,
} from "../StoreProvider"
import { humanizeString } from "../../lib/utils"

const FilterSelect = () => {
  const [filterLabel, setFilterLabel] = useState("")
  const [filterValue, setFilterValue] = useState("")
  const [resetKey] = useState(Date.now())
  // @ts-ignore
  const { addActiveFilter, loadFilterLabelValues, clearFilters, setSearchTerm } = useFilterActions()
  const filterLabels = useFilterLabels()
  const filterLabelValues = useFilterLabelValues()
  const activeFilters = useActiveFilters()
  const searchTerm = useSearchTerm()

  const handleFilterAdd = (value: any) => {
    if (filterLabel && (filterValue || value)) {
      // add active filter to store
      addActiveFilter(filterLabel, filterValue || value)

      // reset filterValue
      setFilterValue("")
    } else {
      // TODO: show error -> please select filter/value
    }
  }

  const handleFilterLabelChange = (value: any) => {
    setFilterLabel(value)
    // lazy loading of all possible values for this label (only load them if we haven't already)
    // @ts-ignore
    if (!filterLabelValues[value]?.values) {
      loadFilterLabelValues(value)
    }
  }

  const handleFilterValueChange = (value: any) => {
    setFilterValue(value)
    handleFilterAdd(value)
  }

  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleFilterValueChange()
  //   }
  // }

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          name="filter"
          className="filter-label-select w-64 mb-0"
          label="Filter"
          value={filterLabel}
          onChange={(val: any) => handleFilterLabelChange(val)}
        >
          {// @ts-ignore
          filterLabels?.map((filter: any) => (
            <SelectOption value={filter} label={humanizeString(filter)} key={filter} />
          ))}
        </Select>
        <Select
          name="filterValue"
          value={filterValue}
          onChange={(value: any) => handleFilterValueChange(value)}
          // @ts-ignore
          disabled={filterLabelValues[filterLabel] ? false : true}
          // @ts-ignore
          loading={filterLabelValues[filterLabel]?.isLoading}
          className="filter-value-select w-96 bg-theme-background-lvl-0"
          key={resetKey}
        >
          {/* @ts-ignore */}
          {filterLabelValues[filterLabel]?.values
            ?.filter(
              (
                value: any // filter out already active values for this label
                // @ts-ignore
              ) => !activeFilters[filterLabel]?.includes(value)
            )
            .slice(0, 100) // take only the first 100 values. This isn't a good solution TODO: fix this properly with combo box, typeahead search, lazy loading, etc.
            .map((value: any) => <SelectOption value={value} key={value} />)}
        </Select>
        {/* @ts-expect-error TS(2554): Expected 1 arguments, but got 0. // @ts-expect-error TS(2554): Expected 1 */}
        <Button onClick={() => handleFilterAdd()} icon="filterAlt" className="py-[0.3rem]" />
      </InputGroup>
      {activeFilters && Object.keys(activeFilters).length > 0 && (
        <Button label="Clear all" onClick={() => clearFilters()} variant="subdued" />
      )}
      <SearchInput
        placeholder="search term or regular expression"
        className="w-96 ml-auto"
        value={searchTerm || ""}
        onSearch={(value: any) => setSearchTerm(value)}
        onClear={() => setSearchTerm(null)}
        onChange={(value: any) => handleSearchChange(value)}
      />
    </Stack>
  )
}

export default FilterSelect
