/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"

import { Divider } from "./Divider.component"

const meta: Meta<typeof Divider> = {
  title: "Layout/Divider",
  component: Divider,
  argTypes: {
    className: {
      control: "text",
    },
    color: {
      control: "text",
    },
    spacing: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <div className="jn:p-6">
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "A generic horizontal divider. Renders a 1px separator with an adjustable amount of vertical spacing.",
      },
      source: {
        transform: (source: string): string => source.replace(/jn:/g, ""),
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Per default, `<Divider>` uses the default border color and one basic tw spacing unit (0.25rem/4px) in each vertical direction.",
      },
    },
  },
  args: {},
}

export const CustomColourAndSpacing: Story = {
  parameters: {
    docs: {
      description: {
        story: "Use `color` to override the separator colour and `spacing` to adjust the vertical spacing.",
      },
    },
  },
  args: {
    color: "jn:border-[rgb(220,0,150)]",
    spacing: "jn:py-4",
  },
}
