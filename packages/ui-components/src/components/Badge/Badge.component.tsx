/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

const badgeBaseStyles = `
  jn:rounded
  jn:text-sm
  jn:text-theme-default
  jn:py-0.5
  jn:px-1
  jn:justify-center
  jn:items-center
`

const badgeVariantStyles = {
  default: "jn:bg-theme-badge-default",
  info: "jn:bg-theme-info/25",
  success: "jn:bg-theme-success/25",
  warning: "jn:bg-theme-warning/25",
  danger: "jn:bg-theme-danger/25",
  error: "jn:bg-theme-error/25",
}

const iconStyles = "jn:mr-1 jn:items-center"

export type BadgeVariantType = "default" | "info" | "success" | "warning" | "danger" | "error"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Specify a semantic variant that determines the appearance of the badge.
   * @default "default"
   */
  variant?: BadgeVariantType

  /**
   * Determines whether to display an icon. If set to `true`, an icon related
   * to the variant will be used. If a valid string representing a known icon
   * is provided, that icon will be displayed.
   * @default false
   */
  icon?: boolean | KnownIcons

  /**
   * The optional text content of the badge. If children are provided, they take precedence.
   */
  text?: string

  /**
   * Additional CSS class to apply to the badge.
   * @default ""
   */
  className?: string

  /**
   * React nodes or a collection of React nodes to be rendered as content, taking
   * precedence over the `text` property.
   */
  children?: React.ReactNode
}

const getVariantStyle = (variant: BadgeVariantType): string => badgeVariantStyles[variant] || badgeVariantStyles.default

// Get icon based on the provided variant or icon string
const getIcon = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): KnownIcons | undefined => {
  if (typeof icon === "string" && isValidIcon(icon)) return icon
  if (icon === true) return variant
  return
}

// Get icon colour based on the variant
const getIconColor = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): string | undefined => {
  if (icon === true) return `jn:text-theme-${variant}`
  return
}

// Determine if a given string corresponds to a known icon
const isValidIcon = (icon: string): icon is KnownIcons => {
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

/**
 * The `Badge` component visually represents properties or states of an entity.
 * It supports multiple semantic variants, each with distinct styling. An optional
 * icon can be included to further emphasize meaning.
 *
 * @component
 * @param {BadgeVariantType} [variant="default"] A semantic variant for the badge style.
 * @param {boolean | KnownIcons} [icon=false] When true, displays an icon related to the variant. Accepts a valid icon string.
 * @param {string} [text] String content to display within the badge. Children take precedence.
 * @param {string} [className] Additional class names for styling the badge.
 * @param {React.ReactNode} [children] Nodes to render inside the badge, taking precedence over `text`.
 * @returns {React.ReactElement} A styled badge element indicating a property or state.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children,
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
        ${icon ? "jn:inline-flex" : ""} 
        ${className}`}
      {...props}
    >
      {iconToRender && <Icon icon={iconToRender} size="1.125rem" className={iconStyles} color={iconColor} />}
      {children || text}
    </span>
  )
}
