/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const baseToolbarStyles = `
	jn:py-3
	jn:px-6
	jn:mb-px
`

/**
 * `DataGridToolbar` is a spacing wrapper for a `DataGrid` header row. It provides consistent padding and separation
 * from the grid below. Use `Stack` inside to compose and position toolbar content.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridtoolbar--docs
 * @see {@link DataGridToolbarProps}
 */
export const DataGridToolbar = ({ className = "", children, ...props }: DataGridToolbarProps): ReactNode => {
  return (
    <div className={`juno-datagrid-toolbar ${baseToolbarStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface DataGridToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Elements or components to render within the DataGridToolbar.
   */
  children?: ReactNode

  /**
   * Custom CSS class names for styling the toolbar.
   * @default ""
   */
  className?: string
}
