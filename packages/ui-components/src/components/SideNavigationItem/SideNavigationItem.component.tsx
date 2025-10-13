/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode, useContext, createContext } from "react"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import "./sidenavigationitem.css"

const LevelContext = createContext<number>(0)

// Keep all styles in css file?
const sideNavItemStyles = `
  jn:flex
  jn:justify-between 
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:text-theme-sidenav
  jn:w-full
`

const leftStyles = `
  jn:flex
  jn:items-center
  jn:space-x-[0.25rem]
  jn:w-full 
`

const disabledStyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

export interface SideNavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  /** Provides an accessibility label for the navigation item. */
  ariaLabel?: string

  /** Represents nested components or text content within the item. */
  children?: ReactNode

  /** Marks the item as non-interactive if set to true. */
  /* Required? Design doc suggests so, requirements don't? Can also be managed by useContext hook */
  disabled?: boolean

  /** URL for navigation; transforms the item into a link. */
  href?: string

  /** Defines the icon to display alongside the label. */
  icon?: KnownIcons

  /** Text label displayed for the navigation item. */
  label?: string

  /** Function handler triggered upon item click. */
  onClick?: React.MouseEventHandler<HTMLElement>

  /** Controls whether the item is expanded by default. */
  open?: boolean

  /** Indicates if the item is currently selected or active. */
  selected?: boolean
}

/**
 * SideNavigationItem is a versatile component designed to be used within the SideNavigation component,
 * providing navigational functionalities in hierarchical interfaces.
 *
 * It serves as an individual item representing a link or action within a navigation menu,
 * capable of displaying text labels, icons, and handling click events.
 *
 * Key Features:
 * - Hierarchical Structure: Supports nested items for multi-level navigation through its children prop (up to 3 levels).
 * - Interactive Elements: Can operate as a link using the href prop or execute functions via onClick handlers.
 * - State Indicators: Supports active and disabled states, visually indicating the current focus or usability.
 * - Expandable Sections: When nested, automatically renders expand/collapse controls for child navigation items.
 * - Customization: Offers extensive styling versatility through CSS classes and optional icon rendering for visual enhancement.
 */

export const SideNavigationItem: React.FC<SideNavigationItemProps> = ({
  ariaLabel = "",
  children,
  disabled = false,
  href = "",
  icon,
  label = "",
  onClick,
  open = false,
  selected = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(open)

  const level = useContext(LevelContext)

  /* Removing child object past level 3, not ideal */
  if (typeof children !== "string" && level + 1 === 3) children = null

  const handleToggleOpen = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    e.stopPropagation() //Prevent event bubbling when expanding/collapsing
    setIsOpen(!isOpen)
  }

  const handleMainClick = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return
    if (!isOpen) setIsOpen(!isOpen)
    if (href) {
      window.location.href = href
    } else if (onClick) {
      onClick(e)
    }
  }

  const renderExpandIcon = () =>
    typeof children !== "string" && React.Children.count(children) > 0 ? (
      <span onClick={handleToggleOpen} role="button" tabIndex={0}>
        <Icon
          className={`
          juno-sidenavigation-item
          ${disabled ? disabledStyles : ""}`}
          icon={isOpen ? "expandMore" : "chevronRight"}
        />
      </span>
    ) : null

  const renderLeft = () => (
    <span className={leftStyles}>
      {icon && level === 0 ? <Icon icon={icon} size="18" /> : null}
      {/* Add spacing before label which expands by level */}
      <div className={`juno-sidenavigation-item-content level-${level + 1}`}>{label || children}</div>
    </span>
  )

  const renderItem = () => (
    <>
      {renderLeft()}
      {renderExpandIcon()}
    </>
  )

  const combinedClassNames = `
    juno-sidenavigation-item
    ${sideNavItemStyles}
    ${disabled ? disabledStyles : ""}
    ${selected ? "selected" : ""}
  `

  return (
    <LevelContext.Provider value={level + 1}>
      {href ? (
        <a
          aria-current={selected ? "page" : undefined}
          aria-label={ariaLabel || label}
          className={combinedClassNames}
          href={!disabled ? href : undefined}
          onClick={handleMainClick}
          {...props}
        >
          {renderItem()}
        </a>
      ) : (
        <button
          aria-current={selected ? "page" : undefined}
          aria-label={ariaLabel || label}
          className={combinedClassNames}
          onClick={!disabled ? handleMainClick : undefined}
          {...props}
        >
          {renderItem()}
        </button>
      )}
      {isOpen && children}
    </LevelContext.Provider>
  )
}
