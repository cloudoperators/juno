/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"

const baseHeadingStyles = `
  jn:font-bold
  jn:text-lg
  jn:text-theme-high
  jn:pb-2
`

export interface ContentHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
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
 * @see https://cloudoperators.github.io/juno/?path=/docs/internal-contentheading--docs
 * @see {@link ContentHeadingProps}
 */
export const ContentHeading = ({
  heading = "",
  className = "",
  children,
  ...props
}: ContentHeadingProps): ReactNode => {
  return (
    <h1 className={`juno-content-heading ${baseHeadingStyles} ${className}`} {...props}>
      {children || heading}
    </h1>
  )
}
