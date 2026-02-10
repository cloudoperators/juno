/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid, DataGridRow, DataGridHeadCell, DataGridCell, Pill, Stack } from "@cloudoperators/juno-ui-components"
import { PluginPreset } from "../../types/k8sTypes"

interface BasicInformationProps {
  pluginPreset: PluginPreset
}

export const BasicInformation: React.FC<BasicInformationProps> = ({ pluginPreset }) => (
  <Stack gap="4" direction="vertical" className="flex-1">
    <h3>Basic Information</h3>
    <DataGrid columns={2} minContentColumns={[0]}>
      <DataGridRow>
        <DataGridHeadCell nowrap>Name</DataGridHeadCell>
        <DataGridCell>{pluginPreset.metadata?.name}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Plugin Definition</DataGridHeadCell>
        <DataGridCell>{pluginPreset.spec?.plugin?.pluginDefinitionRef?.name}</DataGridCell>
      </DataGridRow>
      <DataGridRow>
        <DataGridHeadCell nowrap>Owning Team</DataGridHeadCell>
        <DataGridCell>{pluginPreset.metadata?.labels?.["greenhouse.sap/owned-by"]}</DataGridCell>
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
    </DataGrid>
  </Stack>
)
