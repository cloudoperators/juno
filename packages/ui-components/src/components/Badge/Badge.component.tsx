/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

export type BadgeVariantType = "default" | "info" | "success" | "warning" | "danger" | "error" | "critical"

export interface BadgeProps {
  /**
   * Specify an optional semantic variant that determines the appearance of a badge.
   */
  variant?: BadgeVariantType

  /**
   * Optional.
   * If true, an icon corresponding to the variant will be displayed.
   * If a string is provided and it's a valid icon name, that icon will be displayed.
   */
  icon?: boolean | KnownIcons

  /**
   * Pass an optional string of text to be rendered as content.
   * Alternatively, content can be passed as children (see below).
   * If children are provided, they will take precedence.
   */
  text?: string

  /**
   * Pass an optional CSS class to apply to the message.
   */
  className?: string

  /**
   * Pass optional React nodes or a collection of React nodes to be rendered as content.
   * Takes precedence over the text property.
   */
  children?: React.ReactNode
}

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

const getVariantStyle = (variant: BadgeVariantType): string => badgeVariantStyles[variant] || badgeVariantStyles.default

const iconStyles = "jn-mr-1 jn-items-center"

// Get icon based on the provided variant or icon string
const getIcon = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): KnownIcons | undefined => {
  if (typeof icon === "string" && isValidIcon(icon)) return icon
  if (icon === true) return variant as KnownIcons
  return
}

// Get icon colour based on the variant
const getIconColor = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): string | undefined => {
  if (icon === true) return `jn-text-theme-${variant}`
  return
}

// Determine if a given string corresponds to a known icon
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
