/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query"
import { Container, ContentHeading, Button, Stack } from "@cloudoperators/juno-ui-components"

import { ClustersDataGrid } from "./ClustersGrid"
import { ClustersFilters } from "./ClustersFilters"
import { extractFilterSettingsFromSearchParams, isReady } from "../utils"
import { fetchClusters, FETCH_CLUSTERS_CACHE_KEY } from "../api/clusters/fetchClusters"

export const Clusters = () => {
  const [lastUpdatedAt, setLastUpdatedAt] = useState<number>(Date.now())
  const isFetching = useIsFetching({ queryKey: [FETCH_CLUSTERS_CACHE_KEY] })
  const queryClient = useQueryClient()
  const { apiClient, user } = useRouteContext({ from: "/admin/clusters/" })
  const search = useSearch({ from: "/admin/clusters/" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: clusters } = useQuery({
    queryKey: [FETCH_CLUSTERS_CACHE_KEY, user.organization, filterSettings],
    queryFn: () => fetchClusters({ apiClient, namespace: user.organization, filterSettings }),
  })

  const total = clusters?.length ?? 0
  const ready = clusters?.filter(isReady).length ?? 0
  const notReady = total - ready

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [FETCH_CLUSTERS_CACHE_KEY] })
    setLastUpdatedAt(Date.now())
  }

  return (
    <>
      <Container px={false} py={false}>
        <ContentHeading>Clusters Overview</ContentHeading>
        <p>Manage and monitor Clusters</p>
      </Container>
      <Container px={false} py>
        <ClustersFilters />
        <Stack alignment="center" className="bg-theme-background-lvl-1 py-1.5 px-4 my-px text-theme-light">
          <div>
            <span className="text-theme-default pr-2">{`${total} clusters`}</span>
            <span>{`(${ready} ready, ${notReady} not ready)`}</span>
          </div>
          <Stack alignment="center" className="ml-auto">
            {lastUpdatedAt && `Last update: ${new Date(lastUpdatedAt).toLocaleString()}`}
            <Button
              size="small"
              label={isFetching > 0 ? "Loading..." : "Refresh"}
              className="ml-4 min-w-[90px]"
              onClick={handleRefresh}
              variant="subdued"
              disabled={isFetching > 0}
            />
          </Stack>
        </Stack>
        <ClustersDataGrid />
      </Container>
    </>
  )
}
