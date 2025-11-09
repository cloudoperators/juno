/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"

import { Navigation } from "../Navigation/Navigation.component"

const topNavStyles = `
  jn:flex
  jn:bg-theme-background-lvl-1
  jn:gap-0
`

/**
A generic horizontal top level navigation component. To be placed below the application header but above application content.
Place `TopNavigationItem` elements as children.
*/

export const TopNavigation: React.FC<TopNavigationProps> = ({
  activeItem,
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
      className={`juno-topnavigation ${topNavStyles} ${className}`}
      disabled={disabled}
      onActiveItemChange={onActiveItemChange}
      {...props}
    >
      {children}
    </Navigation>
  )
}

export interface TopNavigationProps extends React.HTMLAttributes<HTMLElement> {
  /** The active navigation item by label */
  activeItem?: ReactNode
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel?: string
  /** The children of the Navigation. Typically these should be TopNavigationItem(s) */
  children?: ReactNode
  /** Pass a custom classname. */
  className?: string
  /** Whether the navigation is disabled */
  disabled?: boolean
  /** Handler to execute when the active item changes */
  // eslint-disable-next-line no-unused-vars
  onActiveItemChange?: (activeItem: ReactNode) => void
}
