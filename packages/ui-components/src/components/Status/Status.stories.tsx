/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Status } from "./index"
import { DataGrid } from "../DataGrid/DataGrid.component"
import { DataGridRow } from "../DataGridRow/DataGridRow.component"
import { DataGridCell } from "../DataGridCell/DataGridCell.component"
import { DataGridHeadCell } from "../DataGridHeadCell/DataGridHeadCell.component"

const meta: Meta<typeof Status> = {
  title: "Components/Status",
  component: Status,
  argTypes: {
    status: {
      control: "select",
      options: ["progress", "error", "empty", "no-matches"],
    },
    action: { control: false },
  },
  parameters: {
    docs: {
      description: {
        component:
          "`Status` is a general-purpose component for communicating non-data states: in progress, error, empty, and no matches. Use it as the default drop-in whenever a component, view, or data container has no local or specific way to handle these states — it covers application-, page-, and section-level states as well as error boundary fallbacks.\n\nWhen used inside a `DataGrid`, wrap `Status` in a `DataGridRow` and `DataGridCell` with the appropriate `colSpan` — `Status` renders a `<div>` only and has no table markup of its own.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Status>

export const Default: Story = {
  args: {},
}

const DataGridWrapper = (args: React.ComponentProps<typeof Status>) => (
  <DataGrid columns={4}>
    <DataGridRow>
      <DataGridHeadCell>Name</DataGridHeadCell>
      <DataGridHeadCell>Region</DataGridHeadCell>
      <DataGridHeadCell>Status</DataGridHeadCell>
      <DataGridHeadCell>Last Updated</DataGridHeadCell>
    </DataGridRow>
    <DataGridRow>
      <DataGridCell colSpan={4}>
        <Status {...args} />
      </DataGridCell>
    </DataGridRow>
  </DataGrid>
)

export const DataGridLoading: Story = {
  args: { status: "progress" },
  render: (args) => <DataGridWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story: 'Use `status="progress"` inside a `DataGridRow` spanning all columns while data is being fetched.',
      },
    },
  },
}

export const DataGridError: Story = {
  args: { status: "error" },
  render: (args) => <DataGridWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="error"` inside a `DataGridRow` spanning all columns when a data fetch or operation has failed.',
      },
    },
  },
}

export const DataGridEmpty: Story = {
  args: { status: "empty" },
  render: (args) => <DataGridWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="empty"` inside a `DataGridRow` spanning all columns when the data source contains no items.',
      },
    },
  },
}

export const DataGridNoMatches: Story = {
  args: { status: "no-matches" },
  render: (args) => <DataGridWrapper {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Use `status="no-matches"` inside a `DataGridRow` spanning all columns when items exist but none match the currently applied filters.',
      },
    },
  },
}
