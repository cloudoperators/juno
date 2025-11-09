/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"

import { ContentContainer } from "./ContentContainer.component"

const meta: Meta<typeof ContentContainer> = {
  title: "Internal/ContentContainer",
  component: ContentContainer,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Centered: Story = {
  render: (args) => <ContentContainer {...args}>content</ContentContainer>,
}
