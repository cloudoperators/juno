/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const baseHeadingStyles = `
  jn-font-bold
  jn-text-lg
  jn-text-theme-high
  jn-pb-2
`

export interface ContentHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Custom content to render within the container heading.
   * Takes precedence over the heading prop.
   */
  children?: React.ReactNode
  /**
   * Text for the heading. Used if children is not provided.
   * Children prop takes precedence.
   */
  heading?: string
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string
}

/**
 * ContentHeading represents the main heading of a page or view.
 * It can be used within an `<AppShell>` component or, if scaffolding manually, within a `<ContentContainer>` component.
 * The heading text can be provided either via the `heading` prop or by passing it as `children`.
 */
export const ContentHeading: React.FC<ContentHeadingProps> = ({ heading = "", className = "", children, ...props }) => {
  return (
    <h1 className={`juno-content-heading ${baseHeadingStyles} ${className}`} {...props}>
      {children || heading}
    </h1>
  )
}

export interface ContentHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Optionally render children. If children are present, heading will be ignored */
  children?: React.ReactNode
  /** Text to use as a title */
  heading?: string
  /** Add custom class name */
  className?: string
}
