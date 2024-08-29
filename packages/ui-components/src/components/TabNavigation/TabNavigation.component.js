/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext } from "react"
import PropTypes from "prop-types"
import { Navigation } from "../Navigation/index"

const tabNavStyles = `
  jn-flex
`

export const TabNavigationContext = createContext()

/** A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead. */
export const TabNavigation = ({
  activeItem = "",
  ariaLabel,
  children = null,
  className = "",
  disabled = false,
  onActiveItemChange,
  tabStyle = "main",
  ...props
}) => {
  return (
    <TabNavigationContext.Provider
      value={{
        tabStyle: tabStyle,
      }}
    >
      <Navigation
        activeItem={activeItem}
        ariaLabel={ariaLabel}
        className={`
          juno-tabnavigation 
          juno-tabnavigation-${tabStyle} 
          ${tabNavStyles} 
          ${className}
        `}
        disabled={disabled}
        // navigationRole="TabNavigation"
        onActiveItemChange={onActiveItemChange}
        {...props}
      >
        {children}
      </Navigation>
    </TabNavigationContext.Provider>
  )
}

TabNavigation.propTypes = {
  /** The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child. */
  activeItem: PropTypes.string,
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel: PropTypes.string,
  /** The child `<TabNavigationItem>` elements to render. */
  children: PropTypes.node,
  /** A custom className to be rendered on the tab navigation */
  className: PropTypes.string,
  /** Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled. */
  disabled: PropTypes.bool,
  /** A handler to execute when the active tab changes */
  onActiveItemChange: PropTypes.func,
  /** The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.*/
  tabStyle: PropTypes.oneOf(["main", "content"]),
}
