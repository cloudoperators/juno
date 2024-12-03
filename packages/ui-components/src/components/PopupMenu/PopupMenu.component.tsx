/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable react/prop-types */

import React from "react"
import { Menu as HeadlessMenu } from "@headlessui/react"
import { Icon, KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/"

// ----- Styles -----

const defaultToggleStyles = `
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`

const menuStyles = `
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-rounded
  jn-bg-theme-background-lvl-1
`

const itemStyles = `
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`

const itemIconStyles = `
  jn-inline-block
  jn-mr-2
`

// ----- Interfaces -----

export interface PopupMenuProps {
  children?: React.ReactNode
  icon?: keyof typeof KnownIconsEnum
}

export interface PopupMenuToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  as?: React.ElementType
}

export interface PopupMenuItemProps extends React.ComponentProps<typeof HeadlessMenu.Item> {
  className?: string
  disabled?: boolean
  icon?: keyof typeof KnownIconsEnum
  label?: string
}

// ----- Component Definitions -----

// POPUP MENU

// TODO:
// - use headless-ui's `open` render prop to allow for styling the open toggle explicitly? Can this be exposed so custom components can use it, too?
// - implement small and normal sizes
// - implement PopupMenu.Section
// - Positioning

/** A simple Popup Menu component that wraps Headless UI Menu */
const PopupMenu: React.FC<PopupMenuProps> & {
  Toggle: React.FC<PopupMenuToggleProps>
  Menu: typeof PopupMenuMenu
  Item: React.FC<PopupMenuItemProps>
} = ({ children = null, icon = "moreVert" }) => {
  // Ensure we always have an array of children:
  const childrenArray = React.Children.toArray(children)

  const hasToggle = childrenArray.some((child) => React.isValidElement(child) && child.type === PopupMenuToggle)

  const menu = childrenArray.find((child) => React.isValidElement(child) && child.type === PopupMenuMenu)

  return (
    <HeadlessMenu as="div" className={`juno-popupmenu`}>
      {/* Render default toggle button if no toggle is passed, but still render an icon if passed: */}
      {!hasToggle && (
        <PopupMenu.Toggle className={`juno-popupmenu-toggle juno-popupmenu-toggle-default ${defaultToggleStyles}`}>
          <Icon icon={icon} />
        </PopupMenu.Toggle>
      )}

      {/* Render toggle children as passed. TODO: make sure there is only one toggle */}
      {childrenArray.map((child) => {
        if (React.isValidElement(child) && child.type === PopupMenuToggle) {
          return child
        }
      })}
      <PortalProvider.Portal>{menu}</PortalProvider.Portal>
    </HeadlessMenu>
  )
}

// TOGGLE COMPONENT
// TODO: Keep this toggle unstyled/minimal or use our own <Button> internally, while still allowing custom components passed as `as`?
const PopupMenuToggle: React.FC<PopupMenuToggleProps & { as?: React.ElementType }> = ({
  as = "button",
  children = null,
  className = "",
  ...props
}) => (
  <HeadlessMenu.Button as={as} className={`juno-popupmenu-toggle ${className}`} {...props}>
    {children}
  </HeadlessMenu.Button>
)

// MENU COMPONENT
const PopupMenuMenu: React.FC<React.ComponentProps<typeof HeadlessMenu.Items>> = ({ children, ...props }) => (
  <HeadlessMenu.Items className={`juno-popupmenu-menu ${menuStyles}`} {...props}>
    {children}
  </HeadlessMenu.Items>
)

// ITEM COMPONENT
const PopupMenuItem: React.FC<PopupMenuItemProps> = ({
  children = null,
  className = "",
  icon,
  label = "",
  ...props
}) => (
  <HeadlessMenu.Item as="div" className={`juno-popupmenu-item ${itemStyles} ${className}`} {...props}>
    {/* 
      To render the item content, provide an itemBag context to the headless ui API. This includes properties like active, disabled, close. 
      Then, if label is a string, render it. Otherwise, if children is a function, invoke it with itemBag; otherwise render children straightaway:
    */}
    {(itemBag) => (
      <>
        {icon && <Icon icon={icon} size="18" className={`juno-popupmenu-item-icon ${itemIconStyles}`} />}
        {typeof label === "string"
          ? label
          : typeof children === "function"
            ? children(itemBag) // Pass the itemBag to the render prop function
            : children}
      </>
    )}
  </HeadlessMenu.Item>
)

PopupMenu.Toggle = PopupMenuToggle
PopupMenu.Menu = PopupMenuMenu
PopupMenu.Item = PopupMenuItem

export { PopupMenu }
