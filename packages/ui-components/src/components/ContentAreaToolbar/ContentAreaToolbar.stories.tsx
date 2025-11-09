/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { Button } from "../Button/Button.component"
import { ContentAreaToolbar } from "./ContentAreaToolbar.component"
import { ContentAreaToolbarProps } from "./ContentAreaToolbar.component"

const meta: Meta<typeof ContentAreaToolbar> = {
  title: "Layout/ContentAreaToolbar",
  component: ContentAreaToolbar,
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

export const Basic: Story = {
  render: (args: ContentAreaToolbarProps) => (
    <ContentAreaToolbar {...args}>
      <Button>Main Action</Button>
    </ContentAreaToolbar>
  ),
}
