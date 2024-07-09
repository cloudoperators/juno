/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { NavigationItem } from "./index.js"
import { Navigation } from "../Navigation/index"

export default {
  title: "Internal/Navigation/NavigationItem",
  component: NavigationItem,
  argTypes: {},
  decorators: [(story) => <Navigation>{story()}</Navigation>],
}

const Template = ({ children, ...args }) => (
  <NavigationItem {...args}>{children}</NavigationItem>
)

export const DefaultWithChildren = {
  render: Template,
  args: {
    children: "Navigation Item",
  },
}

export const WithValueAndLabel = {
  render: Template,
  args: {
    value: "item-1",
    label: "Navigation Item 1",
  },
}

export const ActiveItem = {
  render: Template,
  args: {
    active: true,
    children: "Active Item",
  },
}

export const DisabledItem = {
  render: Template,
  args: {
    disabled: true,
    children: "Disabled Item",
  },
}

export const ItemAsLink = {
  render: Template,
  args: {
    href: "https://www.sap.com",
    children: "This item is a link",
  },
}

export const DisabledLinkItem = {
  render: Template,
  args: {
    href: "https://www.sap.com",
    children: "This item is a link",
    disabled: true,
  },
}

export const WithIcon = {
  render: Template,
  args: {
    label: "With Icon",
    icon: "warning",
  },
}
