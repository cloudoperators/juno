/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef } from "react"
import "./data-grid-row.css"

export const DataGridRow = forwardRef<HTMLDivElement, DataGridRowProps>(
  ({ hoverable = false, className = "", children, ...props }, ref) => {
    const finalClassNames = `${hoverable ? "juno-datagrid-group" : ""} juno-datagrid-row ${className}`

    return (
      <div className={finalClassNames} role="row" ref={ref} {...props}>
        {children}
      </div>
    )
  }
)

DataGridRow.displayName = "DataGridRow"

export interface DataGridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Determines whether the DataGridRow should apply hover styles */
  hoverable?: boolean
  /** Children to render*/
  children?: React.ReactNode
  /** Extra styles to apply*/
  className?: string
}
