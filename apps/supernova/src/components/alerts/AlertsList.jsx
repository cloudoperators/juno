/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
import { useAlertsQuery } from "../../hooks/useAlertsQuery"

const AlertsList = () => {
  const { filteredItems } = useAlertsQuery()

  const { scrollListItems, iterator } = useEndlessScrollList(filteredItems, {
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
    refFunction: (ref) => (
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

      {scrollListItems?.length > 0 ? (
        iterator.map((alert) => <Alert key={alert.fingerprint} alert={alert} />)
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
