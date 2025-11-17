/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import "./page-footer.css"

const basePageFooterStyles = `
  jn:flex
  jn:shrink-0
  jn:grow-0
  jn:basis-auto
  jn:relative
  jn:min-h-[3.25rem]
  jn:z-50
  jn:px-6
  jn:py-5
  jn:border-t
  jn:text-theme-pagefooter
  jn:bg-theme-pagefooter
`

export interface PageFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional custom styling class name for the footer container */
  className?: string
  /** The content to render inside the footer, typically links or informational text
   * Use a list structure (e.g., <ul> with <li>) for grouped content or links, as in examples.
   *    * Available CSS classes for styling:
   * - `.juno-pagefooter-title`: Style for a title element within a column.
   * - `.juno-pagefooter-items`: Style for a list of items.
   * - `.juno-pagefooter-items-inline`: Style for a single line list with pipe separators.
   * - `.juno-pagefooter-item`: Style for individual list items.
   */
  children?: React.ReactNode
  /** Optional copyright notice to display within the footer */
  copyright?: string
}

/**
 * PageFooter component renders a footer at the bottom of the page.
 * It consists of a flexible content area for children and an optional copyright section.
 * Usage:
 * The component can be used to add legal disclaimers, links, or other contextual information at the page's footer.
 */
export const PageFooter: React.FC<PageFooterProps> = ({ className = "", children, copyright = "", ...props }) => {
  return (
    <div className={`juno-pagefooter ${basePageFooterStyles} ${className}`} role="contentinfo" {...props}>
      <div className={"juno-pagefooter-children"}>{children}</div>
      {copyright && <div className="juno-pagefooter-copyright">{copyright}</div>}
    </div>
  )
}
