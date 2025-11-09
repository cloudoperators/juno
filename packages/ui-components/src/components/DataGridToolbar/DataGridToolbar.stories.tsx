/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridToolbar, DataGridToolbarProps } from "./index"

const meta: Meta<typeof DataGridToolbar> = {
  title: "Components/DataGrid/DataGridToolbar",
  component: DataGridToolbar,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    search: {
      control: false,
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args: DataGridToolbarProps) => (
    <DataGridToolbar {...args}>
      <button>Add</button>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons",
      },
    },
  },
  args: {},
}
