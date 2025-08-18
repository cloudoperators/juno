/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card } from "./Card.component"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Some content in a Card.",
  },
}

export const WithPadding: Story = {
  args: {
    children: "A Card with padding.",
    padding: true,
  },
}
