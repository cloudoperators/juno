/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabNavigation } from "./index"
import { TabNavigationItem } from "../TabBarItem/index"

const meta: Meta<typeof TabNavigation> = {
  title: "Deprecated/TabNavigation/TabNavigation",
  component: TabNavigation,
  parameters: {
    docs: {
      description: {
        component:
          "`TabNavigation` has been renamed to `TabBar`. Please use `<TabBar>` and `<TabBarItem>` going forward. `TabNavigation` will be removed in a future major release.",
      },
    },
  },
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

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>,
      <TabNavigationItem label="Item 2" key="item-2" active></TabNavigationItem>,
      <TabNavigationItem label="Item with Icon" key="item-3" icon="warning"></TabNavigationItem>,
      <TabNavigationItem label="Disabled Item" key="item-4" disabled></TabNavigationItem>,
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: [
      <TabNavigationItem label="Item 1" key="item-1"></TabNavigationItem>,
      <TabNavigationItem label="Item 2" key="item-2"></TabNavigationItem>,
      <TabNavigationItem label="Item 3" key="item-3"></TabNavigationItem>,
      <TabNavigationItem label="Item 4" key="item-4"></TabNavigationItem>,
    ],
  },
}

export const WithValues: Story = {
  args: {
    activeItem: "item-3",
    children: [
      <TabNavigationItem label="Item 1" key="i-1" value="item-1"></TabNavigationItem>,
      <TabNavigationItem label="Item 2" key="i-2" value="item-2"></TabNavigationItem>,
      <TabNavigationItem label="Item 3" key="i-3" value="item-3"></TabNavigationItem>,
      <TabNavigationItem label="Item 4" key="i-4" value="item-4"></TabNavigationItem>,
    ],
  },
}
