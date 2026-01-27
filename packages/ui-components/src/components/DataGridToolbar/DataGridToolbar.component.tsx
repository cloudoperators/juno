/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

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
 *
 * @component
 * @param {React.ReactElement} [search] Optional search input component for filtering grid content.
 * @param {React.ReactNode} [children] Controls or elements to render within the toolbar.
 * @param {string} [className] Additional CSS classes for styling. Defaults to an empty string.
 * @returns {React.ReactElement} A toolbar component for data grids with customizable actions.
 */
export const DataGridToolbar: React.FC<DataGridToolbarProps> = ({ search, className = "", children, ...props }) => {
  return (
    <div className={`juno-datagrid-toolbar ${datagridtoolbarstyles} ${className}`} {...props}>
      {search && <div>{search}</div>}
      <div className={childrenWrapperStyles}>{children}</div>
    </div>
  )
}

export interface DataGridToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * An optional `SearchInput` component for inclusion in the toolbar.
   */
  search?: React.ReactElement

  /**
   * Elements or components to render within the DataGridToolbar.
   */
  children?: React.ReactNode

  /**
   * Custom CSS class names for styling the toolbar.
   * @default ""
   */
  className?: string
}
