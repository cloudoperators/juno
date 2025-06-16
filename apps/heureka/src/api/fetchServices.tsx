/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetServicesDocument, GetServicesQuery, OrderDirection, ServiceOrderByField } from "../generated/graphql"
import { RouteContext } from "../routes/-types"
import { FilterSettings } from "../components/common/Filters/types"
import { getActiveServiceFilter } from "../components/Services/utils"

type FetchServicesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filterSettings: FilterSettings
  after?: string | null
}

export const fetchServices = ({
  queryClient,
  apiClient,
  filterSettings,
  after,
}: FetchServicesParams): Promise<ApolloQueryResult<GetServicesQuery>> => {
  const filter = getActiveServiceFilter(filterSettings)
  return queryClient.ensureQueryData({
    queryKey: ["services", JSON.stringify(filter), after],
    queryFn: () =>
      apiClient.query({
        query: GetServicesDocument,
        variables: {
          first: 20,
          after,
          orderBy: [
            {
              by: ServiceOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          filter,
        },
      }),
  })
}
