/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { Badge } from "./"

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    text: "default",
  },
  argTypes: {
    icon: {
      options: ["default", ...Object.values(KnownIconsEnum)],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithDefaultIcon: Story = {
  args: {
    text: "With Icon",
    icon: true, // Default icon based on variant
  },
}

export const WithAnyIcon: Story = {
  args: {
    text: "Deleted",
    icon: "deleteForever",
  },
}

export const Info: Story = {
  args: {
    variant: "info",
    text: "Info",
  },
}

export const InfoWithIcon: Story = {
  args: {
    variant: "info",
    text: "Info",
    icon: true,
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    text: "Success",
  },
}

export const SuccessWithIcon: Story = {
  args: {
    variant: "success",
    text: "Success",
    icon: true,
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    text: "Warning",
  },
}

export const WarningWithIcon: Story = {
  args: {
    variant: "warning",
    text: "Warning",
    icon: true,
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    text: "Danger",
  },
}

export const DangerWithIcon: Story = {
  args: {
    variant: "danger",
    text: "Danger",
    icon: true,
  },
}

export const Error: Story = {
  args: {
    variant: "error",
    text: "Error",
  },
}

export const ErrorWithIcon: Story = {
  args: {
    variant: "error",
    text: "Error",
    icon: true,
  },
}
