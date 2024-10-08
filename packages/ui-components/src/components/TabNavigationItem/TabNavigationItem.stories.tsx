/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TabNavigation } from "../TabNavigation/index"
import { TabNavigationItem } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

type StoryDefinition = () => React.ReactNode

export default {
  title: "Navigation/TabNavigation/TabNavigationItem",
  component: TabNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...Object.keys(KnownIconsEnum)],
      control: { type: "select" },
    },
    onClick: {
      control: false,
    },
  },
  decorators: [(story: StoryDefinition) => <TabNavigation>{story()}</TabNavigation>],
}

export const Default = {
  args: {
    label: "Tab 1",
  },
}

export const Active = {
  args: {
    label: "Active TabNavigationItem",
    active: true,
  },
}

export const Disabled = {
  args: {
    label: "Disabled TabNavigationItem",
    disabled: true,
  },
}

export const WithIcon = {
  args: {
    icon: "warning",
    label: "With Icon",
  },
}

export const AsLink = {
  args: {
    label: "Item as Link",
    href: "https://www.sap.com",
  },
}

export const WithChildren = {
  args: {
    value: "itm-1",
    children: "Item 1",
  },
}
