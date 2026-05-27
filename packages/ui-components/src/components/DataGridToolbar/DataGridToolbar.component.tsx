/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const baseToolbarStyles = `
	jn:bg-theme-datagridtoolbar
  jn:border-b
  jn:border-theme-default
	jn:py-2
	jn:px-3
`

/**
 * `DataGridToolbar` is a styled wrapper for the filter, search, and state zone (Zones 2+3) of a DataGrid header.
 * It provides a background, consistent padding, and separation from the grid below. Use `Stack` inside to compose and position content.
 * Zone 1 content (primary actions, bulk actions, sorting) does not use this component — use a plain `Stack` there instead.
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
