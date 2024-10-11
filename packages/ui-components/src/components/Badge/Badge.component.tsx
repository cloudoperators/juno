/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"
import { BadgeProps, VariantType } from "./Badge.type"

// BADGE STYLES

const badgeBaseStyles = `
  jn-rounded
  jn-text-sm
  jn-text-theme-default
  jn-py-0.5
  jn-px-1
  jn-justify-center
  jn-items-center
`

export const badgeVariantStyles = {
  default: "jn-bg-theme-badge-default",
  info: "jn-bg-theme-info/25",
  success: "jn-bg-theme-success/25",
  warning: "jn-bg-theme-warning/25",
  danger: "jn-bg-theme-danger/25",
  critical: "jn-bg-theme-danger/70 jn-text-theme-high",
  error: "jn-bg-theme-error/25",
}

const getVariantStyle = (variant: VariantType): string => {
  return badgeVariantStyles[variant] || badgeVariantStyles.default
}

// ICON UTILS

const iconStyles = "jn-mr-1 jn-items-center"

// Get the appropriate Material UI icon for a variant type
const getIcon = (icon: boolean | string, variant: VariantType): KnownIcons | undefined => {
  if (typeof icon === "string" && isValidIcon(icon)) return icon
  if (icon === true) return variant as KnownIcons
  return undefined
}

const getIconColor = (icon: boolean | string, variant: VariantType) => {
  if (icon === true) return `jn-text-theme-${variant}`
  return undefined
}

// Type guard to determine if a given string corresponds to a known icon
// To Do: Externalise. Also used in other components e.g. Message
export const isValidIcon = (icon: string): icon is KnownIcons => {
  // Set of valid icon names
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

/**
 * The Badge component is used to visually represent properties or states of an entity.
 * It supports multiple semantic versions such as 'info', 'success', etc. Each has distinct styling.
 * Optionally, an icon can be included to further emphasize the badge's meaning.
 * The component can also render custom content through children or text props.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children = null,
  ...props
}) => {
  return (
    <span
      className={`
        juno-badge 
        juno-badge-${variant} 
        ${badgeBaseStyles} 
        ${getVariantStyle(variant as VariantType)} 
        ${icon ? "jn-inline-flex" : ""} 
        ${className}`}
      {...props}
    >
      {icon && (
        <Icon
          icon={getIcon(icon, variant as VariantType)}
          size="1.125rem"
          className={iconStyles}
          color={getIconColor(icon, variant as VariantType)}
        />
      )}
      {children || text}
    </span>
  )
}
