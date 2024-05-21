/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const baseStyles = `
  jn-text-xs
  jn-mt-1
`

const variantStyles = (variant) => {
  switch (variant) {
    case "success":
      return "jn-text-theme-success"
    case "error":
      return "jn-text-theme-error"
    default:
      return "jn-text-theme-light"
  }
}

export const FormHint = ({
  children,
  text,
  variant,
  className,
  ...props
}) => {
  return (
    <div 
      className={`
        juno-form-hint
        juno-form-hint-${variant}
        ${ baseStyles }
        ${ variantStyles(variant) }
        ${ className }
      `} 
      {...props} 
    >
      { children || text }
    </div>
  )
}


FormHint.propTypes = {
  /** The children to render as a hint associated with a form element */
  children: PropTypes.node,
  /** The text to render. If both children and text are passed, children will rendered */
  text: PropTypes.node,
  /** The variant of the the hint. Defaults to 'help'. */
  variant: PropTypes.oneOf(["help", "error", "success"]),
  /** Pass a custom className */
  className: PropTypes.string,
}


FormHint.defaultProps = {
  children: null,
  text: "",
  variant: "help",
  className: undefined,
}