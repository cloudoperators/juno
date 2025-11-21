/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { DataGridRow, DataGridCell, Button, Icon } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"
import { PluginPreset } from "../../types/k8sTypes"

interface DataRowsProps {
  pluginPresetsPromise: Promise<PluginPreset[]>
  colSpan: number
}

const getReadyCondition = (preset: PluginPreset) => {
  return preset.status?.statusConditions?.conditions?.find((condition) => condition.type === "Ready")
}

export const DataRows = ({ pluginPresetsPromise, colSpan }: DataRowsProps) => {
  const pluginPresetsResponse = use(pluginPresetsPromise)

  if (!pluginPresetsResponse || pluginPresetsResponse.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No plugin presets found.</EmptyDataGridRow>
  }

  return (
    <>
      {pluginPresetsResponse.map((preset: PluginPreset, idx: number) => (
        <DataGridRow key={idx}>
          <DataGridCell>
            <Icon
              icon={
                getReadyCondition(preset)?.type === "Ready" && getReadyCondition(preset)?.status === "True"
                  ? "checkCircle"
                  : "error"
              }
              color={
                getReadyCondition(preset)?.type === "Ready" && getReadyCondition(preset)?.status === "True"
                  ? "text-theme-success"
                  : "text-theme-danger"
              }
            />
          </DataGridCell>
          <DataGridCell>
            {preset.status?.readyPlugins || 0}/{preset.status?.totalPlugins || 0}
          </DataGridCell>
          <DataGridCell>{preset.metadata?.name}</DataGridCell>
          <DataGridCell>
            {preset.spec?.plugin?.pluginDefinitionRef.name || preset.spec?.plugin?.pluginDefinition}
          </DataGridCell>
          <DataGridCell>
            {getReadyCondition(preset)?.type === "Ready" && getReadyCondition(preset)?.status !== "True"
              ? getReadyCondition(preset)?.message
              : ""}
          </DataGridCell>
          <DataGridCell className="whitespace-nowrap">
            <Button size="small" variant="primary">
              View details
            </Button>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}
