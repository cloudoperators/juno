/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const mainStyles = `
  jn:flex
  jn:grow
  jn:bg-theme-global-bg
`

/**
 * The `MainContainer` is the core container for application content, ideal for manual scaffold setups.
 * In most instances, `AppShell` offers a comprehensive layout alternative.
 *
 * @component
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {React.ReactNode} [children] Content or components arranged within the main container.
 * @returns {React.ReactElement} A styled container for app content, useful for manual setup.
 */
export const MainContainer: React.FC<MainContainerProps> = ({ className = "", children, ...props }) => {
  return (
    <main className={`juno-main ${mainStyles} ${className}`} {...props}>
      {children}
    </main>
  )
}

export interface MainContainerProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Custom CSS class names for styling the main container.
   * @default ""
   */
  className?: string

  /**
   * Components or content to render within the main container.
   */
  children?: React.ReactNode
}
