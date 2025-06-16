/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "./index"

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    // backgroundColor: { control: "color" },
    // labelColor: { control: "color" },
    // hoverColor: { control: "color" },
    // outlineColor: { control: "color" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
  },
}

export const Light: Story = {
  args: {},
}

export const WithCustomColor: Story = {
  args: {
    color: "text-theme-button-primary",
  },
}

export const Small: Story = {
  args: {
    size: "small",
  },
}

export const Large: Story = {
  args: {
    size: "large",
  },
}
