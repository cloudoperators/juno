/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Container, ContainerProps } from "./index"

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "A very basic layout element with padding. By default has padding all around. Can be set to have only vertical padding.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story:
          "Section for content displayed in the main content area. Has padding. Typically you will want to use one of these sections to wrap your main content inside as the content area itself doesn't have padding to allow for full-width content or content to be placed at the very top or bottom.",
      },
    },
  },
  args: {},
}

export const WithVerticalPadding: Story = {
  render: (args: ContainerProps) => <Container {...args}>Content goes here</Container>,
  parameters: {
    docs: {
      description: {
        story:
          "A content container with vertical padding added. This will add padding to both the top and the bottom of the container.",
      },
    },
  },
  args: {
    py: true,
  },
}
