/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect } from "react"
import { useLoaderData, useNavigate, useRouteContext } from "@tanstack/react-router"
import { Filters } from "../common/Filters"
import { FilterSettings } from "../common/Filters/types"
import { getFiltersForUrl, getInitialFilters } from "./utils"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { useInitialFilters } from "../../store/InitialFiltersContext"

export const ServicesFilters = () => {
  const navigate = useNavigate()
  const { filters, filterSettings } = useLoaderData({ from: "/services/" })
  const { appProps } = useRouteContext({ from: "/services/" })
  const { hasAppliedInitialFilters, markInitialFiltersApplied } = useInitialFilters()

  // Use store to track initial filters across tab navigation - prevents re-application when switching between services/vulnerabilities tabs
  useEffect(() => {
    if (hasAppliedInitialFilters) return

    const urlParams = new URLSearchParams(window.location.search)
    const hasUrlFilters = Array.from(urlParams.keys()).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))
    const hasAnySearchParams = urlParams.toString().length > 0

    if (
      !hasUrlFilters &&
      !hasAnySearchParams &&
      appProps?.initialFilters?.support_group?.length
    ) {
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
  }, [navigate, appProps, hasAppliedInitialFilters, markInitialFiltersApplied])

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
