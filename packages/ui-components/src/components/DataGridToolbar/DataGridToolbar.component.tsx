/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const baseToolbarStyles = `
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`

/**
 * `DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs
 * for performing group operations and interfacing with the grid content.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-datagrid-datagridtoolbar--docs
 * @see {@link DataGridToolbarProps}
 */
export const DataGridToolbar = ({
  className = "",
  children,
  alignRight = true,
  ...props
}: DataGridToolbarProps): ReactNode => {
  const childrenWrapperStyles = alignRight ? "jn:ml-auto" : ""
  const alignmentToolbarStyles = alignRight ? "jn:flex jn:items-center" : ""
  return (
    <div className={`juno-datagrid-toolbar ${baseToolbarStyles} ${alignmentToolbarStyles} ${className}`} {...props}>
      <div className={childrenWrapperStyles}>{children}</div>
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

  /**
   * Determines whether the children are automatically aligned to the right side within the toolbar.
   * When true, applies `ml-auto` to the children wrapper, pushing content right.
   * When false, no automatic alignment is applied, allowing for custom layouts.
   * @default true
   */
  alignRight?: boolean
}
