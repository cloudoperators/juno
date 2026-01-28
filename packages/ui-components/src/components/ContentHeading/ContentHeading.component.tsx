/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

const baseHeadingStyles = `
  jn:font-bold
  jn:text-lg
  jn:text-theme-high
  jn:pb-2
`

export interface ContentHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Custom content to render within the heading.
   * Takes precedence over the `heading` prop.
   */
  children?: ReactNode

  /**
   * Text for the heading, used if `children` is not provided.
   * Note that the `children` prop takes precedence over this prop.
   */
  heading?: string

  /**
   * Custom CSS classes for styling the heading.
   * @default ""
   */
  className?: string
}

/**
 * The `ContentHeading` represents the primary heading of a page or view, usable within a `<ContentContainer>`
 * or `<AppShell>`. The heading can be defined via the `heading` prop or the `children` prop.
 *
 * @component
 * @param {React.ReactNode} [children] Custom content for the heading, which takes precedence over the `heading` prop.
 * @param {string} [heading] The text for the heading, used if `children` is not provided.
 * @param {string} [className] Additional CSS classes for custom styling. Defaults to an empty string.
 * @returns {React.ReactElement} A styled main heading component for pages or views.
 */
export const ContentHeading: React.FC<ContentHeadingProps> = ({ heading = "", className = "", children, ...props }) => {
  return (
    <h1 className={`juno-content-heading ${baseHeadingStyles} ${className}`} {...props}>
      {children || heading}
    </h1>
  )
}
