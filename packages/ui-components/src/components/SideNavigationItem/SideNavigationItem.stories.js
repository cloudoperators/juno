/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SideNavigationItem } from "./index.js"
import { SideNavigation } from "../SideNavigation/index"
import { knownIcons } from "../Icon/Icon.component.js"

export default {
  title: "Navigation/SideNavigation/SideNavigationItem",
  component: SideNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...knownIcons],
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
  decorators: [(story) => <SideNavigation>{story()}</SideNavigation>],
}

const Template = (args) => <SideNavigationItem {...args} />

export const Default = Template.bind({})
Default.args = {
  label: "Navigation Item",
}

export const Active = Template.bind({})
Active.args = {
  label: "Active Navigation Item",
  active: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: "Disabled Navigation Item",
  disabled: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: "Navigation Item With Icon",
  icon: "warning",
}

export const AsLink = Template.bind({})
AsLink.args = {
  label: "Navigation Item as Anchor",
  href: "#",
}

export const WithChildren = Template.bind({})
WithChildren.args = {
  value: "itm-1",
  children: "Item 1",
}
