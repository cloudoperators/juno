/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"

import { useDataGridContext, CellVerticalAlignmentType } from "../DataGrid/DataGrid.component"

const cellBaseStyles = (nowrap: boolean, cellVerticalAlignment: CellVerticalAlignmentType | undefined) => {
  return `
		${nowrap ? "jn-whitespace-nowrap" : ""}
		${
      cellVerticalAlignment === "center"
        ? `
				jn-justify-center
				jn-flex
				jn-flex-col		
			`
        : ""
    }
		jn-px-5
		jn-py-3
		jn-border-b
		jn-border-theme-background-lvl-2
		jn-h-full
	`
}

const cellCustomStyles = (colSpan: number | undefined) => {
  let styles
  if (colSpan) {
    styles = { gridColumn: `span ${colSpan} / span ${colSpan}` }
  }
  return styles
}

export const DataGridCell = forwardRef<HTMLDivElement, DataGridCellProps>(
  ({ colSpan, nowrap = false, className = "", children = null, ...props }, ref) => {
    const dataGridContext = useDataGridContext() || {}
    const cellVerticalAlignment = dataGridContext.cellVerticalAlignment

    return (
      <div
        className={`juno-datagrid-cell ${cellBaseStyles(nowrap, cellVerticalAlignment)} ${className}`}
        style={cellCustomStyles(colSpan)}
        role="gridcell"
        ref={ref}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DataGridCell.displayName = "DataGridCell"

export type DataGridCellProps = {
  /** Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.  */
  colSpan?: number
  /** Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;) */
  nowrap?: boolean
  /** Children to render in the DataGridCell */
  children?: (JSX.Element[] | JSX.Element | null)[] | JSX.Element | string | null
  /** Add a classname */
  className?: string
} & React.HTMLProps<HTMLDivElement>
