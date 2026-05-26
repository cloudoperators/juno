/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridToolbar } from "./index"
import { Button } from "../Button"
import { Stack } from "../Stack"

const meta: Meta<typeof DataGridToolbar> = {
  title: "Components/DataGrid/DataGridToolbar",
  component: DataGridToolbar,
  argTypes: {
    children: {
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    className: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DataGridToolbar {...args}>
      <Stack distribution="between" alignment="center" className="jn:text-sm">
        <span className="jn:theme-color-text-light">Showing 4 of 10 servers</span>
        <Button label="Update" size="xs" />
      </Stack>
    </DataGridToolbar>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A spacing wrapper for Zone 2+3 content — filter controls, DataGrid state, and refresh. Use `className` to apply the background and `Stack` inside to position content. Zone 1 (primary actions, bulk actions, sorting) does not use `DataGridToolbar` — it is a plain `Stack`. See DataGrid Header stories for full composition examples.",
      },
    },
  },
}
