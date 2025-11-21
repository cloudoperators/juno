/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DescriptionDefinition, DD } from "./DescriptionDefinition.component"

const meta: Meta<typeof DescriptionDefinition> = {
  title: "Components/Description/DescriptionDefinition",
  component: DD,
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "This is a description text.",
      description: "Content to display as the definition in the description list.",
    },
    className: {
      control: { type: "text" },
      description: "Additional custom class names for styling the component.",
    },
  },
}

export default meta
type Story = StoryObj<typeof DD>

export const Default: Story = {
  render: (args) => <DD {...args} />,
  args: {
    children: "This is a default description.",
  },
}

export const CustomClassExample: Story = {
  render: (args) => <DD {...args} />,
  args: {
    children: "This description has custom styling.",
    className: "bg-blue-100 text-blue-800 p-4",
  },
}

export const RichContentExample: Story = {
  render: (args) => (
    <DD {...args}>
      <strong>This is bold text.</strong> <em>This is italic text.</em>
    </DD>
  ),
}
