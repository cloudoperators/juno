/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isEmpty, isNil, omit } from "../../utils"
import {
  Edge,
  GetServicesQuery,
  Page,
  Service,
  ServiceEdge,
  ServiceFilter,
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
  totalCount: number
}

export const getNormalizedServicesResponse = (data: unknown): NormalizedServicesResponse => {
  const typedData = data as GetServicesQuery | undefined
  // Filter out null edges and map to ServiceType
  const servicesEdges = typedData?.Services?.edges
  const services =
    !servicesEdges || servicesEdges.length === 0
      ? []
      : servicesEdges
          .filter((edge) => edge !== null)
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
          }) || []

  // When edges is [] or pageInfo is null, there are no results
  const pageInfo = typedData?.Services?.pageInfo
  const hasNoResults = services.length === 0 || !pageInfo

  return {
    pageNumber: pageInfo?.pageNumber || 1,
    pages: pageInfo?.pages?.filter((edge) => edge !== null) || [],
    servicesIssuesCount: {
      critical: typedData?.Services?.issueCounts?.critical || 0,
      high: typedData?.Services?.issueCounts?.high || 0,
      medium: typedData?.Services?.issueCounts?.medium || 0,
      low: typedData?.Services?.issueCounts?.low || 0,
      none: typedData?.Services?.issueCounts?.none || 0,
      total: typedData?.Services?.issueCounts?.total || 0,
    },
    services,
    // When edges is [] or pageInfo is null, totalCount should be 0
    totalCount: hasNoResults ? 0 : services.length,
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
export const getNormalizedError = (error?: { networkError?: unknown; message?: string }) => {
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

export type ImageVersion = {
  id: string
  version: string
}

// ComponentInstance is not available in GetImages query but kept for backward compatibility
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
  id: string
  repository: string
  imageRegistryUrl: string
  vulnerabilityCounts: IssuesCountsType
  versionsCount: number // Number of versions for this image
  firstVersion: string // First version from the versions list
  versions: ImageVersion[] // List of versions for this image
  vulnerabilities?: ImageVulnerability[] // Not available in GetImages query
  componentInstances?: ComponentInstance[] // Not available in GetImages query
}

type NormalizedServiceImages = {
  totalImages: number
  pages: Page[]
  pageNumber: number
  images: ServiceImage[]
  totalCount: number
}

export const getNormalizedImagesResponse = (
  // Apollo Client's use() hook can return DeepPartialObject<GetImagesQuery> during loading
  // We accept unknown and cast to GetImagesQuery - the function handles partial data gracefully
  data: unknown
): NormalizedServiceImages => {
  const imagesData = data as GetImagesQuery | undefined
  if (!imagesData?.Images) {
    return {
      totalImages: 0,
      pageNumber: 1,
      pages: [],
      images: [],
      totalCount: 0,
    }
  }

  // Extract types from GetImagesQuery structure
  type ImageEdge = NonNullable<NonNullable<GetImagesQuery["Images"]>["edges"]>[0]
  type VersionEdge = NonNullable<NonNullable<NonNullable<NonNullable<ImageEdge>["node"]>["versions"]>["edges"]>[0]

  const imagesEdges = imagesData.Images.edges
  const images: ServiceImage[] = (imagesEdges || [])
    .filter((edge): edge is NonNullable<ImageEdge> => edge !== null && edge.node !== null)
    .map((edge) => {
      const image = edge.node
      const versionsEdges = image.versions?.edges || []
      const versions: ImageVersion[] = versionsEdges
        .filter(
          (versionEdge): versionEdge is NonNullable<VersionEdge> => versionEdge !== null && versionEdge.node !== null
        )
        .map((versionEdge) => ({
          id: versionEdge.node.id || "",
          version: versionEdge.node.version || "",
        }))
      const firstVersion = versions[0]?.version || ""

      return {
        id: image.id || "",
        repository: image.repository || "",
        imageRegistryUrl: image.imageRegistryUrl || "",
        vulnerabilityCounts: image.vulnerabilityCounts || {
          critical: 0,
          high: 0,
          medium: 0,
          low: 0,
          none: 0,
          total: 0,
        },
        versionsCount: versions.length,
        firstVersion,
        versions,
      }
    })

  const pageInfo = imagesData.Images.pageInfo
  const hasNoResults = images.length === 0 || !pageInfo

  return {
    totalImages: imagesData.Images.totalCount || 0,
    pageNumber: pageInfo?.pageNumber || 1,
    pages: pageInfo?.pages?.filter((edge): edge is Page => edge !== null) || [],
    images,
    totalCount: hasNoResults ? 0 : images.length,
  }
}

export type ImageVulnerability = {
  id: string
  severity: string
  name: string
  earliestTargetRemediationDate: string
  description: string
  sourceUrl: string
}

type NormalizedServiceImageVulnerabilities = {
  vulnerabilities: ImageVulnerability[]
  totalImageVulnerabilities: number
  pages: Page[]
  pageNumber: number
  totalCount: number
}

export const getNormalizedImageVulnerabilitiesResponse = (
  // Apollo Client's use() hook can return DeepPartialObject<GetImagesQuery> during loading
  // We accept unknown and cast to GetImagesQuery - the function handles partial data gracefully
  data: unknown
): NormalizedServiceImageVulnerabilities => {
  const imagesData = data as GetImagesQuery | undefined
  if (!imagesData?.Images?.edges?.[0]?.node) {
    return {
      vulnerabilities: [],
      totalImageVulnerabilities: 0,
      pages: [],
      pageNumber: 1,
      totalCount: 0,
    }
  }

  const imageNode = imagesData.Images.edges[0].node
  const vulnerabilitiesEdges = imageNode.vulnerabilities?.edges || []
  const vulnerabilitiesPageInfo = imageNode.vulnerabilities?.pageInfo

  // Extract the type for vulnerability edge from GetImagesQuery structure
  type VulnerabilityEdge = NonNullable<
    NonNullable<NonNullable<NonNullable<GetImagesQuery["Images"]>["edges"]>[0]>["node"]
  >["vulnerabilities"] extends infer V
    ? V extends { edges: Array<infer E | null> }
      ? E
      : never
    : never

  const vulnerabilities: ImageVulnerability[] = vulnerabilitiesEdges
    .filter((edge): edge is NonNullable<VulnerabilityEdge> => edge !== null && edge.node !== null)
    .map((edge) => {
      const node = edge.node
      return {
        id: node.id || "",
        severity: node.severity || "",
        name: node.name || "",
        earliestTargetRemediationDate: node.earliestTargetRemediationDate || "",
        description: node.description || "",
        sourceUrl: node.sourceUrl || "",
      }
    })

  const totalImageVulnerabilities = imageNode.vulnerabilityCounts?.total ?? 0
  const pages = vulnerabilitiesPageInfo?.pages?.filter((edge): edge is Page => edge !== null) || []
  const pageNumber = vulnerabilitiesPageInfo?.pageNumber || 1

  // When vulnerabilities.edges is [] or vulnerabilities.pageInfo is null, there are no results
  const hasNoResults = vulnerabilities.length === 0 || !vulnerabilitiesPageInfo

  return {
    vulnerabilities,
    totalImageVulnerabilities,
    pages,
    pageNumber,
    totalCount: hasNoResults ? 0 : vulnerabilities.length,
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
