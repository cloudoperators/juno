/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { LoadingIndicator } from "./"

const meta: Meta<typeof LoadingIndicator> = {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
  argTypes: {
    size: {
      control: { type: "number" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const SizedLoadingIndicator: Story = {
  args: {
    size: "300",
  },
}

export const ColoredLoadingIndicator: Story = {
  args: {
    color: "jn-text-theme-info",
  },
}
