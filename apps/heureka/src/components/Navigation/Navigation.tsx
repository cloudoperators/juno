/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { SERVICES, ISSUES } from "../../constants"

type NavigationItemType = {
  label: string
  value: string
}

type NavigationPropsType = {
  activeItem?: ReactNode
  onChange?: (value: ReactNode) => void
}

const navigationItems: NavigationItemType[] = [
  {
    label: "Services",
    value: SERVICES,
  },
  {
    label: "Issues",
    value: ISSUES,
  },
]

export const Navigation = ({ activeItem, onChange }: NavigationPropsType) => {
  return (
    <TopNavigation activeItem={activeItem} onActiveItemChange={onChange}>
      {navigationItems.map(({ label, value }) => (
        <TopNavigationItem role="link" ariaLabel={value} key={value} label={label} value={value} />
      ))}
    </TopNavigation>
  )
}
