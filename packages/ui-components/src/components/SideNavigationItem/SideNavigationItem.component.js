/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { NavigationItem } from "../NavigationItem/index"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

const sideNavItemStyles = `
  jn-flex
  jn-items-center
  jn-w-full
  jn-py-1.5
  jn-px-8
  jn-text-theme-default
  jn-font-bold
  jn-cursor-pointer
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`

const sideNavActiveItemStyles = `
  jn-font-bold
  jn-text-theme-sidenavigation-item-active
  jn-bg-theme-sidenavigation-item-active
`

/**
A SideNavigation item. To be used inside SideNavigation.
*/
export const SideNavigationItem = ({
  active = false,
  ariaLabel = "",
  children,
  className = "",
  disabled = false,
  icon = null,
  label = "",
  href = "",
  onClick,
  value = "",
  ...props
}) => {
  return (
    <NavigationItem
      active={active}
      activeItemStyles={sideNavActiveItemStyles}
      ariaLabel={ariaLabel}
      className={`juno-sidenavigation-item ${sideNavItemStyles} ${className}`}
      disabled={disabled}
      icon={icon}
      label={label}
      href={href}
      onClick={onClick}
      value={value}
      {...props}
    >
      {children}
    </NavigationItem>
  )
}

SideNavigationItem.propTypes = {
  /** Whether the item is the currently active item */
  active: PropTypes.bool,
  /** The aria label of the item */
  ariaLabel: PropTypes.string,
  /** The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both. */
  children: PropTypes.node,
  /** Whether the item is disabled */
  disabled: PropTypes.bool,
  /** pass an icon name */
  icon: PropTypes.oneOf(knownIcons),
  /** The label of the item */
  label: PropTypes.string,
  /** Pass a custom className */
  className: PropTypes.string,
  /** The link the item should point to. Will render the item as an anchor if passed */
  href: PropTypes.string,
  /** A handler to execute once the item is clicked. Will render the item as a button element if passed */
  onClick: PropTypes.func,
  /** An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent SideNavigation.*/
  value: PropTypes.string,
}
