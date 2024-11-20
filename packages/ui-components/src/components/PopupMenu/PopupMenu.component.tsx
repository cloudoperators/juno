/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable react/prop-types */

import React from "react"
import { Menu as HeadlessMenu } from "@headlessui/react"
import { Icon, KnownIconsEnum } from "../Icon/Icon.component"

// ----- Interfaces -----

export interface PopupMenuProps {
  children?: React.ReactNode
  icon?: keyof typeof KnownIconsEnum
}

export interface PopupMenuToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export interface PopupMenuItemProps extends React.ComponentProps<typeof HeadlessMenu.Item> {
  label?: string
  disabled?: boolean
  className?: string
}

// ----- Component Definitions -----

// TODO: remove internal state, rely on headless ui state, pass open render prop and only render the menu when render prop is true.

// POPUP MENU

/** A simple Popup Menu component that wraps Headless UI Menu */
const PopupMenu: React.FC<PopupMenuProps> & {
  Toggle: React.FC<PopupMenuToggleProps>
  Menu: typeof PopupMenuMenu
  Item: React.FC<PopupMenuItemProps>
} = ({ children, icon = "moreVert" }) => {
  // Ensure we always have an array of children
  const childrenArray = React.Children.toArray(children)

  const hasToggle = childrenArray.some((child) => React.isValidElement(child) && child.type === PopupMenuToggle)

  const menu = childrenArray.find((child) => React.isValidElement(child) && child.type === PopupMenuMenu)

  return (
    <HeadlessMenu as="div" className={`juno-popupmenu`}>
      {/* Render default toggle button if no toggle is passed */}
      {!hasToggle && (
        <PopupMenu.Toggle className="juno-popupmenu-toggle-default">
          <Icon icon={icon} />
        </PopupMenu.Toggle>
      )}

      {/* Render toggle children as passsed. TODO: make sure there is only one toggle */}
      {childrenArray.map((child) => {
        if (React.isValidElement(child) && child.type === PopupMenuToggle) {
          return child
        }
      })}

      {menu}
    </HeadlessMenu>
  )
}

// TOGGLE COMPONENT
const PopupMenuToggle: React.FC<PopupMenuToggleProps> = ({ children, className, ...props }) => (
  <HeadlessMenu.Button className={`juno-popupmenu-toggle ${className}`} {...props}>
    {children}
  </HeadlessMenu.Button>
)

// MENU COMPONENT
const PopupMenuMenu: React.FC<React.ComponentProps<typeof HeadlessMenu.Items>> = ({ children, ...props }) => (
  <HeadlessMenu.Items className={`juno-popupmenu-menu`} {...props}>
    {children}
  </HeadlessMenu.Items>
)

// ITEM COMPONENT
const PopupMenuItem: React.FC<PopupMenuItemProps> = ({ children, className, label, ...props }) => (
  <HeadlessMenu.Item as="div" className={`juno-popupmenu-item ${className}`} {...props}>
    {label || children}
  </HeadlessMenu.Item>
)

PopupMenu.Toggle = PopupMenuToggle
PopupMenu.Menu = PopupMenuMenu
PopupMenu.Item = PopupMenuItem

export { PopupMenu }
