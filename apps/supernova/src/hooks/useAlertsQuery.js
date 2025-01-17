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
import { countAlerts, sortAlerts } from "../lib/utils"

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

const fetchAlerts = async (endpoint) => {
  let compareAlertString
  try {
    const response = await fetch(`${endpoint}/alerts`)

    if (!response.ok) {
      // Parse the error object from the response body
      const errorObject = await response.json().catch(() => {
        throw new Error(`Unexpected error: Unable to parse error response.`)
      })

      // Throw the error object directly
      throw errorObject
    }

    const items = await response.json() // Parse JSON data

    let alerts = sortAlerts(items)

    // copy additional filter options to labels for easier filter selection
    // because the alert object is nested this makes it a lot easier to filter, since we only use what is present in alert.labels
    alerts.forEach((alert) => {
      if (alert.labels) {
        alert.labels.status = alert.status?.state
      }
    })

    // check if new loaded alerts are different from the last response
    const newCompareString = JSON.stringify(alerts)
    if (compareAlertString !== newCompareString) {
      compareAlertString = newCompareString

      // inform listener to receive new alerts
      return {
        alerts: alerts,
        counts: countAlerts(alerts),
      }
    } else {
      // return null when nothing new
      return null
    }
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}
