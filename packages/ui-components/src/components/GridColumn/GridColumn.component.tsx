/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { CSSProperties, HTMLAttributes, ReactNode } from "react"

const baseColumnStyles = `
  jn:flex-grid-column
  jn:p-grid-column
`

const columnWidthStyles: { [key: number]: string } = {
  0: "jn:w-grid-column-default",
  1: "jn:w-grid-col-1",
  2: "jn:w-grid-col-2",
  3: "jn:w-grid-col-3",
  4: "jn:w-grid-col-4",
  5: "jn:w-grid-col-5",
  6: "jn:w-grid-col-6",
  7: "jn:w-grid-col-7",
  8: "jn:w-grid-col-8",
  9: "jn:w-grid-col-9",
  10: "jn:w-grid-col-10",
  11: "jn:w-grid-col-11",
  12: "jn:w-grid-col-12",
}

const autoColumnStyles: CSSProperties = {
  flexGrow: "1",
  flexShrink: "0",
  flexBasis: "0",
}

// Get column class based on `cols` prop value
const getColumnWidthStyles = (cols: number | undefined): string => {
  if (!cols || cols < 1 || cols > 12) return columnWidthStyles[0]
  return columnWidthStyles[cols]
}

export interface GridColumnProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The number of columns to span the column over.
   */
  cols?: number

  /**
   * The width in percent.
   * If a width is given, it will override the 'cols' prop.
   */
  width?: number

  /**
   * Determines whether the column should set an auto width.
   * @default false
   */
  auto?: boolean

  /**
   * Additional CSS classes to apply to the grid column for custom styling.
   * @default ""
   */
  className?: string

  /**
   * Content to be rendered inside the column.
   */
  children?: ReactNode
}

/**
 * The `GridColumn` component represents an individual column within a `Grid`,
 * providing options for span and width adjustments. It supports flexible styling
 * for responsive layout.
 */
export const GridColumn = ({
  width,
  cols,
  auto = false,
  className = "",
  children,
  ...props
}: GridColumnProps): ReactNode => {
  const widthBasedStyles: CSSProperties = width
    ? {
        width: `${width}%`,
        flexGrow: "0",
        flexShrink: "0",
        flexBasis: `${width}%`,
      }
    : {}

  // Determine final styles based on width or auto props
  const finalColumnStyles: CSSProperties = width ? widthBasedStyles : auto ? autoColumnStyles : {}

  return (
    <div
      className={`juno-grid-column ${baseColumnStyles} ${getColumnWidthStyles(cols)} ${className}`}
      style={finalColumnStyles}
      {...props}
    >
      {children}
    </div>
  )
}
