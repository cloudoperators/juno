/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from "react"
import { isEmpty } from "lodash"
import { Button, InputGroup, SelectOption, Select, Stack } from "@cloudoperators/juno-ui-components"
import { DropdownValue, Filter, SelectedFilter } from "./types"

type FilterSelectProps = {
  filters: Filter[]
  onChange: (filter: SelectedFilter) => void
}

export const FilterSelect = ({ filters, onChange }: FilterSelectProps) => {
  const [selectedFilterName, setSelectedFilterName] = useState<DropdownValue>("")
  const [selectedFilterValue, setSelectedFilterValue] = useState<DropdownValue>("")
  const filterValues = filters.find((filter) => filter.filterName === selectedFilterName)?.values

  const handleValueChange = useCallback(
    (value: DropdownValue) => {
      if (!isEmpty(selectedFilterName) && !isEmpty(value)) {
        onChange({
          name: selectedFilterName as string, // we're sure that the value is a string
          value: value as string, // we're sure that the value is a string
        })
        setSelectedFilterName("")
        setSelectedFilterValue("")
      }
    },
    [selectedFilterName, onChange]
  )

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          className="filter-label-select w-64 mb-0"
          name="filter"
          label="Filter"
          value={selectedFilterName}
          onChange={setSelectedFilterName}
        >
          {filters?.map(({ displayName, filterName }) => (
            <SelectOption value={filterName} label={displayName} key={filterName} />
          ))}
        </Select>
        <Select
          className="filter-value-select w-64 bg-theme-background-lvl-0"
          name="filterValue"
          value={selectedFilterValue}
          onChange={handleValueChange}
        >
          {filterValues?.map((value) => <SelectOption value={value} key={value} />)}
        </Select>
        <Button icon="filterAlt" className="py-[0.3rem]" />
      </InputGroup>
    </Stack>
  )
}
