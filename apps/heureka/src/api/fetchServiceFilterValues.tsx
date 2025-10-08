/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetServiceFilterValuesDocument, GetServiceFilterValuesQuery, SupportGroupFilter } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchServiceFilterValuesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  supportGroupFilter?: SupportGroupFilter
}

export const fetchServiceFilters = ({
  queryClient,
  apiClient,
  supportGroupFilter,
}: FetchServiceFilterValuesParams): Promise<ApolloQueryResult<GetServiceFilterValuesQuery>> =>
  queryClient.ensureQueryData({
    queryKey: ["GetServiceFilterValues", supportGroupFilter],
    queryFn: () => apiClient.query({ 
      query: GetServiceFilterValuesDocument,
      variables: {
        supportGroupFilter,
      },
      fetchPolicy: 'cache-first',
    }),
  })