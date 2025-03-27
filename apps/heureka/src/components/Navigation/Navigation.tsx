/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { useDispatch } from "../../store/StoreProvider"
import { ActionType, UserView } from "../../store/StoreProvider/types"

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
    value: UserView.Services,
  },
]

export const Navigation = ({ activeItem }: NavigationPropsType) => {
  const dispatch = useDispatch()

  const handleActiveItemChange = (viewId: ReactNode) =>
    dispatch({
      type: ActionType.SelectView,
      payload: {
        viewId: viewId as UserView, // we're sure that view is a UserView
      },
    })

  return (
    <TopNavigation activeItem={activeItem} onActiveItemChange={handleActiveItemChange}>
      {navigationItems.map(({ label, value }) => (
        <TopNavigationItem role="link" ariaLabel={value} key={value} label={label} value={value} />
      ))}
    </TopNavigation>
  )
}
