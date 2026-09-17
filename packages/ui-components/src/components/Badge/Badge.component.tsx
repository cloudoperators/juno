/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { Icon, KnownIcons, KnownIconsEnum } from "../Icon/Icon.component"

export type BadgeVariantType = "default" | "info" | "success" | "warning" | "danger" | "error"

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

const badgeInteractiveBaseStyles = `
  jn:hover:text-theme-highest
  jn:focus:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:active:ring-1
  jn:active:ring-inset
  jn:active:text-theme-highest
`

const badgeVariantStyles: Record<BadgeVariantType, string> = {
  default: "jn:bg-theme-badge-default",
  info: "jn:bg-theme-info/25",
  success: "jn:bg-theme-success/25",
  warning: "jn:bg-theme-warning/25",
  danger: "jn:bg-theme-danger/25",
  error: "jn:bg-theme-error/25",
}

const badgeActiveVariantStyles: Record<BadgeVariantType, string> = {
  default: "jn:active:ring-current",
  info: "jn:active:ring-theme-accent",
  success: "jn:active:ring-theme-success",
  warning: "jn:active:ring-theme-warning",
  danger: "jn:active:ring-theme-danger",
  error: "jn:active:ring-theme-error",
}

const iconStyles = "jn:mr-1 jn:items-center"

const VALID_ICON_NAMES: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))

export interface BadgeProps extends Omit<HTMLAttributes<HTMLElement>, "disabled"> {
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

  /**
   * Renders the badge as an `<a>` element. When combined with `onClick`, `href` takes precedence.
   */
  href?: string

  /**
   * Disables the badge. Only meaningful when rendered as a `<button>` or `<a>`.
   * @default false
   */
  disabled?: boolean
}

const getIcon = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): KnownIcons | undefined => {
  if (typeof icon === "string" && isValidIcon(icon)) return icon
  if (icon === true) return variant
  return
}

const getIconColor = (icon: boolean | KnownIcons | undefined, variant: BadgeVariantType): string | undefined => {
  if (icon === true) return `jn:text-theme-${variant}`
  return
}

const isValidIcon = (icon: string): icon is KnownIcons => VALID_ICON_NAMES.has(icon as KnownIcons)

/**
 * The `Badge` component visually represents properties or states of an entity.
 * It supports multiple semantic variants, each with distinct styling. An optional
 * icon can be included to further emphasize meaning. Pass `onClick` to render the
 * badge as a `<button>`, or `href` to render it as an `<a>` element, with hover,
 * focus, active, and disabled states applied automatically.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
 * @see {@link BadgeProps}
 */
export const Badge = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children,
  href,
  disabled,
  onClick,
  ...props
}: BadgeProps): ReactNode => {
  const iconToRender = getIcon(icon, variant)
  const iconColor = getIconColor(icon, variant)
  const isInteractive = !!(href || onClick)

  const classes = `
    juno-badge
    juno-badge-${variant}
    ${badgeBaseStyles}
    ${badgeVariantStyles[variant] ?? badgeVariantStyles["default"]}
    ${isInteractive ? `${badgeInteractiveBaseStyles} ${badgeActiveVariantStyles[variant] ?? badgeActiveVariantStyles["default"]}` : ""}
    ${isInteractive && disabled ? "jn:opacity-50 jn:pointer-events-none" : ""}
    ${className}
  `

  const content = (
    <>
      {iconToRender && <Icon icon={iconToRender} size="1.125rem" className={iconStyles} color={iconColor} />}
      {children ?? text}
    </>
  )

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={classes}
        onClick={disabled ? undefined : onClick}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} disabled={disabled} {...props}>
        {content}
      </button>
    )
  }

  return (
    <span className={classes} {...props}>
      {content}
    </span>
  )
}
