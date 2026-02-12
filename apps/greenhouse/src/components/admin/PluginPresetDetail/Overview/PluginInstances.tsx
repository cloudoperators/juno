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
import { Plugin } from "../../types/k8sTypes"
import { fetchPlugins, FETCH_PLUGINS_CACHE_KEY } from "../../api/plugins/fetchPlugins"

const COLUMN_SPAN = 4

const DataRows = ({ colSpan }: { colSpan: number }) => {
  const { pluginPresetName } = useParams({ from: "/admin/plugin-presets/$pluginPresetName" })
  const { apiClient, organization } = useRouteContext({ from: "/admin/plugin-presets/$pluginPresetName" })

  const { data: plugins } = useSuspenseQuery({
    queryKey: [FETCH_PLUGINS_CACHE_KEY, organization, pluginPresetName],
    queryFn: () => fetchPlugins({ apiClient, namespace: organization, pluginPresetName }),
  })

  if (plugins.length === 0) {
    return (
      <DataGridRow>
        <DataGridCell colSpan={colSpan}>No plugin instances found for this plugin preset.</DataGridCell>
      </DataGridRow>
    )
  }

  const isPluginReady = (plugin: Plugin) => {
    return plugin.status?.statusConditions?.conditions?.some((c) => c.type === "Ready" && c.status === "True") ?? false
  }

  return (
    <>
      {plugins.map((plugin) => {
        const ready = isPluginReady(plugin)

        return (
          <DataGridRow key={plugin.metadata?.name} onClick={() => {}}>
            <DataGridCell>
              <Icon icon={ready ? "checkCircle" : "error"} color={ready ? "text-theme-success" : "text-theme-danger"} />
            </DataGridCell>
            <DataGridCell>{plugin.metadata?.name}</DataGridCell>
            <DataGridCell>{plugin.spec?.clusterName}</DataGridCell>
            <DataGridCell>{ready ? "Ready" : "Not Ready"}</DataGridCell>
          </DataGridRow>
        )
      })}
    </>
  )
}

export const PluginInstances = () => {
  return (
    <Stack direction="vertical" gap="4">
      <h3>Plugin Instances</h3>
      <DataGrid columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell>
            <Icon icon="monitorHeart" />
          </DataGridHeadCell>
          <DataGridHeadCell>Plugin Name</DataGridHeadCell>
          <DataGridHeadCell>Cluster</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
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
