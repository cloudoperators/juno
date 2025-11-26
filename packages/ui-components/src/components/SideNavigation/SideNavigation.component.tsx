/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, ReactNode } from "react"
import { Navigation } from "../Navigation/Navigation.component"
import { SideNavigationListProps } from "../SideNavigationList"

const sideNavStyles = `
  jn:px-[1rem]
  jn:py-[1.25rem]
  jn:w-[16rem]
  jn:bg-theme-sidenav
  jn:border-theme-sidenav
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
  /** The children of the Navigation. These should be SideNavigationItem(s) */
  children?: ReactElement<SideNavigationListProps> | ReactElement<SideNavigationListProps>[]
  /** Pass custom classname. */
  className?: string
  /** Whether the navigation is disabled */
  disabled?: boolean
  /** Handler to execute when the active item changes */
  onActiveItemChange?: (_activeItem: ReactNode) => void
}
