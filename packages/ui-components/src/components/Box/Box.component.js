/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const boxstyles = `
  jn-text-sm
  jn-rounded
  jn-bg-theme-box-default
  jn-border
  jn-border-theme-box-default
`

/* When adjusting the padding update tests accordingly as we are testing for rendering padded and unpadded Box */
const boxpadding = `
  jn-py-1
  jn-px-2
`
/** 
A generic Box element with padding and a light border.

Use for annotations, further explanations, and remarks where Message or InfoBox would be visually too emphasized.

Will typically contain (small) text, but can be passed any child element(s) as desired.
*/
export const Box = ({ children = null, unpad = false, className = "", ...props }) => {
  return (
    <div className={`juno-box ${boxstyles} ${unpad ? "" : boxpadding} ${className}`} {...props}>
      {children}
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node,
  unpad: PropTypes.bool,
  className: PropTypes.string,
}
