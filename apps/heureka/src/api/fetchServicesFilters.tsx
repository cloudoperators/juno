/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { GetServiceFiltersDocument, GetServiceFiltersQuery } from "../generated/graphql"
import { RouteContext } from "../routes/-types"
import { getNormalizedFilters } from "../components/Services/utils"

type FetchServicesFiltersParams = Pick<RouteContext, "queryClient" | "apiClient">

export const fetchServicesFilters = ({ queryClient, apiClient }: FetchServicesFiltersParams) =>
  queryClient.ensureQueryData({
    queryKey: ["serviceFilters"],
    queryFn: () =>
      apiClient
        .query<GetServiceFiltersQuery>({
          query: GetServiceFiltersDocument,
        })
        .then((res) => getNormalizedFilters(res.data)),
  })
