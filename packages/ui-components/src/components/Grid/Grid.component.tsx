/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

// Styles to apply when the 'auto' prop is true, overriding default grid column properties
const autoStyles = {
  "--grid-column-flex-grow": "1",
  "--grid-column-flex-shrink": "0",
  "--grid-column-flex-basis": "0",
  "--grid-column-default-width": "auto",
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controls whether columns should auto-size.
   * If true, this will override the default 12-column grid layout.
   */
  auto?: boolean
  /**
   * Elements to be rendered within the grid.
   */
  children?: React.ReactNode
  /**
   * Additional CSS classes to apply to the grid for custom styling.
   */
  className?: string
}

/**
 * A general-use grid component.
 * Used in conjunction with GridColumn and GridRow components to create a flexible grid layout.
 */
export const Grid: React.FC<GridProps> = ({ auto = false, children = null, className = "", ...props }) => {
  const gridStyles = auto ? autoStyles : {}

  return (
    <div className={`juno-grid ${className}`} style={gridStyles} {...props}>
      {children}
    </div>
  )
}
