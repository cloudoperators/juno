/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select } from "../Select/Select.component"
import { SelectOption } from "./SelectOption.component"
import { PortalProvider } from "../PortalProvider"

const meta: Meta<typeof SelectOption> = {
  title: "Forms/Select/SelectOption",
  component: SelectOption,
  argTypes: {
    children: {
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
  },
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
  render: (args) => {
    return (
      <Select open>
        <SelectOption {...args} />
      </Select>
    )
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: "Option 1",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled Option",
  },
}

export const ChildrenOnly: Story = {
  args: {
    // @ts-ignore
    children: ["Option 1"],
  },
}

export const WithLabel: Story = {
  args: {
    value: "option-1",
    label: "Option 1",
  },
}
