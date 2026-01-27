/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

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
 *
 * @component
 * @param {React.ReactNode} [children] Components or content to render within the container.
 * @param {boolean} [fullWidth] Indicates if content should be full-width. Defaults to `false`.
 * @param {string} [className] Additional CSS class names for stylized rendering. Defaults to an empty string.
 * @returns {React.ReactElement} A structured inner container for page content.
 */
export const MainContainerInner: React.FC<MainContainerInnerProps> = ({
  children,
  fullWidth = false,
  className = "",
  ...props
}) => {
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

export interface MainContainerInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The children to render within the container.
   */
  children?: React.ReactNode

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
