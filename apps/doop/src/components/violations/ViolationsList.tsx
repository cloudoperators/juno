/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { DataGrid, DataGridHeadCell, DataGridRow, Icon } from "@cloudoperators/juno-ui-components"
import { useDataFilteredItems } from "../StoreProvider"
import ViolationsListItem from "./ViolationsListItem"

const ViolationsList = () => {
  // violations
  const filteredItems = useDataFilteredItems()

  return (
    <>
      {
        // @ts-expect-error TS(2339) FIXME: Property 'length' does not exist on type 'any'.
        filteredItems?.length === 0 ? (
          <div className="p-4">No violations found</div>
        ) : (
          <>
            <DataGrid columns={5} cellVerticalAlignment="top" className="violations-list">
              <DataGridRow>
                <DataGridHeadCell>
                  <Icon icon="monitorHeart" />
                </DataGridHeadCell>
                <DataGridHeadCell>Check Name</DataGridHeadCell>
                <DataGridHeadCell>Total</DataGridHeadCell>
                <DataGridHeadCell>Violations per Service</DataGridHeadCell>
                <DataGridHeadCell>Template/Constraint</DataGridHeadCell>
              </DataGridRow>
              {
                // @ts-expect-error TS(2339) FIXME: Property 'map' does not exist on type 'any'.
                filteredItems.map((violation: any, i: any) => (
                  <ViolationsListItem key={i} item={violation} />
                ))
              }
            </DataGrid>
          </>
        )
      }
    </>
  )
}

export default ViolationsList
