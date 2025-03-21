/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FilterSettings } from "../common/Filters/types"
import { useGetServicesCountsQuery, IssueMatchFilter } from "../../generated/graphql"
import { getNormalizedData, getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesCountInput = {
  filterSettings: FilterSettings
}

enum SeverityValues {
  Critical = "Critical",
  High = "High",
  Medium = "Medium",
  Low = "Low",
  None = "None",
}

export type ServiceCounts = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
}

const normalizeCounts = (counts: any): ServiceCounts => {
  const defaultCounts = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    none: 0,
  }

  return Object.keys(defaultCounts).reduce((normalized, key) => {
    // @ts-ignore since we're using dynamic keys, it should be safe here
    normalized[key as keyof ServiceCounts] = counts?.[key]?.totalCount || defaultCounts[key]
    return normalized
  }, {} as ServiceCounts)
}

export const useFetchServicesCounts = ({ filterSettings }: UseFetchServicesCountInput) => {
  const baseFilters = getActiveServiceFilter(filterSettings)

  const filteredBaseFilters = {
    affectedService: baseFilters.serviceCcrn || [],
    supportGroupCcrn: baseFilters.supportGroupCcrn || [],
  }

  const variables = (Object.values(SeverityValues) as SeverityValues[]).reduce(
    (acc, severity) => ({
      ...acc,
      [severity.toLowerCase().slice(0, 3)]: {
        ...filteredBaseFilters,
        severity: [severity],
      },
    }),
    {} as Record<string, IssueMatchFilter>
  )

  console.log(">>>>>>>>>>>>>>>>>>>>>>>>variables>>>>>>>>>>>>>>>>>>>>>>>>", variables)

  const {
    data: counts,
    previousData,
    loading,
    error,
  } = useGetServicesCountsQuery({
    variables,
  })

  return {
    loading,
    counts: normalizeCounts(counts || previousData),
    error: getNormalizedError(error),
  }
}
