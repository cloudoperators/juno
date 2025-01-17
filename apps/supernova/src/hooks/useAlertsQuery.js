/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
  useGlobalsApiEndpoint,
  useActivePredefinedFilter,
  useActiveFilters,
  useSearchTerm,
  useFilterActions,
} from "../components/StoreProvider"
import { useMemo } from "react"
import { fetchAlerts } from "../api/alerts"
import { countAlerts } from "../lib/utils"

export const useAlertsQuery = () => {
  const queryClient = useQueryClient()
  const endpoint = useGlobalsApiEndpoint()
  const filters = useActiveFilters()
  const predefinedFilter = useActivePredefinedFilter()
  const searchTerm = useSearchTerm()
  const { setSearchTerm } = useFilterActions()

  // Fetch the data with React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["alerts"],
    queryFn: async () => {
      const data = await fetchAlerts(endpoint)
      return data
    },
    staleTime: 5 * 1000 * 60, // Cache for 5 minute
  })
  // cache data for optimistic updates
  queryClient.setQueryData("alerts", data)

  const { originalItems, filteredItems, counts, regions, updatedAt } = useMemo(() => {
    if (!data) return { originalItems: [], filteredItems: [], counts: {} }

    const { alerts } = data
    let filtered = [...alerts] // Start with the original alerts data

    // Apply predefined filters
    if (predefinedFilter?.matchers) {
      const regexFilters = Object.entries(predefinedFilter.matchers)
      filtered = filtered.filter((alert) =>
        regexFilters.every(([key, regex]) => {
          const labelValue = alert.labels?.[key]
          return labelValue && new RegExp(regex, "i").test(labelValue)
        })
      )
    }
    // Apply active filters
    if (filters) {
      filtered = filtered.filter((alert) =>
        Object.entries(filters).every(([key, values]) => values.includes(alert.labels?.[key]))
      )
    }

    // Apply search term
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, "i")
      filtered = filtered.filter((alert) => searchRegex.test(JSON.stringify(alert)))
    }

    // Count logic
    const counts = countAlerts(filtered)
    const regions = Object.keys(counts?.regions).sort()
    const updatedAt = Date.now()

    return { originalItems: alerts, filteredItems: filtered, counts, regions, updatedAt }
  }, [data, filters, predefinedFilter, searchTerm])

  return {
    data: originalItems,
    filteredItems,
    totalCounts: counts?.global,
    severityCountsPerRegion: counts?.regions,
    regions: regions,
    regionsFiltered: filteredItems?.regions,
    isLoading,
    error,
    setSearchTerm,
    updatedAt: updatedAt,
  }
}
