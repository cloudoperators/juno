/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { SecondaryTabs } from "../SecondaryTabs/SecondaryTabs.component"
import { SecondaryTab } from "./SecondaryTab.component"

const meta: Meta<typeof SecondaryTab> = {
  title: "WIP/SecondaryTab",
  component: SecondaryTab,
  decorators: [
    (Story) => (
      <SecondaryTabs defaultTab="demo">
        <Story />
      </SecondaryTabs>
    ),
  ],
  argTypes: {
    value: { control: "text" },
    disabled: { control: "boolean" },
    icon: { control: "text" },
    iconRight: { control: "text" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "demo",
    children: "Tab Label",
  },
}

export const Active: Story = {
  args: {
    value: "demo",
    children: "Active Tab",
  },
}

export const Disabled: Story = {
  args: {
    value: "demo",
    disabled: true,
    children: "Disabled Tab",
  },
}

export const WithIcon: Story = {
  args: {
    value: "demo",
    icon: "openInNew",
    children: "With Icon",
  },
}
