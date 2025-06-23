/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react"

import {
  Button,
  InputGroup,
  SelectOption,
  Select,
  ComboBox,
  ComboBoxOption,
  Stack,
  SearchInput,
} from "@cloudoperators/juno-ui-components"
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
  const { addActiveFilter, loadFilterLabelValues, clearFilters, setSearchTerm } = useFilterActions()
  const filterLabels = useFilterLabels()
  const filterLabelValues = useFilterLabelValues()
  const activeFilters = useActiveFilters()
  const searchTerm = useSearchTerm()

  const handleFilterLabelChange = (value: any) => {
    setFilterLabel(value)
    // lazy loading of all possible values for this label (only load them if we haven't already)
    if (!filterLabelValues[value]?.values) {
      loadFilterLabelValues(value)
    }
  }

  const handleFilterValueChange = (value: string) => {
    setFilterValue(value) // update the filter value state to trigger re-render on ComboBox
    if (filterLabel.trim() !== "" && value.trim() !== "") {
      addActiveFilter(filterLabel, value) // add the filter to the active filters
    }
  }

  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }

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
          {filterLabels?.map((filter: any) => (
            <SelectOption value={filter} label={humanizeString(filter)} key={filter} />
          ))}
        </Select>
        <ComboBox
          key={filterValue} // to force re-render on value change and reset the input
          name="filterValue"
          onChange={(value: string) => handleFilterValueChange(value)}
          disabled={filterLabelValues[filterLabel] ? false : true}
          loading={filterLabelValues[filterLabel]?.isLoading}
          className="filter-value-select w-96 bg-theme-background-lvl-0"
        >
          {filterLabelValues[filterLabel]?.values
            ?.filter(
              (
                value: any // filter out already active values for this label
              ) => !activeFilters[filterLabel]?.includes(value)
            )
            .slice(0, 100) // take only the first 100 values. This isn't a good solution TODO: fix this properly with combo box, typeahead search, lazy loading, etc.
            .map((value: any) => <ComboBoxOption value={value} key={value} />)}
        </ComboBox>
      </InputGroup>
      {renderClearButton()}
      <SearchInput
        placeholder="search term or regular expression"
        className="w-96 ml-auto"
        value={searchTerm || ""}
        onSearch={(value: any) => setSearchTerm(value)}
        onClear={() => setSearchTerm("")}
        onChange={(value: any) => handleSearchChange(value)}
      />
    </Stack>
  )

  function renderClearButton(): React.ReactNode {
    return (
      activeFilters &&
      Object.keys(activeFilters).length > 0 && (
        <Button label="Clear all" onClick={() => clearFilters()} variant="subdued" />
      )
    )
  }
}

export default FilterSelect
