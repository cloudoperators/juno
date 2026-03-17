/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  Stack,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  ContentHeading,
  button,
} from "@cloudoperators/juno-ui-components"
import { Plugin } from "../../types/k8sTypes"

type ExposedServicesProps = {
  plugin: Plugin
}

export const ExposedServices: React.FC<ExposedServicesProps> = ({ plugin }) => {
  const exposedServices = plugin.status?.exposedServices || {}
  const entries = Object.entries(exposedServices)

  console.log(">>>>>>>>>>>>>Exposed Services:", entries)

  return (
    <Stack direction="vertical" gap="4">
      <ContentHeading>Exposed Services</ContentHeading>
      {entries.length === 0 ? (
        <p>No exposed services</p>
      ) : (
        <DataGrid columns={4}>
          <DataGridRow>
            <DataGridHeadCell>Service</DataGridHeadCell>
            <DataGridHeadCell>Namespace</DataGridHeadCell>
            <DataGridHeadCell>Port</DataGridHeadCell>
            <DataGridHeadCell>Protocol</DataGridHeadCell>
          </DataGridRow>
          {entries.map(([url, service]) => (
            <DataGridRow key={url}>
              <DataGridCell>
                {url ? (
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {service.name}
                  </a>
                ) : (
                  service.name
                )}
              </DataGridCell>
              <DataGridCell>{service.namespace}</DataGridCell>
              <DataGridCell>{service.port}</DataGridCell>
              <DataGridCell>{service.protocol}</DataGridCell>
            </DataGridRow>
          ))}
        </DataGrid>
      )}
    </Stack>
  )
}
