/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SideNavigationItemProps } from "../SideNavigationItem/SideNavigationItem.component"

const sideNavListStyles = `
  jn:bg-theme-sidenav-list
  jn:space-y-[0.25rem]
`

// Do we have to enforce or just allow ReactNode?
export interface SideNavigationListProps {
  children: React.ReactElement<SideNavigationItemProps> | React.ReactElement<SideNavigationItemProps>[]
}

export const SideNavigationList: React.FC<SideNavigationListProps> = ({ children }) => {
  return <ul className={`list-none p-0 m-0 ${sideNavListStyles}`}>{children}</ul>
}
