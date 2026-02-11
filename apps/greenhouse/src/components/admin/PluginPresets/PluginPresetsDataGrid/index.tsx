/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { useLoaderData } from "@tanstack/react-router"
import { DataGrid, DataGridRow, DataGridHeadCell, Icon } from "@cloudoperators/juno-ui-components"
import { DataRows } from "./DataRows"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

const COLUMN_SPAN = 7

export const PluginPresetsDataGrid = () => {
  const { filterSettings } = useLoaderData({ from: "/admin/plugin-presets/" })
  return (
    <DataGrid minContentColumns={[0, 1, 6]} columns={COLUMN_SPAN}>
      <DataGridRow>
        <DataGridHeadCell>
          <Icon icon="monitorHeart" />
        </DataGridHeadCell>
        <DataGridHeadCell>Instances</DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Plugin Definition</DataGridHeadCell>
        <DataGridHeadCell>Message</DataGridHeadCell>
        <DataGridHeadCell>Readiness Conditions</DataGridHeadCell>
        <DataGridHeadCell>Actions</DataGridHeadCell>
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
