/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SortButton } from "./SortButton.component"
import { Icon } from "../Icon"

const meta: Meta<typeof SortButton> = {
  title: "Components/SortButton",
  component: SortButton,
  argTypes: {
    order: {
      control: {
        type: "radio",
        options: ["asc", "desc"],
      },
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "orderChanged",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    order: "desc",
    onChange: (order) => console.log("Sort order changed to:", order),
  },
}

export const Disabled: Story = {
  args: {
    order: "asc",
    disabled: true,
    onChange: (order) => console.log("Attempted to change sort order to:", order),
  },
  parameters: {
    docs: {
      description: {
        story: "SortButton in a disabled state, showing the initial sorting direction.",
      },
    },
  },
}

export const CustomOptions: Story = {
  args: {
    order: "asc",
    options: [
      { value: "asc", label: <Icon icon="expandMore" /> },
      { value: "desc", label: <Icon icon="expandLess" /> },
    ],
    onChange: (order) => console.log("Sort order changed to:", order),
  },
  parameters: {
    docs: {
      description: {
        story:
          "SortButton with custom icons. Note: This is an example of passing custom icons. These specific icons are not recommended foor sorting.",
      },
    },
  },
}
