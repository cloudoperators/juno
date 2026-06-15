/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode, HTMLAttributes, MouseEventHandler } from "react"
import { Icon, KnownIcons } from "../Icon/Icon.component"

const breadcrumbItemBaseStyles = `
  jn:text-sm
  jn:text-theme-high
  jn:flex
  jn:gap-1
  jn:items-center
`

const breadcrumbLinkBaseStyles = `
  jn:text-theme-high
  jn:inline-flex
`

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * The type of icon to display within the breadcrumb item.
   */
  icon?: KnownIcons

  /**
   * The URL that the breadcrumb item points to for navigation.
   * @default undefined
   */
  href?: string

  /**
   * The text to display within the breadcrumb item.
   * @default "Item"
   */
  label?: string

  /**
   * The value for the `aria-label` attribute, enhancing accessibility by providing a textual description.
   */
  ariaLabel?: string

  /**
   * Specifies whether this item is the last or currently active breadcrumb.
   * @default false
   */
  active?: boolean

  /**
   * The click event handler for the breadcrumb item, called when the item is clicked.
   */
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>

  /**
   * If `true`, disables the breadcrumb item, preventing interaction.
   * @default false
   */
  disabled?: boolean

  /**
   * Additional CSS class names to apply for custom styling of the breadcrumb item.
   * @default ""
   */
  className?: string

  /**
   * Custom content to be rendered inside the breadcrumb item, replacing default content.
   * This takes precedence over other content.
   */
  children?: ReactNode
}

/**
 * The `BreadcrumbItem` component represents an individual item within a Breadcrumb component.
 * It can render as either a static label or a navigable link, depending on the `active`
 * and `disabled` states. It supports custom icons, labels, and click functionality.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-breadcrumb-breadcrumbitem--docs
 * @see {@link BreadcrumbItemProps}
 */
export const BreadcrumbItem = ({
  href,
  label = "Item",
  ariaLabel = "",
  active = false,
  children,
  disabled = false,
  onClick,
  className = "",
  icon,
  ...props
}: BreadcrumbItemProps): ReactNode => {
  if (children) return <>{children}</> // Render custom content if provided

  const iconElement = icon ? (
    <Icon icon={icon} size="18" color="jn:text-theme-default" className={label ? "jn:mr-1" : ""} />
  ) : null

  const combinedClassName = `juno-breadcrumb-item 
    ${breadcrumbItemBaseStyles} 
    ${active ? "juno-breadcrumb-item-active" : ""} 
    ${!active && disabled ? "juno-breadcrumb-item-disabled" : ""} 
    ${className}`

  if (active) {
    // Render a non-interactive span for active breadcrumb items with aria-current
    return (
      <span className={combinedClassName} aria-current="page" {...props}>
        {iconElement}
        {label}
      </span>
    )
  }

  if (disabled) {
    // Render a non-interactive span with aria-disabled for disabled breadcrumb items
    return (
      <span className={combinedClassName} aria-disabled="true" {...props}>
        {iconElement}
        {label}
      </span>
    )
  }

  if (href) {
    // Render the breadcrumb item as a link if href is provided and apply breadcrumbLinkBaseStyles
    const linkClassName = `${combinedClassName} ${breadcrumbLinkBaseStyles}`
    return (
      <a
        href={href}
        className={linkClassName}
        aria-label={ariaLabel || label || undefined}
        onClick={onClick}
        {...props}
      >
        {iconElement}
        {label}
      </a>
    )
  }

  if (onClick) {
    // Render the breadcrumb item as a button if only onClick is provided
    return (
      <button
        type="button"
        className={combinedClassName}
        aria-label={ariaLabel || label || undefined}
        onClick={onClick}
        {...props}
      >
        {iconElement}
        {label}
      </button>
    )
  }

  // Default render as a non-interactive span (when no href or onClick is provided)
  return (
    <span className={combinedClassName} {...props}>
      {iconElement}
      {label}
    </span>
  )
}
