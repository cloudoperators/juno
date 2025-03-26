/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty } from "lodash"
import { FilterSettings } from "../common/Filters/types"
import { useGetServicesCountsQuery, GetServicesCountsQuery, SeverityValues } from "../../generated/graphql"
import { getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesCountInput = {
  filterSettings: FilterSettings
}

export type ServiceCounts = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
  totalCount: number
}

const getNormalizedData = (data: GetServicesCountsQuery | undefined | null): ServiceCounts => {
  const counts = {
    critical: data?.critical?.totalCount || 0,
    high: data?.high?.totalCount || 0,
    medium: data?.medium?.totalCount || 0,
    low: data?.low?.totalCount || 0,
    none: data?.none?.totalCount || 0,
  }

  return {
    ...counts,
    totalCount: Object.values(counts).reduce((sum, count) => sum + count, 0),
  }
}

export const useFetchServicesCounts = ({ filterSettings }: UseFetchServicesCountInput) => {
  const baseFilters = getActiveServiceFilter(filterSettings)

  const filters = {
    serviceCcrn: baseFilters.serviceCcrn || [],
    supportGroupCcrn: baseFilters.supportGroupCcrn || [],
  }

  const {
    data: counts,
    previousData,
    loading,
    error,
  } = useGetServicesCountsQuery({
    variables: {
      crit: {
        ...filters,
        severity: [SeverityValues.Critical],
      },
      high: {
        ...filters,
        severity: [SeverityValues.High],
      },
      med: {
        ...filters,
        severity: [SeverityValues.Medium],
      },
      low: {
        ...filters,
        severity: [SeverityValues.Low],
      },
      none: {
        ...filters,
        severity: [SeverityValues.None],
      },
    },
  })

  const normCounts = getNormalizedData(isEmpty(counts) ? previousData : counts)

  return {
    loading,
    counts: normCounts,
    error: getNormalizedError(error),
  }
}
