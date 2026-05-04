/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams, useRouteContext } from "@tanstack/react-router"
import { Container, Tabs, TabList, Tab, TabPanel, Stack, ContentHeading } from "@cloudoperators/juno-ui-components"

import { Overview } from "./Overview"
import YamlViewer from "../common/YamlViewer"
import { PluginPreset } from "../types/k8sTypes"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"
import { FETCH_CLUSTERS_CACHE_KEY } from "../api/clusters/fetchClusters"
import { fetchCluster, FETCH_CLUSTER_CACHE_KEY } from "../api/clusters/fetchCluster"

const PluginPresetDetailContent = ({ cluster }: { cluster: PluginPreset }) => (
  <Tabs>
    <TabList>
      <Tab label="Overview" />
      <Tab label="YAML" />
    </TabList>
    <TabPanel>
      <Container px={false} py>
        <Overview pluginPreset={cluster} />
      </Container>
    </TabPanel>
    <TabPanel>
      <Container px={false} py>
        <YamlViewer value={cluster} />
      </Container>
    </TabPanel>
  </Tabs>
)

export const ClusterDetail = () => {
  const { clusterName } = useParams({ from: "/admin/clusters/$clusterName" })
  const { apiClient, user } = useRouteContext({ from: "/admin/clusters/$clusterName" })
  const queryClient = useQueryClient()

  const {
    data: cluster,
    isLoading,
    error,
  } = useQuery({
    queryKey: [FETCH_CLUSTER_CACHE_KEY, user.organization, clusterName],
    queryFn: () => fetchCluster({ apiClient, namespace: user.organization, clusterName }),
  })

  const handleReconcile = useCallback(() => {
    // Invalidate and refetch the plugin preset
    queryClient.invalidateQueries({ queryKey: [FETCH_CLUSTERS_CACHE_KEY, user.organization, clusterName] })
  }, [queryClient, user.organization, clusterName])

  return (
    <Stack direction="vertical" gap="4">
      <Stack direction="horizontal" distribution="between">
        <Stack gap="2" alignment="center">
          <ContentHeading className="pb-0">{clusterName}</ContentHeading>
        </Stack>
      </Stack>
      <p>Cluster configuration and instance status</p>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <ErrorMessage error={error} />}
      {!isLoading && !error && cluster && <PluginPresetDetailContent cluster={cluster} />}
    </Stack>
  )
}
