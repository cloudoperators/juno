/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext } from "react"
import PropTypes from "prop-types"
import { Menu as HLMenu } from "@headlessui/react"

const baseStyles = `
	jn-overflow-hidden
	jn-flex
	jn-flex-col
	jn-rounded
	jn-bg-theme-background-lvl-1
`

const smallStyles = `
	jn-text-sm
`

const normalStyles = `
	jn-text-base
`

const variantStyles = (variant) => {
  switch (variant) {
    case "small":
      return smallStyles
    default:
      return normalStyles
  }
}

export const MenuContext = createContext()

/** A generic menu component */
export const Menu = ({ children = null, variant = "normal", className = "", ...props }) => {
  return (
    <MenuContext.Provider
      value={{
        variant: variant,
      }}
    >
      <HLMenu>
        <div
          className={`
					juno-menu 
					juno-menu-${variant} 
					${baseStyles} 
					${variantStyles(variant)} 
					${className}
				`}
          role="menu"
          {...props}
        >
          {children}
        </div>
      </HLMenu>
    </MenuContext.Provider>
  )
}

Menu.propTypes = {
  /* The children of the Menu,, typically MenuItem */
  children: PropTypes.node,
  /** Whether the Menu will be in normal or small variant */
  variant: PropTypes.oneOf(["small", "normal"]),
  /* Add a className */
  className: PropTypes.string,
}
