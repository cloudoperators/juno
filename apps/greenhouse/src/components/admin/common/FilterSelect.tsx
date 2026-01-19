/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from "react"
import { InputGroup, ComboBox, ComboBoxOption, SelectOption, Select, Stack } from "@cloudoperators/juno-ui-components"
import { isEmpty } from "../utils"
import { Filter, SelectedFilter } from "./types"
import { ErrorMessage } from "./ErrorBoundary/ErrorMessage"

type FilterSelectProps = {
  filters?: Filter[]
  isLoading?: boolean
  error?: Error | null
  onChange: (filter: SelectedFilter) => void
}

export const FilterSelect = ({ filters, isLoading, error, onChange }: FilterSelectProps) => {
  const [selectedFilterId, setSelectedFilterId] = useState<string>("")
  const [selectedFilterValue, setSelectedFilterValue] = useState<string>("")
  // first filter gets the values, second one filters emtpy values
  const filterValues = filters?.find((filter) => filter.id === selectedFilterId)?.values?.filter((value) => value)

  const handleValueChange = useCallback(
    (value: string) => {
      setSelectedFilterValue(value) // update the filter value state to trigger re-render on ComboBox
      if (!isEmpty(selectedFilterId) && !isEmpty(value)) {
        onChange({
          id: selectedFilterId,
          value: value,
        })
      }
      // TODO: remove this after ComboBox supports resetting its value after onChange
      // set timeout to allow ComboBox to update its value after onChange
      setTimeout(() => {
        setSelectedFilterValue("")
      }, 0)
    },
    [selectedFilterId, setSelectedFilterValue, onChange]
  )

  return (
    <Stack alignment="center" gap="8">
      <InputGroup>
        <Select
          className="filter-label-select w-64 mb-0"
          name="filter"
          data-testid="select-filterValue"
          label="Filter"
          value={selectedFilterId}
          loading={isLoading}
          errortext={error ? <ErrorMessage error={error} /> : undefined}
          onChange={(value) => {
            setSelectedFilterId(String(value))
          }}
        >
          {filters?.map(({ label, id }) => (
            <SelectOption value={id} label={label} key={id} data-testid={id} />
          ))}
        </Select>
        <ComboBox
          className="filter-value-select w-64 bg-theme-background-lvl-0"
          name="filterValue"
          data-testid="combobox-filterValue"
          value={selectedFilterValue}
          disabled={!selectedFilterId}
          onChange={(value) => {
            handleValueChange(String(value))
          }}
        >
          {filterValues?.map((value) => (
            <ComboBoxOption value={value} key={value} label={value} data-testid={value} />
          ))}
        </ComboBox>
      </InputGroup>
    </Stack>
  )
}
