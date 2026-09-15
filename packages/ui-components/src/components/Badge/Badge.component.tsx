/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLProps, ReactNode } from "react"
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
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:disabled:pointer-events-none
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
  default: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-current jn:active:text-theme-highest",
  info: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-accent jn:active:text-theme-highest",
  success: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-success jn:active:text-theme-highest",
  warning: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-warning jn:active:text-theme-highest",
  danger: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-danger jn:active:text-theme-highest",
  error: "jn:active:ring-1 jn:active:ring-inset jn:active:ring-theme-error jn:active:text-theme-highest",
}

const iconStyles = "jn:mr-1 jn:items-center"

export interface BadgeProps extends Omit<HTMLProps<HTMLSpanElement> | HTMLProps<HTMLButtonElement>, "disabled"> {
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
   * Renders the badge as a `<button>` with hover, focus, active, and disabled states.
   * @default false
   */
  interactive?: boolean

  /**
   * Disables the badge. Only meaningful when `interactive` is `true`.
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

const isValidIcon = (icon: string): icon is KnownIcons => {
  const validIconNames: Set<KnownIcons> = new Set(Object.values(KnownIconsEnum))
  return validIconNames.has(icon as KnownIcons)
}

/**
 * The `Badge` component visually represents properties or states of an entity.
 * It supports multiple semantic variants, each with distinct styling. An optional
 * icon can be included to further emphasize meaning. Set `interactive` to render
 * the badge as a button with hover, focus, active, and disabled states.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs
 * @see {@link BadgeProps}
 */
export const Badge = ({
  variant = "default",
  icon = false,
  text = "",
  className = "",
  children,
  interactive = false,
  disabled,
  ...props
}: BadgeProps): ReactNode => {
  const iconToRender = getIcon(icon, variant)
  const iconColor = getIconColor(icon, variant)

  const classes = `
    juno-badge
    juno-badge-${variant}
    ${badgeBaseStyles}
    ${badgeVariantStyles[variant]}
    ${interactive ? `${badgeInteractiveBaseStyles} ${badgeActiveVariantStyles[variant]}` : ""}
    ${className}
  `

  const content = (
    <>
      {iconToRender && <Icon icon={iconToRender} size="1.125rem" className={iconStyles} color={iconColor} />}
      {children || text}
    </>
  )

  if (interactive) {
    return (
      <button {...(props as HTMLProps<HTMLButtonElement>)} type="button" className={classes} disabled={disabled}>
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
