/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"

const checkboxCellStyles = `
  jn:flex
  jn:flex-col
  jn:justify-center
`

/**
 * `DataGridCheckboxCell` is a `DataGrid` cell pre-configured for holding a `Checkbox` component.
 * Place a `Checkbox` as a child and wire up selection state and event handlers directly on it.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridcheckboxcell--docs
 * @see {@link DataGridCheckboxCellProps}
 */
export const DataGridCheckboxCell = ({ className = "", children, ...props }: DataGridCheckboxCellProps): ReactNode => {
  return (
    // Always center vertically regardless of the parent DataGrid's cellVerticalAlignment context.
    <DataGridCell className={`juno-datagrid-checkbox-cell ${checkboxCellStyles} ${className}`} {...props}>
      {children}
    </DataGridCell>
  )
}

// Omit onChange: it would silently spread onto the underlying div (a no-op) instead of reaching the Checkbox child, misleading consumers into thinking they're wiring up checkbox state.
export interface DataGridCheckboxCellProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /** A `Checkbox` component to render inside the cell. */
  children?: ReactNode

  /**
   * Additional class names for styling.
   * @default ""
   */
  className?: string
}
