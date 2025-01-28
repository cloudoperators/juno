/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"
import { IMAGES, SERVICES, VULNERABILITIES } from "../../constants"

type NavigationItemType = {
  label: string
  //TODO: use KnownIcons type from ui-components package when available
  icon: "dns" | "autoAwesomeMotion"
  value: string
}

type NavigationPropsType = {
  activeItem?: ItemKeyType
  onChange?: (value: ItemKeyType) => void
}

const navigationItems: NavigationItemType[] = [
  {
    label: "Services",
    value: SERVICES,
    icon: "dns",
  },
  {
    label: "Vulnerabilities",
    value: VULNERABILITIES,
    icon: "autoAwesomeMotion",
  },
  {
    label: "Images",
    value: IMAGES,
    icon: "autoAwesomeMotion",
  },
]

const Navigation = ({ activeItem, onChange }: NavigationPropsType) => {
  return (
    <TopNavigation
      /**
       * There is a type mismatch in ToggleNavigation component,
       * where "onActiveItemChange" emits data of type "ItemKeyType"
       * whereas "activeItem" expects the same data to be of type "string"
       * hence we need to cast it to the "string" but in a safer way
       */
      activeItem={typeof activeItem === "string" ? (activeItem as string) : undefined}
      onActiveItemChange={onChange}
    >
      {navigationItems.map(({ label, icon, value }) => (
        <TopNavigationItem role="link" ariaLabel={value} key={value} label={label} value={value} icon={icon} />
      ))}
    </TopNavigation>
  )
}

export default Navigation
