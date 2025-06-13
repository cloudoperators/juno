/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use, useCallback } from "react"
import { useLoaderData, useNavigate } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl, getNormalizedFilters } from "./utils"

export const ServicesFilters = () => {
  const navigate = useNavigate()
  const { filtersPromise, filterSettings } = useLoaderData({ from: "/services/" })
  const { data } = use(filtersPromise)
  const filters = getNormalizedFilters(data)

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/services",
        search: {
          service: updatedFilterSettings.searchTerm,
          ...getFiltersForUrl(updatedFilterSettings),
        },
      })
    },
    [filterSettings, navigate]
  )

  return (
    <Filters
      filters={filters}
      filterSettings={filterSettings}
      onFilterChange={handleFilterChange}
      searchInputPlaceholder="search term for services name"
    />
  )
}
