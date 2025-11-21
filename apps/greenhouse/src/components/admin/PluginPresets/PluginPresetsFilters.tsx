/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl } from "../utils"
import { SELECTED_FILTER_PREFIX } from "../constants"

export const PluginPresetsFilters = () => {
  const navigate = useNavigate()
  const { filtersPromise, filterSettings } = useLoaderData({ from: "/admin/plugin-presets" })

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/admin/plugin-presets",
        search: (prev) => {
          const newFilterParams = getFiltersForUrl(updatedFilterSettings)
          const cleanedPrev = Object.fromEntries(
            Object.entries(prev).filter(([key]) => !key.startsWith(SELECTED_FILTER_PREFIX))
          )
          return {
            ...cleanedPrev,
            ...newFilterParams,
          }
        },
      })
    },
    [navigate]
  )

  return (
    <Filters
      filtersPromise={filtersPromise}
      filterSettings={filterSettings}
      onFilterChange={handleFilterChange}
      searchInputPlaceholder="search term for plugin presets name"
    />
  )
}
