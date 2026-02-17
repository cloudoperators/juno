/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactElement, ReactNode } from "react"

const datagridtoolbarstyles = `
	jn:flex
	jn:items-center
	jn:bg-theme-background-lvl-1
	jn:py-3
	jn:px-6
	jn:mb-px
`

const childrenWrapperStyles = `
	jn:ml-auto
`

/**
 * `DataGridToolbar` provides an action bar for a `DataGrid`, designed to hold controls like buttons and search inputs
 * for performing group operations and interfacing with the grid content.
 */
export const DataGridToolbar = ({ search, className = "", children, ...props }: DataGridToolbarProps): ReactNode => {
  return (
    <div className={`juno-datagrid-toolbar ${datagridtoolbarstyles} ${className}`} {...props}>
      {search && <div>{search}</div>}
      <div className={childrenWrapperStyles}>{children}</div>
    </div>
  )
}

export interface DataGridToolbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * An optional `SearchInput` component for inclusion in the toolbar.
   */
  search?: ReactElement

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
