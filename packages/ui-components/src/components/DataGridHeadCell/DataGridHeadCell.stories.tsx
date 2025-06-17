/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridHeadCell } from "./index"

const meta: Meta<typeof DataGridHeadCell> = {
  title: "Components/DataGrid/DataGridHeadCell",
  component: DataGridHeadCell,
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
        story: "Juno DataGridHeadCell for use in DataGrid",
      },
    },
  },
  args: {
    children: ["DataGridHeadCell"],
  },
}

export const NoWrap: Story = {
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridHeadCell with nowrap option (content has white-space: nowrap;)",
      },
    },
  },
  args: {
    nowrap: true,
    children: ["DataGridHeadCell does not wrap"],
  },
}

export const ColSpan: Story = {
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridHeadCell with colspan",
      },
    },
  },
  args: {
    colSpan: 3,
    children: ["DataGridHeadCell with colspan"],
  },
}
