import React from "react"
import { DataGridCell, DataGridRow } from "@cloudoperators/juno-ui-components/index"

type EmptyDataGridRow = {
  colSpan: number
  children: React.ReactNode
}

export const EmptyDataGridRow = ({ colSpan, children }: EmptyDataGridRow) => (
  <DataGridRow>
    <DataGridCell colSpan={colSpan}>{children}</DataGridCell>
  </DataGridRow>
)
