/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabBar } from "../TabBar/index"
import { TabBarItem } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof TabBarItem> = {
  title: "Navigation/TabBar/TabBarItem",
  component: TabBarItem,
  argTypes: {
    icon: {
      options: [null, ...Object.keys(KnownIconsEnum)],
      control: { type: "select" },
    },
    onClick: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <TabBar>
        <Story />
      </TabBar>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Tab 1",
  },
}

export const Active: Story = {
  args: {
    label: "Active TabBarItem",
    active: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled TabBarItem",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    icon: "warning",
    label: "With Icon",
  },
}

export const AsLink: Story = {
  args: {
    label: "Item as Link",
    href: "https://www.sap.com",
  },
}

export const WithChildren: Story = {
  args: {
    value: "itm-1",
    children: "Item 1",
  },
}
