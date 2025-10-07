/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useRef } from "react"
import { useLoaderData, useNavigate, useRouteContext } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl, getInitialFilters } from "./utils"
import { SELECTED_FILTER_PREFIX } from "../../constants"

export const ServicesFilters = () => {
  const navigate = useNavigate()
  const { filters, filterSettings } = useLoaderData({ from: "/services/" })
  const { appProps } = useRouteContext({ from: "/services/" })
  const initialFiltersApplied = useRef(false)

  // Handle initial filters on first load (similar to doop's useUrlState pattern)
  useEffect(() => {
    if (initialFiltersApplied.current) return // Only run once

    // Check URL directly instead of relying on filterSettings to avoid stale closure
    const urlParams = new URLSearchParams(window.location.search)
    const hasUrlFilters = Array.from(urlParams.keys()).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))
    const hasAnySearchParams = urlParams.toString().length > 0

    // Only apply initial filters if no URL filters exist and no search params are present
    if (
      !hasUrlFilters &&
      !hasAnySearchParams &&
      appProps?.initialFilters?.support_group &&
      appProps.initialFilters.support_group.length > 0
    ) {
      const initialFilters = getInitialFilters(appProps.initialFilters)

      if (initialFilters.length > 0) {
        const initialFilterSettings = {
          searchTerm: "",
          selectedFilters: initialFilters,
        }

        navigate({
          to: "/services",
          search: getFiltersForUrl(initialFilterSettings),
          replace: true,
        })
        initialFiltersApplied.current = true
      }
    }
  }, [navigate, appProps])

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/services",
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
      searchInputPlaceholder="search term for services name"
    />
  )
}
