/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { NavigationItem } from "../NavigationItem/index"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

const topNavItemStyles = `
  jn-flex
  jn-items-center
  jn-grow-0
  jn-box-border
  jn-justify-start
  jn-text-theme-default
  jn-font-bold
  jn-leading-6
  jn-py-[0.875rem]
  jn-px-[1.9rem]
  jn-text-theme-default
  jn-bg-theme-topnavigation-item
  hover:jn-text-theme-high
  hover:jn-bg-theme-topnavigation-item-active
  active:jn-text-theme-high
  active:jn-bg-theme-topnavigation-item-active
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`

const topNavActiveItemStyles = `
  jn-font-bold
  jn-text-theme-high
  jn-bg-theme-topnavigation-item-active
  jn-border-b-[3px]
`

/**
An individual item of a top level navigation. Place inside TopNavigation.
*/
export const TopNavigationItem = ({
  active = false,
  ariaLabel,
  children = null,
  className = "",
  disabled = false,
  href = "",
  icon = null,
  label = "",
  onClick = undefined,
  value = "",
  ...props
}) => {
  return (
    <NavigationItem
      active={active}
      activeItemStyles={topNavActiveItemStyles}
      ariaLabel={ariaLabel}
      className={`juno-topnavigation-item ${topNavItemStyles} ${className}`}
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

TopNavigationItem.propTypes = {
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
  /** A handler to execute once the navigation item is clicked. Will render the item as a button element if passed */
  onClick: PropTypes.func,
  /** An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.*/
  value: PropTypes.string,
}
