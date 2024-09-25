/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Button, InputGroup, SelectOption, Select, Stack, SearchInput } from "@cloudoperators/juno-ui-components"
import { useFilterActions } from "../../hooks/useAppStore"
import { humanizeString } from "../../lib/utils"

const FilterSelect = ({ entityName, isLoading, filterLabels, filterLabelValues, activeFilters, searchTerm }) => {
  const [filterLabel, setFilterLabel] = useState("")
  const [filterValue, setFilterValue] = useState("")

  const { addActiveFilter, clearActiveFilters, setSearchTerm } = useFilterActions()

  const handleFilterAdd = (value) => {
    if (filterLabel && (filterValue || value)) {
      addActiveFilter(entityName, filterLabel, filterValue || value)
      setFilterValue("")
    }
  }

  const handleFilterLabelChange = (label) => setFilterLabel(label)

  const handleFilterValueChange = (value) => {
    setFilterValue(value)
    handleFilterAdd(value)
  }

  // Define filter options by filtering out already selected values
  const filterOptions = filterLabelValues?.[filterLabel]?.filter(
    (value) => !activeFilters?.[filterLabel]?.includes(value)
  )

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          name="filter"
          className="filter-label-select w-64 mb-0"
          label="Filter"
          value={humanizeString(filterLabel)}
          onChange={handleFilterLabelChange}
          disabled={isLoading}
        >
          {filterLabels?.map((filter) => (
            <SelectOption value={filter} label={humanizeString(filter)} key={filter} />
          ))}
        </Select>
        <Select
          name="filterValue"
          value={filterValue}
          onChange={handleFilterValueChange}
          disabled={!filterLabelValues[filterLabel]?.length}
          className="filter-value-select w-96 bg-theme-background-lvl-0"
        >
          {filterOptions?.map((value) => (
            <SelectOption value={value} key={value} />
          ))}
        </Select>
        <Button icon="filterAlt" className="py-[0.3rem]" />
      </InputGroup>
      {activeFilters && Object.keys(activeFilters).length > 0 && (
        <Button label="Clear all" onClick={() => clearActiveFilters(entityName)} variant="subdued" />
      )}
      <SearchInput
        placeholder="Search term or regular expression"
        className="w-96 ml-auto"
        value={searchTerm || ""}
        onSearch={(value) => setSearchTerm(entityName, value)}
        onClear={() => setSearchTerm(entityName, "")}
      />
    </Stack>
  )
}

export default FilterSelect
