/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useLayoutEffect } from "react"
import { useLoaderData, useNavigate, useRouteContext, useSearch } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl, getInitialFilters } from "./utils"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { useStore } from "../../store/StoreProvider"

export const ServicesFilters = () => {
  const navigate = useNavigate()
  const { filters, filterSettings } = useLoaderData({ from: "/services/" })
  const { appProps } = useRouteContext({ from: "/services/" })
  const search = useSearch({ from: "/services/" })
  const { hasAppliedInitialFilters, markInitialFiltersApplied } = useStore()

  // Use store to track initial filters across tab navigation - prevents re-application when switching between services/vulnerabilities tabs
  useLayoutEffect(() => {
    if (hasAppliedInitialFilters) return

    // Use parsed search params from TanStack Router instead of window.location.search
    const hasUrlFilters = Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))

    if (!hasUrlFilters && appProps?.initialFilters?.support_group?.length) {
      const initialFilters = getInitialFilters(appProps.initialFilters)

      if (initialFilters.length > 0) {
        navigate({
          to: "/services",
          search: getFiltersForUrl({
            searchTerm: "",
            selectedFilters: initialFilters,
          }),
          replace: true,
        })
        markInitialFiltersApplied()
      }
    }
  }, [navigate, appProps, hasAppliedInitialFilters, markInitialFiltersApplied, search])

  const handleFilterChange = useCallback(
    (updatedFilterSettings: FilterSettings) => {
      navigate({
        to: "/services",
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
      filters={filters}
      filterSettings={filterSettings}
      onFilterChange={handleFilterChange}
      searchInputPlaceholder="search term for services name"
    />
  )
}
