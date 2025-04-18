/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  Icon,
  Stack,
  Spinner,
  useEndlessScrollList,
} from "@cloudoperators/juno-ui-components"
import Alert from "./Alert"
import { useAlertsItemsFiltered } from "../StoreProvider"

const AlertsList = () => {
  const itemsFiltered = useAlertsItemsFiltered()
  const { scrollListItems, iterator } = useEndlessScrollList(itemsFiltered, {
    loadingObject: (
      <DataGridRow>
        <DataGridCell colSpan={3}>
          <Stack gap="3" alignment="center" direction="horizontal">
            Loading...
            <Spinner />
          </Stack>
        </DataGridCell>
      </DataGridRow>
    ),
    // @ts-ignore
    refFunction: (ref: any) => (
      <DataGridRow>
        <DataGridCell colSpan={3} className="border-b-0 py-0">
          <span ref={ref} />
        </DataGridCell>
      </DataGridRow>
    ),
  })

  return (
    <DataGrid columns={7} minContentColumns={[0, 2, 5]} cellVerticalAlignment="top" className="alerts">
      <DataGridRow>
        <DataGridHeadCell>
          <Icon icon="monitorHeart" />
        </DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Service</DataGridHeadCell>
        <DataGridHeadCell>Description</DataGridHeadCell>
        <DataGridHeadCell>Firing Since</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell></DataGridHeadCell>
      </DataGridRow>

      {scrollListItems?.length ? (
        iterator.map((alert: any) => <Alert key={alert.fingerprint} alert={alert} />)
      ) : (
        <DataGridRow className="no-hover">
          <DataGridCell colSpan={7}>
            <Stack gap="3">
              <Icon icon="info" color="text-theme-info" />
              <div>
                We couldn&apos;t find anything. It&apos;s possible that the matching alerts are not active at the
                moment, or the chosen filters could be overly limiting.
              </div>
            </Stack>
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}

export default AlertsList
