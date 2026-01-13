/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { DataGridRow, DataGridCell, Button, Icon } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../../common/EmptyDataGridRow"
import { PluginPreset } from "../../../types/k8sTypes"
import { getReadyCondition, isReady } from "../../../utils"
import ReadinessConditions from "./ReadinessConditions"

interface DataRowsProps {
  pluginPresetsPromise: Promise<PluginPreset[]>
  colSpan: number
}

export const DataRows = ({ pluginPresetsPromise, colSpan }: DataRowsProps) => {
  const pluginPresets = use(pluginPresetsPromise)

  if (!pluginPresets || pluginPresets.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No plugin presets found.</EmptyDataGridRow>
  }

  return (
    <>
      {pluginPresets.map((preset: PluginPreset, idx: number) => (
        <DataGridRow key={idx} onClick={() => {}}>
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
                <a target="__blank" href={preset.spec?.plugin?.pluginDefinition}>
                  <Icon size="18" icon="openInNew" />
                </a>
              )}
            </span>
          </DataGridCell>
          <DataGridCell>{!isReady(preset) ? getReadyCondition(preset)?.message : ""}</DataGridCell>
          <DataGridCell>
            <ReadinessConditions conditions={preset.status?.statusConditions?.conditions || []} />
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
