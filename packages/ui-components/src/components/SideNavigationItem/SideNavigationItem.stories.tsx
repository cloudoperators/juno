/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SideNavigationItem, SideNavigationItemProps } from "./index"
import { SideNavigation } from "../SideNavigation/index"
import { KnownIconsEnum } from "../Icon/Icon.component"

type StoryDefinition = () => React.ReactNode

export default {
  title: "Navigation/SideNavigation/SideNavigationItem",
  component: SideNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...Object.keys(KnownIconsEnum)],
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
  decorators: [(story: StoryDefinition) => <SideNavigation>{story()}</SideNavigation>],
}

const Template = (args: SideNavigationItemProps) => <SideNavigationItem {...args} />

export const Default = {
  render: Template,
  args: {
    label: "Navigation Item",
  },
}

export const Active = {
  render: Template,
  args: {
    label: "Active Navigation Item",
    active: true,
  },
}

export const Disabled = {
  render: Template,
  args: {
    label: "Disabled Navigation Item",
    disabled: true,
  },
}

export const WithIcon = {
  render: Template,
  args: {
    label: "Navigation Item With Icon",
    icon: "warning",
  },
}

export const AsLink = {
  render: Template,
  args: {
    label: "Navigation Item as Anchor",
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
