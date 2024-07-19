/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const dividerStyles = `
  jn-h-px 
  jn-w-full
  jn-bg-theme-background-lvl-3
`

/** A visual border/divider between SelectOptions or SelectGroups */
export const SelectDivider = React.forwardRef(
  ({ className = "", ...props }, forwardedRef) => {
    return (
      <div
        className={`juno-select-divider ${dividerStyles} ${className}`}
        ref={forwardedRef}
        {...props}
      ></div>
    )
  }
)

SelectDivider.displayName = "SelectDivider"

SelectDivider.propTypes = {
  /** add a custom className */
  className: PropTypes.string,
}
