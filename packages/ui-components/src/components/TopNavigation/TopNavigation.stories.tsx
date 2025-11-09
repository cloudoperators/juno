/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TopNavigation } from "./index"
import { TopNavigationItem } from "../TopNavigationItem/TopNavigationItem.component"

const meta: Meta<typeof TopNavigation> = {
  title: "Navigation/TopNavigation/TopNavigation",
  component: TopNavigation,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <TopNavigationItem label="Item 1" key="item-1" />,
      <TopNavigationItem label="Item 2" key="item-2" active />,
      <TopNavigationItem label="Item with Icon" key="item-3" icon="warning" />,
      <TopNavigationItem label="Disabled Item" key="item-4" disabled />,
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: [
      <TopNavigationItem label="Item 1" key="item-1" />,
      <TopNavigationItem label="Item 2" key="item-2" />,
      <TopNavigationItem label="Item 3" key="item-3" />,
      <TopNavigationItem label="Item 4" key="item-4" />,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "All navigation items can be disabled by passing `disabled` to the `TabNavigation`.",
      },
    },
  },
}

export const WithValues: Story = {
  args: {
    activeItem: "i-3",
    children: [
      <TopNavigationItem label="Item 1" key="item-1" value="i-1" />,
      <TopNavigationItem label="Item 2" key="item-2" value="i-2" />,
      <TopNavigationItem label="Item 3" key="item-3" value="i-3" />,
      <TopNavigationItem label="Item 4" key="item-4" value="i-4" />,
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win.",
      },
    },
  },
}

export const WithChildren: Story = {
  args: {
    activeItem: "item-1",
    children: [
      <TopNavigationItem key="i-1" value="item-1">
        Item 1
      </TopNavigationItem>,
      <TopNavigationItem key="i-2" value="item-2">
        Item 2
      </TopNavigationItem>,
      <TopNavigationItem key="i-3" value="item-3">
        Item 3
      </TopNavigationItem>,
      <TopNavigationItem key="i-4" value="item-4">
        Item 4
      </TopNavigationItem>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Alternatively, navigation items can render children passed to them.",
      },
    },
  },
}
