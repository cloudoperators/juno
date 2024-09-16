/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import DefaultLogo from "../../img/JunoUI_logo.svg"

const pageHeaderStyles = `
  jn-min-h-[3.25rem]
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`

const pageHeaderInnerStyles = `
  jn-grid
  jn-grid-cols-[minmax(0,max-content),1fr]
  jn-gap-3
  jn-h-7
  jn-w-full
  jn-overflow-hidden
  jn-items-center
`

const logoContainerStyles = `
  jn-h-7
  jn-max-w-xs
  [&>*]:jn-w-min
  [&>*]:jn-max-w-xs
  [&>*]:jn-h-7
  [&>*]:jn-object-contain
`

const headingStyles = (clickable: boolean) => {
  return `
    jn-text-lg
    jn-text-theme-high
    ${clickable && "jn-cursor-pointer"}
    `
}

/**
 * The PageHeader component renders a header to the application. Place as first child of AppBody In order to customize the header Logo, PageHeader accepts a `logo` prop that expects a custom component: `logo={<CustomLogo />}` Ideally, the custom logo component should return an `<img />` or an inline `<svg>` element. When using `svg`, make sure the file does not contain any unnecessary cruft. `Svgo` is a great tool to optimize `svg` files. Make sure the `viewBox` element is not removed when optimizing a file for usage a a header logo.
 */

export const PageHeader = ({
  heading = null,
  className = "",
  children = null,
  logo = undefined,
  onClick,
  ...props
}: PageHeaderProps) => {
  return (
    <div className={`juno-pageheader theme-dark ${pageHeaderStyles} ${className}`} role="banner" {...props}>
      <div className={`juno-pageheader-inner ${pageHeaderInnerStyles}`}>
        <div className={`juno-pageheader-logo-container ${logoContainerStyles}`}>
          {
            typeof logo === "function" || // Render if logo is a function (component)
              (React.isValidElement(logo) && logo) || // Render if logo is a valid React element
              ((logo === true || logo === undefined) && <DefaultLogo data-testid="default-logo" alt={""} />) // Render default logo if logo is true or undefined
          }
        </div>
        <div>
          {heading && (
            <div className={headingStyles(onClick !== undefined)} onClick={onClick}>
              {heading}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

export interface PageHeaderProps {
  /** Heading (typically the name of the application) */
  heading?: string | React.ReactNode | null
  /** Add custom class name */
  className?: string
  logo?: React.ReactNode | (() => React.ReactNode)
  /** Optional: onClick handler for brand logo/page title. To be used to navigate to the home page.  */
  onClick?: React.MouseEventHandler<EventTarget>
  children?: React.ReactNode
}
