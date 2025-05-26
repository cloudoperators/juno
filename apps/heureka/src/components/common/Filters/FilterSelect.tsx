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
import { DropdownValue, Filter, SelectedFilter } from "./types"

type FilterSelectProps = {
  filters: Filter[]
  onChange: (filter: SelectedFilter) => void
}

export const FilterSelect = ({ filters, onChange }: FilterSelectProps) => {
  const [selectedFilterName, setSelectedFilterName] = useState<string>("")
  const [selectedFilterValue] = useState<string>("")
  const filterValues: string[] | undefined = filters.find((filter) => filter.filterName === selectedFilterName)?.values

  const handleValueChange = useCallback(
    (value: string) => {
      if (!isEmpty(selectedFilterName) && !isEmpty(value)) {
        onChange({
          name: selectedFilterName,
          value: value,
        })
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
          onChange={(value) => {
            setSelectedFilterName(String(value))
          }}
        >
          {filters?.map(({ displayName, filterName }) => (
            <SelectOption value={filterName} label={displayName} key={filterName} />
          ))}
        </Select>
        <ComboBox
          className="filter-value-select w-64 bg-theme-background-lvl-0"
          name="filterValue"
          value={selectedFilterValue}
          onChange={handleValueChange}
        >
          {filterValues?.map((value) => <ComboBoxOption value={value} key={value} />)}
        </ComboBox>
        <Button icon="filterAlt" className="py-[0.3rem]" />
      </InputGroup>
    </Stack>
  )
}
