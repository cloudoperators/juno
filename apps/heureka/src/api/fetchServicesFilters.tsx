/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetServiceFiltersDocument, GetServiceFiltersQuery, ServiceFilter, SupportGroupFilter } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchServicesFiltersParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  serviceFilter?: ServiceFilter
  supportGroupFilter?: SupportGroupFilter
}

export const fetchServicesFilters = ({
  queryClient,
  apiClient,
  serviceFilter,
  supportGroupFilter,
}: FetchServicesFiltersParams): Promise<ApolloQueryResult<GetServiceFiltersQuery>> =>
  queryClient.ensureQueryData({
    queryKey: ["serviceFilters", serviceFilter, supportGroupFilter],
    queryFn: () => apiClient.query({ 
      query: GetServiceFiltersDocument,
      variables: {
        serviceFilter,
        supportGroupFilter,
      },
    }),
  })
