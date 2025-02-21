/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow, DataGridCell } from "@cloudoperators/juno-ui-components"

const sumTotalInstances = (versions: any) => {
  let sum = 0
  versions.forEach((v: any) => (sum += v?.node?.componentInstances?.totalCount))
  return sum
}
const ComponentsListItem = ({ item }: any) => {
  return (
    <DataGridRow>
      <DataGridCell>{item?.node?.ccrn}</DataGridCell>
      <DataGridCell>{item?.node?.type}</DataGridCell>
      <DataGridCell>{item?.node?.componentVersions?.totalCount}</DataGridCell>
      <DataGridCell>{sumTotalInstances(item?.node?.componentVersions?.edges)}</DataGridCell>
    </DataGridRow>
  )
}

export default ComponentsListItem
