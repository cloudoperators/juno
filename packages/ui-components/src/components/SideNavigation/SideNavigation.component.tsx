/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactElement, ReactNode } from "react"
import { Navigation } from "../Navigation/Navigation.component"
import { SideNavigationListProps } from "../SideNavigationList"

const sideNavStyles = `
  jn:px-[1.25rem]
  jn:py-[1rem]
  jn:w-[16rem]
  jn:bg-theme-sidenav
  jn:border-r
  jn:border-theme-sidenav
`

/**
 * A generic vertical side navigation component.
 * Place SideNavigationItem components as children.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigation--docs
 * @see {@link SideNavigationProps}
 */

export const SideNavigation = ({ ariaLabel, children, className = "", ...props }: SideNavigationProps): ReactNode => {
  return (
    <Navigation ariaLabel={ariaLabel} className={`juno-sidenavigation ${sideNavStyles} ${className}`} {...props}>
      {children}
    </Navigation>
  )
}

export interface SideNavigationProps extends HTMLAttributes<HTMLElement> {
  /** The aria-label of the navigation. Specify when there are more than one elements with an implicit or explicit `role="navigation"` on a page/view. */
  ariaLabel?: string
  /** The children of the Navigation. These should be SideNavigationItem(s) */
  children?: ReactElement<SideNavigationListProps> | ReactElement<SideNavigationListProps>[]
  /** Pass custom classname. */
  className?: string
}
