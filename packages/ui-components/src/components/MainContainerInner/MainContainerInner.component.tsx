/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const mainInnerStyles = `
  jn:flex
  jn:grow
`

const constrainStyles = `
  jn:2xl:container
  jn:2xl:mx-auto
`

/**
 * `MainContainerInner` offers a structured inner wrapper for page content, enabling width constraints
 * or full-width rendering as needed.
 */
export const MainContainerInner = ({
  children,
  fullWidth = false,
  className = "",
  ...props
}: MainContainerInnerProps): ReactNode => {
  return (
    <div
      className={`
        juno-main-inner
         ${mainInnerStyles}
         ${!fullWidth ? constrainStyles : "juno-main-inner-fullwidth"}
         ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export interface MainContainerInnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The children to render within the container.
   */
  children?: ReactNode

  /**
   * Determines if content stretches to full viewport width.
   * @default false
   */
  fullWidth?: boolean

  /**
   * Custom CSS class names for stylized rendering.
   * @default ""
   */
  className?: string
}
