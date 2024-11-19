/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable react/prop-types */

import React, { createContext, useEffect, useState } from "react"
import { Menu as HeadlessMenu } from "@headlessui/react"
import { Icon, KnownIconsEnum } from "../Icon/Icon.component"
import { PortalProvider } from "../PortalProvider/"
import { Button } from "../Button/"

// ----- TODO -----
// - DONE: enable rendering an open menu when passing open={true} prop
// - toggle should consume toggleMenu handler from context, not pass a prop around
// - add item functionality as per current menu
// - add item styles
// - add default toggle styles
// - add size prop
// - spread arbitrary props on PopupMenu.Toggle, PopupMenu.Menu?
// - update context to store size, toggleMenu handler
// - position the menu
// - allow for passing Toggle and Menu children, too
// - allow passing an array of PopupMenu.Item elements without wrapping PopupMenu.Menu?

// ----- Styles -----

const itemIconStyles = `
  jn-inline-block 
  jn-mr-2
`

// ---- Interfaces -----

interface PopupMenuContextType {
  open?: boolean
  toggleMenu?: () => void
}

export interface PopupMenuProps {
  children?: React.ReactNode
  icon?: keyof typeof KnownIconsEnum
  menu?: React.ReactElement
  // eslint-disable-next-line no-unused-vars
  onOpenChange?: (open: boolean) => void
  open?: boolean
  toggle?: React.ReactElement
}

export interface PopupMenuToggleProps {
  children?: React.ReactNode
  icon?: keyof typeof KnownIconsEnum
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface PopupMenuMenuProps {
  children?: React.ReactNode
}

export interface PopupMenuItemProps {
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  icon?: keyof typeof KnownIconsEnum
  label?: string
}

export interface PopupMenuSectionProps {
  children?: React.ReactNode
  className?: string
  title?: string
}

type ToggleElementProps = {
  onClick?: React.MouseEventHandler<HTMLElement>
  children?: React.ReactNode
}

// ----- Create Context -----
const PopupMenuContext = createContext<PopupMenuContextType | undefined>(undefined)

// ----- Component Definitions -----

// Popup Menu

/** WORK IN PROGRESS: An all-purpose Popup Menu component. */
const PopupMenu: React.FC<PopupMenuProps> & {
  Toggle: React.FC<PopupMenuToggleProps>
  Menu: React.FC<PopupMenuMenuProps>
  Item: React.FC<PopupMenuItemProps>
  Section: React.FC<PopupMenuSectionProps>
} = ({ icon = "moreVert", menu: propMenu, onOpenChange = undefined, open = false, toggle: propToggle }) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const toggleMenu = () => {
    const newOpenState = !isOpen
    setIsOpen(newOpenState)
    onOpenChange && onOpenChange(newOpenState)
  }

  const handleToggleClick = () => {
    const newOpenState = !isOpen
    setIsOpen(newOpenState)
    onOpenChange && onOpenChange(newOpenState)
  }

  // When a togle was passed as a prop, outsource details what to do with it to ToggleWrapper, otherwise render default toggle:
  const toggleToRender = propToggle ? (
    <ToggleWrapper toggle={propToggle} onClick={handleToggleClick} />
  ) : (
    <PopupMenu.Toggle onClick={handleToggleClick}>
      <Icon icon={icon} />
    </PopupMenu.Toggle>
  )

  // Determine which menu to render:
  const menuToRender = propMenu ? (
    propMenu.type === PopupMenu.Menu ? (
      propMenu
    ) : (
      <PopupMenu.Menu>{propMenu}</PopupMenu.Menu>
    )
  ) : null

  return (
    <PopupMenuContext.Provider value={{ open: isOpen, toggleMenu: toggleMenu }}>
      <HeadlessMenu className={`juno-popupmenu`} as="div">
        {toggleToRender}
        <PortalProvider.Portal>
          {isOpen && <HeadlessMenu.Items static>{menuToRender}</HeadlessMenu.Items>}
        </PortalProvider.Portal>
      </HeadlessMenu>
    </PopupMenuContext.Provider>
  )
}
PopupMenu.displayName = "PopupMenu"

