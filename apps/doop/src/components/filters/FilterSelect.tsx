/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from "react"

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
import { useNavigate } from "@tanstack/react-router"

import { useFiltersActions, useFiltersSearchTerm, useFiltersActive, useDataFilterEntries } from "../StoreProvider"
import { ACTIVE_FILTERS_PREFIX } from "../../constants"
import { addFilter as addFilterToUrlState } from "../../lib/urlStateUtils"

const FilterSelect = () => {
  const [filterLabel, setFilterLabel] = useState("")
  const [filterValue, setFilterValue] = useState("")
  const navigate = useNavigate()
  const filterEntries = useDataFilterEntries()
  // @ts-ignore
  const { add: addFilter, removeAll, setSearchTerm } = useFiltersActions()
  const searchValue = useFiltersSearchTerm()
  const activeFilters = useFiltersActive() || []
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.trim()

    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      setSearchTerm(term)
      navigate({
        to: "/violations",
        search: (prev) => ({
          ...prev,
          searchTerm: term,
        }),
      })
    }, 500)
  }

  const handleFilterValueChange = (value: string) => {
    setFilterValue(value) // update the filter value state to trigger re-render on ComboBox
    if (filterLabel.trim() !== "" && value.trim() !== "") {
      addFilter(filterLabel, value) // add the filter to the active filters
      // add filter to URL state
      navigate({
        to: "/violations",
        search: (prev) => addFilterToUrlState({ ...prev }, `${ACTIVE_FILTERS_PREFIX}${filterLabel}`, value),
      })
    }
    // TODO: remove this after ComboBox supports resetting its value after onChange
    // set timeout to allow ComboBox to update its value after onChange
    setTimeout(() => {
      setFilterValue("")
    }, 0)
  }

  return (
    <Stack alignment="center" gap="8" distribution="between">
      <Stack gap="2">
        <InputGroup>
          <Select
            name="category"
            className="filter-label-select w-52 mb-0"
            label="Select category"
            value={filterLabel}
            // @ts-expect-error TS(2345) FIXME: Argument of type 'null' is not assignable to param...
            onChange={setFilterLabel}
          >
            {
              // @ts-ignore
              filterEntries.map((entry: any, i: any) => (
                <SelectOption value={entry.key} label={entry.label} key={i} />
              ))
            }
          </Select>
          <ComboBox
            value={filterValue}
            name="value"
            onChange={(value: string) => handleFilterValueChange(value)}
            disabled={!filterLabel}
            className="filter-value-select w-80 bg-theme-background-lvl-0"
          >
            {// @ts-ignore
            filterEntries
              .find((e: any) => e.key === filterLabel)
              ?.values.map((value: any, i: any) => (
                <ComboBoxOption value={value} key={i} />
              ))}
          </ComboBox>
        </InputGroup>
        {
          // @ts-ignore
          activeFilters.length > 0 && (
            <Button
              label="Clear all"
              onClick={() => {
                removeAll()
                // Remove active and paused filters from URL state
                navigate({
                  to: "/violations",
                  search: (prev) =>
                    Object.entries(prev).reduce((acc: Record<string, string | string[]>, [key, value]) => {
                      if (value && !key.startsWith(ACTIVE_FILTERS_PREFIX)) {
                        acc[key] = value
                      }
                      return acc
                    }, {}),
                })
              }}
              variant="subdued"
            />
          )
        }
      </Stack>

      <SearchInput
        className="w-96"
        // @ts-expect-error TS(2345) FIXME: Argument of type 'null' is not assignable to param...
        value={searchValue || ""}
        onChange={(value: any) => handleSearchChange(value)}
        onClear={() => {
          setSearchTerm(null)
          navigate({
            to: "/violations",
            search: (prev) => ({
              ...prev,
              searchTerm: "",
            }),
          })
        }}
      />
    </Stack>
  )
}

export default FilterSelect
