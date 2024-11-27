/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const baseContainerStyles = `
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`

export interface ContentContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string
  /**
   * Custom content to render within the container.
   */
  children?: React.ReactNode
}

/**
 * ContentContainer serves as a container for app content.
 * It is intended for manual app scaffold creation, though, in most cases, using the AppShell component is recommended.
 *
 * Note: When the browser window is wider than the max breakpoint width, the content within this container will be centered on the screen.
 */
export const ContentContainer: React.FC<ContentContainerProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-content-container ${baseContainerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
