/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigation } from "./index"
import { SideNavigationItem } from "../SideNavigationItem/SideNavigationItem.component"

const meta: Meta<typeof SideNavigation> = {
  title: "Navigation/SideNavigation/SideNavigation",
  component: SideNavigation,
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
      <SideNavigationItem key="item-1" label="Item 1" />,
      <SideNavigationItem key="item-2" label="Item 2" active />,
      <SideNavigationItem key="item-3" icon="warning" label="Item with Icon" />,
      <SideNavigationItem key="item-4" label="Disabled Item" disabled />,
    ],
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "All navigation items can be disabled by passing `disabled` to the `TabNavigation`.",
      },
    },
  },
  args: {
    disabled: true,
    children: [
      <SideNavigationItem key="item-1" label="Item 1" />,
      <SideNavigationItem key="item-2" label="Item 2" />,
      <SideNavigationItem key="item-3" label="Active Item" active />,
    ],
  },
}

export const WithValues: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When needed, navigation items can take a `value` prop as a technical identifier that is different form the human-readable `label` or the `children` of the item. You may use any of the provided props as an identifier to set an active item on the parent. Alternatively, an individual `SideNavigationItem` can be set to `active`. When both an individual item is set to active and an aciveItem is set on the parent, the latter will win",
      },
    },
  },
  args: {
    activeItem: "i-3",
    children: [
      <SideNavigationItem label="Item 1" key="item-1" value="i-1" />,
      <SideNavigationItem label="Item 2" key="item-2" value="i-2" />,
      <SideNavigationItem label="Item 3" key="item-3" value="i-3" />,
      <SideNavigationItem label="Item 4" key="item-4" value="i-4" />,
    ],
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story: "Navigation items can render children passed to them.",
      },
    },
  },
  args: {
    activeItem: "item-1",
    children: [
      <SideNavigationItem key="i-1" value="item-1">
        Item 1
      </SideNavigationItem>,
      <SideNavigationItem key="i-2" value="item-2">
        Item 2
      </SideNavigationItem>,
      <SideNavigationItem key="i-3" value="item-3">
        Item 3
      </SideNavigationItem>,
      <SideNavigationItem key="i-4" value="item-4">
        Item 4
      </SideNavigationItem>,
    ],
  },
}
