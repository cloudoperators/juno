/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

const badgeBaseStyles = `
  jn:inline-flex
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

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
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
  children?: ReactNode
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
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
 * @see {@link BadgeProps}
 */
export const Badge = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children,
  ...props
}: BadgeProps): ReactNode => {
  const iconToRender = getIcon(icon, variant)
  const iconColor = getIconColor(icon, variant)

  return (
    <span
      className={`
        juno-badge
        juno-badge-${variant}
        ${badgeBaseStyles}
        ${getVariantStyle(variant)}
        ${className}`}
      {...props}
    >
      {iconToRender && <Icon icon={iconToRender} size="1.125rem" className={iconStyles} color={iconColor} />}
      {children || text}
    </span>
  )
}
