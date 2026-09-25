// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
// SPDX-License-Identifier: Apache-2.0

import { Filter, FilterSettings } from "../common/Filters/types"
import { GetVulnerabilityFiltersQuery, GetVulnerabilitiesQuery } from "../../generated/graphql"
// v6: Import extracted types from types helper
import type { Page } from "../../generated/types"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { VulnerabilitiesSearchParams } from "../../routes/vulnerabilities"
import { IssuesCountsType } from "../types"
import { isEmpty } from "../../utils"

const DEFAULT_COUNT = 0

export function getActiveVulnerabilityFilter(filterSettings: FilterSettings): Record<string, string[]> {
  const filter: Record<string, string[]> = {}
  filterSettings.selectedFilters?.forEach((f) => {
    if (f.name && f.value) {
      filter[f.name] = [f.value]
    }
  })
  if (filterSettings.searchTerm) {
    filter.search = [filterSettings.searchTerm]
  }
  return filter
}

export function extractFilterSettingsFromSearchParams(searchParams: VulnerabilitiesSearchParams): FilterSettings {
  return {
    searchTerm: searchParams.searchTerm,
    selectedFilters: Object.entries(searchParams)
      .filter(([key]) => key.startsWith(SELECTED_FILTER_PREFIX))
      .flatMap(([key, value]) => {
        const name = key.slice(2) // Remove "selected_" prefix
        if (Array.isArray(value)) {
          return value.map((v) => ({ name, value: v }))
        }
        return [{ name, value: value as string }]
      }),
  }
}

export const getNormalizedFilters = (data: GetVulnerabilityFiltersQuery | undefined | null): Filter[] =>
  isEmpty(data) || isEmpty(data?.VulnerabilityFilterValues)
    ? []
    : (Object.entries(data!.VulnerabilityFilterValues!)
        .filter(([key]) => key !== "__typename")
        // v6: Type assertions needed because Object.entries doesn't narrow nullable union types - fallback operators guarantee non-null values
        .map(([_, filter]) => ({
          displayName: (filter?.displayName as string) || "",
          filterName: (filter?.filterName as string) || "",
          values: ((filter?.values as Array<string | null> | null)?.filter((value) => value !== null) as string[]) || [],
        })))

export function sanitizeFilterSettings(filters: { filterName: string }[], filterSettings: FilterSettings) {
  // Only keep filters that are supported by the backend
  const supported = filters.map((f) => f.filterName)
  return {
    ...filterSettings,
    selectedFilters: filterSettings.selectedFilters?.filter((f) => supported.includes(f.name)),
  }
}

export function getFiltersForUrl(filterSettings: FilterSettings): Record<string, string | string[]> {
  if (!filterSettings?.selectedFilters) {
    return {}
  }

  return {
    searchTerm: filterSettings.searchTerm || "",
    ...filterSettings.selectedFilters.reduce<Record<string, string | string[]>>((acc, filter) => {
      const key = `${SELECTED_FILTER_PREFIX}${filter.name}`
      if (acc[key]) {
        acc[key] = Array.isArray(acc[key]) ? [...acc[key], filter.value] : [acc[key], filter.value]
      } else {
        acc[key] = filter.value
      }
      return acc
    }, {}),
  }
}

export type Vulnerability = {
  name: string
  severity: string
  earliestTargetRemediationDate: string
  sourceUrl: string
  description: string
  servicesCount: number
  services?: VulnerabilityService[]
  supportGroups?: string[]
}

export type VulnerabilityService = {
  ccrn: string
}

export type NormalizedVulnerabilities = {
  vulnerabilities: Vulnerability[]
  pages: Page[]
  totalVulnerabilities: number
  pageNumber: number
  vulnerabilitiesCounts: IssuesCountsType
  totalCount: number
}

export type NormalizedVulnerabilityServices = {
  services: VulnerabilityService[]
  pages: Page[]
  totalServices: number
  pageNumber: number
}

export function getNormalizedVulnerabilitiesResponse(data: unknown): NormalizedVulnerabilities {
  const typedData = data as GetVulnerabilitiesQuery | undefined
  const vulnerabilities =
    typedData?.Vulnerabilities?.edges?.map((edge) => {
      // Normalize services
      const services =
        edge?.node.services?.edges
          ?.filter((serviceEdge) => serviceEdge?.node)
          ?.map((serviceEdge) => ({
            ccrn: serviceEdge?.node.ccrn || "",
          })) || []

      // Normalize support groups
      const supportGroups =
        edge?.node?.supportGroups?.edges
          ?.filter((edge) => edge !== null)
          ?.map((groupEdge) => groupEdge?.node.ccrn || "") || []

      return {
        name: edge?.node?.name || "",
        severity: edge?.node?.severity || "",
        earliestTargetRemediationDate: (edge?.node?.earliestTargetRemediationDate as string | null | undefined) || "",
        sourceUrl: edge?.node?.sourceUrl || "",
        description: edge?.node?.description || "",
        servicesCount: edge?.node?.services?.totalCount || DEFAULT_COUNT,
        services,
        supportGroups,
      }
    }) || []

  type VulnerabilitiesCounts = {
    total?: number | null
    critical?: number | null
    high?: number | null
    medium?: number | null
    low?: number | null
    none?: number | null
  }
  const counts = (typedData?.Vulnerabilities as { counts?: VulnerabilitiesCounts } | undefined)?.counts

  const totalVulnerabilities = counts?.total || DEFAULT_COUNT
  return {
    vulnerabilities,
    totalVulnerabilities,
    // v6: Type predicate required due to stricter null handling - filters out null pages and narrows Array<Page | null> to Array<Page>
    pages: (typedData?.Vulnerabilities?.pageInfo?.pages?.filter((page): page is NonNullable<typeof page> => page !== null) || []) as Page[],
    pageNumber: typedData?.Vulnerabilities?.pageInfo?.pageNumber || 1,
    vulnerabilitiesCounts: {
      critical: counts?.critical || DEFAULT_COUNT,
      high: counts?.high || DEFAULT_COUNT,
      medium: counts?.medium || DEFAULT_COUNT,
      low: counts?.low || DEFAULT_COUNT,
      none: counts?.none || DEFAULT_COUNT,
      total: totalVulnerabilities,
    },
    totalCount: totalVulnerabilities,
  }
}

export function getNormalizedVulnerabilityServicesResponse(data: unknown): NormalizedVulnerabilityServices {
  const typedData = data as GetVulnerabilitiesQuery | undefined
  const services =
    typedData?.Vulnerabilities?.edges?.[0]?.node?.services?.edges
      ?.filter((serviceEdge) => serviceEdge?.node)
      ?.map((serviceEdge) => ({
        ccrn: serviceEdge?.node?.ccrn || "",
      })) || []

  const totalServices = typedData?.Vulnerabilities?.edges?.[0]?.node?.services?.totalCount || 0
  const pageInfo = typedData?.Vulnerabilities?.edges?.[0]?.node?.services?.pageInfo

  return {
    services,
    totalServices,
    // v6: Type predicate required due to stricter null handling - filters out null pages and narrows Array<Page | null> to Array<Page>
    pages: (pageInfo?.pages?.filter((page): page is NonNullable<typeof page> => page !== null) || []) as Page[],
    pageNumber: pageInfo?.pageNumber || 1,
  }
}
