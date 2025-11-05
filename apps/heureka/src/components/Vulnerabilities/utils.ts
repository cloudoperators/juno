// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
// SPDX-License-Identifier: Apache-2.0

import { Filter, FilterSettings } from "../common/Filters/types"
import { GetVulnerabilityFiltersQuery, Page, GetVulnerabilitiesQuery } from "../../generated/graphql"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { VulnerabilitiesSearchParams } from "../../routes/vulnerabilities"
import { IssuesCountsType } from "../types"
import { isEmpty, omit } from "../../utils"

const DEFAULT_COUNT = 0

export function getActiveVulnerabilityFilter(filterSettings: FilterSettings) {
  const filter: any = {}
  filterSettings.selectedFilters?.forEach((f: any) => {
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
    : Object.values(omit(data!.VulnerabilityFilterValues!, ["__typename"])).map((filter) => ({
        displayName: filter?.displayName || "",
        filterName: filter?.filterName || "",
        values: filter?.values?.filter((value) => value !== null) || [],
      }))

export function sanitizeFilterSettings(filters: any, filterSettings: FilterSettings) {
  // Only keep filters that are supported by the backend
  const supported = filters.map((f: any) => f.filterName)
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
}

export type NormalizedVulnerabilityServices = {
  services: VulnerabilityService[]
  pages: Page[]
  totalServices: number
  pageNumber: number
}

export function getNormalizedVulnerabilitiesResponse(
  data: GetVulnerabilitiesQuery | undefined
): NormalizedVulnerabilities {
  const vulnerabilities =
    data?.Vulnerabilities?.edges?.map((edge) => {
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
        earliestTargetRemediationDate: edge?.node?.earliestTargetRemediationDate || "",
        sourceUrl: edge?.node?.sourceUrl || "",
        description: edge?.node?.description || "",
        servicesCount: edge?.node?.services?.totalCount || DEFAULT_COUNT,
        services,
        supportGroups,
      }
    }) || []

  const counts = (data?.Vulnerabilities as any)?.counts

  return {
    vulnerabilities,
    totalVulnerabilities: counts?.total || DEFAULT_COUNT,
    pages: data?.Vulnerabilities?.pageInfo?.pages?.filter((edge) => edge !== null) || [],
    pageNumber: data?.Vulnerabilities?.pageInfo?.pageNumber || 1,
    vulnerabilitiesCounts: {
      critical: counts?.critical || DEFAULT_COUNT,
      high: counts?.high || DEFAULT_COUNT,
      medium: counts?.medium || DEFAULT_COUNT,
      low: counts?.low || DEFAULT_COUNT,
      none: counts?.none || DEFAULT_COUNT,
      total: counts?.total || DEFAULT_COUNT,
    },
  }
}

export function getNormalizedVulnerabilityServicesResponse(
  data: GetVulnerabilitiesQuery | undefined
): NormalizedVulnerabilityServices {
  const services =
    data?.Vulnerabilities?.edges?.[0]?.node?.services?.edges
      ?.filter((serviceEdge) => serviceEdge?.node)
      ?.map((serviceEdge) => ({
        ccrn: serviceEdge?.node?.ccrn || "",
      })) || []

  const totalServices = data?.Vulnerabilities?.edges?.[0]?.node?.services?.totalCount || 0
  const pageInfo = data?.Vulnerabilities?.edges?.[0]?.node?.services?.pageInfo

  return {
    services,
    totalServices,
    pages: pageInfo?.pages?.filter((edge) => edge !== null) || [],
    pageNumber: pageInfo?.pageNumber || 1,
  }
}
