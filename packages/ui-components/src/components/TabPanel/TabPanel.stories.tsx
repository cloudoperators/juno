/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { TabPanel } from "./index"

const meta: Meta<typeof TabPanel> = {
  title: "Deprecated/Tabs/TabPanel",
  component: TabPanel,
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
    children: "Tab panel content goes here.",
  },
}
