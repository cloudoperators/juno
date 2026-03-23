/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, HTMLAttributes } from "react"

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
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-appbody--docs
 * @see {@link AppBodyProps}
 */
export const AppBody = ({ className = "", children, ...props }: AppBodyProps): ReactNode => {
  return (
    <div className={`juno-body ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface AppBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Add custom class name to style the component.
   * @default ""
   */
  className?: string

  /**
   * The content to be rendered inside the AppBody component.
   */
  children?: ReactNode
}
