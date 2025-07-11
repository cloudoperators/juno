/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridRow } from "./index"
import { DataGridCell } from "../DataGridCell/index"
import { Default as DataGridCellStory } from "../DataGridCell/DataGridCell.stories"
import { DataGrid, DataGridProps } from "../DataGrid/index"

const columns = 5

type DataGridRowStoryProps = {
  items: DataGridProps[]
} & React.ComponentProps<typeof DataGridRow>

const meta: Meta<DataGridRowStoryProps> = {
  title: "Components/DataGrid/DataGridRow",
  component: DataGridRow,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [
    (Story) => (
      <DataGrid columns={columns}>
        <Story />
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

export const Default: StoryObj<DataGridRowStoryProps> = {
  render: ({ items, ...args }) => (
    <DataGridRow {...args}>
      {items.map((item, i) => (
        <DataGridCell {...item} key={i} />
      ))}
    </DataGridRow>
  ),
  args: {
    hoverable: false,
    items: Array(columns).fill({ ...DataGridCellStory.args }),
  },
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridRow for use in DataGrid",
      },
    },
  },
}

export const HoverableRow: StoryObj<DataGridRowStoryProps> = {
  render: ({ items, ...args }) => (
    <>
      <DataGridRow hoverable {...args}>
        {items.map((item, i) => (
          <DataGridCell {...item} key={i} />
        ))}
      </DataGridRow>
      <DataGridRow hoverable {...args}>
        {items.map((item, i) => (
          <DataGridCell {...item} key={i} />
        ))}
      </DataGridRow>
    </>
  ),
  args: {
    items: Array(columns).fill({ ...DataGridCellStory.args }),
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `hoverable` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity.",
      },
    },
  },
}
