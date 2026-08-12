/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React, { useState } from "react"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridCell } from "../DataGridCell/index"
import { DataGridHeadCell } from "../DataGridHeadCell/index"
import { DataGridCheckboxCell } from "./index"
import { Checkbox } from "../Checkbox/index"

const meta: Meta<typeof DataGridCheckboxCell> = {
  title: "Components/DataGrid/DataGridCheckboxCell",
  component: DataGridCheckboxCell,
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
          "`DataGridCheckboxCell` is a `DataGrid` cell pre-configured for holding a `Checkbox`. Place a `Checkbox` as a child and wire up selection state and event handlers directly on it. To keep the cell as narrow as its content, use `minContentColumns` on the parent `DataGrid` — the cell itself does not control its own column width.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const items = [
  { id: "1", name: "node-prod-01", status: "Running" },
  { id: "2", name: "node-prod-02", status: "Stopped" },
  { id: "3", name: "node-staging-01", status: "Error" },
]

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A `DataGridCheckboxCell` with a `Checkbox` child. Wire up selection state and all event handlers directly on the `Checkbox`. Use `minContentColumns` on the parent `DataGrid` to keep the checkbox cell as narrow as its content.",
      },
    },
  },
  render: () => {
    const [selected, setSelected] = useState<Record<string, boolean>>({})
    return (
      <DataGrid columns={3} minContentColumns={[0]}>
        <DataGridRow>
          <DataGridHeadCell />
          <DataGridHeadCell>Name</DataGridHeadCell>
          <DataGridHeadCell>Status</DataGridHeadCell>
        </DataGridRow>
        {items.map((item) => (
          <DataGridRow key={item.id}>
            <DataGridCheckboxCell>
              <Checkbox
                checked={!!selected[item.id]}
                onChange={(e) => setSelected((s) => ({ ...s, [item.id]: e.target.checked }))}
              />
            </DataGridCheckboxCell>
            <DataGridCell>{item.name}</DataGridCell>
            <DataGridCell>{item.status}</DataGridCell>
          </DataGridRow>
        ))}
      </DataGrid>
    )
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "A `DataGridCheckboxCell` with a disabled `Checkbox`. Disable the `Checkbox` directly.",
      },
    },
  },
  render: () => (
    <DataGrid columns={3} minContentColumns={[0]}>
      <DataGridRow>
        <DataGridHeadCell />
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCheckboxCell>
            <Checkbox disabled />
          </DataGridCheckboxCell>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.status}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const AlwaysCentered: Story = {
  parameters: {
    docs: {
      description: {
        story:
          '`DataGridCheckboxCell` always centers its content vertically, regardless of the parent `DataGrid`\'s `cellVerticalAlignment` setting. Here the grid is set to `cellVerticalAlignment="top"`, but the checkbox remains centered.',
      },
    },
  },
  render: () => (
    <DataGrid columns={3} minContentColumns={[0]} cellVerticalAlignment="top">
      <DataGridRow>
        <DataGridHeadCell />
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Notes</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCheckboxCell>
            <Checkbox />
          </DataGridCheckboxCell>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>
            This cell has multiple lines of content to make the row tall enough to demonstrate that the checkbox remains
            vertically centered even when the grid is configured to align cell content to the top.
          </DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}
