/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useParams, useRouteContext } from "@tanstack/react-router"
import { useSuspenseQuery } from "@tanstack/react-query"
import { DataGrid, DataGridRow, DataGridHeadCell, DataGridCell, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"
import { PluginPreset, Plugin } from "../../types/k8sTypes"
import { fetchPlugins, FETCH_PLUGINS_CACHE_KEY } from "../../api/plugins/fetchPlugins"

const COLUMN_SPAN = 4

const DataRows = ({ colSpan }: { colSpan: number }) => {
  const { pluginPresetName } = useParams({ from: "/admin/plugin-presets/$pluginPresetName" })
  const { apiClient, organization } = useRouteContext({ from: "/admin/plugin-presets/$pluginPresetName" })

  const { data: plugins } = useSuspenseQuery({
    queryKey: [FETCH_PLUGINS_CACHE_KEY, organization, pluginPresetName],
    queryFn: () => fetchPlugins({ apiClient, namespace: organization, pluginPresetName }),
  })

  // Group plugins by cluster
  const clusterMap = new Map<string, Plugin[]>()
  plugins.forEach((plugin) => {
    const clusterName = plugin.spec?.clusterName || "greenhouse"
    if (!clusterMap.has(clusterName)) {
      clusterMap.set(clusterName, [])
    }
    clusterMap.get(clusterName)?.push(plugin)
  })

  if (clusterMap.size === 0) {
    return (
      <DataGridRow>
        <DataGridCell colSpan={colSpan}>No clusters found for this plugin preset.</DataGridCell>
      </DataGridRow>
    )
  }

  const isPluginReady = (plugin: Plugin) => {
    return plugin.status?.statusConditions?.conditions?.some((c) => c.type === "Ready" && c.status === "True")
  }

  return (
    <>
      {Array.from(clusterMap.entries()).map(([clusterName, clusterPlugins]) => {
        const readyPlugins = clusterPlugins.filter(isPluginReady).length
        const totalPlugins = clusterPlugins.length
        const allReady = readyPlugins === totalPlugins

        return (
          <DataGridRow key={clusterName}>
            <DataGridCell>
              <Icon
                icon={allReady ? "checkCircle" : "error"}
                color={allReady ? "text-theme-success" : "text-theme-danger"}
              />
            </DataGridCell>
            <DataGridCell>{clusterName}</DataGridCell>
            <DataGridCell>
              {readyPlugins} / {totalPlugins} plugins ready
            </DataGridCell>
            <DataGridCell>{clusterPlugins.map((p) => p.metadata?.name).join(", ")}</DataGridCell>
          </DataGridRow>
        )
      })}
    </>
  )
}

export const PluginInstances = ({ pluginPreset }: { pluginPreset: PluginPreset }) => {
  return (
    <Stack direction="vertical" gap="4">
      <h3>Plugin Instances</h3>
      <DataGrid columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Cluster Name</DataGridHeadCell>
          <DataGridHeadCell>Plugin Status</DataGridHeadCell>
          <DataGridHeadCell>Plugins</DataGridHeadCell>
        </DataGridRow>

        <ErrorBoundary displayErrorMessage fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}>
          <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
            <DataRows colSpan={COLUMN_SPAN} />
          </Suspense>
        </ErrorBoundary>
      </DataGrid>
    </Stack>
  )
}
