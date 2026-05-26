/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useLoaderData } from "@tanstack/react-router"

import { DataRows } from "./DataRows"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"
import { DataGrid, DataGridRow, DataGridHeadCell, Icon } from "@cloudoperators/juno-ui-components"

const COLUMN_SPAN = 9

export const ClustersDataGrid = () => {
  const { filterSettings } = useLoaderData({ from: "/admin/clusters/" })
  return (
    <DataGrid minContentColumns={[0, 8]} columns={COLUMN_SPAN}>
      <DataGridRow>
        <DataGridHeadCell className="align-center">
          <Icon icon="monitorHeart" />
        </DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Region</DataGridHeadCell>
        <DataGridHeadCell>Cluster Type</DataGridHeadCell>
        <DataGridHeadCell>Support Group</DataGridHeadCell>
        <DataGridHeadCell>Connectivity</DataGridHeadCell>
        <DataGridHeadCell>Version</DataGridHeadCell>
        <DataGridHeadCell>Message</DataGridHeadCell>
        <DataGridHeadCell></DataGridHeadCell>
      </DataGridRow>

      <ErrorBoundary
        displayErrorMessage
        fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
        resetKeys={[filterSettings]} // Reset on filter change
      >
        <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
          <DataRows colSpan={COLUMN_SPAN} />
        </Suspense>
      </ErrorBoundary>
    </DataGrid>
  )
}
