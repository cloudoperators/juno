/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { isNil } from "lodash"
import { ApolloError } from "@apollo/client"
import {
  Edge,
  GetServicesQuery,
  Page,
  Service,
  ServiceEdge,
  ServiceFilter,
  IssueMatchConnection,
  GetServiceImageVersionsQuery,
} from "../../generated/graphql"
import { ServiceType } from "./Services"
import { FilterSettings, ServiceFilterReduced } from "../common/Filters/types"
import { IssuesCountsType } from "./useFetchServicesCounts"

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

type NormalizedServices = {
  pageNumber: number
  pages: Page[]
  services: ServiceType[]
}

type ExtendedService = Service & {
  critical?: IssueMatchConnection
  high?: IssueMatchConnection
  medium?: IssueMatchConnection
  low?: IssueMatchConnection
  none?: IssueMatchConnection
}

export const getNormalizedData = (data: GetServicesQuery | undefined): NormalizedServices => {
  return {
    pageNumber: data?.Services?.pageInfo?.pageNumber || 1,
    pages: data?.Services?.pageInfo?.pages?.filter((edge) => edge !== null) || [],
    services: isNil(data?.Services?.edges)
      ? []
      : data?.Services?.edges
          ?.filter((edge) => edge !== null)
          .map((edge?: Edge): ServiceType => {
            const node: ExtendedService | undefined = edge?.node
            const service: ServiceType = {
              id: node?.id?.toString() || "",
              name: node?.ccrn || "",
              serviceDetails: {
                supportGroups: getSupportGroups(edge),
              },
              components: node?.objectMetadata?.componentInstanceCount || 0,
              serviceOwners: getServiceOwners(edge),
              issuesCount: {
                critical: node?.critical?.totalCount || 0,
                high: node?.high?.totalCount || 0,
                medium: node?.medium?.totalCount || 0,
                low: node?.low?.totalCount || 0,
                none: node?.none?.totalCount || 0,
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

type ServiceImageVersion = {
  version: string
  tag: string
  ccrn: string
  issueCounts: IssuesCountsType
}

type NormalizedServiceImageVersions = {
  totalCount: number
  pages: Page[]
  pageNumber: number
  imageVersions: ServiceImageVersion[]
}

export const getNormalizedImageVersionsData = (
  data: GetServiceImageVersionsQuery | undefined
): NormalizedServiceImageVersions => ({
  totalCount: data?.ComponentVersions?.totalCount || 0,
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
            ccrn: edge?.node?.component?.ccrn || "",
            issueCounts: edge?.node?.issueCounts || {
              critical: 0,
              high: 0,
              medium: 0,
              low: 0,
              none: 0,
            },
          })
        ),
})
