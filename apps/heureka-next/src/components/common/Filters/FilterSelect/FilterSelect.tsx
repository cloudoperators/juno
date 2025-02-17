/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Button, InputGroup, SelectOption, Select, Stack, SearchInput } from "@cloudoperators/juno-ui-components"

type Filter = {
  filterName: string
  filterDisplayName: string
}

const FILTERS: Filter[] = [
  {
    filterName: "filter1",
    filterDisplayName: "Filter 1",
  },
  {
    filterName: "filter2",
    filterDisplayName: "Filter 2",
  },
  {
    filterName: "filter3",
    filterDisplayName: "Filter 3",
  },
]

const FILTER_VALUES: string[] = ["value1", "value2", "value3", "value4"]

export const FilterSelect = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | number | string[] | undefined>()
  const [selectedFilterValue, setSelectedFilterValue] = useState<string | number | string[] | undefined>()

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          className="filter-label-select w-64 mb-0"
          name="filter"
          label="Filter"
          value={selectedFilter}
          onChange={(value) => setSelectedFilter(value)}
        >
          {FILTERS?.map(({ filterDisplayName, filterName }) => (
            <SelectOption value={filterName} label={filterDisplayName} key={filterName} />
          ))}
        </Select>
        <Select
          className="filter-value-select w-96 bg-theme-background-lvl-0"
          name="filterValue"
          value={selectedFilterValue}
          onChange={(value) => setSelectedFilterValue(value)}
        >
          {FILTER_VALUES?.map((value) => <SelectOption value={value} key={value} />)}
        </Select>
        <Button icon="filterAlt" className="py-[0.3rem]" />
      </InputGroup>
    </Stack>
  )
}
