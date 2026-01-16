/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridCell, DataGridRow } from "@cloudoperators/juno-ui-components"

type EmptyDataGridRowProps = {
  colSpan: number
  children: React.ReactNode
}

export const EmptyDataGridRow = ({ colSpan, children }: EmptyDataGridRowProps) => (
  <DataGridRow>
    <DataGridCell colSpan={colSpan}>{children}</DataGridCell>
  </DataGridRow>
)
