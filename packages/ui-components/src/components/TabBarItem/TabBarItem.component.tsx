/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, MouseEventHandler, ReactNode, useContext } from "react"
import { NavigationItem } from "../NavigationItem/index"
import { TabBarContext } from "../TabBar/TabBar.component"
import { KnownIcons } from "../Icon/Icon.component.js"

const tabBarItemStyles = `
  jn:flex
  jn:items-center
  jn:text-theme-default
  jn:font-bold
  jn:py-[0.875rem]
  jn:px-[1.5625rem]
  jn:border-b-[3px]
  jn:focus-visible:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
`

const tabBarActiveItemStyles = `
  jn:text-theme-high
  jn:font-bold
  jn:border-b-[3px]
  jn:border-theme-tab-active-bottom
`

const tabBarItemButtonStyles = `
  jn:rounded-[0.1875rem]
  jn:px-[0.625rem]
  jn:py-[0.4375rem]
  jn:text-sm
  jn:font-bold
  jn:leading-[1.4]
  jn:border
  jn:transition-colors
  jn:duration-150
  jn:focus-visible:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
`

const tabBarItemButtonActiveStyles = `
  jn:bg-theme-tab-button-active
  jn:text-theme-tab-button-active
  jn:border-theme-tab-button-active
`

const tabBarItemButtonInactiveStyles = `
  jn:text-theme-tab-button
  jn:border-transparent
  jn:hover:text-theme-tab-button-hover
`

const tabBarItemContentStyles = `
  jn:flex
  jn:items-center
  jn:text-theme-default
  jn:font-bold
  jn:py-[0.875rem]
  jn:px-[1.5625rem]
  jn:focus-visible:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
`

const tabBarActiveContentItemStyles = `
  jn:text-theme-high
  jn:font-bold
`

const tabBarItemContentWrapperStyles = `
  jn:border-b-[3px]
  jn:border-theme-tab-content-inactive-bottom
  jn:has-[.juno-navigation-item-active]:border-theme-tab-active-bottom
`

/**
 * An individual TabBar item. Use wrapped in a `<TabBar>` parent component.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-tabbar-tabbaritem--docs
 * @see {@link TabBarItemProps}
 */
export const TabBarItem = ({
  active = false,
  ariaLabel,
  children,
  className = "",
  disabled = false,
  href,
  icon,
  label = "",
  onClick,
  value = "",
  ...props
}: TabBarItemProps): ReactNode => {
  const { appearance } = useContext(TabBarContext) || {}
  const resolvedAppearance = appearance
  const isButtons = resolvedAppearance === "buttons"
  const isContent = resolvedAppearance === "content"
  return (
    <NavigationItem
      active={active}
      activeItemStyles={isButtons ? tabBarItemButtonActiveStyles : isContent ? tabBarActiveContentItemStyles : tabBarActiveItemStyles}
      ariaLabel={ariaLabel}
      className={`
        juno-tabbar-item
        ${resolvedAppearance ? "juno-tabbar-" + resolvedAppearance + "-item" : ""}
        ${isButtons ? tabBarItemButtonStyles : isContent ? tabBarItemContentStyles : tabBarItemStyles}
        ${className}
      `}
      disabled={disabled}
      href={href}
      icon={icon}
      inactiveItemStyles={
        isButtons
          ? tabBarItemButtonInactiveStyles
          : isContent
          ? ""
          : "jn:border-transparent"
      }
      label={label}
      onClick={onClick}
      value={value}
      wrapperClassName={isContent ? tabBarItemContentWrapperStyles : ""}
      {...props}
    >
      {children}
    </NavigationItem>
  )
}

export interface TabBarItemProps extends HTMLAttributes<HTMLElement> {
  /** Whether the tab bar item is active */
  active?: boolean
  /** The aria label of the item */
  ariaLabel?: string
  /** The children to render. Also pass a `value` or `label` prop to make navigation work. */
  children?: ReactNode
  /** A custom className */
  className?: string
  /** Whether the item is disabled */
  disabled?: boolean
  /** Pass a href to render the item as an `<a>` */
  href?: string
  /** Pass the name of an icon to render in the tab. Can be any icon included with Juno. */
  icon?: KnownIcons
  /** The label of the item. Must be unique within any given `<TabBar>`. */
  label?: string
  /** A custom handler to execute when the tab is clicked */
  onClick?: MouseEventHandler<HTMLElement>
  /** An optional technical identifier. If not passed, the label is used. NOTE: If value is passed, it MUST be used when setting the activeItem prop on the parent TabBar. */
  value?: string
}

/** @deprecated Use TabBarItemProps instead. Can be removed when TabNavigationItem is removed. */
export type TabNavigationItemProps = TabBarItemProps
