/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SapSvg } from "../../svg/SapSvg"

const basePageHeader = `
  jn-flex
  jn-shrink-0
  jn-grow-0
  jn-basis-auto
  jn-min-h-[3.25rem]
  jn-items-center
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`

const logoStyles = `
  jn-h-6
  jn-mr-3
`

const headingStyles = (clickable: boolean) => {
  return `
    jn-text-lg
    jn-text-theme-high
    ${clickable && "jn-cursor-pointer"}
    `
}

export interface PageHeaderProps {
  /** Heading (typically the name of the application) */
  heading?: string | null
  /** Add custom class name */
  className?: string
  /** Optional: onClick handler for brand logo/page title. To be used to navigate to the home page.  */
  onClick?: (..._args: unknown[]) => unknown
  children?: React.ReactNode
}

/**
 * The page header component renders a header at the top of the website. Place as first child of AppBody.
 */

export const PageHeader = ({ heading = null, className = "", children = null, onClick, ...props }: PageHeaderProps) => {
  return (
    <div className={`juno-pageheader theme-dark ${basePageHeader} ${className}`} role="banner" {...props}>
      <SapSvg className={logoStyles} alt="SAP" />
      {heading && (
        <div className={headingStyles(onClick !== undefined)} onClick={onClick}>
          {heading}
        </div>
      )}

      {children}
    </div>
  )
}
