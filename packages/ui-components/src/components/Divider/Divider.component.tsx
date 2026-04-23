/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class(es) to apply.
   * @default ""
   */
  className?: string

  /**
   * Override the separator color. Pass a Tailwind `border-color` class, e.g. `jn:border-juno-blue-3`.
   */
  color?: string

  /**
   * Adjust separator vertical spacing.
   */
  spacing?: string
}

export const Divider = ({ className = "", color, spacing, ...props }: DividerProps): ReactNode => {
  return (
    <div className={`juno-divider juno-divider-wrapper ${spacing ?? "jn:py-1"} ${className}`} {...props}>
      <hr className={`juno-divider-separator jn:h-px ${color ?? "jn:border-theme-divider"}`} />
    </div>
  )
}
