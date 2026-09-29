/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabBar } from "./index"
import { TabBarItem } from "../TabBarItem/index"

const meta: Meta<typeof TabBar> = {
  title: "Navigation/TabBar/TabBar",
  component: TabBar,
  argTypes: {
    children: {
      control: false,
    },
    onActiveItemChange: {
      control: false,
    },
    appearance: {
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
      <TabBarItem label="Item 1" key="item-1"></TabBarItem>,
      <TabBarItem label="Item 2" key="item-2" active></TabBarItem>,
      <TabBarItem label="Item with Icon" key="item-3" icon="warning"></TabBarItem>,
      <TabBarItem label="Disabled Item" key="item-4" disabled></TabBarItem>,
    ],
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "All tab bar items can be disabled by passing `disabled` to the `TabBar`.",
      },
    },
  },
  args: {
    disabled: true,
    children: [
      <TabBarItem label="Item 1" key="item-1"></TabBarItem>,
      <TabBarItem label="Item 2" key="item-2"></TabBarItem>,
      <TabBarItem label="Item 3" key="item-3"></TabBarItem>,
      <TabBarItem label="Item 4" key="item-4"></TabBarItem>,
    ],
  },
}

export const WithValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When needed, tab bar items can take a `value` prop as a technical identifier that is different from the human-readable `label`. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `TabBarItem` can be set to `active`. When both an individual item is set to active and an activeItem is set on the parent, the latter will win.",
      },
    },
  },
  args: {
    activeItem: "item-3",
    children: [
      <TabBarItem label="Item 1" key="i-1" value="item-1"></TabBarItem>,
      <TabBarItem label="Item 2" key="i-2" value="item-2"></TabBarItem>,
      <TabBarItem label="Item 3" key="i-3" value="item-3"></TabBarItem>,
      <TabBarItem label="Item 4" key="i-4" value="item-4"></TabBarItem>,
    ],
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story: "Alternatively, tab bar items can render children passed to them.",
      },
    },
  },
  args: {
    activeItem: "item-1",
    children: [
      <TabBarItem key="i-1" value="item-1">
        Item 1
      </TabBarItem>,
      <TabBarItem key="i-2" value="item-2">
        Item 2
      </TabBarItem>,
      <TabBarItem key="i-3" value="item-3">
        Item 3
      </TabBarItem>,
      <TabBarItem key="i-4" value="item-4">
        Item 4
      </TabBarItem>,
    ],
  },
}

export const ContentAppearance: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `appearance="content"` for a TabBar inside page content. Inactive items show a darkened bottom border to visually distinguish them from the active item.',
      },
    },
  },
  args: {
    appearance: "content",
    children: [
      <TabBarItem label="Item 1" key="item-1" active></TabBarItem>,
      <TabBarItem label="Item 2" key="item-2"></TabBarItem>,
      <TabBarItem label="Item 3" key="item-3"></TabBarItem>,
      <TabBarItem label="Disabled Item" key="item-4" disabled></TabBarItem>,
    ],
  },
}
