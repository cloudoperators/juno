/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { SecondaryTabs } from "./SecondaryTabs.component"
import { SecondaryTab } from "./SecondaryTab.component"
import { SecondaryTabPanel } from "./SecondaryTabPanel.component"

const meta: Meta<typeof SecondaryTabPanel> = {
  title: "WIP/SecondaryTabPanel",
  component: SecondaryTabPanel,
  decorators: [
    (Story) => (
      <SecondaryTabs defaultTab="demo">
        <SecondaryTab value="demo">Demo</SecondaryTab>
        <Story />
      </SecondaryTabs>
    ),
  ],
  argTypes: {
    value: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "demo",
    children: <div className="jn:p-4 jn:text-sm">Panel content</div>,
  },
}
