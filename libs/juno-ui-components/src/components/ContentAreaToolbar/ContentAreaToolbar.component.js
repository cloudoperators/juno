/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"


const toolbarStyles = `
  jn-bg-theme-background-lvl-1
  jn-py-3
  jn-px-6
  jn-flex
  jn-items-center
  jn-justify-end
`

/**
 * This is the main toolbar of the content area. Add main actions for the current page here.
 */
export const ContentAreaToolbar = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={`juno-content-area-toolbar ${toolbarStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

ContentAreaToolbar.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

ContentAreaToolbar.defaultProps = {
  className: "",
  children: null,
}
