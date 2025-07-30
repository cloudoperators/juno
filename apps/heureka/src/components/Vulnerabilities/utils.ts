// SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
// SPDX-License-Identifier: Apache-2.0

import { FilterSettings } from "../common/Filters/types"
import { GetVulnerabilityFiltersQuery, Page } from "../../generated/graphql"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { VulnerabilitiesSearchParams } from "../../routes/vulnerabilities"

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

export function getNormalizedFilters(data: GetVulnerabilityFiltersQuery | undefined) {
  if (!data?.VulnerabilityFilterValues) return []
  const filterValues = data.VulnerabilityFilterValues
  return Object.entries(filterValues)
    .filter(([, v]) => v && (v as any).values?.length)
    .map(([filterName, v]: any) => ({
      filterName,
      displayName: (v as any).displayName,
      values: (v as any).values?.filter((value: any) => value !== null) || [],
    }))
}

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
  sourceUrl: string | null
  description: string | null
  servicesCount: number
  services?: VulnerabilityService[]
}

export type VulnerabilityService = {
  ccrn: string
}

export type NormalizedVulnerabilities = {
  vulnerabilities: Vulnerability[]
  pages: Page[]
  totalVulnerabilities: number
  pageNumber: number
}

export type NormalizedVulnerabilityServices = {
  services: VulnerabilityService[]
  pages: Page[]
  totalServices: number
  pageNumber: number
}

export function getNormalizedVulnerabilitiesResponse(data: any): NormalizedVulnerabilities {
  const vulnerabilities =
    data?.Vulnerabilities?.edges?.map((edge: any) => {
      // Normalize services
      const services = edge.node.services?.edges
        ?.filter((serviceEdge: any) => serviceEdge?.node)
        ?.map((serviceEdge: any) => ({
          ccrn: serviceEdge.node.ccrn || "",
        })) || []

      return {
        name: edge.node.name,
        severity: edge.node.severity,
        earliestTargetRemediationDate: edge.node.earliestTargetRemediationDate,
        sourceUrl: edge.node.sourceUrl,
        description: edge.node.description,
        servicesCount: edge.node.services?.totalCount || 0,
        services,
      }
    }) || []
  const totalVulnerabilities = data?.Vulnerabilities?.totalCount || 0

  const pageInfo = data?.Vulnerabilities?.pageInfo
  const pages = pageInfo?.pages || []
  const pageNumber = pageInfo?.pageNumber || 1

  return {
    vulnerabilities,
    totalVulnerabilities,
    pages,
    pageNumber,
  }
}

export function getNormalizedVulnerabilityServicesResponse(data: any): NormalizedVulnerabilityServices {
  const services = data?.Vulnerabilities?.edges?.[0]?.node?.services?.edges
    ?.filter((serviceEdge: any) => serviceEdge?.node)
    ?.map((serviceEdge: any) => ({
      ccrn: serviceEdge.node.ccrn || "",
    })) || []

  const totalServices = data?.Vulnerabilities?.edges?.[0]?.node?.services?.totalCount || 0

  const pageInfo = data?.Vulnerabilities?.edges?.[0]?.node?.services?.pageInfo
  const pages = pageInfo?.pages || []
  const pageNumber = pageInfo?.pageNumber || 1

  return {
    services,
    totalServices,
    pages,
    pageNumber,
  }
}
