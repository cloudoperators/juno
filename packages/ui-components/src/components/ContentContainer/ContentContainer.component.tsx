/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const containerStyles = `
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`

/**
 * Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead.
 * A container for app content. Will be centered on the screen when browser window is wider than the max breakpoint width.
 */
export const ContentContainer = ({ className = "", children = null, ...props }: ContentContainerProps) => {
  return (
    <div className={`juno-content-container ${containerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface ContentContainerProps {
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}
