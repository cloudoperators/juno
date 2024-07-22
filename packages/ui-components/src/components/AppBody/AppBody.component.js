/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const containerStyles = `
  jn-flex
  jn-flex-col
  jn-h-full
`

/**
 * Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead.
 * Body of the app. Treat this like the body tag of an html page.
 */
export const AppBody = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-body ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

AppBody.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  /** Pass children nodes */
  children: PropTypes.node,
}
