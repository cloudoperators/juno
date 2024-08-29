/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const containerStyles = (px, py) => {
  return `
    ${px ? "jn-px-6 " : " "} 
    ${py ? " jn-py-6" : ""}
  `
}

/**
 * A very basic layout container with padding.
 */
export const Container = ({ px = true, py = false, className = "", children = null, ...props }) => {
  return (
    <div className={`juno-container ${containerStyles(px, py)} ${className}`} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  /** Choose false if you don't want horizontal padding to be added. */
  px: PropTypes.bool,
  /** Set to true to add vertical padding. */
  py: PropTypes.bool,
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}
