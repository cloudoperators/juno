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
import { Plugin } from "../../types/k8sTypes"

interface BasicInformationProps {
  plugin: Plugin
}

export const BasicInformation: React.FC<BasicInformationProps> = ({ plugin }) => (
  <Stack gap="4" direction="vertical">
    <ContentHeading>Basic Information</ContentHeading>
    <Stack direction="horizontal">
      <DataGrid columns={2} minContentColumns={[0]} className="flex-1">
        <DataGridRow>
          <DataGridHeadCell nowrap>Name</DataGridHeadCell>
          <DataGridCell>{plugin.metadata?.name}</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell nowrap>Plugin Preset</DataGridHeadCell>
          <DataGridCell>{plugin.metadata?.labels?.["greenhouse.sap/pluginpreset"]}</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell nowrap>Plugin Definition</DataGridHeadCell>
          <DataGridCell>{plugin.spec?.pluginDefinitionRef?.name}</DataGridCell>
        </DataGridRow>
      </DataGrid>
      <DataGrid columns={2} minContentColumns={[0]} className="flex-1">
        <DataGridRow>
          <DataGridHeadCell nowrap>Owning Team</DataGridHeadCell>
          <DataGridCell>{plugin.metadata?.labels?.["greenhouse.sap/owned-by"]}</DataGridCell>
        </DataGridRow>
        <DataGridRow>
          <DataGridHeadCell nowrap>Cluster</DataGridHeadCell>
          <DataGridCell>{plugin.spec?.clusterName}</DataGridCell>
        </DataGridRow>
        {plugin.metadata?.labels && Object.keys(plugin.metadata.labels).length > 0 && (
          <DataGridRow>
            <DataGridHeadCell nowrap>Labels</DataGridHeadCell>
            <DataGridCell>
              <Stack gap="2" wrap={true}>
                {Object.entries(plugin.metadata.labels).map(([key, value]) => (
                  <Pill key={key} pillKey={key} pillValue={value} />
                ))}
              </Stack>
            </DataGridCell>
          </DataGridRow>
        )}
      </DataGrid>
    </Stack>
  </Stack>
)
