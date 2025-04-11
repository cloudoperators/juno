/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const baseRowStyles = `
    jn:flex
    jn:flex-wrap
    jn:m-grid-row
`

export interface GridRowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Elements to be rendered within the grid row.
   * Typically, these would be GridColumn components.
   */
  children?: React.ReactNode
  /**
   * Additional CSS classes to apply to the grid row for custom styling.
   */
  className?: string
}

/**
 * A grid row container to hold GridColumn elements inside a Grid.
 * This component ensures that its children are wrapped correctly in a flexbox layout.
 */
export const GridRow: React.FC<GridRowProps> = ({ children, className = "", ...props }) => {
  return (
    <div className={`juno-grid-row ${baseRowStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
