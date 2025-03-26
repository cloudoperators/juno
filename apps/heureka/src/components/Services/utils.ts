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
  GetServiceImageVersionsQuery,
} from "../../generated/graphql"
import { ServiceType } from "./Services"
import { FilterSettings, ServiceFilterReduced } from "../common/Filters/types"

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
  totalCount: number
  pages: Page[]
  services: ServiceType[]
}

export const getNormalizedData = (data: GetServicesQuery | undefined): NormalizedServices => ({
  totalCount: data?.Services?.totalCount || 0,
  pages: data?.Services?.pageInfo?.pages?.filter((edge) => edge !== null) || [],
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
            components: node?.objectMetadata?.componentInstanceCount || 0,
            serviceOwners: getServiceOwners(edge),
            issuesCount: {
              critical: Math.floor(Math.random() * 10), //TODO: remove mock data when available
              high: Math.floor(Math.random() * 10), //TODO: remove mock data when available
            },
            remediationDate: "2023-01-01", //TODO: remove mock data when available
          }
          return service
        }),
})

export const getNormalizedError = (error?: ApolloError) =>
  !isNil(error) ? error?.message || "Something went wrong" : undefined

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
  issueCounts: IssueCounts
}

type NormalizedServiceImageVersions = {
  totalCount: number
  pages: Page[]
  imageVersions: ServiceImageVersion[]
}

export const getNormalizedImageVersionsData = (
  data: GetServiceImageVersionsQuery | undefined
): NormalizedServiceImageVersions => ({
  totalCount: data?.ComponentVersions?.totalCount || 0,
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
