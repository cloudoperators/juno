/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridHeadCell } from "../DataGridHeadCell/index"
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
    verticalAlignment: {
      control: { type: "radio" },
      options: ["center", "top"],
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

const longItems = [
  {
    id: "1",
    name: "node-prod-01",
    status: "Running — all systems operational, no issues detected, last checked 2 minutes ago",
  },
  {
    id: "2",
    name: "node-prod-02",
    status: "Stopped — scheduled maintenance window currently active, expected to resume at 06:00 UTC",
  },
  {
    id: "3",
    name: "node-staging-01",
    status:
      "Error — health check failed on port 8080, automatic restart attempted 3 times, manual intervention required",
  },
]

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "A standard `DataGridCell` inside a `DataGrid`.",
      },
    },
  },
  render: () => (
    <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell>{item.status}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const NoWrap: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "With `nowrap`, cell content will not wrap onto multiple lines. Non-wrapping cells push their column to the available maximum width, and overflowing content is visible by default — consumers are responsible for handling overflow. The last row demonstrates truncation with an ellipsis: wrap the cell content in a `<span>` with `block` and `truncate` — the span must be a block element because `text-overflow: ellipsis` does not apply directly to flex containers.",
      },
    },
  },
  render: () => (
    <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {longItems.map((item, index) => (
        <DataGridRow key={item.id}>
          <DataGridCell nowrap>{item.name}</DataGridCell>
          <DataGridCell nowrap className={index === longItems.length - 1 ? "jn:overflow-hidden" : ""}>
            {index === longItems.length - 1 ? <span className="jn:block jn:truncate">{item.status}</span> : item.status}
          </DataGridCell>
          <DataGridCell nowrap>{item.id}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const ColSpan: Story = {
  parameters: {
    docs: {
      description: {
        story: "A `DataGridCell` with `colSpan` spanning multiple columns.",
      },
    },
  },
  render: () => (
    <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>ID</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCell colSpan={2}>{item.name}</DataGridCell>
          <DataGridCell>{item.id}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const VerticalAlignmentOverride: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `verticalAlignment` to override the parent `DataGrid`\'s `cellVerticalAlignment` for individual cells. Here the grid is set to `cellVerticalAlignment="center"` (the default), but the description cell uses `verticalAlignment="top"` to align longer content to the top while the name cell remains centered.',
      },
    },
  },
  render: () => (
    <DataGrid columns={2} cellVerticalAlignment="center">
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Description</DataGridHeadCell>
      </DataGridRow>
      {items.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell verticalAlignment="top">
            This is a longer description for {item.name} that spans multiple lines to demonstrate that top alignment
            works independently of the grid-level setting.
          </DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}
