/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Stack, SearchInput, InputGroup } from "@cloudoperators/juno-ui-components"

export type FilterSettings = {
  searchTerm?: string
}

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
    <Stack direction="vertical" gap="4" className="bg-theme-background-lvl-1 py-2 px-4">
      <InputGroup>
        <SearchInput
          className="w-96 ml-auto"
          placeholder="Search plugin presets by name..."
          value={filterSettings?.searchTerm}
          onSearch={handleSearchChange}
          onClear={() => handleSearchChange(undefined)}
        />
      </InputGroup>
    </Stack>
  )
}
