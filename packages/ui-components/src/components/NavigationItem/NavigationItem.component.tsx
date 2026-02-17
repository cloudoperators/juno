/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useState, ReactNode } from "react"

import { NavigationContext } from "../Navigation/Navigation.component"
import { Icon, KnownIcons } from "../Icon/Icon.component"

const itemStyles = `
  jn:flex
  jn:items-center
`

const disabledStyles = `
  jn:opacity-50
  jn:cursor-not-allowed
`

/**
 * `NavigationItem` acts as a singular navigational unit within a `Navigation`,
 * offering styles for active and inactive states, and supporting disabled
 * interactions internally.
 */
export const NavigationItem = ({
  active = false,
  activeItemStyles = "",
  ariaLabel = "",
  children,
  className = "",
  disabled = false,
  icon,
  inactiveItemStyles = "",
  label = "",
  href = "",
  onClick,
  value = "",
  wrapperClassName = "",
  ...props
}: NavigationItemProps): ReactNode => {
  // Utility
  const isNotEmptyString = (str: ReactNode) => {
    return !(typeof str === "string" && str.trim().length === 0)
  }

  const navigationContext = useContext(NavigationContext)

  // Create a unique Identifier to a) identify the active item with the parent, b) as a key in the map of items with the parent, and c) to be returned by interested event handlers.
  const theKey: ReactNode = value || children || label

  const {
    activeItem: activeItem,
    addItem: addItem,
    handleActiveItemChange: handleActiveItemChange,
    navigationDisabled: navigationDisabled,
    navigationRole: navigationRole,
  } = navigationContext || {}

  // Determine whether the item is initially set to active via the parent navigation component or by its own devices:
  const initialActive = () => {
    if (navigationContext?.activeItem && isNotEmptyString(navigationContext?.activeItem)) {
      return activeItem === theKey
    } else {
      return active
    }
  }

  const [isActive, setIsActive] = useState(() => initialActive())

  useEffect(() => {
    // only add the item to the parent if we are in a context and addItem method exists:
    addItem ? addItem(theKey, children, label, value) : undefined
  }, [children, label, value])

  useEffect(() => {
    if (activeItem) {
      activeItem === theKey ? setIsActive(true) : setIsActive(false)
      return
    }
    setIsActive(active)
  }, [activeItem, active])

  const handleClick = (event: MouseEvent<EventTarget>) => {
    if (disabled) {
      event.preventDefault()
    } else {
      if (!isActive && handleActiveItemChange && typeof handleActiveItemChange === "function") {
        handleActiveItemChange(theKey)
      }
      onClick && onClick(event)
    }
  }

  return (
    <li className={`juno-navigation-item-wrapper ${wrapperClassName}`}>
      {href && href.length ? (
        <a
          aria-disabled={navigationDisabled || disabled ? true : undefined}
          aria-label={ariaLabel && ariaLabel.length ? ariaLabel : undefined}
          aria-selected={isActive ? true : undefined}
          className={`
            juno-navigation-item 
            ${itemStyles}
            ${
              navigationRole
                ? "juno-" +
                  navigationRole.toLowerCase() +
                  "-item " +
                  (isActive ? "juno-" + navigationRole.toLowerCase() + "-item-active" : "")
                : ""
            }
            ${isActive ? "juno-navigation-item-active " + activeItemStyles : inactiveItemStyles}
            ${navigationDisabled || disabled ? "juno-navigation-item-disabled " + disabledStyles : ""}
            ${className}`}
          data-value={value && value.length ? value : null}
          href={href}
          onClick={handleClick}
          {...props}
        >
          {icon ? <Icon icon={icon} size="18" className={"jn:mr-2"} /> : ""}
          {children || label || value}
        </a>
      ) : (
        <button
          aria-disabled={navigationDisabled || disabled ? true : undefined}
          aria-label={ariaLabel && ariaLabel.length ? ariaLabel : undefined}
          aria-selected={isActive ? true : undefined}
          className={`
            juno-navigation-item 
            ${itemStyles}
            ${
              navigationRole
                ? "juno-" +
                  navigationRole.toLowerCase() +
                  "-item " +
                  (isActive ? "juno-" + navigationRole.toLowerCase() + "-item-active" : "")
                : ""
            }
            ${isActive ? "juno-navigation-item-active " + activeItemStyles : inactiveItemStyles}
            ${navigationDisabled || disabled ? "juno-navigation-item-disabled " + disabledStyles : ""}
            ${className}`}
          data-value={value && value.length ? value : null}
          disabled={navigationDisabled || disabled}
          onClick={handleClick}
          {...props}
        >
          {icon ? <Icon icon={icon} size="18" className={"jn:mr-2"} /> : ""}
          {children || label || value}
        </button>
      )}
    </li>
  )
}

export interface NavigationItemProps extends HTMLAttributes<HTMLElement> {
  /**
   * Whether the navigation item is the currently active item. If an active item is set on the parent, the one on the parent will win.
   * @default false
   */
  active?: boolean

  /**
   * Styles to apply when the item is active.
   * @default ""
   */
  activeItemStyles?: string

  /**
   * The aria-label of the item for accessibility.
   */
  ariaLabel?: string

  /**
   * Pass custom classNames to the item itself.
   * @default ""
   */
  className?: string

  /**
   * The child nodes of the item, overriding `label` if specified.
   */
  children?: ReactNode

  /**
   * Determines if the item is disabled.
   * @default false
   */
  disabled?: boolean

  /**
   * An icon to render within the item for visual indication.
   */
  icon?: KnownIcons

  /**
   * Styles applied to inactive items, ensuring differentiation from active.
   * @default ""
   */
  inactiveItemStyles?: string

  /**
   * The label of the item, displayed if `children` are not provided.
   */
  label?: string

  /**
   * Presence transforms the item into an anchor, enabling navigation.
   */
  href?: string

  /**
   * Handler executed during item clicks for operational logic.
   */
  onClick?: MouseEventHandler<EventTarget>

  /**
   * Value for technical/item identification purposes, utilized when differing from `label` or child strings.
   */
  value?: string

  /**
   * Pass className to parent `<li>` element, styling the container.
   * @default ""
   */
  wrapperClassName?: string
}
