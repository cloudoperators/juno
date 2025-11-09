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
   * Additional CSS classes for custom styling.
   */
  className?: string
  /**
   * Custom content to render within the content area toolbar.
   */
  children?: React.ReactNode
}

/**
 * ContentAreaToolbar represents the main toolbar within the content area.
 * It is designed to hold main actions relevant to the current page.
 */
export const ContentAreaToolbar: React.FC<ContentAreaToolbarProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-content-area-toolbar ${baseToolbarStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}
