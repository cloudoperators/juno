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
import { fetchPluginPreset, FETCH_PLUGIN_PRESET_CACHE_KEY } from "../api/plugin-presets/fetchPluginPreset"
import { Overview } from "./Overview"
import { ConfigurationOverrides } from "./ConfigurationOverrides"
import { PluginPreset } from "../types/k8sTypes"
import { isReady } from "../utils"
import { ErrorMessage } from "../common/ErrorBoundary/ErrorMessage"
import YamlViewer from "../common/YamlViewer"
import { ReconcileButton } from "../common/ReconcileButton"

const PluginPresetDetailContent = ({ pluginPreset }: { pluginPreset: PluginPreset }) => (
  <Tabs>
    <TabList>
      <Tab label="Overview" />
      <Tab label="Configuration" />
      <Tab label="YAML" />
    </TabList>
    <TabPanel>
      <Container px={false} py>
        <Overview pluginPreset={pluginPreset} />
      </Container>
    </TabPanel>
    <TabPanel>
      <Container px={false} py>
        <ConfigurationOverrides pluginPreset={pluginPreset} />
      </Container>
    </TabPanel>
    <TabPanel>
      <Container px={false} py>
        <YamlViewer value={pluginPreset} />
      </Container>
    </TabPanel>
  </Tabs>
)

export const PluginPresetDetail = () => {
  const { pluginPresetName } = useParams({ from: "/admin/plugin-presets/$pluginPresetName" })
  const { apiClient, user } = useRouteContext({ from: "/admin/plugin-presets/$pluginPresetName" })
  const queryClient = useQueryClient()

  const {
    data: pluginPreset,
    isLoading,
    error,
  } = useQuery({
    queryKey: [FETCH_PLUGIN_PRESET_CACHE_KEY, user.organization, pluginPresetName],
    queryFn: () => fetchPluginPreset({ apiClient, namespace: user.organization, pluginPresetName }),
  })

  const handleReconcile = useCallback(() => {
    // Invalidate and refetch the plugin preset
    queryClient.invalidateQueries({ queryKey: [FETCH_PLUGIN_PRESET_CACHE_KEY, user.organization, pluginPresetName] })
  }, [queryClient, user.organization, pluginPresetName])

  return (
    <Stack direction="vertical" gap="4">
      <Stack direction="horizontal" distribution="between">
        <Stack gap="2" alignment="center">
          <ContentHeading className="pb-0">{pluginPresetName}</ContentHeading>
          {pluginPreset && (
            <Badge
              icon
              text={isReady(pluginPreset) ? "Ready" : "Failing"}
              variant={isReady(pluginPreset) ? "success" : "error"}
            />
          )}
        </Stack>
        <ReconcileButton
          resourceType="pluginpresets"
          resourceName={pluginPresetName}
          namespace={user.organization}
          onReconcile={handleReconcile}
        />
      </Stack>
      <p>Plugin preset configuration and instance status</p>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <ErrorMessage error={error} />}
      {!isLoading && !error && pluginPreset && <PluginPresetDetailContent pluginPreset={pluginPreset} />}
    </Stack>
  )
}
