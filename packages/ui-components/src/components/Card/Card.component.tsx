/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const cardStyles = `
  jn:text-sm
  jn:rounded-lg
  jn:bg-theme-card-default
  jn:border
  jn:border-theme-card-default
  jn:shadow-theme-default
`

const cardPadding = "jn:p-4"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Components or elements to be rendered as content.
   */
  children?: ReactNode

  /**
   * Optional padding for the Card component.
   * @default false
   */
  padding?: boolean

  /**
   * Additional CSS styles to apply.
   * @default ""
   */
  className?: string
}

/**
 * The `Card` component acts as a versatile container for various types of content, providing
 * an optional padding feature for additional layout flexibility. It is commonly used for
 * displaying information or grouping elements, allowing for consistent styling and shadow effects.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-card--docs
 * @see {@link CardProps}
 */
export const Card = ({ children, padding = false, className = "", ...props }: CardProps): ReactNode => {
  const combinedClassName = `juno-card ${cardStyles} ${padding ? cardPadding : ""} ${className}`
  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  )
}
