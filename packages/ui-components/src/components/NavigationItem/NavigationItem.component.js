/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { NavigationContext } from "../Navigation/Navigation.component"
import { Icon } from "../../deprecated_js/Icon/index.js"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

const itemStyles = `
  jn-flex
  jn-items-center
`

const disabledStyles = `
  jn-opacity-50
  jn-cursor-not-allowed
`

/** A generic Navigation Item component. For internal use only. Use to wrap more semantic, role-specific navigation item components such as `SidenavigationItem`, `TabNavigationItem` , `TopNavigationItem` around. */
export const NavigationItem = ({
  active = false,
  activeItemStyles = "",
  ariaLabel = "",
  children = null,
  className = "",
  disabled = false,
  icon = null,
  inactiveItemStyles = "",
  label = "",
  href = "",
  onClick,
  value = "",
  wrapperClassName = "",
  ...props
}) => {
  const navigationContext = useContext(NavigationContext)

  // Create a unique Identifier to a) identify the active item with the parent, b) as a key in the map of items with the parent, and c) to be returned by interested event handlers.
  const theKey = value || children || label

  const {
    activeItem: activeItem,
    addItem: addItem,
    handleActiveItemChange: handleActiveItemChange,
    navigationDisabled: navigationDisabled,
    navigationRole: navigationRole,
  } = navigationContext || {}

  // Determine whether the item is initially set to active via the parent navigation component or by its own devices:
  const initialActive = () => {
    if (navigationContext?.activeItem?.length > 0) {
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

  const handleClick = (event) => {
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
          aria-disabled={navigationDisabled || disabled ? true : null}
          aria-label={ariaLabel && ariaLabel.length ? ariaLabel : null}
          aria-selected={isActive ? true : null}
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
          href={href}
          onClick={handleClick}
          {...props}
        >
          {icon ? <Icon icon={icon} size="18" className={"jn-mr-2"} /> : ""}
          {children || label || value}
        </a>
      ) : (
        <button
          aria-disabled={navigationDisabled || disabled ? true : null}
          aria-label={ariaLabel && ariaLabel.length ? ariaLabel : null}
          aria-selected={isActive ? true : null}
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
          {icon ? <Icon icon={icon} size="18" className={"jn-mr-2"} /> : ""}
          {children || label || value}
        </button>
      )}
    </li>
  )
}

NavigationItem.propTypes = {
  /** Whether the navigation item is the currently active item. If an acitve item is set on the parent, the one on the parent will win. */
  active: PropTypes.bool,
  /** Styles to apply to the active item*/
  activeItemStyles: PropTypes.string,
  /** The aria-label of the item */
  ariaLabel: PropTypes.string,
  /** Pass custom classNames to the item itself. */
  className: PropTypes.string,
  /** The child string of the item. Will override `label` when passed. */
  children: PropTypes.string,
  /** Whether the item is disabled */
  disabled: PropTypes.bool,
  /** An icon to render in the item */
  icon: PropTypes.oneOf(knownIcons),
  /* Pass styles that apply to IN-active items only, in the event activeStyles are overwritten by defaultStyles affecting the same CSS property*/
  inactiveItemStyles: PropTypes.string,
  /** The label of the item. Will be rendered if no children are passed */
  label: PropTypes.string,
  /** The href of the item. The item will be rendered as an `<a>` element when passed, instead of a `<button>`.  */
  href: PropTypes.string,
  /** Handler to execute when the item is clicked */
  onClick: PropTypes.func,
  /** The value of the item as a technical identifier. Use if needed to be different from the visble `label` or child string. Will only be rendered when no `label` prop and no children are passed. */
  value: PropTypes.string,
  /** Pass a custom className to the parent `<li>` element of the item. */
  wrapperClassName: PropTypes.string,
}
