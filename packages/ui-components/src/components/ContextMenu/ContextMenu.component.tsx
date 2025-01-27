/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import { Menu } from "@headlessui/react"
import { Float } from "@headlessui-float/react"
import { autoPlacement, offset, shift, size, Boundary } from "@floating-ui/react-dom"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import { withDeprecationWarning } from "../withDeprecationWarning/index"

const menuStyles = `
  jn-overflow-hidden
  jn-flex
  jn-flex-col
  jn-rounded
  jn-bg-theme-background-lvl-1
`

const toggleStyles = `
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`

const toggleOpenStyle = `
  jn-text-theme-accent
`

export interface ContextMenuProps {
  className?: string
  children?: React.ReactNode
  icon?: KnownIcons
  open?: boolean
}

/** DEPRECATED: Use PopupMenu instead. */
const DeprecatedContextMenu: React.FC<ContextMenuProps> = ({
  /*icon,*/
  /*className,*/
  children,
  open = false,
  /*...props*/
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // eslint-disable-next-line no-unused-vars
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const middleware = [
    offset(4),
    autoPlacement({
      crossAxis: true,
      allowedPlacements: ["top-start", "top-end", "bottom-start", "bottom-end"],
    }),
    size({
      boundary: "viewport" as Boundary,
      apply({ availableWidth, availableHeight, elements }) {
        Object.assign(elements.floating.style, {
          maxWidth: `${availableWidth}px`,
          maxHeight: `${availableHeight}px`,
          overflowY: "auto",
        })
      },
    }),
    shift(),
  ]

  return (
    <Menu>
      <Float middleware={middleware}>
        <Menu.Button
          onClick={handleClick}
          className={`
            juno-contextmenu-toggle 
            ${toggleStyles} 
            ${isOpen ? toggleOpenStyle : ""}
          `}
        >
          <Icon icon="moreVert" />
        </Menu.Button>
        <Menu.Items className={`${menuStyles}`}>{children}</Menu.Items>
      </Float>
    </Menu>
  )
}

DeprecatedContextMenu.displayName = "ContextMenu"

export const ContextMenu = withDeprecationWarning(
  DeprecatedContextMenu,
  "ContextMenu is deprecated and will be removed in future versions. Use PopupMenu instead."
)
