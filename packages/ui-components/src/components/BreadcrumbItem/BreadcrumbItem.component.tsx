/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
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

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of icon to display within the breadcrumb item.
   */
  icon?: KnownIcons

  /**
   * The URL that the breadcrumb item points to for navigation.
   * @default "#"
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
  onClick?: React.MouseEventHandler<HTMLAnchorElement>

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
  children?: React.ReactNode
}

/**
 * The `BreadcrumbItem` component represents an individual item within a Breadcrumb component.
 * It can render as either a static label or a navigable link, depending on the `active`
 * and `disabled` states. It supports custom icons, labels, and click functionality.
 *
 * @component
 * @param {KnownIcons} [icon] Type of icon to display within the breadcrumb item.
 * @param {string} [href="#"] URL the breadcrumb item points to for navigation.
 * @param {string} [label="Item"] Text to display inside the breadcrumb item.
 * @param {string} [ariaLabel] String for the `aria-label` attribute to aid accessibility.
 * @param {boolean} [active=false] Specifies if the item is the last or actively displayed breadcrumb.
 * @param {React.MouseEventHandler<HTMLAnchorElement>} [onClick] Handler for click events on the breadcrumb item.
 * @param {boolean} [disabled=false] If `true`, disables interaction with the breadcrumb item while rendering it visually distinct.
 * @param {string} [className=""] Additional custom CSS class names for styling.
 * @param {React.ReactNode} [children] Custom content to be rendered, taking precedence over standard content.
 * @returns {React.ReactElement} A navigable or static breadcrumb item with optional icon and styling.
 */
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  href = "#",
  label = "Item",
  ariaLabel = "",
  active = false,
  children,
  disabled = false,
  onClick,
  className = "",
  icon,
  ...props
}) => {
  if (children) return <>{children}</> // Render custom content if provided

  const iconElement = icon ? (
    <Icon icon={icon} size="18" color="jn:text-theme-default" className={label ? "jn:mr-1" : ""} />
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

  // Render the breadcrumb item as a link if neither active nor disabled
  return (
    <span className={combinedClassName} {...props}>
      <a href={href} className={breadcrumbLinkBaseStyles} aria-label={ariaLabel || label} onClick={handleLinkClick}>
        {iconElement}
        {label}
      </a>
    </span>
  )
}
