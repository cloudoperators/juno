/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty, isNil, map, omit } from "lodash"
import { ApolloError } from "@apollo/client"
import {
  Edge,
  GetServicesQuery,
  Page,
  Service,
  ServiceEdge,
  ServiceFilter,
  GetServiceImageVersionsQuery,
  GetServiceFilterValuesQuery,
  GetSupportGroupFilterValuesQuery,
} from "../../generated/graphql"
import { Filter, FilterSettings, SelectedFilter, ServiceFilterReduced } from "../common/Filters/types"
import { ServiceType } from "../types"
import { IssuesCountsType } from "../types"
import { SELECTED_FILTER_PREFIX } from "../../constants"
import { InitialFilters } from "../../App"
import { ServicesSearchParams } from "../../routes/services"

const getSupportGroups = (serviceEdge?: ServiceEdge) => {
  return (
    serviceEdge?.node?.supportGroups?.edges
      ?.map((edge) => edge?.node?.ccrn)
      .filter((node): node is string => !isNil(node)) || []
  )
}

const getServiceOwners = (serviceEdge?: ServiceEdge) => {
  return (
    serviceEdge?.node?.owners?.edges?.map((edge) => edge?.node?.name).filter((node): node is string => !isNil(node)) ||
    []
  )
}

export type NormalizedServicesResponse = {
  pageNumber: number
  pages: Page[]
  servicesIssuesCount: IssuesCountsType // All services issues count
  services: ServiceType[]
}

export const getNormalizedServicesResponse = (data: GetServicesQuery | undefined): NormalizedServicesResponse => {
  return {
    pageNumber: data?.Services?.pageInfo?.pageNumber || 1,
    pages: data?.Services?.pageInfo?.pages?.filter((edge) => edge !== null) || [],
    servicesIssuesCount: {
      critical: data?.Services?.issueCounts?.critical || 0,
      high: data?.Services?.issueCounts?.high || 0,
      medium: data?.Services?.issueCounts?.medium || 0,
      low: data?.Services?.issueCounts?.low || 0,
      none: data?.Services?.issueCounts?.none || 0,
      total: data?.Services?.issueCounts?.total || 0,
    },
    // Filter out null edges and map to ServiceType
    services: isNil(data?.Services?.edges)
      ? []
      : data?.Services?.edges
          ?.filter((edge) => edge !== null)
          .map((edge?: Edge): ServiceType => {
            const node: Service | undefined = edge?.node
            const service: ServiceType = {
              id: node?.id?.toString() || "",
              name: node?.ccrn || "",
              serviceDetails: {
                supportGroups: getSupportGroups(edge),
              },
              serviceOwners: getServiceOwners(edge),
              issuesCount: {
                critical: node?.issueCounts?.critical || 0,
                high: node?.issueCounts?.high || 0,
                medium: node?.issueCounts?.medium || 0,
                low: node?.issueCounts?.low || 0,
                none: node?.issueCounts?.none || 0,
                total: node?.issueCounts?.total || 0,
              },
              remediationDate: "2023-01-01", //TODO: remove mock data when available
            }
            return service
          }),
  }
}

/**
 * Normalizes the error from Apollo Client into a user-friendly message.
 *
 * This function checks if the error is a network error and if there are any
 * GraphQL errors within it. If present, it formats them into a readable
 * string, including the error message and the associated path (if available).
 *
 * The `networkErrors` is temporarily typed as `any` because the handling
 * of Apollo Client errors is still a work in progress. This is a temporary
 * solution until we implement a more robust typing system for all possible
 * error types from Apollo Client. There is an existing task to address
 * this properly, as handling and typing errors correctly is outside the
 * scope of this current implementation. See the task for more details:
 * https://github.com/cloudoperators/juno/issues/847
 *
 * @param error - The error object from Apollo Client, potentially containing
 * network and GraphQL errors.
 *
 * @returns A string representation of the error message, or a fallback message
 * if no specific error is found.
 */
export const getNormalizedError = (error?: ApolloError) => {
  if (isNil(error)) return undefined

  // Extract network errors if they exist
  const networkErrors = error.networkError as any
  const netErrors = networkErrors?.result?.errors
  if (netErrors && netErrors?.length > 0) {
    return netErrors
      .map((e: any) => {
        const path = e.path ? ` (Path: ${e.path.join(" → ")})` : ""
        return `${e.message}${path}`
      })
      .join("; ")
  }

  // Fallback to the standard error message
  return error.message || "Something went wrong"
}

