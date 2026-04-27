/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Pill,
  Stack,
  ContentHeading,
} from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../../types/k8sTypes"
import { CONNECTIVITY_GROUP_LABEL, NO_VALUE_DEFAULT } from "../../constants"
import { formatAge } from "../../utils"

interface DetailsProps {
  pluginPreset: PluginPreset
}

const NodeStatus = ({ nodes }) => {
  const ready = nodes?.ready || 0
  const total = nodes?.total || 0

  // Determine the color class based on readiness
  const statusColor = ready === total ? "text-theme-success" : "text-theme-warning"

  return (
    <div className={`inline-block ${statusColor}`}>
      {ready}/{total} nodes ready
    </div>
  )
}

export const Details: React.FC<DetailsProps> = ({ pluginPreset }) => (
  <Stack gap="4" direction="vertical" className="flex-1">
    <ContentHeading>Details</ContentHeading>
    <DataGrid columns={2} minContentColumns={[0]}>
      <DataGridRow>
        <DataGridHeadCell nowrap>Name</DataGridHeadCell>
        <DataGridCell>{pluginPreset.metadata?.name ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Age</DataGridHeadCell>
        <DataGridCell>{formatAge(pluginPreset.metadata?.creationTimestamp || 0) ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Version</DataGridHeadCell>
        <DataGridCell>{pluginPreset.status?.kubernetesVersion ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Connectivity</DataGridHeadCell>
        <DataGridCell>{pluginPreset.metadata?.annotations?.[CONNECTIVITY_GROUP_LABEL]}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Support Group</DataGridHeadCell>
        <DataGridCell>{pluginPreset.metadata?.labels?.["greenhouse.sap/owned-by"] ?? NO_VALUE_DEFAULT}</DataGridCell>
      </DataGridRow>
      {pluginPreset.metadata?.labels && Object.keys(pluginPreset.metadata.labels).length > 0 && (
        <DataGridRow>
          <DataGridHeadCell nowrap>Labels</DataGridHeadCell>
          <DataGridCell>
            <Stack gap="2" wrap={true}>
              {Object.entries(pluginPreset.metadata.labels).map(([key, value]) => (
                <Pill key={key} pillKey={key} pillValue={value} />
              ))}
            </Stack>
          </DataGridCell>
        </DataGridRow>
      )}
      <DataGridRow>
        <DataGridHeadCell nowrap>Annotations</DataGridHeadCell>
        <DataGridCell>
          {pluginPreset.metadata?.annotations && Object.keys(pluginPreset.metadata.annotations).length > 0 ? (
            <Stack gap="2" wrap={true}>
              {Object.entries(pluginPreset.metadata.annotations).map(([key, value]) => (
                <Pill key={key} pillKey={key} pillValue={value} />
              ))}
            </Stack>
          ) : (
            "No Annotations"
          )}
        </DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Node Status</DataGridHeadCell>
        <DataGridCell>
          <NodeStatus nodes={pluginPreset?.status?.nodes || {}} />
        </DataGridCell>
      </DataGridRow>
    </DataGrid>
  </Stack>
)
