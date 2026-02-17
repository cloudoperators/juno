/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

// Styles to apply when the 'auto' prop is true, overriding default grid column properties
const autoStyles = {
  "--grid-column-flex-grow": "1",
  "--grid-column-flex-shrink": "0",
  "--grid-column-flex-basis": "0",
  "--grid-column-default-width": "auto",
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Controls whether columns should auto-size.
   * If true, this will override the default 12-column grid layout.
   * @default false
   */
  auto?: boolean

  /**
   * Elements to be rendered within the grid.
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply to the grid for custom styling.
   * @default ""
   */
  className?: string
}

/**
 * The `Grid` component establishes a customizable grid layout, enabling
 * responsive design. It collaborates with `GridColumn` and `GridRow` for
 * flexible arrangement of content.
 */
export const Grid = ({ auto = false, children, className = "", ...props }: GridProps): ReactNode => {
  const gridStyles = auto ? autoStyles : {}

  return (
    <div className={`juno-grid ${className}`} style={gridStyles} {...props}>
      {children}
    </div>
  )
}
