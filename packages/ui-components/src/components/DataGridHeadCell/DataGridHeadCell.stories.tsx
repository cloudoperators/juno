/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridCell } from "../DataGridCell/index"
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
    textContain: {
      control: { type: "select" },
      options: ["truncate-end", "truncate-start", "break-word", "break-all", "no-wrap"],
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
        story:
          "DataGridHeadCell with `nowrap`. **Deprecated** — use `textContain=\"no-wrap\"` instead.",
      },
    },
  },
  args: {
    nowrap: true,
    children: ["DataGridHeadCell does not wrap"],
  },
}

export const TextContain: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Use `textContain` to control how a head cell handles text that exceeds its width. The available values mirror those on `DataGridCell`. `"truncate-end"` / `"truncate-start"` clip to one line with an ellipsis; `"break-word"` / `"break-all"` force long strings to wrap; `"no-wrap"` keeps content on one line. The first column has no `textContain` set as a baseline. `textContain` supersedes the deprecated `nowrap` boolean.',
      },
    },
  },
  decorators: [
    () => {
      const label = "A very long header label that exceeds the available column width"
      return (
        <DataGrid columns={6}>
          <DataGridRow>
            <DataGridHeadCell>{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="truncate-end">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="truncate-start">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="break-word">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="break-all">{label}</DataGridHeadCell>
            <DataGridHeadCell textContain="no-wrap">{label}</DataGridHeadCell>
          </DataGridRow>
          <DataGridRow>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
            <DataGridCell>cell</DataGridCell>
          </DataGridRow>
        </DataGrid>
      )
    },
  ],
  args: {},
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
