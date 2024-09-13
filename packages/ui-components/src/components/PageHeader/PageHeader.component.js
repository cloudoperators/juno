/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import DefaultLogo from "../../img/JunoUI_logo.svg"

const basePageHeader = `
  jn-flex
  jn-shrink-0
  jn-grow-0
  jn-basis-auto
  jn-min-h-[3.25rem]
  jn-items-center
  jn-justify-start
  jn-bg-juno-grey-blue-11
  jn-sticky
  jn-top-0
  jn-px-6
  jn-py-3
  jn-z-50
`

//   jn-max-w-xs
const logoContainerStyles = `
  jn-h-7
  jn-max-w-xs
  jn-mr-3
  jn-flex
  jn-items-center
  jn-justify-start
  jn-overflow-hidden
  [&>*]:jn-max-w-full
  [&>*]:jn-max-h-full
  [&>*]:jn-object-contain
`

const headingStyles = (clickable) => {
  return `
    jn-text-lg
    jn-text-theme-high
    ${clickable && "jn-cursor-pointer"}
    `
}

/**
 * The PageHeader component renders a header to the application. Place as first child of AppBody.
 */

export const PageHeader = ({ heading, className = "", children = null, logo = undefined, onClick, ...props }) => {
  return (
    <div className={`juno-pageheader theme-dark ${basePageHeader} ${className}`} role="banner" {...props}>
      <div className={`juno-pageheader-logo-container ${logoContainerStyles}`}>
        {
          (typeof logo === "function" && <logo />) || // Render if logo is a function (component)
            (React.isValidElement(logo) && logo) || // Render if logo is a valid React element
            ((logo === true || logo === undefined) && <DefaultLogo />) // Render default logo if logo is true or undefined
        }
      </div>
      {heading && (
        <div className={headingStyles(onClick !== undefined)} onClick={onClick}>
          {heading}
        </div>
      )}

      {children}
    </div>
  )
}

PageHeader.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  /** Other children to render in the header */
  children: PropTypes.node,
  /** Heading (typically the name of the application) */
  heading: PropTypes.string,
  /** Pass a custom logo component to render. By default or when set to `true`, the default Juno Ui logo wil be rendered. Pass `false` or `null` to not render a logo at all. */
  logo: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.bool, PropTypes.oneOf([null])]),
  /** Optional: onClick handler for brand logo/page title. To be used to navigate to the home page.  */
  onClick: PropTypes.func,
}
