/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

import { withDeprecationWarning } from "../../deprecated_js/withDeprecationWarning/withDeprecationWarning.component"

const containerStyles = `
  jn-relative
  jn-grow
  jn-flex
  jn-flex-col
  jn-overflow-hidden
`

/**
 * Deprecated: Will be deleted!
 */
export const ContentAreaWrapper = ({ className = "", children = null, ...props }) => {
  return (
    <div className={`juno-content-area-wrapper ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

ContentAreaWrapper.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

export default withDeprecationWarning(
  ContentAreaWrapper,
  "ContentAreaWrapper is deprecated and will be removed in future versions."
)
