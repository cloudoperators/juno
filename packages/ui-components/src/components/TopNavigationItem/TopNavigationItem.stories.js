/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TopNavigation } from "../TopNavigation/"
import { TopNavigationItem } from "./index.js"
import { knownIcons } from "../../deprecated_js/Icon/Icon.component.js"

export default {
  title: "Navigation/TopNavigation/TopNavigationItem",
  component: TopNavigationItem,
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
}

const Template = (args) => (
  <TopNavigation>
    <TopNavigationItem {...args} />
  </TopNavigation>
)

export const Default = Template.bind({})
Default.args = {
  label: "Navigation Item",
}

export const Active = Template.bind({})
Active.args = {
  label: "Navigation Item",
  active: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  label: "Disabled Item",
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: "Navigation Item",
  icon: "warning",
}

export const AsLink = Template.bind({})
AsLink.args = {
  label: "Navigation Item",
  href: "#",
}

export const WithChildren = Template.bind({})
WithChildren.args = {
  value: "itm-1",
  children: "Item 1",
}
