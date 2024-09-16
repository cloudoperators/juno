/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TopNavigation } from "../TopNavigation/index"
import { TopNavigationItem, TopNavigationItemProps } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

export default {
  title: "Navigation/TopNavigation/TopNavigationItem",
  component: TopNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...Object.values(KnownIconsEnum)],
      control: { type: "select" },
    },
    onClick: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  parameters: { actions: { argTypesRegex: null } },
}

const Template = (args: TopNavigationItemProps) => (
  <TopNavigation>
    <TopNavigationItem {...args} />
  </TopNavigation>
)

export const Default = {
  render: Template,
  args: {
    label: "Navigation Item",
  },
}

export const Active = {
  render: Template,
  args: {
    label: "Navigation Item",
    active: true,
  },
}

export const Disabled = {
  render: Template,
  args: {
    disabled: true,
    label: "Disabled Item",
  },
}

export const WithIcon = {
  render: Template,
  args: {
    label: "Navigation Item",
    icon: "warning",
  },
}

export const AsLink = {
  render: Template,
  args: {
    label: "Navigation Item",
    href: "#",
  },
}

export const WithChildren = {
  render: Template,
  args: {
    value: "itm-1",
    children: "Item 1",
  },
}
