/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import {
  SearchInput,
  Select,
  SelectOption,
  ComboBox,
  ComboBoxOption,
  Stack,
  InputGroup,
  Pill,
  Button,
} from "@cloudoperators/juno-ui-components"
import { usePluginActions, usePluginConfig, useLabelValuesFilters } from "./StoreProvider"
import { LabelValuesFilter } from "../lib/store/createPluginSlice"
import { getStatusCondition } from "../hooks/helper"
const filtersStyles = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px
`

const Toolbar = () => {
  const { setSearchTerm, addLabelValueFilter, removeLabelValueFilter, removeAllFilters } = usePluginActions()
  const labelValuesFilters = useLabelValuesFilters()
  const [labelFilters, setLabelFilters] = useState<LabelValuesFilter[]>()
  const [availableValues, setAvailableValues] = useState<string[]>([])
  const [filterLabel, setFilterLabel] = useState("")
  const [filterValue, setFilterValue] = useState("")

  const pluginConfig = usePluginConfig()
  const handleSearchChange = (value: any) => {
    // debounce setSearchTerm to avoid unnecessary re-renders
    const debouncedSearchTerm = setTimeout(() => {
      setSearchTerm(value.target.value)
    }, 500)

    return () => clearTimeout(debouncedSearchTerm)
  }

  useEffect(() => {
    if (!pluginConfig) return
    const labelMap = new Map<string, Set<string>>()

    // collects all labels and states for ready.
    const values = new Set<string>()
    pluginConfig.forEach((item: any) => {
      const statusCondition = getStatusCondition(item)
      if (statusCondition) {
        values.add(statusCondition)
      }
      const labels = item?.metadata?.labels
      if (labels && typeof labels === "object") {
        Object.entries(labels).forEach(([key, value]) => {
          if (!labelMap.has(key)) {
            labelMap.set(key, new Set())
          }
          if (value && typeof value === "string") {
            labelMap.get(key)?.add(value)
          } else {
            return
          }
        })
      }
    })
    labelMap.set("Ready", values)

    setLabelFilters(
      Array.from(labelMap.entries()).map(([label, values]) => ({
        label,
        value: Array.from(values),
      }))
    )
  }, [pluginConfig])

  const handleLabelChange = (value?: string | number | string[]) => {
    if (!labelFilters) return

    const selectedValue = String(value)
    setFilterLabel(selectedValue)

    const filter = labelFilters.find((filter) => filter?.label === selectedValue)
    setAvailableValues(filter?.value || [])
  }

  const handleValueChange = (value: string) => {
    setFilterValue(value) // update the filter value state to trigger re-render on ComboBox
    if (filterLabel.trim() !== "" && value.trim() !== "") {
      addLabelValueFilter({ label: filterLabel, value: value })
    }
  }

  const handleRemoveFilter = (label: string, value: string) => {
    removeLabelValueFilter({ label: label, value: value })
  }

  return (
    <Stack direction="vertical" gap="4" className={`filters ${filtersStyles}`}>
      <Stack alignment="center" gap="8">
        <Stack gap="2">
          <InputGroup>
            <Select
              required
              label="Label"
              value={filterLabel}
              className="filter-label-select w-64 mb-0"
              onChange={handleLabelChange}
              truncateOptions
            >
              {labelFilters &&
                labelFilters.map((filter) => (
                  <SelectOption key={filter?.label} label={filter?.label} value={filter?.label} />
                ))}
            </Select>

            <ComboBox
              key={filterValue} // to force re-render on value change and reset the input
              name="filterValue"
              className="filter-value-select w-96 bg-theme-background-lvl-0"
              onChange={handleValueChange}
              disabled={!filterLabel}
              truncateOptions
            >
              {availableValues.map((value) => (
                <ComboBoxOption key={value} value={value} />
              ))}
            </ComboBox>
          </InputGroup>
          {labelValuesFilters?.length > 0 && <Button label="Clear all" onClick={removeAllFilters} variant="subdued" />}
        </Stack>
        <SearchInput
          placeholder="search term or regular expression"
          className="w-96 ml-auto"
          value={""}
          onSearch={(value: any) => setSearchTerm(value)}
          onClear={() => setSearchTerm("")}
          onChange={(value: any) => handleSearchChange(value)}
        />
      </Stack>
      <Stack gap="2" wrap={true}>
        {labelValuesFilters &&
          labelValuesFilters.map((labelValues: LabelValuesFilter) =>
            labelValues?.value.map((value: string, i: number) => (
              <Pill
                key={labelValues?.label + i}
                pillKey={labelValues?.label}
                pillValue={value}
                onClose={(e: any, _: any) => handleRemoveFilter(labelValues?.label, value)}
                closeable
              />
            ))
          )}
      </Stack>
    </Stack>
  )
}

export default Toolbar
