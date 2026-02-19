/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from "react"

import { useDataGridContext, CellVerticalAlignmentType } from "../DataGrid/DataGrid.component"

const cellBaseStyles = (nowrap: boolean, cellVerticalAlignment: CellVerticalAlignmentType | undefined) => {
  return `
		${nowrap ? "jn:whitespace-nowrap" : ""}
		${
      cellVerticalAlignment === "center"
        ? `
				jn:justify-center
				jn:flex
				jn:flex-col		
			`
        : ""
    }
		jn:px-5
		jn:py-3
		jn:border-b
		jn:border-theme-background-lvl-2
		jn:h-full
	`
}

const cellCustomStyles = (colSpan: number | undefined) => {
  let styles
  if (colSpan) {
    styles = { gridColumn: `span ${colSpan} / span ${colSpan}` }
  }
  return styles
}

/**
 * `DataGridCell` is a versatile layout component for `DataGrid`, supporting cell-specific configurations
 * like column span and wrapping. It adapts orientation based on grid context.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridcell--docs
 * @see {@link DataGridCellProps}
 */
export const DataGridCell = forwardRef<HTMLDivElement, DataGridCellProps>(
  ({ colSpan, nowrap = false, className = "", children, ...props }, ref) => {
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

export interface DataGridCellProps extends HTMLAttributes<HTMLDivElement> {
  /** Defines the number of columns the cell spans. */
  colSpan?: number

  /**
   * If set, content within the cell will not wrap.
   * @default false
   */
  nowrap?: boolean

  /** Components or elements to render within the DataGridCell. */
  children?: ReactNode

  /**
   * Additional CSS class names for custom styling.
   * @default ""
   */
  className?: string
}
