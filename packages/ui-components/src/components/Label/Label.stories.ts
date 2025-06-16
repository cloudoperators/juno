/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { Label } from "./index"

const meta: Meta<typeof Label> = {
  title: "Forms/Label",
  component: Label,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: "My Label",
  },
}

export const Disabled: Story = {
  args: {
    text: "My disabled label",
    disabled: true,
  },
}

export const Required: Story = {
  args: {
    text: "My required label",
    required: true,
  },
}
