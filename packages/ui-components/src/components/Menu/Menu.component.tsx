/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext } from "react"
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

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The children to render in the MenuSection */
  children?: React.ReactNode
  /** Whether the Menu will be in normal or small variant */
  variant?: "small" | "normal"
  /** Pass a custom className to the menu */
  className?: string
}

interface MenuContextType {
  variant: "small" | "normal"
}
export const MenuContext = createContext<MenuContextType | undefined>(undefined)

/** A generic menu component */
export const Menu: React.FC<MenuProps> = ({ children = null, variant = "normal", className = "", ...props }) => {
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
					${variant === "small" ? smallStyles : normalStyles} 
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
