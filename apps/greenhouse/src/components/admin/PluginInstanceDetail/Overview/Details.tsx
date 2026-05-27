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
import { SUPPORT_GROUP_LABEL } from "../../constants"
import { ExternalLink } from "../../common/ExternalLink"

interface DetailsProps {
  plugin: Plugin
}

export const Details: React.FC<DetailsProps> = ({ plugin }) => {
  const exposedServices = plugin.status?.exposedServices || {}
  const exposedServicesEntries = Object.entries(exposedServices)
  const exposedServicesLinks = exposedServicesEntries.map(([url, service], index) => (
    <span key={`${url}-${service.name}-${index}`}>
      {<ExternalLink url={url} label={service.name} />}
      {index < exposedServicesEntries.length - 1 && " "}
    </span>
  ))
  return (
    <Stack gap="4" direction="vertical">
      <ContentHeading>Details</ContentHeading>
      <Stack direction="horizontal">
        <DataGrid columns={2} minContentColumns={[0]} className="flex-1">
          <DataGridRow>
            <DataGridHeadCell nowrap>Name</DataGridHeadCell>
            <DataGridCell>{plugin.metadata?.name}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell nowrap>PluginPreset</DataGridHeadCell>
            <DataGridCell>{plugin.metadata?.labels?.["greenhouse.sap/pluginpreset"]}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell nowrap>Plugin Definition</DataGridHeadCell>
            <DataGridCell>{plugin.spec?.pluginDefinitionRef?.name}</DataGridCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridHeadCell nowrap>Owning Team</DataGridHeadCell>
            <DataGridCell>{plugin.metadata?.labels?.[SUPPORT_GROUP_LABEL]}</DataGridCell>
          </DataGridRow>
        </DataGrid>
        <DataGrid columns={2} minContentColumns={[0]} className="flex-1">
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
          <DataGridRow>
            <DataGridHeadCell>Exposed Services</DataGridHeadCell>
            <DataGridCell>{exposedServicesLinks.length > 0 ? exposedServicesLinks : "--"}</DataGridCell>
          </DataGridRow>
        </DataGrid>
      </Stack>
    </Stack>
  )
}
