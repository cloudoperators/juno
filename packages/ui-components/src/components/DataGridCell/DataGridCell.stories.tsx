/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridCell } from "./index"

const meta: Meta<typeof DataGridCell> = {
  title: "Components/DataGrid/DataGridCell",
  component: DataGridCell,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
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
        story: "Juno DataGridCell for use in DataGrid",
      },
    },
  },
  args: {
    children: ["DataGridCell"],
  },
}

export const NoWrap: Story = {
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCell with nowrap option (content has white-space: nowrap;)",
      },
    },
  },
  args: {
    nowrap: true,
    children: ["DataGridCell does not wrap"],
  },
}

export const ColSpan: Story = {
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCell with colspan",
      },
    },
  },
  args: {
    colSpan: 3,
    children: ["DataGridCell with colspan"],
  },
}
