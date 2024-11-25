/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const headerContainerStyles = `
  jn-flex
  jn-flex-col
  jn-sticky
  jn-top-0
  jn-z-50
  jn-shadow-lg
  jn-bg-theme-global-bg
`

export const HeaderContainer: React.FC<HeaderContainerProps> = ({
  fullWidth = false,
  className = "",
  children = null,
  ...props
}) => {
  return (
    <div
      className={`
    juno-header-container 
    ${!fullWidth ? "jn-w-full 2xl:jn-container 2xl:jn-mx-auto" : ""}
    ${headerContainerStyles} 
    ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export interface HeaderContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the page/view content will stretch over the full width of the viewport or not. Default is `false`. */
  fullWidth?: boolean
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}