// Toggle
PopupMenu.Toggle = React.forwardRef<HTMLButtonElement, PopupMenuToggleProps>(
  ({ children = null, icon = undefined, onClick = undefined }, ref) => (
    <HeadlessMenu.Button ref={ref} onClick={onClick} className={`juno-popupmenu-toggle`}>
      {icon ? <Icon icon={icon} /> : ""}
      {children}
    </HeadlessMenu.Button>
  )
)
PopupMenu.Toggle.displayName = "PopupMenu.Toggle"

// Menu
// This component causes a `Component definition is missing display name  react/display-name` error when declared after component definition (as with all the other subcomponents in this file) -> TODO: Evaluate/discuss whether to update all subcomponents to be declared like Menu
const Menu: React.FC<PopupMenuMenuProps> = ({ children = null }) => (
  <div className="juno-popupmenu-menu">{children}</div>
)

PopupMenu.Menu = Menu
Menu.displayName = "PopupMenu.Menu"

// Item
PopupMenu.Item = ({
  children = null,
  className = "",
  disabled = false,
  icon = undefined,
  label = "",
}: PopupMenuItemProps) => (
  <HeadlessMenu.Item className={`juno-popupmenu-item ${itemIconStyles} ${className}`} as="div" disabled={disabled}>
    {icon && <Icon icon={icon} size="18" className={`juno-popupmenu-item-icon`} />}
    {label || children}
  </HeadlessMenu.Item>
)
PopupMenu.Item.displayName = "PopupMenu.Item"

// Section
PopupMenu.Section = ({ title = "", children = null, className = "" }: PopupMenuSectionProps) => (
  <div className={`juno-pop-menu-section ${className}`}>
    {title ? <div className={`juno-menu-section-title`}>{title}</div> : ""}
    {children}
  </div>
)
PopupMenu.Section.displayName = "PopupMenu.Section"

// Toggle Wrapper: Based on what element was passed as a toggle, return headless ui menu button as a fragment or button, keeping it otherwise intact:
const ToggleWrapper: React.FC<{ toggle: React.ReactElement<ToggleElementProps>; onClick: () => void }> = ({
  toggle,
  onClick,
}) => {
  // Check if the toggle renders a native button element or a PopupMenu.Toggle
  const isButton = toggle.type === "button" || toggle.type === Button || toggle.type === PopupMenu.Toggle

  // Attach onClick handler
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick() // Run custom toggle logic
    if (toggle.props.onClick) {
      //  Run existing toggle's onClick if present
      toggle.props.onClick(event)
    }
  }

  if (isButton) {
    // Use HeadlessMenu.Button as a Fragment if it's a valid button as to not wrap a button inside a button:
    return (
      <HeadlessMenu.Button as={React.Fragment}>
        {React.cloneElement(toggle, { onClick: handleClick })}
      </HeadlessMenu.Button>
    )
  }

  // If the element is not a button, Button component or native PopupMenu.Toggle, wrap the element in a button:
  return (
    <HeadlessMenu.Button as="button" onClick={handleClick} type="button">
      {toggle}
    </HeadlessMenu.Button>
  )
}

export { PopupMenu }

