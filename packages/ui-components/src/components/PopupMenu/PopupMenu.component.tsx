/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable react/prop-types */

import React, { createContext, useContext, useEffect, useRef, useState } from "react"
import { Menu as HeadlessMenu } from "@headlessui/react"
import { Icon, KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/"

// ----- Styles -----

const defaultToggleStyles = `
  hover:jn-text-theme-accent
  active:jn-text-theme-accent
`

const disabledToggleStyles = `
  jn-cursor-not-allowed
  jn-opacity-50
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
  jn-text-theme-default
  jn-flex
  jn-items-center
  jn-w-full
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`

const normalItemStyles = `
  jn-text-base
  jn-pt-[0.6875rem]
  jn-pb-[0.5rem]
  jn-px-[0.875rem]
`

const smallItemStyles = `
  jn-text-sm
  jn-p-2
`

const actionableItemStyles = `
  hover:jn-bg-theme-background-lvl-3
  jn-cursor-pointer
`

const disabledItemStyles = `
  jn-cursor-not-allowed
  jn-opacity-50
  jn-bg-theme-background-lvl-1
`

const itemIconStyles = `
  jn-inline-block
  jn-mr-2
`

const sectionStyles = `
  jn-border-b
  jn-border-theme-background-lvl-3
  last:jn-border-b-0
`

const sectionTitleStyles = `
  jn-text-theme-light
  jn-text-xs
  jn-p-2
  jn-cursor-default
`

// ----- Interfaces -----

// Type the PopupMenu context
export interface PopupMenuContextType {
  close: () => void
  isOpen: boolean
  menuSize: "normal" | "small"
}

export interface PopupMenuProps extends React.ComponentProps<typeof HeadlessMenu> {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: keyof typeof KnownIconsEnum
  menuSize?: "normal" | "small"
  onClose?: () => void
  onOpen?: () => void
}

export interface PopupMenuToggleProps extends React.ComponentProps<typeof HeadlessMenu.Button> {
  className?: string
}

// Extract props directly from React.ElementType as it is a dynamically typed component that cannot be extended with React.ComponentPropsWithRef:
type HeadlessMenuItemsProps = React.ComponentPropsWithRef<React.ElementType>
// Extend the extracted props instead:
export interface PopupMenuMenuProps extends HeadlessMenuItemsProps {
  className?: string
  children?: React.ReactNode
  key?: React.Key
}

export interface PopupMenuItemProps extends React.ComponentProps<typeof HeadlessMenu.Item> {
  className?: string
  disabled?: boolean
  icon?: keyof typeof KnownIconsEnum
  label?: string
}

// A Menu Section does not exist in headless ui menu, thus no need to extend an existing interface:
export interface PopupMenuSectionProps {
  children?: React.ReactNode
  className?: string
  title?: string
}

// ----- Define PopupMenu context and hook -----

// Context:
const PopupMenuContext = createContext<PopupMenuContextType | null>(null)

// Hook to use the context:
export const usePopupMenuContext = () => {
  const context = useContext(PopupMenuContext)
  if (!context) {
    throw new Error(
      "The usePopupMenuContext hook must be used inside within a PopupMenu that provides the PopupMenuContext."
    )
  }
  return context
}

// Export the context for advanced use cases:
export { PopupMenuContext }

// ----- Component Definitions -----

// POPUP MENU

// TODO:
// - add classname prop to render, render to parent div (document that the menu and its contents will be rendered into a portal, and therefore not be stylable via the parent element)
// - extend all headless ui menu element props?
// - add tests
// - position the menu

/** A Popup Menu component that wraps Headless UI Menu */
const PopupMenu: React.FC<PopupMenuProps> & {
  Toggle: React.FC<PopupMenuToggleProps>
  Menu: typeof PopupMenuMenu
  Item: React.FC<PopupMenuItemProps>
  Section: React.FC<PopupMenuSectionProps>
} = ({
  children = null,
  className = "",
  disabled = false,
  icon = "moreVert",
  menuSize = "normal",
  onClose = undefined,
  onOpen = undefined,
  ...props
}) => {
  // Create a state to track headless-ui's internal open state:
  const [isOpen, setIsOpen] = useState(false)
  const previousOpenRef = useRef(isOpen) // Track the previous value of isOpen for efficiency

  // Run handlers when our tracking state changes based on changes of the internal headless state, or when the handlers themselves change:
  useEffect(() => {
    if (isOpen !== previousOpenRef.current) {
      if (isOpen) {
        onOpen?.()
      } else {
        onClose?.()
      }
    }
    previousOpenRef.current = isOpen // Update the previous state value
  }, [isOpen, onOpen, onClose])

  // Ensure we always have an array of children, even if no or only a single child were passed:
  const childrenArray = React.Children.toArray(children)

  // Test whether a PopupMenu.Toggle child was passed:
  const hasToggle = childrenArray.some((child) => React.isValidElement(child) && child.type === PopupMenuToggle)

  // Test whether a PopupMenu.Menu child was passed:
  const menu = childrenArray.find((child) => React.isValidElement(child) && child.type === PopupMenuMenu)

  return (
    <HeadlessMenu as="div" className={`juno-popupmenu ${className}`} {...props}>
      {/* Update our open state when the open render prop from headless ui menu changes, so we can run the handlers when our tracking state changes: */}
      {({ open, close }) => {
        // Set the open state outside of render
        useEffect(() => {
          if (open !== isOpen) {
            setIsOpen(open)
          }
        }, [open])

        return (
          <PopupMenuContext.Provider value={{ isOpen, close, menuSize }}>
            {/* Render default toggle button if no toggle is passed, but still render an icon if passed: */}
            {!hasToggle && (
              <PopupMenu.Toggle
                className={`juno-popupmenu-toggle juno-popupmenu-toggle-default ${disabled ? disabledToggleStyles : defaultToggleStyles}`}
                disabled={disabled}
              >
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
          </PopupMenuContext.Provider>
        )
      }}
    </HeadlessMenu>
  )
}

// TOGGLE COMPONENT
const PopupMenuToggle: React.FC<PopupMenuToggleProps> = ({
  as = "button",
  disabled = false,
  children = null,
  className = "",
  ...props
}) => (
  <HeadlessMenu.Button
    as={as}
    className={`juno-popupmenu-toggle ${disabled && disabledToggleStyles} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </HeadlessMenu.Button>
)

// MENU COMPONENT
const PopupMenuMenu: React.FC<PopupMenuMenuProps> = ({ children = null, ...props }) => {
  return (
    <HeadlessMenu.Items className={`juno-popupmenu-menu ${menuStyles}`} {...props}>
      {children}
    </HeadlessMenu.Items>
  )
}

// ITEM COMPONENT
const PopupMenuItem: React.FC<PopupMenuItemProps> = ({
  children = null,
  className = "",
  disabled = false,
  icon = null,
  label = "",
  ...props
}) => {
  // Consume context to get the size to render and the close function:
  const { menuSize } = usePopupMenuContext()
  // Determine the appropriate set of styles per size:
  const itemSizeStyles = menuSize === "small" ? smallItemStyles : normalItemStyles
  return (
    <HeadlessMenu.Item
      as="div"
      disabled={disabled}
      className={`juno-popupmenu-item ${itemStyles} ${disabled ? disabledItemStyles : actionableItemStyles} ${itemSizeStyles} ${className}`}
      {...props}
    >
      {/* 
      To render the item content, provide an itemBag context to the headless ui API. This includes properties like active, disabled, close. 
      Then, if label is a string, render it. Otherwise, if children is a function, invoke it with itemBag; otherwise render children straightaway:
    */}
      {(itemBag) => (
        <span>
          {icon && <Icon icon={icon} size="18" className={`juno-popupmenu-item-icon ${itemIconStyles}`} />}
          {typeof label === "string"
            ? label
            : typeof children === "function"
              ? children(itemBag) // Pass the itemBag to the render prop function
              : children}
        </span>
      )}
    </HeadlessMenu.Item>
  )
}

// POPUPMENU SECTION COMPONENT
const PopupMenuSection: React.FC<PopupMenuSectionProps> = ({ children = null, className = "", title = "" }) => {
  return (
    <div className={`juno-pop-menu-section ${sectionStyles} ${className}`}>
      {title ? <div className={`juno-menu-section-title ${sectionTitleStyles}`}>{title}</div> : ""}
      {children}
    </div>
  )
}

PopupMenu.Toggle = PopupMenuToggle
PopupMenu.Menu = PopupMenuMenu
PopupMenu.Item = PopupMenuItem
PopupMenu.Section = PopupMenuSection

export { PopupMenu }
