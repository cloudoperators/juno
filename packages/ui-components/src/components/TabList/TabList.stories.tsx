/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabList } from "./TabList.component"
import { Tab } from "../Tab/Tab.component"

const meta: Meta<typeof TabList> = {
  title: "Deprecated/Tabs/TabList",
  component: TabList,
  parameters: {
    docs: {
      description: {
        component:
          "`Tabs` and its child components `Tab`, `TabList`, and `TabPanel` are deprecated and may be removed in any of the next major releases. Once `TabBar` is refactored to being representational-only, you will be able to use `TabBar` in combination with `react-tabs` directly if you want to keep the `react-tabs` internal logic.",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Tab key="t-1" label="Tab 1" />,
      <Tab key="t-2" label="Tab 2" selected />,
      <Tab key="t-3" label="Tab 3" />,
      <Tab key="t-4" label="Disabled Tab" disabled />,
    ],
  },
}

export const MainTabList: Story = {
  args: {
    variant: "main",
    children: [
      <Tab key="t-1" label="Tab 1" />,
      <Tab key="t-2" label="Tab 2" selected />,
      <Tab key="t-3" label="Tab 3" />,
      <Tab key="t-4" label="Disabled Tab" disabled />,
    ],
  },
}