// import React, { createContext, useContext, useEffect, useState } from "react"
// import { Menu as HLMenu } from "@headlessui/react"
// import { PortalProvider } from "../PortalProvider/"
// import { Icon } from "../Icon/"
// import { KnownIconsEnum } from "../Icon/Icon.component"
//
// // ----- CONTEXT -----
// // Define PopupMenu context shape
// interface PopupMenuContextType {
//   isOpen: boolean
//   size: "small" | "normal"
//   toggleOpen: () => void
// }
//
// // Create a PopupMenu context with an undefined value:
// const PopupMenuContext = createContext<PopupMenuContextType | undefined>(undefined)
//
// // ----- POPUP MENU -----
// // Define PopupMenu interface
// interface PopupMenuProps extends React.ComponentPropsWithoutRef<"div"> {
//   ariaLabel?: string
//   children?: React.ReactNode
//   className?: string
//   icon?: string
//   menu?: React.ReactNode
//   open?: boolean
//   size?: "small" | "normal"
// }
//
// // Define PopupMenu component
// /**
//   An all-purpose Popup Menu component.
//  */
// const PopupMenu: React.FC<PopupMenuProps> & {
//   Item: React.FC<PopupMenuItemProps>
//   Menu: React.FC<PopupMenuMenuProps>
//   Section: React.FC<PopupMenuSectionProps>
//   Toggle: React.FC<PopupMenuToggleProps>
// } = ({ children = null, className = "", icon = "moreVert", menu = null, open = false, size = "normal" }) => {
//   const [isOpen, setIsOpen] = useState(open)
//   const [theSize, setTheSize] = useState(size)
//
//   useEffect(() => {
//     setIsOpen(open)
//   }, [open])
//
//   useEffect(() => {
//     setTheSize(size)
//   }, [size])
//
//   const handleToggle = (menuOpen) => {
//     setIsOpen(menuOpen)
//   }
//
//   // Handle toggle and menu props and/or children
//
//   // Handle toggle prop: determine whether a toggle prop was passed, and wrap in PopupMenu.Toggle when necessary:
//   // const toggleProp = React.isValidElement(toggle) ? (
//   //   (toggle as any).type === PopupMenu.Toggle ? (
//   //     toggle
//   //   ) : (
//   //     <PopupMenu.Toggle as={React.Fragment}>{toggle}</PopupMenu.Toggle>
//   //   )
//   // ) : null
//
//   // Handle menu prop: determine whether a menu prop was passed, and wrap in PopupMenu.Menu when necessary:
//   // const menuProp = React.isValidElement(menu) ? (
//   //   (menu as any).type === PopupMenu.Menu ? (
//   //     menu
//   //   ) : (
//   //     <PopupMenu.Menu as="div" {...menu.props}>
//   //       {menu.props.children}
//   //     </PopupMenu.Menu>
//   //   )
//   // ) : null
//
//   // create iterable array of children once:
//   const childArray = React.Children.toArray(children)
//
//   // determine whether a PopupMenu.Toggle child was passed and return it:
//   const toggleChild = childArray.find(
//     (child) => React.isValidElement(child) && (child as any).type === PopupMenu.Toggle
//   )
//   // determine whether a PopupMenu.Menu  child was passed and return it:
//   const menuChild = childArray.find((child) => React.isValidElement(child) && (child as any).type === PopupMenu.Menu)
//
//   return (
//     <PopupMenuContext.Provider value={{ isOpen: isOpen, handleToggle: handleToggle, size: theSize }}>
//       <HLMenu open={isOpen}>
//         {({ open: internalOpen }) => (
//           <>
//             {toggleChild || <PopupMenuDefaultToggle icon={icon} />}{" "}
//             {/* Render slotted toggle from prop, otherwise render toggle passed as child, otherwise use default toggle */}
//             <PortalProvider.Portal>
//               {
//                 // when isOpen is true, render the menu passed as a prop or child. Or nothing. :
//                 isOpen ? (menu ? menu : menuChild ? menuChild : "") : ""
//               }
//             </PortalProvider.Portal>
//           </>
//         )}
//       </HLMenu>
//       <ul>
//         <li>:::Debug:::</li>
//         <li>{`isOpen: ${isOpen}`}</li>
//         <li>{`size: ${size}`}</li>
//       </ul>
//     </PopupMenuContext.Provider>
//   )
// }
//
// // ----- POPUP MENU TOGGLE -----
// interface PopupMenuToggleProps {
//   children?: React.ReactNode
// }
//
// const PopupMenuToggle: React.FC<PopupMenuToggleProps> = ({ children }) => {
//   const context = useContext(PopupMenuContext)
//   if (!context) {
//     throw new Error("PopupMenu.Toggle must be used inside <PopupMenu>.")
//   }
//   const { isOpen, handleToggle } = context
//   return <HLMenu.Toggle onClick={handleToggle(!isOpen)}>{children}</HLMenu.Toggle>
// }
//
// // ----- POPUP MENU DEFAULT TOGGLE -----
// // Define a default overflow-menu toggle element to be used if no custom toggle element is passed:
// interface PopupMenuDefaultToggleProps {
//   icon?: keyof typeof KnownIconsEnum
// }
//
// // Forward any ref to circumvent any errors coming from headless using refs internally:
// const PopupMenuDefaultToggle: React.FC<PopupMenuDefaultToggleProps> = ({ icon = "moreVert" }) => {
//   const context = useContext(PopupMenuContext)
//   if (!context) {
//     throw new Error("PopupMenu.Toggle must be used inside <PopupMenu>.")
//   }
//   const { isOpen, handleToggle } = context
//   return (
//     <HLMenu.Button onClick={handleToggle(!isOpen)}>
//       <Icon icon={icon} />
//     </HLMenu.Button>
//   )
// }
//
// // ----- POPUP MENU MENU (= ITEMS) -----
// interface PopupMenuMenuProps extends React.ComponentPropsWithoutRef<"div"> {
//   children?: React.ReactNode
// }
//
// const PopupMenuMenu: React.FC<PopupMenuMenuProps> = ({ children }) => {
//   return <HLMenu.Items>{children}</HLMenu.Items>
// }
//
// // ----- POP MENU ITEM -----
// interface PopupMenuItemProps {
//   className?: string
//   children?: React.ReactNode
//   disabled?: boolean
//   icon?: keyof typeof KnownIconsEnum
//   label?: string
//   href?: string
//   // eslint-disable-next-line no-unused-vars
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void
// }
//
// const PopupMenuItem: React.FC<PopupMenuItemProps> = ({
//   className = "",
//   children = null,
//   disabled = false,
//   icon = null,
//   label = "",
//   href = "",
//   onClick = undefined,
// }) => {
//   const context = useContext(PopupMenuContext)
//   if (!context) {
//     throw new Error("PopupMenu.Item must be used inside <PopupMenu>.")
//   }
//   const { toggleMenu, size } = context
//   const handleItemClick = (event: MouseEvent<HTMLButtonElement>) => {
//     onClick && onClick(event)
//     toggleMenu()
//   }
//   return (
//     <HLMenu.Item
//       as="div"
//       className={`juno-popup-menu-item juno-popup-menu-item-${size}`}
//       disabled={disabled}
//       onClick={handleItemClick}
//     >
//       {label || children}
//     </HLMenu.Item>
//   )
// }
//
// // ----- POPUP MENU SECTION -----
// interface PopupMenuSectionProps {
//   /** The children to render in the MenuSection */
//   children?: React.ReactNode
//   /** Pass a custom className */
//   className?: string
//   /** Pass an optional section title */
//   title?: string
// }
//
// const PopupMenuSection: React.FC<PopupMenuSectionProps> = ({ children = null, className = "", title = "" }) => {
//   return (
//     <div className={`juno-pop-menu-section ${className}`}>
//       {title ? <div className={`juno-menu-section-title`}>{title}</div> : ""}
//       {children}
//     </div>
//   )
// }
//
// PopupMenu.Toggle = PopupMenuToggle
// PopupMenu.Menu = PopupMenuMenu
// PopupMenu.Item = PopupMenuItem
// PopupMenu.Section = PopupMenuSection
//
// export { PopupMenu }
