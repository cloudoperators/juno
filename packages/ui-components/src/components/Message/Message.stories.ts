/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"

import { Message } from "./"

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// Default message
export const Default: Story = {
  args: {
    text: "Default Message.",
    variant: "info",
  },
}

// Message with title
export const WithTitle: Story = {
  args: {
    title: "Message",
    text: "Message with title.",
  },
}

// Message variants
export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning Message.",
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    text: "Error Message.",
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Danger Message.",
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    text: "Success Message.",
  },
}

// Dismissible message
export const Dismissible: Story = {
  args: {
    text: "Dismissible Message.",
    dismissible: true,
  },
}
