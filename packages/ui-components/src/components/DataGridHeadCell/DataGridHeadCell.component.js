/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import { DataGridCell } from "../DataGridCell/index.js"

const headCellBaseStyles = `
	jn-font-bold
	jn-text-theme-high
	jn-bg-theme-background-lvl-1
	jn-border-theme-background-lvl-0
`

export const DataGridHeadCell = forwardRef(
  (
    {
      // sortable,
      colSpan,
      nowrap = false,
      className = "",
      children = null,
      ...props
    },
    ref
  ) => {
    return (
      <DataGridCell
        colSpan={colSpan}
        nowrap={nowrap}
        className={`juno-datagrid-head-cell ${headCellBaseStyles} ${className}`}
        role="columnheader"
        ref={ref}
        {...props}
      >
        {children}
      </DataGridCell>
      // <div
      // 	className={`juno-datagrid-head-cell ${headCellBaseStyles} ${className}`}
      // 	role="columnheader"
      // 	{...props}>
      // 	{children}
      // 	{/* { sortable ? <Icon size={'1rem'} className={`${sortIconStyles}`}/> : ''} */}
      // </div>
    )
  }
)

DataGridHeadCell.displayName = "DataGridHeadCell"

DataGridHeadCell.propTypes = {
  /** Whether the DataGrid should be sortable by this column */
  // sortable: PropTypes.bool,
  /** Add a col span to the cell. This works like a colspan in a normal html table, so you have to take care not to place too many cells in a row if some of them have a colspan.  */
  colSpan: PropTypes.number,
  /** Set nowrap to true if the cell content shouldn't wrap (this is achieved by adding white-space: nowrap;) */
  nowrap: PropTypes.bool,
  /** Children to render in the DataGridHeadCell */
  children: PropTypes.node,
  /** Add a classname */
  className: PropTypes.string,
}
