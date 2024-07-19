/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

// const autoColumnStyles = `
// 	jn-grow
// 	jn-shrink-0
// 	jn-flex-basis-0
// `
// const widthColumnStyles = `
// 	jn-grow-0
// 	jn-shrink-1
// 	jn-flex-basis-auto
// `

const columnBaseStyles = `
	jn-flex-grid-column
	jn-p-grid-column
`

const cols_1 = `
	jn-w-grid-col-1
`

const cols_2 = `
	jn-w-grid-col-2
`

const cols_3 = `
	jn-w-grid-col-3
`

const cols_4 = `
	jn-w-grid-col-4
`

const cols_5 = `
	jn-w-grid-col-6
`

const cols_6 = `
	jn-w-grid-col-6
`

const cols_7 = `
	jn-w-grid-col-7
`

const cols_8 = `
	jn-w-grid-col-8
`

const cols_9 = `
	jn-w-grid-col-9
`

const cols_10 = `
	jn-w-grid-col-10
`

const cols_11 = `
	jn-w-grid-col-11
`

const cols_12 = `
	jn-w-grid-col-12
`

const colsClass = (cols) => {
  switch (cols) {
    case 1:
      return cols_1
    case 2:
      return cols_2
    case 3:
      return cols_3
    case 4:
      return cols_4
    case 5:
      return cols_5
    case 6:
      return cols_6
    case 7:
      return cols_7
    case 8:
      return cols_8
    case 9:
      return cols_9
    case 10:
      return cols_10
    case 11:
      return cols_11
    case 12:
      return cols_12
    default:
      return "jn-w-grid-column-default"
  }
}

/**
A grid column to be used inside a Grid.
*/
export const GridColumn = ({
  width = null,
  cols = null,
  auto = false,
  className = "",
  children,
  ...props
}) => {
  // auto column:
  const autoStyles = {
    flexGrow: "1",
    flexShrink: "0",
    flexBasis: "0",
  }
  // width column:
  const widthStyles = width
    ? {
        width: width + "%",
        flexGrow: "0",
        flexShrink: "0",
        flexBasis: width + "%",
      }
    : {}
  // width overrides auto:
  const columnStyles = width ? widthStyles : auto ? autoStyles : {}
  return (
    <div
      className={`juno-grid-column ${columnBaseStyles} ${colsClass(cols)} ${className}`}
      style={columnStyles}
      {...props}
    >
      {children}
    </div>
  )
}

GridColumn.propTypes = {
  /** The number of columns to span the column over. */
  cols: PropTypes.number,
  /** The width in percent as a number without "%" for auto-layout grids TODO: or "auto". If a width is given, it will override the "cols" prop. */
  width: PropTypes.number,
  /** Whether the colum should set an auto width */
  auto: PropTypes.bool,
  /** Add a class to a grid column */
  className: PropTypes.string,
  /** Children to be rendered in the column element */
  children: PropTypes.node,
}
