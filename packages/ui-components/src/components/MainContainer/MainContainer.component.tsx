/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const mainStyles = `
  jn:flex
  jn:grow
  jn:bg-theme-global-bg
`

/**
 * The `MainContainer` is the core container for application content, ideal for manual scaffold setups.
 * In most instances, `AppShell` offers a comprehensive layout alternative.
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-maincontainer--docs
 * @see {@link MainContainerProps}
 */
export const MainContainer = ({ className = "", children, ...props }: MainContainerProps): ReactNode => {
  return (
    <main className={`juno-main ${mainStyles} ${className}`} {...props}>
      {children}
    </main>
  )
}

export interface MainContainerProps extends HTMLAttributes<HTMLElement> {
  /**
   * Custom CSS class names for styling the main container.
   * @default ""
   */
  className?: string

  /**
   * Components or content to render within the main container.
   */
  children?: ReactNode
}
