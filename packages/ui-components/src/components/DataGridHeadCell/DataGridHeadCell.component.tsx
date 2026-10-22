/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, ReactNode } from "react"
import { DataGridCell } from "../DataGridCell/index"
import { TextContainType } from "../../shared/textContain"

const headCellBaseStyles = `
	jn:font-bold
	jn:text-theme-high
	jn:border-theme-default
`

/**
 * `DataGridHeadCell` is designed for use within a `DataGrid` header, defining column attributes and appearance.
 * It accommodates configurations like sorting (future implementation) and display styles.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridheadcell--docs
 * @see {@link DataGridHeadCellProps}
 */
export const DataGridHeadCell = forwardRef<HTMLDivElement, DataGridHeadCellProps>(
  ({ colSpan, nowrap = false, textContain, className = "", children, ...props }, ref) => {
    return (
      <DataGridCell
        colSpan={colSpan}
        nowrap={nowrap}
        textContain={textContain}
        className={`juno-datagrid-head-cell ${headCellBaseStyles} ${className}`}
        role="columnheader"
        ref={ref}
        {...props}
      >
        {children}
      </DataGridCell>
    )
  }
)

DataGridHeadCell.displayName = "DataGridHeadCell"

export interface DataGridHeadCellProps extends HTMLAttributes<HTMLElement> {
  /** Defines the number of columns the cell spans. */
  colSpan?: number

  /**
   * If set, content within the cell will not wrap.
   * @default false
   * @deprecated Use `textContain="no-wrap"` instead. When `textContain` is set, `nowrap` is ignored.
   */
  nowrap?: boolean

  /**
   * Controls how the cell contains text that exceeds its available space.
   * Forwarded to the underlying `DataGridCell` — see its documentation for full details.
   * Takes precedence over the deprecated `nowrap` prop.
   */
  textContain?: TextContainType

  /** Children to render in the DataGridHeadCell */
  children?: ReactNode

  /** Add a classname */
  className?: string
}
