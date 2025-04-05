/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Pill, Badge, Stack, Button } from "@cloudoperators/juno-ui-components"
import { ServiceType } from "../../Services"
import { SeverityCount } from "../../../common/IssuesCountBadges/IssuesCount"
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
    <Stack gap="2" alignment="start" wrap={true}>
      {Object.entries(serviceDetails).map(([key, value]) =>
        Array.isArray(value)
          ? value.map((item) => getPill(serviceDetailsLabels[key], item))
          : getPill(serviceDetailsLabels[key], value)
      )}
    </Stack>
  )
}

type ServiceListItemProps = {
  item: ServiceType
  selected: boolean
  onItemClick: () => void
  onServiceDetailClick: () => void
}

export const ServiceListItem = ({ item, selected, onItemClick, onServiceDetailClick }: ServiceListItemProps) => (
  <DataGridRow className={`cursor-pointer ${selected ? "active" : ""}`} onClick={onItemClick}>
    <DataGridCell>{item.name}</DataGridCell>
    <DataGridCell className="items-center">
      <SeverityCount
        count={item.issuesCount.critical}
        icon="danger"
        variant="danger"
        tooltipContent="Critical Issues"
      />
    </DataGridCell>
    <DataGridCell className="items-center">
      <SeverityCount count={item.issuesCount.high} icon="warning" variant="warning" tooltipContent="High Issues" />
    </DataGridCell>
    <DataGridCell className="items-center">
      <SeverityCount
        count={item.issuesCount.medium}
        icon="errorOutline"
        variant="warning"
        tooltipContent="Medium Issues"
      />
    </DataGridCell>
    <DataGridCell className="items-center">
      <SeverityCount count={item.issuesCount.low} icon="info" variant="info" tooltipContent="Low Issues" />
    </DataGridCell>
    <DataGridCell className="items-center">
      <SeverityCount count={item.issuesCount.none} icon="help" variant="default" tooltipContent="None Issues" />
    </DataGridCell>
    <DataGridCell>
      <ServiceDetails serviceDetails={item.serviceDetails} />
    </DataGridCell>
    <DataGridCell className="cursor-default interactive" onClick={(e) => e.stopPropagation()}>
      <Button label="Show Details" onClick={onServiceDetailClick} size="small" className="whitespace-nowrap" />
    </DataGridCell>
  </DataGridRow>
)
