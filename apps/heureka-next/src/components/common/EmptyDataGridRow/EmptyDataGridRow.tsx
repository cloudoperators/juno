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
