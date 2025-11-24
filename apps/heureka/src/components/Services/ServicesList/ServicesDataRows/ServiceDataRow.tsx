/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Pill, Stack, Button } from "@cloudoperators/juno-ui-components"
import { SeverityCount } from "../../../common/SeverityCount"
import { ServiceType } from "../../../types"

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

type ServiceDataRowProps = {
  item: ServiceType
  selected: boolean
  onItemClick: () => void
  onServiceDetailClick: () => void
}

export const ServiceDataRow = ({ item, selected, onItemClick, onServiceDetailClick }: ServiceDataRowProps) => (
  <DataGridRow className={`cursor-pointer ${selected ? "active" : ""}`} onClick={onItemClick}>
    <DataGridCell>{item.name}</DataGridCell>
    <DataGridCell>
      <SeverityCount
        severity="critical"
        count={item.issuesCount.critical}
        tooltipContent="Critical Vulnerabilities"
      />
    </DataGridCell>
    <DataGridCell>
      <SeverityCount
        severity="high"
        count={item.issuesCount.high}
        tooltipContent="High Vulnerabilities"
      />
    </DataGridCell>
    <DataGridCell>
      <SeverityCount
        severity="medium"
        count={item.issuesCount.medium}
        tooltipContent="Medium Vulnerabilities"
      />
    </DataGridCell>
    <DataGridCell>
      <SeverityCount
        severity="low"
        count={item.issuesCount.low}
        tooltipContent="Low Vulnerabilities"
      />
    </DataGridCell>
    <DataGridCell>
      <SeverityCount
        severity="unknown"
        count={item.issuesCount.none}
        tooltipContent="None Vulnerabilities"
      />
    </DataGridCell>
    <DataGridCell>
      <ServiceDetails serviceDetails={item.serviceDetails} />
    </DataGridCell>
    <DataGridCell className="cursor-default interactive" onClick={(e) => e.stopPropagation()}>
      <Button label="Show Details" onClick={onServiceDetailClick} size="small" className="whitespace-nowrap" />
    </DataGridCell>
  </DataGridRow>
)
