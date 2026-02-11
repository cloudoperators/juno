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
  GetRemediationsQuery,
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
  data: GetImagesQuery | undefined
): NormalizedServiceImages => {
  if (!data?.Images) {
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

  const imagesEdges = data.Images.edges
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

  const pageInfo = data.Images.pageInfo
  const hasNoResults = images.length === 0 || !pageInfo

  return {
    totalImages: data.Images.totalCount || 0,
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

export type RemediatedVulnerability = {
  id: string
  remediationId: string
  type: string | null
  description: string | null
  service: string | null
  image: string | null
  vulnerability: string | null
  vulnerabilityId: string | null
  remediationDate: string | null
  remediatedBy: string | null
  expirationDate: string | null
}

type NormalizedServiceImageVulnerabilities = {
  vulnerabilities: ImageVulnerability[]
  totalImageVulnerabilities: number
  pages: Page[]
  pageNumber: number
  totalCount: number
}

// Extract the type for vulnerability edge from GetImagesQuery structure
type ImageNodeFromQuery = NonNullable<NonNullable<NonNullable<GetImagesQuery["Images"]>["edges"]>[number]>["node"]
type VulnerabilityEdgeFromQuery =
  NonNullable<NonNullable<ImageNodeFromQuery>["vulnerabilities"]>["edges"] extends Array<infer E | null> ? E : never

function extractVulnerabilitiesFromImageNode(imageNode: ImageNodeFromQuery): ImageVulnerability[] {
  const edges = imageNode?.vulnerabilities?.edges || []
  return edges
    .filter((edge): edge is NonNullable<VulnerabilityEdgeFromQuery> => edge !== null && edge?.node != null)
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
}

export const getNormalizedImageVulnerabilitiesResponse = (
  // Apollo Client's use() hook can return DeepPartialObject<GetImagesQuery> during loading
  data: GetImagesQuery | undefined
): NormalizedServiceImageVulnerabilities => {
  const edges = data?.Images?.edges
  if (!edges?.length) {
    return {
      vulnerabilities: [],
      totalImageVulnerabilities: 0,
      pages: [],
      pageNumber: 1,
      totalCount: 0,
    }
  }

  // Aggregate vulnerabilities from all image edges (handles vulFilter responses that may return multiple nodes or different shapes)
  const allVulnerabilities: ImageVulnerability[] = []
  let vulnerabilitiesPageInfo: NonNullable<NonNullable<ImageNodeFromQuery>["vulnerabilities"]>["pageInfo"] = null
  let totalImageVulnerabilities = 0

  for (const edge of edges) {
    const node = edge?.node
    if (!node) continue
    const vulns = extractVulnerabilitiesFromImageNode(node)
    allVulnerabilities.push(...vulns)
    if (node.vulnerabilityCounts?.total != null) {
      totalImageVulnerabilities = Math.max(totalImageVulnerabilities, node.vulnerabilityCounts.total)
    }
    if (node.vulnerabilities?.pageInfo && !vulnerabilitiesPageInfo) {
      vulnerabilitiesPageInfo = node.vulnerabilities.pageInfo
    }
  }

  const pages = vulnerabilitiesPageInfo?.pages?.filter((p): p is Page => p !== null) || []
  const pageNumber = vulnerabilitiesPageInfo?.pageNumber || 1
  const hasNoResults = allVulnerabilities.length === 0 || !vulnerabilitiesPageInfo

  return {
    vulnerabilities: allVulnerabilities,
    totalImageVulnerabilities,
    pages,
    pageNumber,
    totalCount: hasNoResults ? 0 : allVulnerabilities.length,
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

// Types for ImageVersion details (will be properly typed after codegen)
export type ImageVersionDetails = {
  id: string
  tag?: string | null
  repository?: string | null
  version: string
  vulnerabilityCounts: IssuesCountsType
  occurrences?: ComponentInstance[]
  vulnerabilities?: ImageVulnerability[]
}

// Alias for compatibility with old panel structure
export type ServiceImageVersion = {
  id: string
  tag?: string | null
  repository?: string | null
  version: string
  issueCounts: IssuesCountsType
  componentInstances?: ComponentInstance[]
  componentInstancesCount?: number
  vulnerabilities?: ImageVulnerability[]
}

type NormalizedImageVersionDetails = {
  imageVersion: ImageVersionDetails | null
  totalCount: number
  pages: Page[]
  pageNumber: number
}

// Normalization function for GetImageVersions query
export const getNormalizedImageVersionDetailsResponse = (
  data: any // Will be GetImageVersionsQuery after codegen
): NormalizedImageVersionDetails => {
  if (!data?.ImageVersions?.edges?.[0]?.node) {
    return {
      imageVersion: null,
      totalCount: 0,
      pages: [],
      pageNumber: 1,
    }
  }

  const imageVersionNode = data.ImageVersions.edges[0].node
  const vulnerabilitiesEdges = imageVersionNode.vulnerabilities?.edges || []
  const occurrencesEdges = imageVersionNode.occurences?.edges || []
  const vulnerabilitiesPageInfo = imageVersionNode.vulnerabilities?.pageInfo

  const vulnerabilities: ImageVulnerability[] = vulnerabilitiesEdges
    .filter((edge: any) => edge !== null && edge.node !== null)
    .map((edge: any) => {
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

  // Helper function to parse ccrn string and extract fields
  const parseCcrn = (
    ccrn: string
  ): { cluster?: string; namespace?: string; pod?: string; container?: string; region?: string } => {
    if (!ccrn) return {}

    const result: { cluster?: string; namespace?: string; pod?: string; container?: string; region?: string } = {}

    // Parse ccrn format: "ccrn: apiVersion=..., kind=container, cluster=..., namespace=..., pod=..., name=..."
    const clusterMatch = ccrn.match(/cluster=([^,]+)/)
    const namespaceMatch = ccrn.match(/namespace=([^,]+)/)
    const podMatch = ccrn.match(/pod=([^,]+)/)
    const nameMatch = ccrn.match(/name=([^,]+)/)

    if (clusterMatch) result.cluster = clusterMatch[1].trim()
    if (namespaceMatch) result.namespace = namespaceMatch[1].trim()
    if (podMatch) result.pod = podMatch[1].trim()
    if (nameMatch) result.container = nameMatch[1].trim()

    // Extract region from cluster name if it follows a pattern like s-eu-nl-1 (region would be "eu")
    if (result.cluster) {
      const regionMatch = result.cluster.match(/^[^-]+-([^-]+)-/)
      if (regionMatch) result.region = regionMatch[1]
    }

    return result
  }

  const occurrences: ComponentInstance[] = occurrencesEdges
    .filter((edge: any) => edge !== null && edge.node !== null)
    .map((edge: any) => {
      const node = edge.node
      const ccrn = node.ccrn || ""
      const parsed = parseCcrn(ccrn)

      return {
        id: node.id || "",
        ccrn: ccrn,
        componentVersionId: node.componentVersionId || "",
        cluster: parsed.cluster || "",
        namespace: parsed.namespace || "",
        pod: parsed.pod || "",
        container: parsed.container || "",
        region: parsed.region || "",
      }
    })

  const imageVersion: ImageVersionDetails = {
    id: imageVersionNode.id || "",
    tag: imageVersionNode.tag || null,
    repository: imageVersionNode.repository || null,
    version: imageVersionNode.version || "",
    vulnerabilityCounts: imageVersionNode.vulnerabilityCounts || {
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
      none: 0,
      total: 0,
    },
    occurrences,
    vulnerabilities,
  }

  const pages = vulnerabilitiesPageInfo?.pages?.filter((edge: any): edge is Page => edge !== null) || []
  const pageNumber = vulnerabilitiesPageInfo?.pageNumber || 1
  const hasNoResults = vulnerabilities.length === 0 || !vulnerabilitiesPageInfo

  return {
    imageVersion,
    totalCount: hasNoResults ? 0 : vulnerabilities.length,
    pages,
    pageNumber,
  }
}

// Normalization function that returns array of image versions (for compatibility with old panel)
export const getNormalizedImageVersionsResponse = (
  data: any // Will be GetImageVersionsQuery after codegen
): { imageVersions: ServiceImageVersion[] } => {
  const normalized = getNormalizedImageVersionDetailsResponse(data)

  if (!normalized.imageVersion) {
    return { imageVersions: [] }
  }

  const serviceImageVersion: ServiceImageVersion = {
    id: normalized.imageVersion.id,
    tag: normalized.imageVersion.tag,
    repository: normalized.imageVersion.repository,
    version: normalized.imageVersion.version,
    issueCounts: normalized.imageVersion.vulnerabilityCounts,
    componentInstances: normalized.imageVersion.occurrences,
    componentInstancesCount: normalized.imageVersion.occurrences?.length || 0,
    vulnerabilities: normalized.imageVersion.vulnerabilities,
  }

  return {
    imageVersions: [serviceImageVersion],
  }
}

export const getNormalizedRemediationsResponse = (
  data: GetRemediationsQuery | undefined
): { remediatedVulnerabilities: RemediatedVulnerability[] } => {
  if (!data?.Remediations?.edges) {
    return {
      remediatedVulnerabilities: [],
    }
  }

  const remediatedVulnerabilities: RemediatedVulnerability[] = data.Remediations.edges
    .filter((edge): edge is NonNullable<typeof edge> => edge !== null && edge.node !== null)
    .map((edge) => {
      const node = edge.node
      return {
        id: node.vulnerability || "",
        remediationId: node.id || "",
        type: node.type || null,
        description: node.description || null,
        service: node.service || null,
        image: node.image || null,
        vulnerability: node.vulnerability || null,
        vulnerabilityId: null,
        remediationDate: node.remediationDate != null ? String(node.remediationDate) : null,
        remediatedBy: node.remediatedBy ?? null,
        expirationDate: node.expirationDate != null ? String(node.expirationDate) : null,
      }
    })

  return {
    remediatedVulnerabilities,
  }
}
