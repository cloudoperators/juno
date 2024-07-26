/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { withDeprecationWarning } from "../withDeprecationWarning/index.js"

const containerStyles = `
  jn-bg-theme-content-area-bg
  jn-relative
  jn-grow
`

/**
 * Deprecated: This component used to be used internally by AppShell but has been removed there since. It was only needed to manually scaffold an app. Use AppShell to scaffold an app layout..
 */
export const ContentArea = ({ className = "", children = null, ...props }) => {
  return (
    <div className={`juno-content-area ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

ContentArea.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

export default withDeprecationWarning(
  ContentArea,
  "ContentArea is deprecated and will be removed in future versions. To be future-proof, use AppShell to scaffold an app layout."
)
