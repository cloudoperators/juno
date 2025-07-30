/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetVulnerabilitiesDocument, GetVulnerabilitiesQuery } from "../generated/graphql"
import { RouteContext } from "../routes/-types"
import { FilterSettings } from "../components/common/Filters/types"
import { getActiveVulnerabilityFilter } from "../components/Vulnerabilities/utils"

type FetchVulnerabilitiesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filterSettings: FilterSettings
  after?: string | null
  afterServices?: string | null
}

export const fetchVulnerabilities = ({
  queryClient,
  apiClient,
  filterSettings,
  after,
  afterServices,
}: FetchVulnerabilitiesParams): Promise<ApolloQueryResult<GetVulnerabilitiesQuery>> => {
  const filter = getActiveVulnerabilityFilter(filterSettings)
  return queryClient.ensureQueryData({
    queryKey: ["vulnerabilities", JSON.stringify(filter), after, afterServices],
    queryFn: () =>
      apiClient.query({
        query: GetVulnerabilitiesDocument,
        variables: {
          first: 20,
          after,
          filter,
          firstServices: 10,
          afterServices,
        },
      }),
  })
}
