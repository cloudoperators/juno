/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { SearchInput } from "./"

const meta: Meta<typeof SearchInput> = {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Rounded: Story = {
  args: {
    variant: "rounded",
  },
}

export const Hero: Story = {
  args: {
    variant: "hero",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
