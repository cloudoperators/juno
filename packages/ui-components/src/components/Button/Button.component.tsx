/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { LegacyRef } from "react"
import "./button.scss"
import { Icon } from "../Icon/index"
import { KnownIcons } from "../Icon/Icon.component"
import { Spinner } from "../Spinner/index"

const btnBase = `
  jn-font-bold
  jn-inline-flex 
  jn-justify-center 
  jn-items-center
  jn-rounded
  jn-shadow-sm 
  jn-w-auto
  focus:jn-outline-none 
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
  focus-visible:jn-ring-offset-1
  focus-visible:jn-ring-offset-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  disabled:jn-pointer-events-none
`

const btnSmallBase = `
  jn-text-sm
  jn-leading-5
`

const btnDefaultBase = `
  jn-text-base
  jn-leading-6
`

const btnSmallDefaultPadding = `
  jn-py-[0.3125rem]
  jn-px-[0.5rem]
`

const btnSmallSubduedPadding = `
  jn-py-[0.25rem]
  jn-px-[0.4375rem]
`

const btnDefaultPadding = `
  jn-py-[0.4375rem]
  jn-px-[0.625rem] 
`

const btnDefaultSubduedPadding = `
  jn-py-[0.375rem]
  jn-px-[0.5625rem]
`

const getButtonPadding = (size: ButtonSize, variant: ButtonVariant | undefined) => {
  if (size === "small") {
    return variant === "subdued" ? `${btnSmallSubduedPadding}` : `${btnSmallDefaultPadding}`
  } else {
    return variant === "subdued" ? `${btnDefaultSubduedPadding}` : `${btnDefaultPadding}`
  }
}

const btnIconSmall = `
  jn-mr-2
`

const btnIconDefault = `
  jn-mr-2
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
      return "jn-text-theme-accent"
    case "primary":
      return "jn-text-white"
    case "primary-danger":
      return "jn-text-white"
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
      title = null,
      variant,
      size = "default",
      disabled = null,
      href = null,
      icon = null,
      className = "",
      onClick,
      children,
      progress = false,
      progressLabel = "",
      ...props
    },
    ref
  ) => {
    const theVariant = variant || "default"
    const titleValue = title || label || ""

    const buttonIcon = progress ? (
      <Spinner size={size === "small" ? "1.125rem" : "1.5rem"} color={`${spinnerColorClass(theVariant)}`} />
    ) : icon ? (
      <Icon
        icon={icon}
        title={titleValue}
        className={`juno-button-icon ${label || children ? iconClasses(size) : ""} `}
        size={size === "small" ? "1.125rem" : "1.5rem"}
      />
    ) : null

    const buttonLabel = progress && progressLabel ? progressLabel : label || children

    const handleClick = (event: React.MouseEvent<EventTarget, MouseEvent>) => {
      onClick && onClick(event)
    }

    const button = (
      <button
        className={`
          juno-button 
          juno-button-${theVariant} 
          juno-button-${size}-size 
          ${btnBase} 
          ${size === "small" ? btnSmallBase : btnDefaultBase} 
          ${getButtonPadding(size, variant)}
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
          juno-button-${theVariant} 
          juno-button-${size}-size 
          ${btnBase} 
          ${size === "small" ? btnSmallBase : btnDefaultBase}
          ${getButtonPadding(size, variant)}
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

export type ButtonProps = {
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
  onClick?: React.MouseEventHandler<EventTarget>
  /** Whether the button action is in progress */
  progress?: boolean
  /** Display an alternative label while the button action is in progress */
  progressLabel?: string
} & Omit<React.HTMLProps<HTMLAnchorElement> | React.HTMLProps<HTMLButtonElement>, "size">
