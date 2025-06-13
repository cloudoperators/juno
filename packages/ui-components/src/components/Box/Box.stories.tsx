/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Box } from "./index"

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Some content in a Box.",
  },
}

export const WithoutPadding: Story = {
  parameters: {
    docs: {
      description: {
        story: "To remove padding, set the `unpad` prop.",
      },
    },
  },
  args: {
    children: "A Box without padding",
    unpad: true,
  },
}
