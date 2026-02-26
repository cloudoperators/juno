/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, isValidElement, MouseEventHandler, ReactElement, ReactNode } from "react"
import DefaultLogo from "../../img/JunoUI_logo.svg"

const pageHeaderStyles = `
  jn:bg-theme-pageheader
  jn:text-theme-pageheader
  jn:border-theme-pageheader
  jn:border-b-[1px]
  jn:sticky
  jn:top-0
  jn:px-[1.25rem]
  jn:py-[0.25rem]
  jn:h-[3.25rem]
  jn:z-50
  jn:flex
  jn:items-center
  jn:justify-between
`

const pageHeaderInnerStyles = `
  jn:flex
  jn:flex-row
  jn:justify-between
  jn:items-center
  jn:w-full
  jn:h-full
  jn:full
  jn:gap-2
`

const logoAndTitleContainerStyles = `
  jn:flex
  jn:flex-row
  jn:items-center
  jn:gap-2
`

const logoContainerStyles = `
  jn:max-w-xs
  jn:*:w-min
  jn:*:max-w-xs
  jn:*:h-7
  jn:*:object-contain
`

const applicationNameStyles = `
  jn:text-theme-pageheader-appname-default
  jn:text-lg
`

const optionsStyles = `
  jn:flex
  jn:flex-row
  jn:items-center
  jn:gap-2
  jn:justify-end
`

/**
 * `PageHeader` component renders the top header of an application.
 * It includes customizable `logo`, `title`, and other options.
 * @see https://cloudoperators.github.io/juno/?path=/docs/layout-pageheader--docs
 * @see {@link PageHeaderProps}
 */

export const PageHeader = ({
  heading = "",
  applicationName = "",
  href = "",
  className = "",
  logo = true,
  children,
  onClick,
  ...props
}: PageHeaderProps): ReactNode => {
  const Logo =
    typeof logo === "function" || isValidElement(logo)
      ? logo
      : logo && <DefaultLogo alt="" data-testid="default-logo" />

  const renderLogoAndTitle = () => (
    <div
      onClick={onClick}
      className={`juno-pageheader-logo-title ${logoAndTitleContainerStyles} ${onClick ? "jn:cursor-pointer" : ""}`}
      role={onClick ? "button" : undefined}
    >
      <div className={`juno-pageheader-logo-container ${logoContainerStyles}`}>{Logo}</div>
      <div className={`juno-pageheader-application-name ${applicationNameStyles}`}>
        {typeof applicationName === "string" ? applicationName.trim() : applicationName || heading}
      </div>
    </div>
  )

  const contentWrapper = (
    <>
      {renderLogoAndTitle()}
      <div className={`juno-pageheader-content-container`}>
        <div className={`juno-pageheader-options ${optionsStyles}`}>{children}</div>
      </div>
    </>
  )

  return (
    <div className={`juno-pageheader ${pageHeaderStyles} ${className}`} role="banner" {...props}>
      <div className={`juno-pageheader-inner ${pageHeaderInnerStyles}`}>
        {href ? <a href={href}>{contentWrapper}</a> : contentWrapper}
      </div>
    </div>
  )
}

export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Name of the application.
   * @default ""
   */
  applicationName?: string | ReactElement
  /**
   * Deprecated - Replaced by `applicationName`. If `applicationName` is provided, it takes precedence.
   * @default ""
   */
  heading?: string | ReactElement
  /**
   * Link to open when applicationName or logo is clicked.
   * @default ""
   */
  href?: string
  /**
   * Custom class names.
   * @default ""
   */
  className?: string
  /**
   * Application logo.
   * @default true
   */
  logo?: boolean | ReactElement
  /**
   * Handler executed on click of `applicationName` or `logo`.
   */
  onClick?: MouseEventHandler<HTMLDivElement>
  /**
   * Children to render in header like user info, avatar, log-in/out button, etc.
   */
  children?: ReactNode
}
