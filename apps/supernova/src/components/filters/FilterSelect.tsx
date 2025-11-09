/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"

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
import { useNavigate } from "@tanstack/react-router"
import { addFilter } from "../../lib/urlStateUtils"
import { ACTIVE_FILTERS_PREFIX } from "../../constants"

const FilterSelect = () => {
  const navigate = useNavigate()
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

      // add filter to URL state
      navigate({
        to: "/alerts",
        search: (prev) => addFilter({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${filterLabel}`, value),
      })
    }
    // TODO: remove this after ComboBox supports resetting its value after onChange
    // set timeout to allow ComboBox to update its value after onChange
    setTimeout(() => {
      setFilterValue("")
    }, 0)
  }

  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
      navigate({
        to: "/alerts",
        search: (prev) => ({
          ...prev,
          searchTerm: value.target.value.trim(),
        }),
      })
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
          value={filterValue}
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
            .map((value: any) => (
              <ComboBoxOption value={value} key={value} />
            ))}
        </ComboBox>
      </InputGroup>
      {renderClearButton()}
      <SearchInput
        placeholder="search term or regular expression"
        className="w-96 ml-auto"
        value={searchTerm || ""}
        onSearch={(value: any) => setSearchTerm(value)}
        onClear={() => {
          setSearchTerm("")
          navigate({
            to: "/alerts",
            search: (prev) => ({
              ...prev,
              searchTerm: "",
            }),
          })
        }}
        onChange={(value: any) => handleSearchChange(value)}
      />
    </Stack>
  )

  function renderClearButton(): React.ReactNode {
    return (
      activeFilters &&
      Object.keys(activeFilters).length > 0 && (
        <Button
          label="Clear all"
          onClick={() => {
            clearFilters()
            // Remove active and paused filters from URL state
            navigate({
              to: "/alerts",
              search: (prev) =>
                Object.entries(prev).reduce((acc: Record<string, string | string[]>, [key, value]) => {
                  if (value && !key.startsWith("f_") && !key.startsWith("pf_")) {
                    acc[key] = value
                  }
                  return acc
                }, {}),
            })
          }}
          variant="subdued"
        />
      )
    )
  }
}

export default FilterSelect
