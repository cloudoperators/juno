/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"


const containerStyles = `
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`

/**
 * Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead.
 * A container for app content. Will be centered on the screen when browser window is wider than the max breakpoint width.
 */
export const ContentContainer = ({ className, children, ...props }) => {
  return (
    <div className={`juno-content-container ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

ContentContainer.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

ContentContainer.defaultProps = {
  className: "",
  children: null,
}
