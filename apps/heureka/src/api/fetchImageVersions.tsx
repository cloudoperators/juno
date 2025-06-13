/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import {
  ComponentInstanceOrderByField,
  ComponentVersionOrderByField,
  GetServiceImageVersionsDocument,
  GetServiceImageVersionsQuery,
  OrderDirection,
} from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchImageVersionsParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  service: string
}

export const fetchImageVersions = ({
  queryClient,
  apiClient,
  service,
}: FetchImageVersionsParams): Promise<ApolloQueryResult<GetServiceImageVersionsQuery>> => {
  return queryClient.ensureQueryData({
    queryKey: ["imageVersions", service],
    queryFn: () =>
      apiClient.query({
        query: GetServiceImageVersionsDocument,
        variables: {
          filter: { serviceCcrn: [service] },
          filterCi: {
            serviceCcrn: [service],
          },
          filterIc: {
            serviceCcrn: [service],
          },
          orderBy: [
            {
              by: ComponentVersionOrderByField.Severity,
              direction: OrderDirection.Desc,
            },
          ],
          // Add component instances ordering and filtering
          orderByCi: [
            {
              by: ComponentInstanceOrderByField.Cluster,
              direction: OrderDirection.Asc,
            },
            {
              by: ComponentInstanceOrderByField.Namespace,
              direction: OrderDirection.Asc,
            },
          ],
        },
      }),
  })
}
