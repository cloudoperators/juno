/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useLoaderData } from "@tanstack/react-router"
import { DataGrid, DataGridRow, DataGridHeadCell, Icon, Stack } from "@cloudoperators/juno-ui-components"
import { DataRows } from "./DataRows"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

const COLUMN_SPAN = 9

export const PluginPresetsDataGrid = () => {
  const { filterSettings } = useLoaderData({ from: "/admin/clusters/" })
  return (
    <DataGrid minContentColumns={[0, 9]} columns={COLUMN_SPAN}>
      <DataGridRow>
        <DataGridHeadCell className="align-center">
          <Icon icon="monitorHeart" />
        </DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Version</DataGridHeadCell>
        <DataGridHeadCell>Cluster Type</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Connectivity</DataGridHeadCell>
        <DataGridHeadCell>Message</DataGridHeadCell>
        <DataGridHeadCell>Support Group</DataGridHeadCell>
        <DataGridHeadCell></DataGridHeadCell>
      </DataGridRow>

      <ErrorBoundary
        displayErrorMessage
        fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
        resetKeys={[filterSettings]} // Reset on filter changes
      >
        <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
          <DataRows colSpan={COLUMN_SPAN} />
        </Suspense>
      </ErrorBoundary>
    </DataGrid>
  )
}
