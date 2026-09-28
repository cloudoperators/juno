/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, HTMLAttributes, ReactNode } from "react"
import { Navigation } from "../Navigation/Navigation.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

const tabBarStyles = `
  jn:flex
`

export type TabBarAppearance = "main" | "content"

/** @deprecated Use TabBarAppearance instead */
export type TabStyle = TabBarAppearance

export interface TabBarContextType {
  appearance: TabBarAppearance
  /** @deprecated Use appearance instead */
  tabStyle?: TabBarAppearance
}

/** @deprecated Use TabBarContextType instead */
export type TabNavigationContextType = TabBarContextType

export const TabBarContext = createContext<TabBarContextType | undefined>(undefined)

/** @deprecated Use TabBarContext instead */
export const TabNavigationContext = TabBarContext

/**
 * An all-purpose bar of tab-shaped items for navigation or filtering.
 * Use to wrap `<TabBarItem>` elements. For tabs with corresponding tab panels, use a tabbed content library such as react-tabs directly.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabbar-tabbar--docs
 * @see {@link TabBarProps}
 */
export const TabBar = ({
  activeItem,
  ariaLabel,
  children,
  className = "",
  disabled = false,
  onActiveItemChange,
  appearance,
  tabStyle,
  ...props
}: TabBarProps): ReactNode => {
  const resolvedAppearance = appearance ?? tabStyle ?? "main"
  return (
    <TabBarContext.Provider value={{ appearance: resolvedAppearance, tabStyle: resolvedAppearance }}>
      <Navigation
        activeItem={activeItem}
        ariaLabel={ariaLabel}
        className={`juno-tabbar juno-tabbar-${resolvedAppearance} ${tabBarStyles} ${className}`}
        disabled={disabled}
        onActiveItemChange={onActiveItemChange}
        {...props}
      >
        {children}
      </Navigation>
    </TabBarContext.Provider>
  )
}

export interface TabBarProps extends HTMLAttributes<HTMLElement> {
  /** The label of the selected tab. The `activeItem` prop set on the parent will override any `active` prop set on a child. */
  activeItem?: ReactNode
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel?: string
  /** The child `<TabBarItem>` elements to render. */
  children?: ReactNode
  /** A custom className */
  className?: string
  /** Whether the tab bar is disabled. If `true`, all child items will be disabled. */
  disabled?: boolean
  /** A handler to execute when the active tab changes */
  // eslint-disable-next-line no-unused-vars
  onActiveItemChange?: (activeItem: ReactNode) => void
  /** The visual appearance of the TabBar. Use `main` as the first child in an AppShell. Use `content` for tabs inside page content — adds a darkened bottom border on inactive tabs. */
  appearance?: TabBarAppearance
  /** @deprecated Use appearance instead */
  tabStyle?: TabBarAppearance
}

/** @deprecated Use TabBarProps instead */
export type TabNavigationProps = TabBarProps

/**
 * @deprecated TabNavigation is deprecated and may be removed in any of the next major releases. Use TabBar instead.
 */
export const TabNavigation = withDeprecationWarning(
  TabBar,
  "TabNavigation is deprecated and may be removed in any of the next major releases. Use TabBar instead."
)
