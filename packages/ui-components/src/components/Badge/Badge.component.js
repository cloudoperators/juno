/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

import { Icon, knownIcons } from "../Icon/Icon.component.js"

const badgeBaseStyles = `
	jn-rounded
	jn-text-sm
	jn-text-theme-default
	jn-py-0.5
	jn-px-1
  jn-justify-center
  jn-items-center
`

const defaultStyles = `jn-bg-theme-badge-default`

const infoStyles = `jn-bg-theme-info/25`

const successStyles = `jn-bg-theme-success/25`

const warningStyles = `jn-bg-theme-warning/25`

const dangerStyles = `jn-bg-theme-danger/25`

const criticalStyles = `jn-bg-theme-danger/70 jn-text-theme-high`

const errorStyles = `jn-bg-theme-error/25`

const iconStyles = `jn-mr-1 jn-items-center`

const knownVariants = ["info", "success", "warning", "danger", "error", "critical"]

const getVariantStyle = (variant) => {
  switch (variant) {
    case "info":
      return infoStyles
    case "success":
      return successStyles
    case "warning":
      return warningStyles
    case "danger":
      return dangerStyles
    case "error":
      return errorStyles
    case "critical":
      return criticalStyles
    default:
      return defaultStyles
  }
}

/** 
A Badge component to visually indicate properties or states of an entity. Besides the default, there are also semantic versions. Can optionally contain an icon to emphasize their meaning.
*/
export const Badge = ({ variant = "default", icon = false, text = "", className = "", children = null, ...props }) => {
  const getIcon = (icon, variant) => {
    if (icon && knownIcons.includes(icon)) {
      // if icon is an available icon, return as passed:
      return icon
    } else if (icon === true) {
      // otherwise return icon as per variant if === "true" (map if not congruent!):
      return variant
    } else {
      return null
    }
  }

  const getIconColor = (icon, variant) => {
    if (icon === true) {
      // if icon is set to true this means the icon will be chosen according to the variant. In this case make sure the color matches the variant
      return `jn-text-theme-${variant}`
    } else {
      return undefined
    }
  }

  return (
    <span
      className={`
        juno-badge 
        juno-badge-${variant} 
        ${badgeBaseStyles} 
        ${getVariantStyle(variant)}
        ${icon ? "jn-inline-flex" : ""}
        ${className}`}
      {...props}
    >
      {icon ? (
        <Icon
          icon={getIcon(icon, variant)}
          size="1.125rem"
          className={`${iconStyles}`}
          color={getIconColor(icon, variant)}
        />
      ) : null}
      {children ? children : text}
    </span>
  )
}

Badge.propTypes = {
  variant: PropTypes.oneOf(["default", ...knownVariants]),
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(knownIcons)]),
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}
