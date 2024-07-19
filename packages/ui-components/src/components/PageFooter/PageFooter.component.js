/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import CCloudShape from "../../img/ccloud_shape.svg"

const basePageFooter = `
  jn-flex
  jn-shrink-0
  jn-grow-0
  jn-basis-auto
  jn-relative
  jn-bg-theme-global-bg
  jn-min-h-[3.25rem]
  jn-pl-6
  jn-pr-24
  jn-py-5
  jn-z-50
`

const logoStyles = `
  jn-h-[2.625rem]
  jn-absolute
  jn-right-0
  jn-bottom-0
`

/**
 * The page footer component renders a footer at the bottom of the website. Place as last child of AppBody.
 */
export const PageFooter = ({ className = "", children = null, ...props }) => {
  return (
    <div
      className={`juno-pagefooter ${basePageFooter} ${className}`}
      role="contentinfo"
      {...props}
    >
      {children}
      <CCloudShape className={logoStyles} alt="cloud shape" />
    </div>
  )
}

PageFooter.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}