export const getActiveServiceFilter = (filterSettings: FilterSettings): ServiceFilter => ({
  search: filterSettings?.searchTerm ? [filterSettings.searchTerm] : undefined,
  ...filterSettings?.selectedFilters
    // filter out inactive filters
    ?.filter((filter) => !filter.inactive)
    // reshape filters to match the shape accepted by the API
    .reduce((acc: ServiceFilterReduced, filter) => {
      const filterName = filter.name as keyof ServiceFilterReduced
      if (!isNil(acc[filterName])) {
        acc[filterName] = [...acc[filterName], filter.value]
      } else {
        acc[filterName] = [filter.value]
      }
      return acc
    }, {}),
})

export type ComponentInstance = {
  id: string
  ccrn?: string | ""
  region?: string | ""
  cluster?: string | ""
  namespace?: string | ""
  pod?: string | ""
  container?: string | ""
}

export type ServiceImageVersion = {
  version: string
  tag: string
  repository: string
  ccrn: string
  issueCounts: IssuesCountsType
  componentInstancesCount: number
  componentInstances?: ComponentInstance[]
}

type NormalizedServiceImageVersions = {
  totalImageVersions: number
  pages: Page[]
  pageNumber: number
  imageVersions: ServiceImageVersion[]
}

export const getNormalizedImageVersionsResponse = (
  data: GetServiceImageVersionsQuery | undefined
): NormalizedServiceImageVersions => ({
  totalImageVersions: data?.ComponentVersions?.totalCount || 0,
  pageNumber: data?.ComponentVersions?.pageInfo?.pageNumber || 1,
  pages: data?.ComponentVersions?.pageInfo?.pages?.filter((edge) => edge !== null) || [],
  imageVersions: isNil(data?.ComponentVersions?.edges)
    ? []
    : data?.ComponentVersions?.edges
        ?.filter((edge) => edge !== null)
        .map(
          (edge): ServiceImageVersion => ({
            version: edge?.node?.version || "",
            tag: edge?.node?.tag || "",
            repository: edge?.node?.repository || "",
            ccrn: edge?.node?.component?.ccrn || "",
            issueCounts: edge?.node?.issueCounts || {
              critical: 0,
              high: 0,
              medium: 0,
              low: 0,
              none: 0,
              total: 0,
            },
            componentInstancesCount: edge?.node?.componentInstances?.totalCount ?? 0,
            componentInstances:
              edge?.node?.componentInstances?.edges
                ?.filter((edge) => edge?.node) // Remove null edges
                .map((edge) => ({
                  id: edge!.node.id,
                  ccrn: edge!.node.ccrn ?? "",
                  region: edge!.node.region ?? "",
                  cluster: edge!.node.cluster ?? "",
                  namespace: edge!.node.namespace ?? "",
                  pod: edge!.node.pod ?? "",
                  container: edge!.node.container ?? "",
                })) ?? [],
          })
        ),
})

export type Issue = {
  severity: string
  name: string
  earliestTargetRemediation: string
  description: string
  sourceLink: string
}

type NormalizedImageVersionIssues = {
  issues: Issue[]
  totalImageVersionIssues: number
  pages: Page[]
  pageNumber: number
}

export const getNormalizedImageVersionIssuesResponse = (data: any): NormalizedImageVersionIssues => {
  if (!data?.ComponentVersions?.edges?.[0]?.node?.issues?.edges) {
    return { issues: [], totalImageVersionIssues: 0, pages: [], pageNumber: 1 }
  }

  const issues = data.ComponentVersions.edges[0].node.issues.edges
    .filter((edge: any) => edge?.node)
    .map((edge: any) => {
      const node = edge.node
      const severity = node?.highestSeverity?.edges?.[0]?.node?.severity?.value || "-"
      const earliestTargetRemediation =
        node?.earliestTargetRemediationDate?.edges?.[0]?.node?.targetRemediationDate || "-"
      const sourceLink = node?.issueVariants?.edges?.[0]?.node?.externalUrl || "-"

      return {
        severity,
        name: node?.primaryName || "-",
        earliestTargetRemediation,
        description: node?.description || "-",
        sourceLink,
      }
    })

  const totalImageVersionIssues = data?.ComponentVersions?.edges?.[0]?.node?.issues?.totalCount || 0
  const pages =
    data?.ComponentVersions?.edges?.[0]?.node?.issues?.pageInfo?.pages?.filter((edge: any) => edge !== null) || []
  const pageNumber = data?.ComponentVersions?.edges?.[0]?.node?.issues?.pageInfo?.pageNumber || 1

  return {
    issues,
    totalImageVersionIssues,
    pages,
    pageNumber,
  }
}

