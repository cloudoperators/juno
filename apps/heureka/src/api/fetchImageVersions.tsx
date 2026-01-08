/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  GetImageVersionsDocument,
  GetImageVersionsQuery,
  GetImageVersionsQueryResult,
  ImageVersionFilter,
} from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchImageVersionsParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filter: ImageVersionFilter
  after?: string | null
  first?: number
  firstVulnerabilities?: number
  afterVulnerabilities?: string | null
  firstOccurences?: number
  afterOccurences?: string | null
}

export const fetchImageVersions = ({
  queryClient,
  apiClient,
  filter,
  after,
  first,
  firstVulnerabilities,
  afterVulnerabilities,
  firstOccurences,
  afterOccurences,
}: FetchImageVersionsParams): Promise<GetImageVersionsQueryResult> => {
  const queryKey = [
    "imageVersions",
    filter,
    after,
    first,
    firstVulnerabilities,
    afterVulnerabilities,
    firstOccurences,
    afterOccurences,
  ]

  // Invalidate cache first to ensure queryFn is always called (forces network request)
  // Then use ensureQueryData to maintain promise stability (like other fetch functions)
  queryClient.invalidateQueries({ queryKey })

  return queryClient.ensureQueryData({
    queryKey,
    queryFn: () =>
      apiClient.query<GetImageVersionsQuery>({
        query: GetImageVersionsDocument,
        variables: {
          filter,
          first,
          after,
          firstVulnerabilities,
          afterVulnerabilities,
          firstOccurences,
          afterOccurences,
        },
        fetchPolicy: "network-only", // Force network request to always fetch fresh data
      }),
  })
}
