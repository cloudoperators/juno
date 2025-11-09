/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabList } from "./TabList.component"
import { Tab } from "../Tab/Tab.component"

const meta: Meta<typeof TabList> = {
  title: "Layout/Tabs/TabList",
  component: TabList,
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
