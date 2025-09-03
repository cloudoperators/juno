/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, ReactNode } from "react"
import DefaultLogo from "../../img/JunoUI_logo.svg"

const pageHeaderStyles = `
  jn:bg-theme-pageheader
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
  jn:text-theme-high
`

const optionsStyles = `
  jn:flex
  jn:flex-row
  jn:items-center
  jn:gap-2
  jn:justify-end
`

/**
 * The PageHeader component renders a header to the application.
 * In order to customize the header Logo, PageHeader accepts a `logo` prop that expects a custom component: `logo={<CustomLogo />}` Ideally, the custom logo component should return an `<img />` or an inline `<svg>` element. When using `svg`, make sure the file does not contain any unnecessary cruft. `Svgo` is a great tool to optimize `svg` files. Make sure the `viewBox` element is not removed when optimizing a file for usage a a header logo.
 * Pass as prop to AppShell so it gets slotted into the correct place in the layout. If building your layout manually without AppShell place as first child of AppBody.
 */

export const PageHeader: React.FC<PageHeaderProps> = ({
  heading = "",
  applicationName = "",
  href = "",
  className = "",
  children,
  logo,
  onClick,
  ...props
}) => {
  const renderLogo = () => {
    const logoElement =
      typeof logo === "function" || (React.isValidElement(logo) && logo)
        ? logo
        : (logo === true || logo === undefined) && <DefaultLogo data-testid="default-logo" alt={""} />

    return (
      <div className={`juno-pageheader-logo-container ${logoContainerStyles}`} role={onClick ? "button" : undefined}>
        {logoElement}
      </div>
    )
  }

  const renderApplicationName = () => (
    <div className={`juno-pageheader-application-name ${applicationNameStyles}`} role={onClick ? "button" : undefined}>
      {applicationName.trim() || heading}
    </div>
  )

  const renderContentContainer = () => (
    <div className={`juno-pageheader-content-container`}>
      <div className={`juno-pageheader-options ${optionsStyles}`}>{children}</div>
    </div>
  )

  const renderLogoAndTitle = () => (
    <div
      onClick={onClick}
      className={`juno-pageheader-logo-title ${logoAndTitleContainerStyles} ${onClick ? "jn:cursor-pointer" : ""}`}
    >
      {renderLogo()}
      {renderApplicationName()}
    </div>
  )

  return (
    <div className={`juno-pageheader theme-dark ${pageHeaderStyles} ${className}`} role="banner" {...props}>
      <div className={`juno-pageheader-inner ${pageHeaderInnerStyles}`}>
        {typeof onClick !== "function" && href ? (
          <a href={href}>
            {renderLogoAndTitle()}
            {renderContentContainer()}
          </a>
        ) : (
          <>
            {renderLogoAndTitle()}
            {renderContentContainer()}
          </>
        )}
      </div>
    </div>
  )
}

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Name of the application.
   */
  applicationName?: string
  /**
   * DEPRECATED PROP - Replaced by `applicationName`. If `applicationName` is provided, it will take precedence.
   */
  heading?: string | ReactElement
  /**
   * Link to open when applicationName or logo is clicked. If `onClick` is provided, it will take precedence.
   */
  href?: string
  /**
   * Custom class names.
   */
  className?: string
  /**
   * Application logo.
   */
  logo?: boolean | ReactElement
  /**
   * Handler executed when `applicationName` or `logo` are clicked.
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>
  /**
   * Children to render in the header such as user name, avatar, log-in/out button, etc.
   */
  children?: ReactNode
}
