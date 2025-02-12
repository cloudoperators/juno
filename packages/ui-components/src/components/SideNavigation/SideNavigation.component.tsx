/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

import { Navigation } from "../Navigation/Navigation.component"

const sideNavStyles = `
  jn-min-w-[7.5rem]
  jn-max-w-[20rem]
`

/**
A generic vertical side navigation component.
Place SideNavigationItem components as children.
*/

export const SideNavigation: React.FC<SideNavigationProps> = ({
  activeItem = "",
  ariaLabel,
  children,
  className = "",
  disabled = false,
  onActiveItemChange,
  ...props
}) => {
  return (
    <Navigation
      activeItem={activeItem}
      ariaLabel={ariaLabel}
      className={`juno-sidenavigation ${sideNavStyles} ${className}`}
      disabled={disabled}
      onActiveItemChange={onActiveItemChange}
      {...props}
    >
      {children}
    </Navigation>
  )
}

export interface SideNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** The active navigation item by label */
  activeItem?: ReactNode
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel?: string
  /** The children of the Navigation. Typically these should be SideNavigationItem(s) */
  children?: ReactNode
  /** Pass custom classname. */
  className?: string
  /** Whether the navigation is disabled */
  disabled?: boolean
  /** Handler to execute when the active item changes */
  // eslint-disable-next-line no-unused-vars
  onActiveItemChange?: (activeItem: ReactNode) => void
}
