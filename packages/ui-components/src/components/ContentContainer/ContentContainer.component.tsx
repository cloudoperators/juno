/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

const baseContainerStyles = `
  jn:flex-col
  jn:grow
  jn:bg-[right_top_1rem]
  jn:bg-no-repeat
  jn:bg-theme-content-area-bg
  jn:relative
`

export interface ContentContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional CSS class names for styling the content container.
   * @default ""
   */
  className?: string

  /** Components or elements to render inside the content container. */
  children?: ReactNode
}

/**
 * The `ContentContainer` serves as a wrapper for application content, designed for manual layout creation.
 * It can center content when the browser window is wider than the max breakpoint.
 *
 * @component
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {React.ReactNode} [children] The content to render within the container.
 * @returns {React.ReactElement} A flexible content container for app layouts.
 */
export const ContentContainer: React.FC<ContentContainerProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-content-container ${baseContainerStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
