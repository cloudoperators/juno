/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty } from "lodash"
import { FilterSettings } from "../common/Filters/types"
import { useGetServicesIssuesCountsQuery, GetServicesIssuesCountsQuery } from "../../generated/graphql"
import { getActiveServiceFilter, getNormalizedError } from "./utils"

type UseFetchServicesIssuesCountsInput = {
  filterSettings: FilterSettings
}

export type IssuesCountsType = {
  critical: number
  high: number
  medium: number
  low: number
  none: number
  total: number
}

export type IssuesCountsWithTotalCountType = IssuesCountsType & {
  totalCount: number
}

const getNormalizedData = (data: GetServicesIssuesCountsQuery | undefined | null): IssuesCountsWithTotalCountType => {
  const counts = {
    critical: data?.IssueCounts?.critical || 0,
    high: data?.IssueCounts?.high || 0,
    medium: data?.IssueCounts?.medium || 0,
    low: data?.IssueCounts?.low || 0,
    none: data?.IssueCounts?.none || 0,
  }

  return {
    ...counts,
    totalCount: Object.values(counts).reduce((sum, count) => sum + count, 0),
  }
}

export const useFetchServicesIssuesCounts = ({ filterSettings }: UseFetchServicesIssuesCountsInput) => {
  const baseFilters = getActiveServiceFilter(filterSettings)

  const filters = {
    supportGroupCcrn: baseFilters.supportGroupCcrn || [],
    serviceCcrn: baseFilters.serviceCcrn || [],
  }

  const {
    data: counts,
    previousData,
    loading,
    error,
  } = useGetServicesIssuesCountsQuery({
    variables: {
      filter: filters,
    },
  })

  return {
    loading,
    counts: getNormalizedData(isEmpty(counts) ? previousData : counts),
    error: getNormalizedError(error),
  }
}
