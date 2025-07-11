/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"
import "./data-grid-row.css"

export const DataGridRow = forwardRef<HTMLDivElement, DataGridRowProps>(
  ({ hoverable = false, className = "", children, ...props }, ref) => {
    const finalStyles = `${hoverable ? "juno-datagrid-group" : ""} juno-datagrid-row ${className}`

    return (
      <div className={finalStyles} role="row" ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

DataGridRow.displayName = "DataGridRow"

export interface DataGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Determines whether the DataGridRow should apply hover styles. */
  hoverable?: boolean
  /** Additional custom CSS class names that can be applied to the DataGridRow.  */
  className?: string
  /** Elements or components that will be rendered within the DataGridRow. */
  children?: React.ReactNode
}
