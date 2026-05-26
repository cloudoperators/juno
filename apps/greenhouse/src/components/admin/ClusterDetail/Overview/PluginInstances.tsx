/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useParams, useRouteContext, useNavigate } from "@tanstack/react-router"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Icon,
  Stack,
  ContentHeading,
  PopupMenu,
  PopupMenuOptions,
  PopupMenuItem,
} from "@cloudoperators/juno-ui-components"

import { Plugin } from "../../types/k8sTypes"
import { NO_VALUE_DEFAULT } from "../../constants"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"
import { FETCH_PLUGINS_BY_CLUSTER_CACHE_KEY, fetchPluginsByCluster } from "../../api/plugins/fetchPluginsByCluster"

const isPluginReady = (plugin: Plugin) => {
  return plugin.status?.statusConditions?.conditions?.some((c) => c.type === "Ready" && c.status === "True") ?? false
}

const COLUMN_SPAN = 5

const DataRows = ({ colSpan, plugins }: { colSpan: number; plugins: Plugin[] }) => {
  const navigate = useNavigate({ from: "/admin/clusters/$clusterName" })

  if (plugins.length === 0) {
    return (
      <DataGridRow>
        <DataGridCell colSpan={colSpan}>No plugin instances found for this cluster.</DataGridCell>
      </DataGridRow>
    )
  }

  return (
    <>
      {plugins.map((plugin, index) => {
        const ready = isPluginReady(plugin)
        const pluginPresetName = plugin.metadata?.ownerReferences?.[0]?.name
        const canNavigateToDetails = Boolean(pluginPresetName)
        const navigateToDetails = () => {
          if (!pluginPresetName) return
          navigate({
            to: "/admin/plugin-presets/$pluginPresetName/plugin-instances/$pluginInstance",
            params: {
              pluginPresetName,
              pluginInstance: plugin.metadata?.name || "",
            },
          })
        }

        return (
          <DataGridRow
            key={`${plugin.metadata?.name}-${index}`}
            onClick={canNavigateToDetails ? navigateToDetails : undefined}
          >
            <DataGridCell>
              <Icon icon={ready ? "checkCircle" : "error"} color={ready ? "text-theme-success" : "text-theme-danger"} />
            </DataGridCell>
            <DataGridCell>{ready ? "Ready" : "Not Ready"}</DataGridCell>
            <DataGridCell>{plugin.metadata?.name || NO_VALUE_DEFAULT}</DataGridCell>
            <DataGridCell>{pluginPresetName || NO_VALUE_DEFAULT}</DataGridCell>
            <DataGridCell nowrap>
              {canNavigateToDetails && (
                <PopupMenu onClick={(e) => e.stopPropagation()}>
                  <PopupMenuOptions>
                    <PopupMenuItem label="View Details" onClick={navigateToDetails} />
                  </PopupMenuOptions>
                </PopupMenu>
              )}
            </DataGridCell>
          </DataGridRow>
        )
      })}
    </>
  )
}

export const PluginInstances = () => {
  const { clusterName } = useParams({ from: "/admin/clusters/$clusterName" })
  const { apiClient, user } = useRouteContext({ from: "/admin/clusters/$clusterName" })

  const { data: plugins } = useSuspenseQuery({
    queryKey: [FETCH_PLUGINS_BY_CLUSTER_CACHE_KEY, user.organization, clusterName],
    queryFn: () => fetchPluginsByCluster({ apiClient, namespace: user.organization, clusterName }),
  })

  const total = plugins?.length ?? 0
  const ready = plugins?.filter(isPluginReady).length ?? 0
  const notReady = total - ready

  return (
    <ErrorBoundary displayErrorMessage>
      <Stack direction="vertical" gap="4">
        <Stack>
          <ContentHeading>Plugin Instances</ContentHeading>
        </Stack>
        <Stack direction="vertical">
          <Stack alignment="center" className="bg-theme-background-lvl-1 py-1.5 px-4 my-px">
            <div>
              <span className="pr-2">{`${total} plugin instances`}</span>
              <span>{`(${ready} ready, ${notReady} not ready)`}</span>
            </div>
          </Stack>
          <DataGrid columns={COLUMN_SPAN} minContentColumns={[4]}>
            <DataGridRow>
              <DataGridHeadCell>
                <Icon icon="monitorHeart" />
              </DataGridHeadCell>
              <DataGridHeadCell>Status</DataGridHeadCell>
              <DataGridHeadCell>Plugin Name</DataGridHeadCell>
              <DataGridHeadCell>Plugin Preset</DataGridHeadCell>
              <DataGridHeadCell></DataGridHeadCell>
            </DataGridRow>

            <ErrorBoundary displayErrorMessage fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}>
              <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
                <DataRows plugins={plugins} colSpan={COLUMN_SPAN} />
              </Suspense>
            </ErrorBoundary>
          </DataGrid>
        </Stack>
      </Stack>
    </ErrorBoundary>
  )
}
