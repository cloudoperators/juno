/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DescriptionTerm, DT } from "./DescriptionTerm.component"

const meta: Meta<typeof DescriptionTerm> = {
  title: "Components/Description/DescriptionTerm",
  component: DT,
  argTypes: {
    children: {
      control: { type: "text" },
      defaultValue: "Default Term",
      description: "The term to be displayed in the description list.",
    },
  },
}

export default meta
type Story = StoryObj<typeof DT>

export const Default: Story = {
  render: (args) => <DT {...args} />,
  args: {
    children: "Default Term",
  },
}

export const CustomTerm: Story = {
  render: (args) => <DT {...args} />,
  args: {
    children: "Custom Term",
    className: "font-bold text-lg",
  },
}
