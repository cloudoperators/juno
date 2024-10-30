/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, MouseEvent, FC } from "react"
import { Menu as HLMenu } from "@headlessui/react"
import { MenuContext } from "../Menu/Menu.component"
import { Icon, KnownIconsEnum } from "../Icon/Icon.component"

const itemStyles = `
   jn-text-theme-default
   jn-flex
   jn-items-center
   jn-w-full
   cursor-pointer
   bg-clip-padding
   jn-truncate
   jn-text-left
   jn-bg-theme-background-lvl-1
   disabled:jn-cursor-not-allowed
   data-[headlessui-state="disabled"]:jn-cursor-not-allowed
 `

const smallStyles = `
   jn-text-sm
   jn-p-2
 `

const normalStyles = `
   jn-text-base
   jn-pt-[0.6875rem]
   jn-pb-[0.5rem]
   jn-px-[0.875rem]
 `

const actionableItemStyles = `
   hover:jn-bg-theme-background-lvl-3
   data-[headlessui-state="disabled"]:jn-bg-theme-background-lvl-3
 `

export interface MenuItemProps {
  /** Children of the menu item */
  children?: React.ReactNode
  /** Pass a custom className to the menu item */
  className?: string
  /** Whether the menu item is disabled */
  disabled?: boolean
  /** Pass the name of an icon the button should show. Can be any icon included with Juno. */
  icon?: keyof typeof KnownIconsEnum
  /** The label of the menu item. Will take precedence over children passed to the component. */
  label?: string
  /** Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`. */
  href?: string
  /** Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`. */
  onClick?: (_event: MouseEvent<HTMLButtonElement>) => void
}

interface MenuContextType {
  variant: "small" | "normal"
}

/** 
 A menu item to be used inside Menu.
 Can render `<a>`, `<button>`, or `<div>` based on props.
 */
export const MenuItem: FC<MenuItemProps> = ({
  children = null,
  className = "",
  disabled = false,
  href = "",
  icon = null,
  label = "",
  onClick = undefined,
  ...props
}) => {
  const menuContext = useContext(MenuContext) as MenuContextType | null
  const variant = menuContext?.variant ?? "normal"

  // Determine which element to render:
  const Element = href ? "a" : onClick ? "button" : "div"

  const handleClick = (_event: MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(_event)
  }

  return (
    <HLMenu.Item
      as={Element}
      // conditionally pass a href attribute only if href was supplied to prevent errors from headless-ui internal checks:
      {...(href && Element === "a" && !disabled && { href: href })}
      onClick={onClick && Element === "button" && !disabled ? handleClick : undefined}
      disabled={disabled}
      className={`
         juno-menu-item
         juno-menu-item-${Element}
         ${itemStyles} 
         ${children ? "" : actionableItemStyles}
         ${variant === "small" ? smallStyles : normalStyles}
         ${disabled ? "jn-cursor-not-allowed" : ""}
         ${className}
       `}
      {...props}
    >
      <span className={`${disabled ? "jn-opacity-50" : ""}`}>
        {icon && <Icon icon={icon} size="18" className="jn-inline-block jn-mr-2" />}
        {children || label}
      </span>
    </HLMenu.Item>
  )
}
