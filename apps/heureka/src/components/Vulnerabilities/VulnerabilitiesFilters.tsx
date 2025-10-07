/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl } from "./utils"
import { SELECTED_FILTER_PREFIX } from "../../constants"

export const VulnerabilitiesFilters = () => {
  const navigate = useNavigate()
  const { filters, filterSettings } = useLoaderData({ from: "/vulnerabilities/" })

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/vulnerabilities",
        search: (prev) => {
          // Get the new filter URL params
          const newFilterParams = getFiltersForUrl(updatedFilterSettings)

          // Remove all existing filter params from prev
          const cleanedPrev = Object.fromEntries(
            Object.entries(prev).filter(([key]) => !key.startsWith(SELECTED_FILTER_PREFIX))
          )

          // Merge with new filter params
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
      filters={filters}
      filterSettings={filterSettings}
      onFilterChange={handleFilterChange}
      searchInputPlaceholder="search term for vulnerabilities name"
    />
  )
}
