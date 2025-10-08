/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetSupportGroupFilterValuesDocument, GetSupportGroupFilterValuesQuery, ServiceFilter } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchSupportGroupFilterValuesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  serviceFilter?: ServiceFilter
}

export const fetchSupportGroupFilters = ({
  queryClient,
  apiClient,
  serviceFilter,
}: FetchSupportGroupFilterValuesParams): Promise<ApolloQueryResult<GetSupportGroupFilterValuesQuery>> =>
  queryClient.ensureQueryData({
    queryKey: ["GetSupportGroupFilterValues", serviceFilter],
    queryFn: () => apiClient.query({ 
      query: GetSupportGroupFilterValuesDocument,
      variables: {
        serviceFilter,
      },
      fetchPolicy: 'cache-first',
    }),
  })