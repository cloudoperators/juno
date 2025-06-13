/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridCheckboxCell } from "./index"

const meta: Meta<typeof DataGridCheckboxCell> = {
  title: "WiP/DataGrid/DataGridCheckboxCell",
  component: DataGridCheckboxCell,
  decorators: [
    (Story) => (
      <DataGrid columns={3}>
        <DataGridRow>
          <Story />
        </DataGridRow>
      </DataGrid>
    ),
  ],
  parameters: {
    docs: {
      source: {
        excludeDecorators: false,
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
        story: "Juno DataGridCheckboxCell for use in DataGrid",
      },
    },
  },
  args: {},
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "Disabled Juno DataGridCheckboxCell for use in DataGrid",
      },
    },
  },
  args: {
    disabled: true,
  },
}
