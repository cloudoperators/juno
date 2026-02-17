/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactElement,
  ReactNode,
  HTMLAttributes,
  MouseEventHandler,
  Children,
  MouseEvent,
} from "react"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import "./sidenavigationitem.css"

const LevelContext = createContext<number>(0)

const sideNavItemStyles = `
  jn:flex
  jn:justify-between
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:w-full
  jn:text-theme-sidenav
  jn:h-[30px]
`

const leftStyles = `
  jn:flex
  jn:items-center
  jn:w-full 
`

const disabledStyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

export interface SideNavigationItemProps extends HTMLAttributes<HTMLElement> {
  /** Provides an accessibility label for the navigation item. */
  ariaLabel?: string

  /** Represents nested components. If a string is passed, it will be treated as a label.*/
  children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[] | string

  /** Marks the item as non-interactive if set to true. */
  /* Required? Design doc suggests so, requirements don't? Can also be managed by useContext hook */
  disabled?: boolean

  /** URL for navigation; transforms the item into a link. */
  href?: string

  /** Defines the icon to display alongside the label. */
  icon?: KnownIcons

  /** Text label displayed for the navigation item. Takes precedence over a label passed as children. */
  label?: ReactNode

  /** Function handler triggered upon item click. */
  onClick?: MouseEventHandler<HTMLElement>

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

export const SideNavigationItem = ({
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
}: SideNavigationItemProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(open)
  const level = useContext(LevelContext)

  // Sync internal state with external prop changes
  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleToggleOpen = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return
    e.stopPropagation() //Prevent event bubbling when expanding/collapsing
    setIsOpen(!isOpen)
  }

  const handleMainClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return
    if (!isOpen) setIsOpen(!isOpen)
    if (href) {
      window.location.href = href
    } else if (onClick) {
      onClick(e)
    }
  }

  const renderExpandIcon = () =>
    typeof children !== "string" && Children.count(children) > 0 ? (
      <span onClick={handleToggleOpen} role="button" tabIndex={0}>
        <Icon
          size="24"
          className={`
          ${disabled ? disabledStyles : ""}`}
          icon={isOpen ? "expandMore" : "chevronRight"}
        />
      </span>
    ) : null

  const renderLeft = () => (
    <span className={leftStyles}>
      {icon && level === 0 ? <Icon className={"jn:mr-[0.25rem]"} icon={icon} size="24" /> : null}
      {/* Add spacing before label which expands by level */}
      <div className={`level-${level + 1}`}>{label || children}</div>
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
    ${onClick || href || children ? "jn:cursor-pointer" : "jn:cursor-default"}
  `

  return (
    <LevelContext.Provider value={level + 1}>
      {href ? (
        <a
          aria-current={selected ? "page" : undefined}
          aria-label={ariaLabel}
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
          aria-label={ariaLabel}
          className={combinedClassNames}
          onClick={!disabled ? handleMainClick : undefined}
          {...props}
        >
          {renderItem()}
        </button>
      )}
      {isOpen && typeof children !== "string" && children}
    </LevelContext.Provider>
  )
}
