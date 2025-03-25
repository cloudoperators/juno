/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Pill, Badge, Stack, Icon } from "@cloudoperators/juno-ui-components"
import { ServiceType } from "../../Services"

type ServiceDetailsLabel = {
  [key: string]: string
}

const serviceDetailsLabels: ServiceDetailsLabel = {
  supportGroups: "support_group",
  region: "region",
  integrity: "integrity",
}

const ServiceDetails = ({ serviceDetails }: { serviceDetails: ServiceType["serviceDetails"] }) => {
  const getPill = (key: string, value: string) => (
    <Pill key={value} pillKey={key} pillKeyLabel={key} pillValue={value} pillValueLabel={value} />
  )

  return (
    <span>
      {Object.entries(serviceDetails).map(([key, value]) =>
        Array.isArray(value)
          ? value.map((item) => getPill(serviceDetailsLabels[key], item))
          : getPill(serviceDetailsLabels[key], value)
      )}
    </span>
  )
}

export const ServiceListItem = ({ item }: { item: ServiceType }) => (
  <DataGridRow onClick={() => {}}>
    <DataGridCell>{item.name}</DataGridCell>
    <DataGridCell>
      <Stack gap="1">
        <Badge icon text={`${item.issuesCount.critical}`} variant="danger" />
        <Badge icon text={`${item.issuesCount.high}`} variant="warning" />
      </Stack>
    </DataGridCell>
    <DataGridCell>
      <ServiceDetails serviceDetails={item.serviceDetails} />
    </DataGridCell>
    <DataGridCell>{item.components}</DataGridCell>
    <DataGridCell>
      {item.serviceOwners.map((owner) => (
        <div key={owner}>{owner}</div>
      ))}
    </DataGridCell>
    <DataGridCell>
      <Icon icon="chevronRight" onClick={() => {}} />
    </DataGridCell>
  </DataGridRow>
)
