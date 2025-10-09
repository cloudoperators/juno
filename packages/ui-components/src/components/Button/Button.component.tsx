/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { LegacyRef } from "react"
import { Icon } from "../Icon/index"
import { KnownIcons } from "../Icon/Icon.component"
import { Spinner } from "../Spinner/index"

const btnBase = `
  jn:font-bold
  jn:inline-flex 
  jn:justify-center 
  jn:items-center
  jn:rounded
  jn:shadow-sm 
  jn:w-auto
  jn:focus:outline-hidden 
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:disabled:pointer-events-none
`

const btnSmallBase = `
  jn:text-sm
  jn:leading-5
`

// default size typography
const btnDefaultBase = `
  jn:text-base
  jn:leading-6
`

const btnSmallDefaultPadding = `
  jn:py-[0.3125rem]
  jn:px-[0.5rem]
`

const btnSmallSubduedPadding = `
  jn:py-[0.25rem]
  jn:px-[0.4375rem]
`

// default size padding
const btnDefaultPadding = `
  jn:py-[0.4375rem]
  jn:px-[0.625rem] 
`

const btnDefaultSubduedPadding = `
  jn:py-[0.375rem]
  jn:px-[0.5625rem]
`

const defaultButtonColors = `
  jn:bg-theme-button-default
  jn:text-theme-button-default
  jn:hover:bg-theme-button-default-hover
  jn:hover:text-theme-button-default-hover
  jn:active:bg-theme-button-default-active
  jn:active:text-theme-button-default-active
`

const primaryButtonColors = `
  jn:bg-theme-button-primary
  jn:text-theme-button-primary
  jn:hover:bg-theme-button-primary-hover
  jn:hover:text-theme-button-primary-hover
  jn:active:bg-theme-button-primary-active
  jn_active:text-theme-button-primary-active
`

const primaryDangerButtonColors = `
  jn:bg-theme-button-primary-danger
  jn:text-theme-button-primary-danger
  jn:hover:bg-theme-button-primary-danger-hover
  jn:hover:text-theme-button-primary-danger-hover
  jn:active:bg-theme-button-primary-danger-active
  jn:active:text-theme-button-primary-danger-active
`

const subduedButtonColors = `
  jn:bg-theme-button-subdued
  jn:text-theme-button-subdued
  jn:hover:bg-theme-button-subdued-hover
  jn:hover:text-theme-button-subdued-hover
  jn:active:bg-theme-button-subdued-active
  jn:active:text-theme-button-subdued-active
`
// jn:border
// jn:border-theme-button-subdued
// jn:hover:border-theme-button-subdued-hover
// jn:active:border-theme-button-subdued-active

const getButtonPadding = (size: ButtonSize, variant: ButtonVariant | undefined) => {
  if (size === "small") {
    return variant === "subdued" ? `${btnSmallSubduedPadding}` : `${btnSmallDefaultPadding}`
  } else {
    return variant === "subdued" ? `${btnDefaultSubduedPadding}` : `${btnDefaultPadding}`
  }
}

const getButtonColors = (variant: ButtonVariant) => {
  switch (variant) {
    case "default":
      return defaultButtonColors
    case "primary":
      return primaryButtonColors
    case "primary-danger":
      return primaryDangerButtonColors
    case "subdued":
      return subduedButtonColors
    default:
      return defaultButtonColors
  }
}

const btnIconSmall = `
  jn:mr-2
`

const btnIconDefault = `
  jn:mr-2
`

const iconClasses = (size: ButtonSize) => {
  if (size === "small") {
    return `${btnIconSmall}`
  } else {
    return `${btnIconDefault}`
  }
}

const progressClass = (progress: boolean) => {
  const progClass = progress ? `in-progress` : ``
  return progClass
}

const spinnerColorClass = (variant: ButtonVariant) => {
  switch (variant) {
    case "default":
      return "jn:text-theme-accent"
    case "primary":
      return "jn:text-white"
    case "primary-danger":
      return "jn:text-white"
    default:
      return ""
  }
}

/**
 * The basic button component. Use this for `onClick` interactions.
 */
export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      label,
      title,
      variant = "default",
      size = "default",
      disabled,
      href,
      icon,
      className = "",
      onClick,
      children,
      progress = false,
      progressLabel = "",
      ...props
    },
    ref
  ) => {
    const titleValue = title || label || ""

    const buttonIcon = progress ? (
      <Spinner size={size === "small" ? "1.125rem" : "1.5rem"} color={`${spinnerColorClass(variant)}`} />
    ) : icon ? (
      <Icon
        icon={icon}
        title={titleValue}
        className={`juno-button-icon ${label || children ? iconClasses(size) : ""} `}
        size={size === "small" ? "1.125rem" : "1.5rem"}
      />
    ) : null

    const buttonLabel = progress && progressLabel ? progressLabel : label || children

    const handleClick = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      onClick && onClick(event)
    }

    const button = (
      <button
        className={`
          juno-button 
          juno-button-${variant} 
          juno-button-${size}-size 
          ${btnBase} 
          ${size === "small" ? btnSmallBase : btnDefaultBase} 
          ${getButtonPadding(size, variant)}
          ${getButtonColors(variant)}
          ${progressClass(progress)} 
          ${className}`}
        disabled={disabled || undefined}
        onClick={handleClick}
        ref={ref as LegacyRef<HTMLButtonElement>}
        {...(props as React.HTMLProps<HTMLButtonElement>)}
        type="button"
        title={titleValue}
      >
        {buttonIcon}
        {buttonLabel}
      </button>
    )

    const anchor = (
      <a
        href={href || undefined}
        role="button"
        className={`
          juno-button 
          juno-button-${variant} 
          juno-button-${size}-size 
          ${btnBase} 
          ${size === "small" ? btnSmallBase : btnDefaultBase}
          ${getButtonPadding(size, variant)}
          ${getButtonColors(variant)}
          ${progressClass(progress)} 
          ${className}
        `}
        disabled={disabled}
        onClick={onClick}
        ref={ref as LegacyRef<HTMLAnchorElement>}
        {...(props as React.HTMLProps<HTMLAnchorElement>)}
        title={titleValue}
      >
        {buttonIcon}
        {buttonLabel}
      </a>
    )

    return href ? anchor : button
  }
)

Button.displayName = "Button"

type ButtonVariant = "primary" | "primary-danger" | "default" | "subdued"
type ButtonSize = "small" | "default"

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLAnchorElement> | React.HTMLProps<HTMLButtonElement>, "size"> {
  children?: React.ReactNode
  /** Choose a variant for your purpose. May leave empty to get default button. */
  variant?: ButtonVariant
  /** Leave empty for default size */
  size?: ButtonSize
  /** Whether the button is disabled */
  disabled?: boolean
  /** Optionally specify an href. This will turn the Button into an <a> element */
  href?: string
  /** Button label can be passed like this or as children */
  label?: string
  /** Specify title for accessibility. Gets value of label if no title specified */
  title?: string
  /** Pass the name of an icon the button should show. Can be any icon included with Juno. */
  icon?: KnownIcons
  /** Pass a className */
  className?: string
  /** Click handler  */
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
  /** Whether the button action is in progress */
  progress?: boolean
  /** Display an alternative label while the button action is in progress */
  progressLabel?: string
}
