/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

export const DataGridFoot = ({ className = "", children = null, ...props }) => {
  return (
    <tfoot className={`juno-datagrid-foot ${className}`} {...props}>
      {children}
    </tfoot>
  )
}

DataGridFoot.propTypes = {
  /** Children to render in the DataGridFoot */
  children: PropTypes.node,
  /** Add a classname */
  className: PropTypes.string,
}
