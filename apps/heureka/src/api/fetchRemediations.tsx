/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ObservableQuery } from "@apollo/client"
import { GetRemediationsDocument, GetRemediationsQuery, RemediationFilter } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchRemediationsParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filter?: RemediationFilter
}

export const fetchRemediations = ({
  queryClient,
  apiClient,
  filter,
}: FetchRemediationsParams): Promise<ObservableQuery.Result<GetRemediationsQuery>> => {
  const queryKey = ["remediations", filter]

  return queryClient.ensureQueryData({
    queryKey,
    staleTime: 2.5 * 60 * 1000,
    queryFn: () =>
      apiClient.query<GetRemediationsQuery>({
        query: GetRemediationsDocument,
        fetchPolicy: "network-only",
        variables: {
          filter,
        },
      }),
  })
}
