/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabNavigation } from "../TabBar/index"
import { TabNavigationItem } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof TabNavigationItem> = {
  title: "Deprecated/TabNavigation/TabNavigationItem",
  component: TabNavigationItem,
  parameters: {
    docs: {
      description: {
        component:
          "`TabNavigationItem` has been renamed to `TabBarItem`. Please use `<TabBar>` and `<TabBarItem>` going forward. `TabNavigationItem` will be removed in a future major release.",
      },
    },
  },
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
      <TabNavigation>
        <Story />
      </TabNavigation>
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
    label: "Active TabNavigationItem",
    active: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled TabNavigationItem",
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
