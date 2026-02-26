/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { AppBody } from "./index.ts"

const meta: Meta<typeof AppBody> = {
  title: "Internal/AppBody",
  component: AppBody,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Body: Story = {
  parameters: {},
  args: {},
}
