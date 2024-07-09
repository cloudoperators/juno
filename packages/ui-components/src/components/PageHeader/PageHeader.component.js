/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import SAPLogo from "../../img/sap_logo.svg"

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

const headingStyles = (clickable) => {
  return (
    `
    jn-text-lg
    jn-text-theme-high
    ${clickable && "jn-cursor-pointer"}
    `
  )
}

/**
 * The page header component renders a header at the top of the website. Place as first child of AppBody.
 */
export const PageHeader = ({
  heading,
  className,
  children,
  onClick,
  ...props
}) => {

  return (
    <div 
      className={`juno-pageheader theme-dark ${basePageHeader} ${className}`}
      role="banner"
      {...props}
    >
      <SAPLogo className={logoStyles} alt="SAP" />
      {heading && 
        <div 
          className={headingStyles(onClick !== undefined)}
          onClick={onClick}
          >
            {heading}
        </div>
      }
    
      {children}
    </div>
  )
}

PageHeader.propTypes = {
  /** Heading (typically the name of the application) */
  heading: PropTypes.string,
  /** Add custom class name */
  className: PropTypes.string,
  /** Optional: onClick handler for brand logo/page title. To be used to navigate to the home page.  */
  onClick: PropTypes.func,
  children: PropTypes.node,
}

PageHeader.defaultProps = {
  heading: null,
  className: "",
  onClick: undefined,
  children: null,
}