/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const datagridtoolbarstyles = `
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`

const childrenWrapperStyles = `
	jn-ml-auto
`

/** This is the toolbar for use with a DataGrid. This is the place where you would put buttons and other controls that affect the items in the DataGrid (e.g. triggering batch actions). Optionally a search input can be added. */
export const DataGridToolbar = ({
  search,
  className = "",
  children = null,
  ...props
}) => {
  return (
    <div
      className={`juno-datagrid-toolbar ${datagridtoolbarstyles} ${className}`}
      {...props}
    >
      {search && <div>{search}</div>}
      <div className={childrenWrapperStyles}>{children}</div>
    </div>
  )
}

DataGridToolbar.propTypes = {
  /** Pass an optional SearchInput component */
  search: PropTypes.node,
  /** Children to render in the DataGridToolbar */
  children: PropTypes.node,
  /** Add a classname */
  className: PropTypes.string,
}
