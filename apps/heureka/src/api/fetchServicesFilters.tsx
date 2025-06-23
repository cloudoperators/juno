/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetServiceFiltersDocument, GetServiceFiltersQuery } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchServicesFiltersParams = Pick<RouteContext, "queryClient" | "apiClient">

export const fetchServicesFilters = ({
  queryClient,
  apiClient,
}: FetchServicesFiltersParams): Promise<ApolloQueryResult<GetServiceFiltersQuery>> =>
  queryClient.ensureQueryData({
    queryKey: ["serviceFilters"],
    queryFn: () => apiClient.query({ query: GetServiceFiltersDocument }),
  })
