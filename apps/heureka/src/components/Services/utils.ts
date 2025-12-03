/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty, isNil, omit } from "../../utils"
import { ApolloError } from "@apollo/client"
import {
  Edge,
  GetServicesQuery,
  Page,
  Service,
  ServiceEdge,
  ServiceFilter,
  GetServiceImageVersionsQuery,
  GetServiceFiltersQuery,
  GetImagesQuery,
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

export type ServiceImage = {
  version: string
  tag: string
  repository: string
  imageRegistryUrl: string
  ccrn: string
  issueCounts: IssuesCountsType
  componentInstancesCount: number
  componentInstances?: ComponentInstance[]
  versionsCount?: number // Number of versions for this image
}

type NormalizedServiceImages = {
  totalImages: number
  pages: Page[]
  pageNumber: number
  images: ServiceImage[]
}

export const getNormalizedImagesResponse = (
  data: GetServiceImageVersionsQuery | GetImagesQuery | undefined
): NormalizedServiceImages => {
  // Handle GetImagesQuery structure - return Images directly (not flattened versions)
  if (data && "Images" in data) {
    const imagesData = data as GetImagesQuery
    const images: ServiceImage[] = []

    imagesData?.Images?.edges?.forEach((imageEdge) => {
      if (!imageEdge?.node) return

      const image = imageEdge.node
      const repository = image.repository || ""
      const versionsCount = image.versions?.edges?.length || 0
      const firstVersion = image.versions?.edges?.[0]?.node?.version || ""

      // Create one row per Image (not per version)
      images?.push({
        version: firstVersion, // Show first version or empty
        tag: firstVersion, // Using first version as tag
        repository,
        imageRegistryUrl: image.imageRegistryUrl || "",
        ccrn: image.id || "",
        issueCounts: image.vulnerabilityCounts || {
          critical: 0,
          high: 0,
          medium: 0,
          low: 0,
          none: 0,
          total: 0,
        },
        componentInstancesCount: 0, // Not available in GetImages query
        componentInstances: [],
        versionsCount,
      })
    })

    return {
      totalImages: imagesData?.Images?.totalCount || 0,
      pageNumber: imagesData?.Images?.pageInfo?.pageNumber || 1,
      pages: imagesData?.Images?.pageInfo?.pages?.filter((edge): edge is Page => edge !== null) || [],
      images,
    }
  }

  // Fallback for undefined data or unsupported query types
  return {
    totalImages: 0,
    pageNumber: 1,
    pages: [],
    images: [],
  }
}

export type Issue = {
  severity: string
  name: string
  earliestTargetRemediation: string
  description: string
  sourceLink: string
}

type NormalizedServiceImageVulnerabilities = {
  issues: Issue[]
  totalImageVulnerabilities: number
  pages: Page[]
  pageNumber: number
}

export const getNormalizedImageVulnerabilitiesResponse = (data: any): NormalizedServiceImageVulnerabilities => {
  // Handle GetImagesQuery structure
  if (data && "Images" in data) {
    const imagesData = data as GetImagesQuery
    const imageNode = imagesData?.Images?.edges?.[0]?.node

    if (!imageNode?.vulnerabilities?.edges) {
      return { issues: [], totalImageVulnerabilities: 0, pages: [], pageNumber: 1 }
    }

    const issues = imageNode.vulnerabilities.edges
      .filter((edge: any) => edge?.node)
      .map((edge: any) => {
        const node = edge.node
        return {
          severity: node?.severity || "-",
          name: node?.name || "-",
          earliestTargetRemediation: node?.earliestTargetRemediationDate || "-",
          description: node?.description || "-",
          sourceLink: node?.sourceUrl || "-",
        }
      })

    // If pagination info is available, use it; otherwise calculate from edges
    const totalImageVulnerabilities = imageNode?.vulnerabilityCounts?.total ?? 0
    const pages = imageNode.vulnerabilities.pageInfo?.pages?.filter((edge): edge is Page => edge !== null) || []
    const pageNumber = imageNode.vulnerabilities.pageInfo?.pageNumber || 1

    return {
      issues,
      totalImageVulnerabilities,
      pages,
      pageNumber,
    }
  }

  if (!data?.ComponentVersions?.edges?.[0]?.node?.issues?.edges) {
    return { issues: [], totalImageVulnerabilities: 0, pages: [], pageNumber: 1 }
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

  const totalImageVulnerabilities = data?.ComponentVersions?.edges?.[0]?.node?.issues?.totalCount || 0
  const pages =
    data?.ComponentVersions?.edges?.[0]?.node?.issues?.pageInfo?.pages?.filter((edge: any) => edge !== null) || []
  const pageNumber = data?.ComponentVersions?.edges?.[0]?.node?.issues?.pageInfo?.pageNumber || 1

  return {
    issues,
    totalImageVulnerabilities,
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
  const result: Record<string, string | string[]> = {
    searchTerm: filterSettings.searchTerm || "",
  }

  if (filterSettings?.selectedFilters && filterSettings.selectedFilters.length > 0) {
    filterSettings.selectedFilters.forEach((filter) => {
      const key = `${SELECTED_FILTER_PREFIX}${filter.name}`
      if (result[key]) {
        result[key] = Array.isArray(result[key]) ? [...result[key], filter.value] : [result[key], filter.value]
      } else {
        result[key] = filter.value
      }
    })
  }

  return result
}

export const getNormalizedFilters = (data: GetServiceFiltersQuery | undefined | null): Filter[] =>
  isEmpty(data) || isEmpty(data?.ServiceFilterValues)
    ? []
    : Object.values(omit(data!.ServiceFilterValues!, ["__typename"])).map((filter) => ({
        displayName: filter?.displayName || "",
        filterName: filter?.filterName || "",
        values: filter?.values?.filter((value) => value !== null) || [],
      }))

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
