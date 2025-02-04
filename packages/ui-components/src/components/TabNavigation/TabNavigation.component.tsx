/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext } from "react"

import { Navigation } from "../Navigation/Navigation.component"

const tabNavStyles = `
  jn-flex
`

export interface TabNavigationContextType {
  tabStyle: TabStyle
}

export const TabNavigationContext = createContext<TabNavigationContextType | undefined>(undefined)

/** A Tab Navigation parent component. Use to wrap `<TabNavigationItem>` elements inside. For tabs with corresponding tab panels, use `<Tabs>` instead. */
export const TabNavigation: React.FC<TabNavigationProps> = ({
  activeItem,
  ariaLabel,
  children,
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

export type TabStyle = "main" | "content"

// eslint-disable-next-line no-unused-vars
type ActiveItemChangeHandler = (value: React.ReactNode) => void

export interface TabNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** The label of the selected tab. The `activeItem` prop set on the parent will override / take precedence over any `active` prop that may be set on a child. */
  activeItem?: React.ReactNode
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel?: string
  /** The child `<TabNavigationItem>` elements to render. */
  children?: React.ReactNode
  /** A custom className to be rendered on the tab navigation */
  className?: string
  /** Whether the tab navigation is disabled. If set to `true`, all child tab navigation item elements will be disabled. */
  disabled?: boolean
  /** A handler to execute when the active tab changes */
  onActiveItemChange?: ActiveItemChangeHandler
  /** The stylistic variant of the Tabs: Use `main` as the first child in an `Appshell` (when manually scaffolding, as first child of `juno-content-container`). For tabs inside the page content use "content". `<TabNavigation tabStyle="main">` will have no darkened border on the bottom of inactive tabs, `tabStyle="content"` will.*/
  tabStyle?: TabStyle
}
