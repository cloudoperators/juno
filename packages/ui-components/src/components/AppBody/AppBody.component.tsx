/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const containerStyles = `
  jn:flex
  jn:flex-col
  jn:h-full
`

/**
 * The `AppBody` component serves as the main container for the body of your application.
 * It is specifically useful when you require manual setup of the app's layout, providing
 * flexibility and control over the structure of the application body. For most cases,
 * consider using the `AppShell` component which encompasses more features suitable for
 * typical application scaffolding.
 *
 * @component
 * @param {string} [className] Add custom class name to style the component.
 * @param {React.ReactNode} [children] The content to be rendered inside the AppBody.
 * @returns {React.ReactElement} A JSX element containing the app's body structure.
 */
export const AppBody: React.FC<AppBodyProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-body ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface AppBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Add custom class name to style the component.
   * @default ""
   */
  className?: string

  /**
   * The content to be rendered inside the AppBody component.
   */
  children?: React.ReactNode
}
