/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, ReactNode } from "react"
import { SideNavigationGroupProps } from "../SideNavigationGroup"
import { SideNavigationItemProps } from "../SideNavigationItem/SideNavigationItem.component"

const sideNavListStyles = `
  jn:bg-theme-sidenav-list
  jn:space-y-[0.25rem]
`

export interface SideNavigationListProps {
  /** Accommodates a collection of allowable React elements to be rendered, essential for the navigation list's functionality */
  children:
    | ReactElement<SideNavigationItemProps>
    | ReactElement<SideNavigationItemProps>[]
    | ReactElement<SideNavigationGroupProps>
    | ReactElement<SideNavigationGroupProps>[]
}

/**
 * The `SideNavigationList` component is a fundamental building block within `SideNavigation`, designed to arrange and render navigation items and groups in a structured list format.
 * It ensures visually consistent and space-efficient presentation of navigation links embedded within the sidebar.
 * This component serves as a container for SideNavigationItem and SideNavigationGroup elements, effectively arranging them for navigational usage.
 * @see https://cloudoperators.github.io/juno/?path=/docs/navigation-sidenavigation-sidenavigationlist--docs
 * @see {@link SideNavigationListProps}
 */
export const SideNavigationList = ({ children }: SideNavigationListProps): ReactNode => {
  return <ul className={`list-none p-0 m-0 ${sideNavListStyles}`}>{children}</ul>
}
