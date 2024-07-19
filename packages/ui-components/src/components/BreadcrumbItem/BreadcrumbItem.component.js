/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/index.js"
import { knownIcons } from "../Icon/Icon.component.js"

const breadcrumbitemstyles = `
  jn-text-sm
  jn-text-theme-high
  jn-flex
  jn-gap-1
  jn-items-center
`

const breadcrumblinkstyles = `
  jn-text-theme-high
  jn-inline-flex
`

// const disabledstyles = `
//   jn-text-theme-disabled
//   jn-pointer-events-none
// `

/** An individual item in a breadcrumb */
export const BreadcrumbItem = ({
  icon = null,
  href = "#",
  label = "Item",
  ariaLabel = "",
  active = false,
  children = null,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const icn = icon ? (
    <Icon
      icon={icon}
      size="18"
      color="jn-text-theme-default"
      className={label && label.length ? "jn-mr-1" : ""}
    />
  ) : null

  const handleClick = (event) => {
    onClick && onClick(event)
  }

  return children ? (
    children
  ) : (
    <span
      className={`juno-breadcrumb-item 
              ${breadcrumbitemstyles} 
              ${disabled ? "juno-breadcrumb-item-disabled" : ""} 
              ${active ? "juno-breadcrumb-item-active" : ""}
              ${className}`}
      {...props}
    >
      {active || disabled ? (
        <>
          {icn}
          {label}
        </>
      ) : (
        <a
          href={href}
          className={`${breadcrumblinkstyles} `}
          aria-label={ariaLabel || label}
          onClick={handleClick}
        >
          {icn}
          {label}
        </a>
      )}
    </span>
  )
}

BreadcrumbItem.propTypes = {
  /** pass an icon name */
  icon: PropTypes.oneOf(knownIcons),
  /** The link of the path/route/page the breacrumb item points to */
  href: PropTypes.string,
  /** The text to render in the breadcumb item */
  label: PropTypes.string,
  /** Pass an aria-label */
  ariaLabel: PropTypes.string,
  /** Whether the item is the last / active item */
  active: PropTypes.bool,
  /** Pass an onClick handler */
  onClick: PropTypes.func,
  /** Whether the item is disabled */
  disabled: PropTypes.bool,
  /** Pass a custom className */
  className: PropTypes.string,
  /** The children of the item */
  children: PropTypes.node,
}
