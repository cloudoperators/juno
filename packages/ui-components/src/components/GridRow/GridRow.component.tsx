/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const baseRowStyles = `
    jn:flex
    jn:flex-wrap
    jn:m-grid-row
`

export interface GridRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Elements to be rendered within the grid row.
   * Typically, these would be GridColumn components.
   */
  children?: ReactNode

  /**
   * Additional CSS classes to apply to the grid row for custom styling.
   * @default ""
   */
  className?: string
}

/**
 * The `GridRow` component acts as a container to hold `GridColumn` elements
 * within a `Grid`. It ensures proper flexbox wrapping for responsive design.
 */
export const GridRow = ({ children, className = "", ...props }: GridRowProps): ReactNode => {
  return (
    <div className={`juno-grid-row ${baseRowStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
