/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { useParams, useRouteContext } from "@tanstack/react-router"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Stack,
  Badge,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { fetchPlugin, FETCH_PLUGIN_CACHE_KEY } from "../api/plugins/fetchPlugin"
import { Overview } from "./Overview"
import { Plugin } from "../types/k8sTypes"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"
import YamlViewer from "../common/YamlViewer"
import { ReconcileButton } from "../common/ReconcileButton"

const isPluginReady = (plugin: Plugin) => {
  return plugin.status?.statusConditions?.conditions?.some((c) => c.type === "Ready" && c.status === "True")
}

const PluginInstanceDetailContent = ({ plugin }: { plugin: Plugin }) => (
  <>
    <Tabs>
      <TabList>
        <Tab label="Overview" />
        <Tab label="YAML" />
      </TabList>
      <TabPanel>
        <Container px={false} py>
          <Overview plugin={plugin} />
        </Container>
      </TabPanel>
      <TabPanel>
        <Container px={false} py>
          <YamlViewer value={plugin} />
        </Container>
      </TabPanel>
    </Tabs>
  </>
)

export const PluginInstanceDetail = () => {
  const { pluginInstance } = useParams({
    from: "/admin/plugin-presets/$pluginPresetName/plugin-instances/$pluginInstance",
  })
  const { apiClient, user } = useRouteContext({
    from: "/admin/plugin-presets/$pluginPresetName/plugin-instances/$pluginInstance",
  })
  const queryClient = useQueryClient()

  const {
    data: plugin,
    isLoading,
    error,
  } = useQuery({
    queryKey: [FETCH_PLUGIN_CACHE_KEY, user.organization, pluginInstance],
    queryFn: () => fetchPlugin({ apiClient, namespace: user.organization, pluginName: pluginInstance }),
  })

  const handleReconcile = useCallback(() => {
    // Invalidate and refetch the plugin
    queryClient.invalidateQueries({ queryKey: [FETCH_PLUGIN_CACHE_KEY, user.organization, pluginInstance] })
  }, [queryClient, user.organization, pluginInstance])

  return (
    <Stack direction="vertical" gap="4">
      <Stack direction="horizontal" distribution="between">
        <Stack gap="2" alignment="center">
          <ContentHeading className="pb-0">{pluginInstance}</ContentHeading>
          {plugin && (
            <Badge
              icon
              text={isPluginReady(plugin) ? "Ready" : "Failing"}
              variant={isPluginReady(plugin) ? "success" : "error"}
            />
          )}
        </Stack>
        <ReconcileButton
          resourceType="plugins"
          resourceName={pluginInstance}
          namespace={user.organization}
          onReconcile={handleReconcile}
        />
      </Stack>
      <p>Plugin instance configuration and status</p>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <ErrorMessage error={error} />}
      {!isLoading && !error && plugin && <PluginInstanceDetailContent plugin={plugin} />}
    </Stack>
  )
}
