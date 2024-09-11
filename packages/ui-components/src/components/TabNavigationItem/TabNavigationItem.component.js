/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { NavigationItem } from "../NavigationItem/index"
import { TabNavigationContext } from "../TabNavigation/TabNavigation.component"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

const tabNavItemStyles = `
  jn-flex
  jn-items-center
  jn-text-theme-default
  jn-font-bold
  jn-py-[0.875rem]
  jn-px-[1.5625rem]
  jn-border-b-[3px]
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`

const tabNavActiveItemStyles = `
  jn-text-theme-high
  jn-font-bold
  jn-border-b-[3px]
  jn-border-theme-tab-active-bottom
`

/** An individual Tab Navigation Item. Use wrapped in a `<TabNavigation>` parent component. */
export const TabNavigationItem = ({
  active = false,
  ariaLabel,
  children = null,
  className = "",
  disabled = false,
  href,
  icon,
  label = "",
  onClick,
  value = "",
  ...props
}) => {
  const tabNavigationContext = useContext(TabNavigationContext)
  const { tabStyle: tabStyle } = tabNavigationContext || {}
  return (
    <NavigationItem
      active={active}
      activeItemStyles={tabNavActiveItemStyles}
      ariaLabel={ariaLabel}
      className={`
        juno-tabnavigation-item 
        ${tabStyle ? "juno-tabnavigation-" + tabStyle + "-item" : ""}
        ${tabNavItemStyles} 
        ${className}
      `}
      disabled={disabled}
      href={href}
      icon={icon}
      inactiveItemStyles={`${
        tabStyle === "content" ? "jn-border-theme-tab-content-inactive-bottom" : "jn-border-transparent"
      }`}
      label={label}
      onClick={onClick}
      value={value}
      {...props}
    >
      {children}
    </NavigationItem>
  )
}

TabNavigationItem.propTypes = {
  /** Whether the tab navigation item is active */
  active: PropTypes.bool,
  /** The aria label of the item */
  ariaLabel: PropTypes.string,
  /** The children to render. In order to make the navigation work, you also need to pass a `value` or `label` prop, or both. */
  children: PropTypes.node,
  /** Pass a custom className */
  className: PropTypes.string,
  /** Whether the tab navigation item is disabled */
  disabled: PropTypes.bool,
  /*+ Pass a href to render the item as an `<a>` */
  href: PropTypes.string,
  /** Pass the name of an icon to render in the Tab. Can be any icon included with Juno. */
  icon: PropTypes.oneOf(knownIcons),
  /** The label of the tab navigation item. Must be unique within any given `<TabNavigation>` group. */
  label: PropTypes.string,
  /** Pass a custom handler to execute when the tab is clicked */
  onClick: PropTypes.func,
  /** An optional technical identifier fort the tab. If not passed, the label will be used to identify the tab. NOTE: If value is passed, the value of the active tab MUST be used when setting the activeItem prop on the parent TabNavigation.*/
  value: PropTypes.string,
}
