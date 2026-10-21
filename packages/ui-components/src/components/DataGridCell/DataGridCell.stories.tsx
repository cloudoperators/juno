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
import { Code } from "../Code/index"
import type { TextContainType } from "../../shared/textContain"

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
    textContain: {
      control: { type: "select" },
      options: ["truncate-end", "truncate-start", "break-word", "break-all", "no-wrap"],
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

export const TextContain: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `textContain` to control how a cell handles text that exceeds its width. `"truncate-end"` / `"truncate-start"` clip to one line with an ellipsis, `"break-word"` / `"break-all"` force long strings to wrap, and `"no-wrap"` keeps content on one line. The `truncate-*` values only take visible effect when the cell has a bounded width, which the grid columns supply here. Truncation works under any `cellVerticalAlignment`, including the default `"center"`, and vertical centering is preserved. `textContain` supersedes the deprecated `nowrap` boolean.',
      },
    },
  },
  render: () => (
    <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>truncate-end</DataGridHeadCell>
        <DataGridHeadCell>truncate-start</DataGridHeadCell>
        <DataGridHeadCell>break-word</DataGridHeadCell>
        <DataGridHeadCell>break-all</DataGridHeadCell>
      </DataGridRow>
      {longItems.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCell textContain="truncate-end">{item.status}</DataGridCell>
          <DataGridCell textContain="truncate-start">{item.status}</DataGridCell>
          <DataGridCell textContain="break-word">{item.status}</DataGridCell>
          <DataGridCell textContain="break-all">{item.status}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const TruncationInCustomTemplate: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Containment holds up under a custom `gridColumnTemplate` whose tracks have an `auto`/`fr` minimum (here `"minmax(150px, max-content) 1fr 1fr 1fr"`). Such tracks would otherwise grow to fit a long non-wrapping string. Truncating cells carry `min-width: 0` so they clip within their track; the `break-word` cell carries it too so a long unbroken token wraps instead of widening the column (`overflow-wrap: break-word` alone does not reduce min-content sizing). The `truncate-start` column uses path-like values to show the start of the string is dropped with the ellipsis while the text keeps its natural order (the slashes are not reordered).',
      },
    },
  },
  render: () => (
    <DataGrid gridColumnTemplate="minmax(150px, max-content) 1fr 1fr 1fr">
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>truncate-end</DataGridHeadCell>
        <DataGridHeadCell>truncate-start</DataGridHeadCell>
        <DataGridHeadCell>break-word</DataGridHeadCell>
      </DataGridRow>
      {longItems.map((item) => (
        <DataGridRow key={item.id}>
          <DataGridCell>{item.name}</DataGridCell>
          <DataGridCell textContain="truncate-end">{item.status}</DataGridCell>
          <DataGridCell textContain="truncate-start">{`/var/log/${item.name}/health-check-report-latest.log`}</DataGridCell>
          <DataGridCell textContain="break-word">{`${item.name}-availability-zone-eu-de-1a-verylongunbrokenidentifier`}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}

export const TextContainComparison: Story = {
  parameters: {
    // This story hardcodes all six textContain values and ignores args, so the
    // controls would be inert — hide them to avoid implying they do anything.
    controls: { disable: true },
    // Likewise hide the Actions panel, which is otherwise populated globally from
    // DataGridCell's inherited `on*` HTMLAttributes (see preview.js argTypesRegex).
    actions: { disable: true },
    docs: {
      description: {
        story:
          "The same four-column grid (short content in the first three columns, a long string in the fourth) rendered six times, each applying a different `textContain` value to the fourth column, so their behaviour can be compared side by side.",
      },
    },
  },
  render: () => {
    const cases: (TextContainType | undefined)[] = [
      undefined,
      "break-word",
      "break-all",
      "truncate-end",
      "truncate-start",
      "no-wrap",
    ]
    return (
      <div className="jn:flex jn:flex-col jn:gap-8">
        {cases.map((textContain, index) => (
          <div key={textContain ?? "none"}>
            <p className="jn:mb-2 jn:font-bold">
              {index + 1}.{" "}
              {textContain ? (
                <>
                  <Code>{textContain}</Code> on column 4
                </>
              ) : (
                <>
                  No <Code>textContain</Code> set
                </>
              )}
            </p>
            <DataGrid columns={4}>
              <DataGridRow>
                <DataGridHeadCell>Status</DataGridHeadCell>
                <DataGridHeadCell>Count</DataGridHeadCell>
                <DataGridHeadCell>Zone</DataGridHeadCell>
                <DataGridHeadCell>Message</DataGridHeadCell>
              </DataGridRow>
              {longItems.map((item) => (
                <DataGridRow key={item.id}>
                  <DataGridCell>OK</DataGridCell>
                  <DataGridCell>{item.id}</DataGridCell>
                  <DataGridCell>eu-de-1a</DataGridCell>
                  <DataGridCell textContain={textContain}>{item.status}</DataGridCell>
                </DataGridRow>
              ))}
            </DataGrid>
          </div>
        ))}
      </div>
    )
  },
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
          <DataGridCell verticalAlignment="top">{item.name}</DataGridCell>
          <DataGridCell>
            This is a longer description for {item.name} that spans multiple lines to demonstrate that top alignment
            works independently of the grid-level setting.
          </DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
}
