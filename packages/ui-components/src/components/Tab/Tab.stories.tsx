/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tab } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof Tab> = {
  title: "Layout/Tabs/Tab",
  component: Tab,
  argTypes: {
    icon: {
      options: ["default", ...Object.keys(KnownIconsEnum)],
      control: { type: "select" },
    },
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
    label: "A Tab Label",
    children: "Tab 1",
  },
}

export const WithIcon: Story = {
  args: {
    children: "Tab with Icon",
    icon: "danger",
  },
}