/**
 * This function converts the selected filters from the FilterSettings into a format that is accepted by the url-state-provider/v2/encode
 * Examples:
 * Input:
 *   filterSettings = {
 *     selectedFilters: [
 *       { name: "region", value: "eu", inactive: false },
 *       { name: "region", value: "us", inactive: false },
 *       { name: "owner", value: "alice", inactive: false }
 *     ]
 *   }
 * Output:
 *   {
 *     "selected_region": ["eu", "us"],
 *     "selected_owner": "alice"
 *   }
 */
export const getFiltersForUrl = (filterSettings: FilterSettings): Record<string, string | string[]> => {
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

export const getNormalizedFilters = (data: GetServiceFilterValuesQuery | undefined | null): Filter[] =>
  isEmpty(data) || isEmpty(data.ServiceFilterValues)
    ? []
    : map(omit(data.ServiceFilterValues, ["__typename"]), (filter) => ({
        displayName: filter?.displayName || "",
        filterName: filter?.filterName || "",
        values: filter?.values?.filter((value) => value !== null) || [],
      }))

export const getNormalizedFiltersFromSeparateResults = (
  serviceFiltersData: GetServiceFilterValuesQuery | undefined | null,
  supportGroupFiltersData: GetSupportGroupFilterValuesQuery | undefined | null
): Filter[] => {
  const filters: Filter[] = []
  
  // Get service filters from GetServiceFilterValues (unfiltered services)
  if (serviceFiltersData?.ServiceFilterValues?.serviceCcrn) {
    const serviceFilter = serviceFiltersData.ServiceFilterValues.serviceCcrn
    filters.push({
      displayName: serviceFilter.displayName || "",
      filterName: serviceFilter.filterName || "",
      values: serviceFilter.values?.filter((value) => value !== null) || [],
    })
  }
  
  // Get support group filters from GetSupportGroupFilterValues (unfiltered support groups)
  if (supportGroupFiltersData?.ServiceFilterValues?.supportGroupCcrn) {
    const supportGroupFilter = supportGroupFiltersData.ServiceFilterValues.supportGroupCcrn
    filters.push({
      displayName: supportGroupFilter.displayName || "",
      filterName: supportGroupFilter.filterName || "",
      values: supportGroupFilter.values?.filter((value) => value !== null) || [],
    })
  }
  
  return filters
}

// Extract initial filters from the supplied initialFilters in the appProps
export const getInitialFilters = (initialFilters?: InitialFilters): SelectedFilter[] =>
  initialFilters?.support_group?.map((sg) => ({ name: "supportGroupCcrn", value: sg })) ?? []

// Extract filters from the search parameters, looking for keys that start with SELECTED_FILTER_PREFIX
export const extractFilterSettingsFromSearchParams = (searchParams: ServicesSearchParams): FilterSettings => ({
  searchTerm: searchParams.searchTerm,
  selectedFilters: Object.entries(searchParams)
    .filter(([key]) => key.startsWith(SELECTED_FILTER_PREFIX))
    .flatMap(([key, value]) => {
      const name = key.slice(2)
      if (Array.isArray(value)) {
        return value.map((v) => ({ name, value: v }))
      }
      return [{ name, value: value as string }]
    }),
})

export const sanitizeFilterSettings = (filters: Filter[], filterSettings: FilterSettings): FilterSettings => {
  const validFilters = filterSettings.selectedFilters?.filter((selected) => {
    const filter = filters.find((f) => f.filterName === selected.name)
    return filter && selected.value.trim() && filter.values.includes(selected.value)
  })
  return {
    ...filterSettings,
    selectedFilters: validFilters,
  }
}

/**
 * Builds a ServiceFilter object from the current filter settings
 * Used to filter support group options based on selected services
 * When user selects services, we want to show only support groups that contain those services
 */
export const buildServiceFilter = (filterSettings: FilterSettings) => {
  const selectedServices = filterSettings?.selectedFilters?.filter(
    (filter) => filter.name === "serviceCcrn"
  )
  
  if (!selectedServices || selectedServices.length === 0) {
    return undefined
  }
  
  return {
    serviceCcrn: selectedServices.map((service) => service.value),
  }
}

/**
 * Builds a SupportGroupFilter object from the current filter settings
 * Used to filter service options based on selected support groups
 * When user selects support groups, we want to show only services that belong to those support groups
 */
export const buildSupportGroupFilter = (filterSettings: FilterSettings) => {
  const selectedSupportGroups = filterSettings?.selectedFilters?.filter(
    (filter) => filter.name === "supportGroupCcrn"
  )
  
  if (!selectedSupportGroups || selectedSupportGroups.length === 0) {
    return undefined
  }
  
  return {
    supportGroupCcrn: selectedSupportGroups.map((group) => group.value),
  }
}
