/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { ThemeToggle } from "./ThemeToggle.component"

const meta: Meta<typeof ThemeToggle> = {
  title: "WIP/ThemeToggle",
  component: ThemeToggle,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {},
  args: {},
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
