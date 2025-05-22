/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react"
import { Menu as HeadlessMenu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { useFloating, offset, flip, shift, autoUpdate, Placement } from "@floating-ui/react"
import { Icon, KnownIcons } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/"

// ----- Styles -----

const defaultToggleStyles = `
  jn:hover:text-theme-accent
  jn:active:text-theme-accent
`

const disabledToggleStyles = `
  jn:cursor-not-allowed
  jn:opacity-50
`

const menuStyles = `
  jn:overflow-hidden
  jn:flex
  jn:flex-col
  jn:w-max
  jn:rounded
  jn:bg-theme-background-lvl-1
`

const itemStyles = `
  jn:text-base
  jn:text-theme-default
  jn:flex
  jn:w-full
  jn:items-center
  jn:whitespace-nowrap
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`

const normalItemStyles = `
  jn:text-base
  jn:pt-[0.6875rem]
  jn:pb-[0.5rem]
  jn:px-[0.875rem]
`

const smallItemStyles = `
  jn:text-sm
  jn:p-2
`

const actionableItemStyles = `
  jn:hover:bg-theme-background-lvl-3
  jn:cursor-pointer
`

const disabledItemStyles = `
  jn:cursor-not-allowed
  jn:opacity-50
  jn:bg-theme-background-lvl-1
`

const itemIconStyles = `
  jn:inline-block
  jn:mr-2
`

const sectionStyles = `
  jn:border-b
  jn:border-theme-background-lvl-3
  jn:last:border-b-0
`

const sectionTitleStyles = `
  jn:text-theme-light
  jn:text-xs
  jn:p-2
  jn:cursor-default
`

const sectionSeparatorStyles = `
  jn-h-
  jn:bg-theme-background-lvl-3
`

// Make sure the floating reference wrapper element around the toggle fits snug around the toggle, so the positioning of the menu is correct relative to the visible toggle:
const floatingReferenceWrapperStyles = `
  jn:inline-flex
`

// ----- Interfaces -----

export interface PopupMenuContextType {
  close: () => void
  isOpen: boolean
  menuSize: "normal" | "small"
}

export interface PopupMenuProps extends React.ComponentProps<typeof HeadlessMenu> {
  /** The children to render. If no PopupMenu.Toggle child is passed, PopupMenu will render a default toggle. Pass a PopupMenu.Menu child in order to have a working component. */
  children?: ReactNode
  /** Add a custom className to the wrapping element. NOTE: The Menu will be rendered into a Portal outside the wrapping parent element, so the Menu and its children will be outside the scope of the parent CSS selector.*/
  className?: string
  /** Whether the PopupMenu is disabled. */
  disabled?: boolean
  /** The icon to render when using the default toggle. Will be ignored if a PopupMenu.Toggle child is passed. */
  icon?: KnownIcons
  /** The size of the menu and its items. */
  menuSize?: "normal" | "small"
  /** Handler to run when the Menu closes. */
  onClose?: () => void
  /** Handler to run when the Menu opens. */
  onOpen?: () => void
}

export interface PopupMenuToggleProps extends React.ComponentProps<typeof HeadlessMenu.Button> {
  className?: string
}

//Extract types directly from React.ElementType as Headless Menu Items is a dynamically typed component that cannot be extended with React.ComponentPropsWithRef (such as `href` or `target` – these will be accepted when passing `as` as `a` in order to render an anchor, but not when rendering a div.):
type HeadlessMenuItemsProps = React.ComponentPropsWithRef<React.ElementType>
// Extend the extracted props instead:
export interface PopupMenuOptionsProps extends HeadlessMenuItemsProps {
  as?: React.ElementType // Allow customizing the element type just as headless ui does
  className?: string
  children?: ReactNode
  key?: React.Key
}

export interface PopupMenuItemProps extends React.ComponentProps<typeof HeadlessMenu.Item> {
  as?: React.ElementType // Allow customising the element type to allow for rendering items as anchor elements, just as headless ui does
  className?: string
  disabled?: boolean
  href?: string // accept a href when rendering a link, whether or not to pass it to HUI item will behandled in the component
  icon?: KnownIcons
  label?: string
  rel?: string // accept rel for anchors, handle in component
  target?: string // accepot target for links, handle in component
}

export interface PopupMenuSectionProps {
  children?: ReactNode
  className?: string
}

export interface PopupMenuSectionHeadingProps {
  children?: ReactNode
  className?: string
  label?: string
}

export interface PopupMenuSectionSeparatorProps {
  className?: string
}

// ----- PopupMenu context and hook -----

const PopupMenuContext = createContext<PopupMenuContextType | null>(null)

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

/** A Popup Menu component that wraps Headless UI Menu. The Menu will be rendered into a Juno Portal, so using Juno's PortalProvider (which is already included when using Juno's AppShell) is mandatory. */
const PopupMenu: React.FC<PopupMenuProps> = ({
  children,
  className = "",
  disabled = false,
  icon = "moreVert",
  menuSize = "normal",
  onClose,
  onOpen,
  ...props
}: PopupMenuProps) => {
  // Create a state to track headless-ui's internal open state (Note that we can track the internal state and can let headless ui update our tracking state, but we can not set it, hence there is no `open` prop on our component):
  const [isOpen, setIsOpen] = useState(false)
  const previousOpenRef = useRef(isOpen) // Track the previous value of isOpen for efficiency

  // Setup floating-ui
  const { refs, floatingStyles, update } = useFloating({
    placement: "bottom-start" as Placement,
    middleware: [offset(4), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

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
  const menu = childrenArray.find((child) => React.isValidElement(child) && child.type === PopupMenuOptions)

  return (
    <HeadlessMenu as="div" className={`juno-popupmenu ${className}`} {...props}>
      {/* Update our open state when the open render prop from headless ui menu changes, so we can run the handlers when our tracking state changes: */}
      {({ open, close }) => {
        // Set our tracking open state outside of rendering cycle. Trying to set the state during render will cause an error:
        useEffect(() => {
          if (open !== isOpen) {
            setIsOpen(open)
            // Trigger update when open state changes to ensure proper positioning
            if (open) {
              update()
            }
          }
        }, [open])

        return (
          // * Expose our context:
          <PopupMenuContext.Provider value={{ isOpen, close, menuSize }}>
            {/* Reference element that floating-ui will use for positioning */}
            <div
              ref={refs.setReference}
              className={`juno-popupmenu-float-reference-wrapper ${floatingReferenceWrapperStyles}`}
            >
              {/* Render default toggle button if no toggle is passed, but still render an icon if passed: */}
              {!hasToggle && (
                <PopupMenuToggle
                  className={`juno-popupmenu-toggle juno-popupmenu-toggle-default ${disabled ? disabledToggleStyles : defaultToggleStyles}`}
                  disabled={disabled}
                >
                  <Icon icon={icon} />
                </PopupMenuToggle>
              )}

              {/* Render toggle children as passed: */}
              {childrenArray.map((child, index) => {
                if (React.isValidElement(child) && child.type === PopupMenuToggle) {
                  return React.cloneElement(child, { key: index })
                }
                return null
              })}
            </div>

            {/* Render the menu in our portal: */}
            {isOpen && (
              <PortalProvider.Portal>
                <div ref={refs.setFloating} style={floatingStyles} className="juno-popupmenu-float-content-wrapper">
                  {menu}
                </div>
              </PortalProvider.Portal>
            )}
          </PopupMenuContext.Provider>
        )
      }}
    </HeadlessMenu>
  )
}

// TOGGLE COMPONENT
export const PopupMenuToggle: React.FC<PopupMenuToggleProps> = ({
  as = "button",
  disabled = false,
  children,
  className = "",
  ...props
}) => (
  <MenuButton
    as={as}
    className={`juno-popupmenu-toggle ${disabled && disabledToggleStyles} ${className}`}
    disabled={disabled}
    {...props}
  >
    {children}
  </MenuButton>
)

// MENU COMPONENT
export const PopupMenuOptions: React.FC<PopupMenuOptionsProps> = ({ children, className = "", ...props }) => {
  // Consume context to get the size to render and the close function:
  const { menuSize } = usePopupMenuContext()
  return (
    <MenuItems
      className={`juno-popupmenu-menu juno-popupmenu-menu-size-${menuSize} ${menuStyles} ${className}`}
      {...props}
    >
      {children}
    </MenuItems>
  )
}

// ITEM COMPONENT
export const PopupMenuItem: React.FC<PopupMenuItemProps> = ({
  as = "div",
  children,
  className = "",
  disabled = false,
  href,
  icon,
  label = "",
  rel,
  target,
  ...props
}) => {
  // Consume context to get the size to render:
  const { menuSize } = usePopupMenuContext()
  // Determine the appropriate set of styles per size:
  const itemSizeStyles = menuSize === "small" ? smallItemStyles : normalItemStyles
  // Determine the compontn to render as:
  return (
    <MenuItem
      as={as}
      disabled={disabled}
      className={`juno-popupmenu-item ${itemStyles} ${disabled ? disabledItemStyles : actionableItemStyles} ${itemSizeStyles} ${className}`}
      {...(as === "a" ? { href, rel, target } : {})} // Conditionally spread anchor-specific props only when renering an anchor
      {...props}
    >
      {/* 
      To render the item content, provide an itemBag context to the headless ui API. This includes properties like active, disabled, close. 
      Then, if label is a string, render it. Otherwise, if children is a function, invoke it with itemBag; otherwise render children straightaway:
    */}
      {(itemBag) => (
        <>
          {icon && <Icon icon={icon} size="18" className={`juno-popupmenu-item-icon ${itemIconStyles}`} />}
          {/* Make sure to test for truthy label and then check for string type, otherwise typeof label === string would alway return true due to the default empty string still being of type string: */}
          {label && typeof label === "string"
            ? label
            : typeof children === "function"
              ? children(itemBag) // Pass the itemBag to the render prop function
              : children}
        </>
      )}
    </MenuItem>
  )
}

// POPUPMENU SECTION COMPONENT
export const PopupMenuSection: React.FC<PopupMenuSectionProps> = ({ children, className = "", ...props }) => {
  return (
    <section className={`juno-popupmenu-section ${sectionStyles} ${className}`} {...props}>
      {children}
    </section>
  )
}

// POPUPMENU SECTION TITLE COMPONENT
export const PopupMenuSectionHeading: React.FC<PopupMenuSectionHeadingProps> = ({
  children,
  label = "",
  className = "",
  ...props
}) => {
  return (
    <header className={`juno-popupmenu-section-title ${sectionTitleStyles} ${className}`} {...props}>
      <h1>{label && label.length ? label : children}</h1>
    </header>
  )
}

// POPUPMENU SECTION DIVIDER COMPONENT
export const PopupMenuSectionSeparator: React.FC<PopupMenuSectionSeparatorProps> = ({ className = "", ...props }) => {
  return <div className={`juno-popupmenu-section-divider ${sectionSeparatorStyles} ${className}`} {...props}></div>
}

export { PopupMenu }
