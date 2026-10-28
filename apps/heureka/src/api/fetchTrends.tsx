/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetIssueTrendsDocument, GetIssueTrendsQuery, TrendGranularity } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchTrendsParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  granularity: TrendGranularity
  after: string
  before: string
}

export const fetchTrends = ({
  queryClient,
  apiClient,
  granularity,
  after,
  before,
}: FetchTrendsParams): Promise<ApolloQueryResult<GetIssueTrendsQuery>> =>
  queryClient.ensureQueryData({
    queryKey: ["issueTrends", granularity, after, before],
    queryFn: () =>
      apiClient.query<GetIssueTrendsQuery>({
        query: GetIssueTrendsDocument,
        variables: { filter: { after, before, granularity } },
      }),
  })
