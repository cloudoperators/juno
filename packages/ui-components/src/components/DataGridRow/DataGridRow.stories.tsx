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
import { Button } from "../Button"
import { DataGridHeadCell } from "../DataGridHeadCell"

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
    isSelected: false,
    items: Array(columns).fill({ ...DataGridCellStory.args }),
    onClick: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridRow for use in DataGrid",
      },
    },
  },
}

// If making changes, update in DataGrid story too
export const HoverableRow: StoryObj<DataGridRowStoryProps> = {
  render: (args) => (
    <DataGrid columns={3}>
      <DataGridRow>
        <DataGridHeadCell>ID</DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
      </DataGridRow>
      {Array.from({ length: 4 }, (_, rowIndex) => (
        <DataGridRow
          {...args}
          key={`row_${rowIndex}`}
          onClick={() => alert(`Row ${rowIndex + 1} clicked (HoverableRow)`)}
        >
          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>
          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>
          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
  args: {
    items: Array.from({ length: 3 }, (_, i) => ({
      content: `Cell Content ${i + 1}`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: "When `onClick` is set in `DataGridRow`, it exhibits visual feedback on hover, enhancing interactivity.",
      },
    },
  },
}

// If making changes, update in DataGrid story too
export const HoverableRowWithInteractableElements: StoryObj<DataGridRowStoryProps> = {
  render: (args) => (
    <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>ID</DataGridHeadCell>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Status</DataGridHeadCell>
        <DataGridHeadCell>Action</DataGridHeadCell>
      </DataGridRow>
      {Array.from({ length: 4 }, (_, rowIndex) => (
        <DataGridRow
          {...args}
          key={`row_${rowIndex}`}
          onClick={() => alert(`DataGridRow Event for Row ${rowIndex + 1}!`)}
        >
          <DataGridCell key={`cell_id_${rowIndex}`}>{`ID-${rowIndex + 1}`}</DataGridCell>
          <DataGridCell key={`cell_name_${rowIndex}`}>{`Name-${rowIndex + 1}`}</DataGridCell>
          <DataGridCell key={`cell_status_${rowIndex}`}>{`Status-${rowIndex + 1}`}</DataGridCell>
          <DataGridCell key={`cell_button_${rowIndex}`}>
            {rowIndex === 0 ? (
              <Button
                label="Trigger button event only"
                onClick={(e) => {
                  e.stopPropagation()
                  alert(`Button clicked in Row 1`)
                }}
              />
            ) : (
              `None`
            )}
          </DataGridCell>
        </DataGridRow>
      ))}
    </DataGrid>
  ),
  args: {
    items: Array.from({ length: 3 }, (_, i) => ({
      content: `Cell Content ${i + 1}`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can enhance `DataGridRow` by incorporating interactive elements such as `Button`. Remember to add `event.stopPropogation()` to the event handler of the interactive element.",
      },
    },
  },
}

export const SelectedRow: StoryObj<DataGridRowStoryProps> = {
  render: ({ items, ...args }) => (
    <>
      <DataGridRow isSelected {...args}>
        {items.map((item, i) => (
          <DataGridCell {...item} key={i} />
        ))}
      </DataGridRow>
      <DataGridRow {...args}>
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
        story: "When `isSelected` is set, the entire `DataGridRow` persists to be active.",
      },
    },
  },
}
