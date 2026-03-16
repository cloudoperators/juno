/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Button, Icon } from "@cloudoperators/juno-ui-components"
import { useSuspenseQuery } from "@tanstack/react-query"
import { useRouteContext, useSearch, useNavigate } from "@tanstack/react-router"
import { fetchPluginPresets, FETCH_PLUGIN_PRESETS_CACHE_KEY } from "../../../api/plugin-presets/fetchPluginPresets"
import { extractFilterSettingsFromSearchParams } from "../../../utils"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { PluginPreset } from "../../../types/k8sTypes"
import { getReadyCondition, isReady } from "../../../utils"
import { SUPPORT_GROUP_LABEL } from "../../../constants"

interface DataRowsProps {
  colSpan: number
}

export const DataRows = ({ colSpan }: DataRowsProps) => {
  const { apiClient, user } = useRouteContext({ from: "/admin/plugin-presets/" })
  const search = useSearch({ from: "/admin/plugin-presets/" })
  const navigate = useNavigate()
  const filterSettings = extractFilterSettingsFromSearchParams(search)

  const { data: pluginPresets } = useSuspenseQuery({
    queryKey: [FETCH_PLUGIN_PRESETS_CACHE_KEY, user.organization, filterSettings],
    queryFn: () => fetchPluginPresets({ apiClient, namespace: user.organization, filterSettings }),
  })

  if (!pluginPresets || pluginPresets.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No plugin presets found.</EmptyDataGridRow>
  }

  const handleRowClick = (presetName: string) => {
    navigate({
      to: "/admin/plugin-presets/$pluginPresetName",
      params: { pluginPresetName: presetName },
    })
  }

  return (
    <>
      {pluginPresets.map((preset: PluginPreset) => (
        <DataGridRow key={preset.metadata?.name} onClick={() => handleRowClick(preset.metadata?.name || "")}>
          <DataGridCell>
            <Icon
              icon={isReady(preset) ? "checkCircle" : "error"}
              color={isReady(preset) ? "text-theme-success" : "text-theme-danger"}
              title={isReady(preset) ? "Ready" : "Not Ready"}
            />
          </DataGridCell>
          <DataGridCell>
            {preset.status?.readyPlugins || 0}/{preset.status?.totalPlugins || 0}
          </DataGridCell>
          <DataGridCell>{preset.metadata?.name}</DataGridCell>
          <DataGridCell>
            {preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition}
          </DataGridCell>
          <DataGridCell>{!isReady(preset) ? getReadyCondition(preset)?.message : ""}</DataGridCell>
          <DataGridCell>{preset.metadata?.labels?.[SUPPORT_GROUP_LABEL]}</DataGridCell>
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
