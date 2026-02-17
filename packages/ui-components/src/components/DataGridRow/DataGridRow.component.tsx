/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, HTMLAttributes, MouseEvent, ReactNode } from "react"
import "./data-grid-row.css"

/**
 * `DataGridRow` represents a row in a `DataGrid`, supporting interactions such as selection and click handling.
 * It provides styles for active states and custom behavior when interacted with.
 */
export const DataGridRow = forwardRef<HTMLDivElement, DataGridRowProps>(
  ({ isSelected = false, onClick, className = "", children, ...props }, ref) => {
    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
      if (onClick) onClick(event)
    }

    const finalStyles = `
      datagrid-row
      ${isSelected ? "datagrid-row-selected" : ""}
      ${onClick ? "datagrid-row-hoverable" : ""}
      ${className}
    `

    return (
      <div className={finalStyles} role="row" ref={ref} onClick={handleClick} {...props}>
        {children}
      </div>
    )
  }
)

DataGridRow.displayName = "DataGridRow"

export interface DataGridRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Indicates if the DataGridRow should be in an active state,
   * applying styles for persistent selection or activation.
   */
  isSelected?: boolean

  /**
   * Row click handler
   */
  onClick?: (_event: MouseEvent<HTMLDivElement>) => void

  /**
   * Additional custom CSS class names that can be applied to the DataGridRow.
   */
  className?: string

  /**
   * Elements or components that will be rendered within the DataGridRow.
   */
  children?: ReactNode
}
