/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const codeStyles = `
  jn-bg-theme-code-block
  jn-text-sm
`

/** A basic inline <code> component.
 *   Accepts "content" prop or renders children as passed.
 */
export const Code = ({ content, children, className, ...props }) => {
  return (
    <code className={`juno-code ${codeStyles} ${className}`} {...props}>
      {content || children}
    </code>
  )
}

Code.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

Code.defaultProps = {
  content: "",
  className: "",
  children: null,
}
