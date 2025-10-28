/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, InputGroup, Select, ComboBox } from "@cloudoperators/juno-ui-components/index"

export const LoadingFilterSelect = () => (
  <Stack alignment="center" gap="8">
    <InputGroup>
      <Select
        loading
        className="filter-label-select w-64 mb-0"
        name="filter"
        data-testid="select-filterValue"
        label="Filter"
      ></Select>
      <ComboBox
        disabled
        className="filter-value-select w-64 bg-theme-background-lvl-0"
        name="filterValue"
        data-testid="combobox-filterValue"
      ></ComboBox>
    </InputGroup>
  </Stack>
)
