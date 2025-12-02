/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ApolloQueryResult } from "@apollo/client"
import { GetImagesDocument, GetImagesQuery, ImageFilter } from "../generated/graphql"
import { RouteContext } from "../routes/-types"

type FetchImagesParams = Pick<RouteContext, "queryClient" | "apiClient"> & {
  filter: ImageFilter
  after?: string | null
  first?: number
  firstVulnerabilities?: number
  afterVulnerabilities?: string | null
  firstVersions?: number
  afterVersions?: string | null
}

export const fetchImages = ({
  queryClient,
  apiClient,
  filter,
  after,
  first = 10,
  firstVulnerabilities,
  afterVulnerabilities,
  firstVersions,
  afterVersions,
}: FetchImagesParams): Promise<ApolloQueryResult<GetImagesQuery>> => {
  return queryClient.ensureQueryData({
    queryKey: ["images", filter, after, firstVulnerabilities, afterVulnerabilities, firstVersions, afterVersions],
    queryFn: () =>
      apiClient.query({
        query: GetImagesDocument,
        variables: {
          filter,
          first,
          after,
          firstVulnerabilities,
          afterVulnerabilities,
          firstVersions,
          afterVersions,
        },
      }),
  })
}

