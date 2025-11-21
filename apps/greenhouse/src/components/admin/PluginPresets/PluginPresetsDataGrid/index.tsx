/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense } from "react"
import { DataGrid, DataGridRow, DataGridHeadCell } from "@cloudoperators/juno-ui-components"
import { DataRows } from "./DataRows"
import { LoadingDataRow } from "../../common/LoadingDataRow"
import { ErrorBoundary } from "../../common/ErrorBoundary"
import { getErrorDataRowComponent } from "../../common/getErrorDataRow"

const COLUMN_SPAN = 8

interface PluginPreset {
  deploymentStatus: string
  status: string
  name: string
  pluginDefinition: string
  message: string
  pluginInstances: string
  lastModified: string
}

interface PluginPresetsDataGridProps {
  pluginPresetsPromise: Promise<PluginPreset[]>
}

export const PluginPresetsDataGrid = ({ pluginPresetsPromise }: PluginPresetsDataGridProps) => {
  return (
    <div className="datagrid-hover">
      <DataGrid columns={COLUMN_SPAN}>
        <DataGridRow>
          <DataGridHeadCell></DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Plugin Definition</DataGridHeadCell>
          <DataGridHeadCell>Message</DataGridHeadCell>
          <DataGridHeadCell>Plugin Instances</DataGridHeadCell>
          <DataGridHeadCell>Last Modified</DataGridHeadCell>
          <DataGridHeadCell>Actions</DataGridHeadCell>
        </DataGridRow>

        <ErrorBoundary
          displayErrorMessage
          fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
          resetKeys={[pluginPresetsPromise]}
        >
          <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
            <DataRows pluginPresetsPromise={pluginPresetsPromise} colSpan={COLUMN_SPAN} />
          </Suspense>
        </ErrorBoundary>
      </DataGrid>
    </div>
  )
}
