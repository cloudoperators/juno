/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const headerContainerStyles = `
  jn:flex
  jn:flex-col
  jn:sticky
  jn:top-0
  jn:z-50
  jn:shadow-lg
  jn:bg-theme-global-bg
`

/**
 * The `HeaderContainer` component serves as a fixed, styled container at the top
 * of a page or view, supporting full-width or constrained layouts.
 */
export const HeaderContainer = ({
  fullWidth = false,
  className = "",
  children,
  ...props
}: HeaderContainerProps): ReactNode => {
  return (
    <div
      className={`
    juno-header-container 
    ${!fullWidth ? "jn:w-full jn:2xl:container jn:2xl:mx-auto" : "juno-header-container-fullwidth"}
    ${headerContainerStyles} 
    ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export interface HeaderContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the page/view content will stretch over the full width of the viewport or not.
   * @default false
   */
  fullWidth?: boolean

  /**
   * Custom CSS class name to apply to the header container.
   * @default ""
   */
  className?: string

  /**
   * Content to be rendered within the header container.
   */
  children?: ReactNode
}
