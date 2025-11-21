/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Stack, SearchInput, InputGroup, Button } from "@cloudoperators/juno-ui-components"
import { FilterSelect } from "../common/FilterSelect"

export type FilterSettings = {
  searchTerm?: string
}

const filters = [
  {
    id: "pluginPresetDefinition",
    label: "Plugin Preset Definition",
    values: ["active", "inactive", "deprecated"],
  },
]

export const PluginPresetsFilter = () => {
  const navigate = useNavigate()
  const { filterSettings } = useLoaderData({ from: "/admin/plugin-presets" })

  const handleSearchChange = useCallback(
    (value?: string) => {
      navigate({
        to: "/admin/plugin-presets",
        search: (prev) => ({
          ...prev,
          searchTerm: value,
        }),
      })
    },
    [navigate]
  )

  return (
    <Stack direction="vertical" gap="4" className="bg-theme-background-lvl-1 py-2 px-4 ">
      <Stack alignment="start" gap="4">
        <InputGroup>
          <FilterSelect filters={filters} onChange={(selectedFilter) => {}} />
        </InputGroup>
        <Button label="Clear all" className="ml-4" onClick={() => {}} variant="subdued" />
        <SearchInput
          className="w-96 ml-auto"
          placeholder="Search plugin presets by name..."
          value={filterSettings?.searchTerm}
          onSearch={handleSearchChange}
          onClear={() => handleSearchChange(undefined)}
        />
      </Stack>
    </Stack>
  )
}
