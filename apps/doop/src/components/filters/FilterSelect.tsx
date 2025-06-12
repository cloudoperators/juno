/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"

import {
  Button,
  ComboBox,
  ComboBoxOption,
  InputGroup,
  SearchInput,
  Select,
  SelectOption,
  Stack,
} from "@cloudoperators/juno-ui-components"

import { useFiltersActions, useFiltersSearchTerm, useFiltersActive, useDataFilterEntries } from "../StoreProvider"

const FilterSelect = () => {
  const [selectedCategory, selectCategory] = useState("")
  const [selectedValue] = useState("")
  const filterEntries = useDataFilterEntries()
  // @ts-ignore
  const { add: addFilter, removeAll, setSearchTerm } = useFiltersActions()
  const searchValue = useFiltersSearchTerm()
  const activeFilters = useFiltersActive() || []

  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    // clear timeout if we have a new value
    return () => clearTimeout(debouncedSearchTerm)
  }

  return (
    <Stack alignment="center" gap="8" distribution="between">
      <Stack gap="2">
        <InputGroup>
          <Select
            name="category"
            className="filter-label-select w-52 mb-0"
            label="Select category"
            value={selectedCategory}
            // @ts-expect-error TS(2345) FIXME: Argument of type 'null' is not assignable to param...
            onChange={selectCategory}
          >
            {
              // @ts-ignore
              filterEntries.map((entry: any, i: any) => (
                <SelectOption value={entry.key} label={entry.label} key={i} />
              ))
            }
          </Select>
          <ComboBox
            name="value"
            value={selectedValue}
            onChange={(value: string) => addFilter(selectedCategory, value)}
            disabled={!selectedCategory}
            className="filter-value-select w-80 bg-theme-background-lvl-0"
          >
            {// @ts-ignore
            filterEntries
              .find((e: any) => e.key === selectedCategory)
              ?.values.map((value: any, i: any) => <ComboBoxOption value={value} key={i} />)}
          </ComboBox>
          <Button
            onClick={() => selectedCategory && selectedValue && addFilter(selectedCategory, selectedValue)}
            icon="filterAlt"
            className="py-[0.3rem]"
          />
        </InputGroup>
        {
          // @ts-ignore
          activeFilters.length > 0 && <Button label="Clear all" onClick={removeAll} variant="subdued" />
        }
      </Stack>

      <SearchInput
        className="w-96"
        // @ts-expect-error TS(2345) FIXME: Argument of type 'null' is not assignable to param...
        value={searchValue || ""}
        onChange={(value: any) => handleSearchChange(value)}
        onClear={() => setSearchTerm(null)}
      />
    </Stack>
  )
}

export default FilterSelect
