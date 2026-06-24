/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  useState,
  useEffect,
  useContext,
  ReactNode,
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
  MouseEvent,
  Children,
} from "react"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import { LevelContext } from "../SideNavigation/levelContext"
import "../SideNavigation/sidenavigation.css"

const sideNavItemStyles = `
  jn:flex
  jn:items-center
  jn:px-[0.5rem]
  jn:py-[0.1875rem]
  jn:w-full
  jn:text-theme-sidenav
  jn:min-h-[1.875rem]
`

const leftStyles = `
  jn:flex
  jn:items-start
  jn:flex-grow
  jn:min-w-0
`

const disabledStyles = `
  jn:opacity-50
`

export interface SideNavigationItemProps extends HTMLAttributes<HTMLElement> {
  /** Provides an accessibility label for the navigation item. */
  ariaLabel?: string
  /** Nested SideNavigationItem components rendered as a sub-list when expanded. A string may be passed instead and will be treated as a label. */
  children?: ReactElement<SideNavigationItemProps> | ReactElement<SideNavigationItemProps>[] | string
  /** Marks the item as non-interactive if set to true. */
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
 *
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationitem--docs
 * @see {@link SideNavigationItemProps}
 */

export const SideNavigationItem = ({
  ariaLabel,
  children,
  disabled = false,
  href,
  icon,
  label = "",
  onClick,
  open = false,
  selected = false,
  ...props
}: SideNavigationItemProps): ReactNode => {
  const [isOpen, setIsOpen] = useState(open)
  const level = useContext(LevelContext)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleToggleOpen = (e: MouseEvent<HTMLElement>) => {
    if (disabled) return
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const handleMainClick = (e: MouseEvent<HTMLElement>) => {
    if (href) {
      window.location.href = href
    } else if (onClick) {
      onClick(e)
    }
  }

  const titleText: string | undefined =
    typeof label === "string" && label.length > 0
      ? label
      : typeof children === "string" && children.length > 0
        ? children
        : undefined

  const renderExpandButton = () =>
    children && typeof children !== "string" && Children.count(children) ? (
      <button
        type="button"
        onClick={handleToggleOpen}
        aria-label={isOpen ? "Collapse section" : "Expand section"}
        disabled={disabled}
        className="expand-icon"
      >
        <Icon size="24" icon={isOpen ? "expandMore" : "chevronRight"} />
      </button>
    ) : null

  const renderLeft = () => (
    <span className={leftStyles}>
      {icon && level === 0 ? <Icon className={"jn:mr-[0.25rem]"} icon={icon} size="24" /> : null}
      <div className={`level-${level + 1}`}>{label || children}</div>
    </span>
  )

  const combinedClassNames = `
    juno-sidenavigation-item
    ${sideNavItemStyles}
    ${selected ? "juno-sidenavigation-item-selected" : ""}
    ${isOpen ? "juno-sidenavigation-item-open" : ""}
    ${disabled ? "jn:cursor-not-allowed" : "jn:cursor-pointer"}
    ${disabled ? disabledStyles : ""}
  `

  return (
    <LevelContext.Provider value={level + 1}>
      <li className="jn:flex jn:w-full jn:flex-col">
        <div className="jn:flex jn:w-full jn:items-start jn:justify-between">
          {href ? (
            <a
              aria-current={selected ? "page" : undefined}
              aria-label={ariaLabel ? ariaLabel : undefined}
              className={combinedClassNames}
              href={!disabled ? href : undefined}
              onClick={!disabled ? handleMainClick : undefined}
              aria-disabled={disabled || undefined}
              tabIndex={disabled ? -1 : undefined}
              title={titleText}
              {...props}
            >
              {renderLeft()}
            </a>
          ) : (
            <button
              type="button"
              aria-current={selected ? "page" : undefined}
              aria-label={ariaLabel ? ariaLabel : undefined}
              className={combinedClassNames}
              onClick={!disabled ? handleMainClick : undefined}
              disabled={disabled}
              title={titleText}
              {...props}
            >
              {renderLeft()}
            </button>
          )}
          {renderExpandButton()}
        </div>
        {isOpen && typeof children !== "string" && children && Children.count(children) > 0 && <ul>{children}</ul>}
      </li>
    </LevelContext.Provider>
  )
}
