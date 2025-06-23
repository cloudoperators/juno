/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from "react"
import { isEmpty } from "lodash"
import {
  Button,
  InputGroup,
  ComboBox,
  ComboBoxOption,
  SelectOption,
  Select,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { Filter, SelectedFilter } from "./types"

type FilterSelectProps = {
  filters: Filter[]
  onChange: (filter: SelectedFilter) => void
}

export const FilterSelect = ({ filters, onChange }: FilterSelectProps) => {
  const [selectedFilterName, setSelectedFilterName] = useState<string>("")
  const [selectedFilterValue, setSelectedFilterValue] = useState<string>("")

  // first filter gets the values, second one filters emtpy values
  const filterValues: string[] | undefined = filters
    .find((filter) => filter.filterName === selectedFilterName)
    ?.values?.filter((value) => value)

  const handleValueChange = useCallback(
    (value: string) => {
      setSelectedFilterValue(value) // update the filter value state to trigger re-render on ComboBox
      if (!isEmpty(selectedFilterName) && !isEmpty(value)) {
        onChange({
          name: selectedFilterName,
          value: value,
        })
        setSelectedFilterValue("") // clear the value after selection
      }
    },
    [selectedFilterName, setSelectedFilterValue, onChange]
  )

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          className="filter-label-select w-64 mb-0"
          name="filter"
          data-testid="select-filterValue"
          label="Filter"
          value={selectedFilterName}
          onChange={(value) => {
            setSelectedFilterName(String(value))
          }}
        >
          {filters?.map(({ displayName, filterName }) => (
            <SelectOption value={filterName} label={displayName} key={filterName} data-testid={filterName} />
          ))}
        </Select>
        <ComboBox
          className="filter-value-select w-64 bg-theme-background-lvl-0"
          name="filterValue"
          data-testid="combobox-filterValue"
          key={selectedFilterValue}
          disabled={!selectedFilterName}
          onChange={handleValueChange}
        >
          {filterValues?.map((value) => <ComboBoxOption value={value} key={value} label={value} data-testid={value} />)}
        </ComboBox>
      </InputGroup>
    </Stack>
  )
}
