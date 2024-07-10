/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const headingStyles = `
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`

/**

 *The main heading of a page/View. Pass as a child into `<AppShell>` or, when scaffolding manually, into `<ContentContainer>`.
 */
export const ContentHeading = ({ heading, className, children, ...props }) => {
  return (
    <h1
      className={`juno-content-heading ${headingStyles} ${className}`}
      {...props}
    >
      {children || heading}
    </h1>
  )
}

ContentHeading.propTypes = {
  /** Optionally render children. If children are present, heading will be ignored */
  children: PropTypes.node,
  /** Text to use as a title */
  heading: PropTypes.string,
  /** Add custom class name */
  className: PropTypes.string,
}

ContentHeading.defaultProps = {
  heading: "",
  className: "",
  children: null,
}
