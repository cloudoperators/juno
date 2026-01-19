/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Button, Icon } from "@cloudoperators/juno-ui-components"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch } from "@tanstack/react-router"
import { fetchPluginPresets, FETCH_PLUGIN_PRESETS_CACHE_KEY } from "../../../api/plugin-presets/fetchPluginPresets"
import { extractFilterSettingsFromSearchParams } from "../../../utils"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { PluginPreset } from "../../../types/k8sTypes"
import { getReadyCondition, isReady } from "../../../utils"
import ReadinessConditions from "./ReadinessConditions"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, organization } = useRouteContext({ from: "/admin/plugin-presets" })
  const search = useSearch({ from: "/admin/plugin-presets" })
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: pluginPresets } = useSuspenseQuery({
    queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY, organization, filterSettings],
    queryFn: () => fetchPluginPresets({ apiClient, namespace: organization, filterSettings }),
  })

  if (!pluginPresets || pluginPresets.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No plugin presets found.</EmptyDataGridRow>
  }

  return (
    <>
      {pluginPresets.map((preset: PluginPreset) => (
        <DataGridRow
          key={preset.metadata?.name}
          onClick={() => {
            /* Navigate to details page - to be implemented */
          }}
        >
          <DataGridCell>
            <Icon
              icon={isReady(preset) ? "checkCircle" : "error"}
              color={isReady(preset) ? "text-theme-success" : "text-theme-danger"}
            />
          </DataGridCell>
          <DataGridCell>
            {preset.status?.readyPlugins || 0}/{preset.status?.totalPlugins || 0}
          </DataGridCell>
          <DataGridCell>{preset.metadata?.name}</DataGridCell>
          <DataGridCell>
            <span className="flex items-center gap-1">
              {preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition}
              {!!preset.spec?.plugin?.pluginDefinition && (
                <a target="_blank" href={preset.spec?.plugin?.pluginDefinition}>
                  <Icon size="18" icon="openInNew" />
                </a>
              )}
            </span>
          </DataGridCell>
          <DataGridCell>{!isReady(preset) ? getReadyCondition(preset)?.message : ""}</DataGridCell>
          <DataGridCell>
            <ReadinessConditions conditions={preset.status?.statusConditions?.conditions || []} />
          </DataGridCell>
          <DataGridCell nowrap>
            <Button size="small" variant="primary" className="w-fit">
              View details
            </Button>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}
