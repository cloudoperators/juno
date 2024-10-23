/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Icon, KnownIcons } from "../Icon/Icon.component"

const breadcrumbItemBaseStyles = `
  jn-text-sm
  jn-text-theme-high
  jn-flex
  jn-gap-1
  jn-items-center
`

const breadcrumbLinkBaseStyles = `
  jn-text-theme-high
  jn-inline-flex
`

export interface BreadcrumbItemProps {
  /**
   * The icon type to display in the breadcrumb item.
   */
  icon?: KnownIcons | null
  /**
   * A URL the breadcrumb item points to for navigation.
   */
  href?: string
  /**
   * The text to display inside the breadcrumb item.
   */
  label?: string
  /**
   * The value for the aria-label attribute, used to improve accessibility.
   */
  ariaLabel?: string
  /**
   * Determines if this item is the last or currently active breadcrumb.
   */
  active?: boolean
  /**
   * The click event handler for the breadcrumb item.
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  /**
   * If true, disables the breadcrumb item.
   */
  disabled?: boolean
  /**
   * Additional CSS class names to apply to the breadcrumb item for custom styling.
   */
  className?: string
  /**
   * Custom content to render within the breadcrumb item, replacing the default content.
   */
  children?: React.ReactNode

  /**
   * Additional arbitrary props.
   */
  [key: string]: any
}

/**
 * BreadcrumbItem represents an individual item within a Breadcrumb component.
 */
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  icon = null,
  href = "#",
  label = "Item",
  ariaLabel = "",
  active = false,
  children = null,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  if (children) return <>{children}</>

  const iconElement = icon ? (
    <Icon icon={icon} size="18" color="jn-text-theme-default" className={label ? "jn-mr-1" : ""} />
  ) : null

  const combinedClassName = `juno-breadcrumb-item 
    ${breadcrumbItemBaseStyles} 
    ${disabled ? "juno-breadcrumb-item-disabled" : ""} 
    ${active ? "juno-breadcrumb-item-active" : ""} 
    ${className}`

  if (active || disabled) {
    return (
      <span className={combinedClassName} {...props}>
        {iconElement}
        {label}
      </span>
    )
  }

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick && !disabled) onClick(event)
  }

  // Render the breadcrumb item as a link if neither active or disabled
  return (
    <span className={combinedClassName} {...props}>
      <a href={href} className={breadcrumbLinkBaseStyles} aria-label={ariaLabel || label} onClick={handleLinkClick}>
        {iconElement}
        {label}
      </a>
    </span>
  )
}
