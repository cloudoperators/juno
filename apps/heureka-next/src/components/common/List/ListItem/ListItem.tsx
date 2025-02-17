/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell, Pill } from "@cloudoperators/juno-ui-components"
import { Service } from "../List"

type ServiceDetailsLabel = {
  [key: string]: string
}

const serviceDetailsLabels: ServiceDetailsLabel = {
  supportGroups: "support_group",
  region: "region",
  integrity: "integrity",
}

const ServiceDetails = ({ serviceDetails }: { serviceDetails: Service["serviceDetails"] }) => {
  const getPill = (key: string, value: string) => (
    <Pill
      key={value}
      onClick={function Ki() {}}
      onClose={function Ki() {}}
      pillKey={key}
      pillKeyLabel={key}
      pillValue={value}
      pillValueLabel={value}
    />
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

const ListItem = ({ item }: { item: Service }) => {
  return (
    <DataGridRow onClick={() => {}}>
      <DataGridCell>{item.name}</DataGridCell>
      <DataGridCell>
        {item.issuesCount.critical} | {item.issuesCount.high}
      </DataGridCell>
      <DataGridCell>
        <ServiceDetails serviceDetails={item.serviceDetails} />
      </DataGridCell>
      <DataGridCell>{item.regions}</DataGridCell>
      <DataGridCell>{item.components}</DataGridCell>
      <DataGridCell>{item.remediationDate}</DataGridCell>
      <DataGridCell>
        {item.serviceOwners.map((owner) => (
          <div key={owner}>{owner}</div>
        ))}
      </DataGridCell>
    </DataGridRow>
  )
}

export default ListItem
