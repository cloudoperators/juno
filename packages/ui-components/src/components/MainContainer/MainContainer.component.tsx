/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const mainStyles = `
  jn-flex
  jn-grow
  jn-bg-theme-global-bg
`

/**
 * Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead.
 * The main container for app content.
 */
export const MainContainer = ({ className = "", children = null, ...props }: MainContainerProps) => {
  return (
    <main className={`juno-main ${mainStyles} ${className}`} {...props}>
      {children}
    </main>
  )
}

export interface MainContainerProps {
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}
