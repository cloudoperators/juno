/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { use } from "react"
import { DataGridRow, DataGridCell, Button, Icon } from "@cloudoperators/juno-ui-components"
import { EmptyDataGridRow } from "../../common/EmptyDataGridRow"

interface PluginPreset {
  deploymentStatus: string
  status: string
  name: string
  pluginDefinition: string
  message: string
  pluginInstances: string
  lastModified: string
}

interface DataRowsProps {
  pluginPresetsPromise: Promise<PluginPreset[]>
  colSpan: number
}

export const DataRows = ({ pluginPresetsPromise, colSpan }: DataRowsProps) => {
  const pluginPresets = use(pluginPresetsPromise) as PluginPreset[]

  if (!pluginPresets || pluginPresets.length === 0) {
    return <EmptyDataGridRow colSpan={colSpan}>No plugin presets found.</EmptyDataGridRow>
  }

  return (
    <>
      {pluginPresets.map((preset: PluginPreset, idx: number) => (
        <DataGridRow key={idx}>
          <DataGridCell>
            <Icon
              icon={preset.deploymentStatus === "ready" ? "checkCircle" : "cancel"}
              color={preset.deploymentStatus === "ready" ? "text-theme-success" : "text-theme-danger"}
            />
          </DataGridCell>
          <DataGridCell>{preset.status}</DataGridCell>
          <DataGridCell>{preset.name}</DataGridCell>
          <DataGridCell>
            <div className="flex items-center gap-2">
              {preset.pluginDefinition}
              <a href="#" onClick={(e: React.MouseEvent) => e.preventDefault()}>
                <Icon icon="openInNew" size="18" />
              </a>
            </div>
          </DataGridCell>
          <DataGridCell>{preset.message}</DataGridCell>
          <DataGridCell>{preset.pluginInstances}</DataGridCell>
          <DataGridCell>{preset.lastModified}</DataGridCell>
          <DataGridCell>
            <Button size="small" variant="primary">
              View details
            </Button>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}
