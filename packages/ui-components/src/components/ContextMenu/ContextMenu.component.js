/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Icon } from "../../deprecated_js/Icon/index.js"
import { Menu } from "@headlessui/react"
import { Float } from "@headlessui-float/react"
import { autoPlacement, offset, shift, size } from "@floating-ui/react-dom"

/*
TODO:

* close on [ESC] (prop?)
* close on click outside (prop?)
* keyboard navigation: arrow up/down moves focus
* for toggle styles (hover, active, etc.) -> expand icon (interactive) component or handle here (aka are these styles generically useful or specific to this component?)
* a11y
* docstrings
* fix stories
* don't ALWAYS render button!?!
*/

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

/** A context menu with a toggle. */

export const ContextMenu = ({
  /*icon,*/
  /*className,*/
  children = null,
  open = false,
  /*...props*/
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (_event) => {
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
      boundary: "viewport",
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

ContextMenu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.any,
  open: PropTypes.bool,
}
