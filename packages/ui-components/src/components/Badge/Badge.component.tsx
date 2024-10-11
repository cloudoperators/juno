/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"
import { BadgeProps, VariantType } from "./Badge.types"

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

const badgeVariantStyles = {
  default: "jn-bg-theme-badge-default",
  info: "jn-bg-theme-info/25",
  success: "jn-bg-theme-success/25",
  warning: "jn-bg-theme-warning/25",
  danger: "jn-bg-theme-danger/25",
  critical: "jn-bg-theme-danger/70 jn-text-theme-high",
  error: "jn-bg-theme-error/25",
}

const getVariantStyle = (variant: VariantType): string => badgeVariantStyles[variant] || badgeVariantStyles.default

// ICON UTILS

const iconStyles = "jn-mr-1 jn-items-center"

// Get icon based on the provided variant or icon string
const getIcon = (icon: boolean | KnownIcons | undefined, variant: VariantType): KnownIcons | undefined => {
  if (typeof icon === "string" && isValidIcon(icon)) return icon
  if (icon === true) return variant as KnownIcons
  return undefined
}

// Get icon color based on the variant
const getIconColor = (icon: boolean | KnownIcons | undefined, variant: VariantType): string | undefined => {
  if (icon === true) return `jn-text-theme-${variant}`
  return undefined
}

// Determine if a given string corresponds to a known icon
// To Do: Externalise. Also used in other components e.g. Message
const isValidIcon = (icon: string): icon is KnownIcons => {
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

/**
 * A Badge is used to visually represent properties or states of an entity.
 * It supports multiple semantic versions, each with distinct styling.
 * Optionally, an icon can be included to further emphasize the meaning.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children = null,
  ...props
}) => {
  const iconToRender = getIcon(icon, variant)
  const iconColor = getIconColor(icon, variant)

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
      {iconToRender && <Icon icon={iconToRender} size="1.125rem" className={iconStyles} color={iconColor} />}
      {children || text}
    </span>
  )
}
