/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { TabNavigation } from "./index.js"
import { TabNavigationItem } from "../TabNavigationItem/index.js"

export default {
  title: "Navigation/TabNavigation/TabNavigation",
  component: TabNavigation,
  argTypes: {
    children: {
      control: false,
    },
    onActiveItemChange: {
      control: false,
    },
    tabStyle: {
      options: ["main", "content"],
      control: { type: "radio" },
    },
  },
}

const Template = ({ children, ...args }) => (
  <TabNavigation {...args}>{children}</TabNavigation>
)

Template.propTypes = {
  children: PropTypes.node,
}

export const Default = Template.bind({})
Default.args = {
  children: [
    <TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>,
    <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>,
    <TabNavigationItem
      label="Item with Icon"
      key="item-3"
      icon="warning"
    ></TabNavigationItem>,
    <TabNavigationItem
      label="Disabled Item"
      key="item-4"
      disabled
    ></TabNavigationItem>,
  ],
}

export const Disabled = Template.bind({})
;(Disabled.parameters = {
  docs: {
    description: {
      story:
        "All navigation items can be disabled by passing `disabled` to the `TabNavigation`.",
    },
  },
}),
  (Disabled.args = {
    disabled: true,
    children: [
      <TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>,
      <TabNavigationItem label="Item 2" key="item-2"></TabNavigationItem>,
      <TabNavigationItem label="Item 3" key="item-3"></TabNavigationItem>,
      <TabNavigationItem label="Item 4" key="item-4"></TabNavigationItem>,
    ],
  })

export const WithValues = Template.bind({})
;(WithValues.parameters = {
  docs: {
    description: {
      story:
        "When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win.",
    },
  },
}),
  (WithValues.args = {
    activeItem: "item-3",
    children: [
      <TabNavigationItem
        label="Item 1"
        key="i-1"
        value="item-1"
      ></TabNavigationItem>,
      <TabNavigationItem
        label="Item 2"
        key="i-2"
        value="item-2"
      ></TabNavigationItem>,
      <TabNavigationItem
        label="Item 3"
        key="i-3"
        value="item-3"
      ></TabNavigationItem>,
      <TabNavigationItem
        label="Item 4"
        key="i-4"
        value="item-4"
      ></TabNavigationItem>,
    ],
  })

export const WithChildren = Template.bind({})
WithChildren.parameters = {
  docs: {
    description: {
      story:
        "Alternatively, navigation items can render children passed to them.",
    },
  },
}
WithChildren.args = {
  activeItem: "item-1",
  children: [
    <TabNavigationItem key="i-1" value="item-1">
      Item 1
    </TabNavigationItem>,
    <TabNavigationItem key="i-2" value="item-2">
      Item 2
    </TabNavigationItem>,
    <TabNavigationItem key="i-3" value="item-3">
      Item 3
    </TabNavigationItem>,
    <TabNavigationItem key="i-4" value="item-4">
      Item 4
    </TabNavigationItem>,
  ],
}
