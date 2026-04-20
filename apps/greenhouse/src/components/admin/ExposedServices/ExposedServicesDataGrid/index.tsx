/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useLoaderData } from "@tanstack/react-router"
import { DataGrid, DataGridRow, DataGridHeadCell } from "@cloudoperators/juno-ui-components"

import { DataRows } from "./DataRows"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

const COLUMN_SPAN = 4

export const ExposedServicesDataGrid = () => {
  const { filterSettings } = useLoaderData({ from: "/admin/exposed-services" })
  return (
    <DataGrid columns={COLUMN_SPAN}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Cluster</DataGridHeadCell>
        <DataGridHeadCell>Plugin</DataGridHeadCell>
        <DataGridHeadCell>Support Group</DataGridHeadCell>
      </DataGridRow>

      <ErrorBoundary
        displayErrorMessage
        fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
        resetKeys={[filterSettings]}
      >
        <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
          <DataRows colSpan={COLUMN_SPAN} />
        </Suspense>
      </ErrorBoundary>
    </DataGrid>
  )
}
