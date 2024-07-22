/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Icon } from "../Icon/index.js"
import { Menu } from "@headlessui/react"
import { MenuContext } from "../Menu/Menu.component.js"
import { knownIcons } from "../Icon/Icon.component.js"

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

/** 
A menu item to be used inside Menu.
Can render `<a>`, `<button>`, or generic elements to hold other interactive elements.
*/
export const MenuItem = ({
  label = "",
  icon = null,
  disabled = false,
  children = null,
  onClick,
  href,
  className = "",
}) => {
  // commented out because it is not used (lint)
  // const icn = icon ? (
  //   <Icon icon={icon} size="18" className={`${iconStyles}`} />
  // ) : (
  //   ""
  // )

  const handleClick = (event) => {
    onClick && onClick(event)
  }

  const menuContext = useContext(MenuContext)
  const { variant: variant } = menuContext || {}

  return (
    <Menu.Item
      disabled={disabled}
      as={href ? "a" : children ? "div" : "button"}
      href={disabled ? undefined : href}
      onClick={handleClick}
      className={`
						juno-menu-item 
						${href ? "juno-menu-item-anchor" : "juno-menu-item-button"} 
						${itemStyles} 
						${children ? "" : actionableItemStyles}
						${variant === "small" ? smallStyles : normalStyles}
						${disabled && href ? "jn-cursor-not-allowed" : ""}
						${className}
					`}
    >
      <span className={`${disabled ? "jn-opacity-50" : ""}`}>
        {icon ? (
          <Icon icon={icon} size="18" className="jn-inline-block jn-mr-2" />
        ) : (
          ""
        )}
        {children || label}
      </span>
    </Menu.Item>
  )
}

MenuItem.propTypes = {
  /** The label of the menu item. Will take precedence over children passed to the component. */
  label: PropTypes.string,
  disabled: PropTypes.bool,
  /** Pass the name of an icon the button should show. Can be any icon included with Juno. */
  icon: PropTypes.oneOf(knownIcons),
  /** Add a className to the menu item */
  className: PropTypes.string,
  /** Children of the menu item */
  children: PropTypes.node,
  /** Pass an href to the menu item. Will result in the menu item being rendered as an `<a>`. Will take precedence over an onClick prop being passed to the component */
  href: PropTypes.string,
  /** Pass an onClick handler to the menu item. Will result in the menu item being rendered as a `<button>`. */
  onClick: PropTypes.func,
}
