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
  children:
    | ReactElement<SideNavigationItemProps>
    | ReactElement<SideNavigationItemProps>[]
    | ReactElement<SideNavigationGroupProps>
    | ReactElement<SideNavigationGroupProps>[]
}

export const SideNavigationList = ({ children }: SideNavigationListProps): ReactNode => {
  return <ul className={`list-none p-0 m-0 ${sideNavListStyles}`}>{children}</ul>
}
