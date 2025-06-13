/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComboBox } from "../ComboBox/ComboBox.component"
import { ComboBoxOption } from "./ComboBoxOption.component"

const meta: Meta<typeof ComboBoxOption> = {
  title: "Forms/ComboBox/ComboBoxOption",
  component: ComboBoxOption,
  argTypes: {},
  render: (args) => (
    <ComboBox>
      <ComboBoxOption {...args} />
    </ComboBox>
  ),
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
    children: "Option 1",
  },
}
