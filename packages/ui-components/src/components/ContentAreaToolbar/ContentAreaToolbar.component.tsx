/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const baseToolbarStyles = `
  jn:bg-theme-background-lvl-1
  jn:py-3
  jn:px-6
  jn:flex
  jn:items-center
  jn:justify-end
`

export interface ContentAreaToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom CSS classes for styling the toolbar.
   * @default ""
   */
  className?: string

  /**
   * Content or elements to render within the content area toolbar.
   */
  children?: React.ReactNode
}

/**
 * The `ContentAreaToolbar` represents the main toolbar within a content area, providing space
 * for main actions relevant to the current page context. It supports custom content and styling.
 *
 * @component
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @param {React.ReactNode} [children] Custom content or actions to render within the toolbar.
 * @returns {React.ReactElement} A styled toolbar component for content areas.
 */
export const ContentAreaToolbar: React.FC<ContentAreaToolbarProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-content-area-toolbar ${baseToolbarStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
