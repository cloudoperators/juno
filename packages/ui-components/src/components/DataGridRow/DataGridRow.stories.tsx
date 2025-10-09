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

export const HoverableRow: StoryObj<DataGridRowStoryProps> = {
  render: ({ items, ...args }) => (
    <>
      <DataGridRow {...args}>
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
        story:
          "When `onClick` is set, the entire DataGridRow exhibits visual feedback on hover, enhancing interactivity.",
      },
    },
  },
}

export const HoverableRowWithInteractableElements: StoryObj<DataGridRowStoryProps> = {
  render: ({ ...args }) => (
    <>
      <DataGridRow {...args} onClick={() => alert("DataGridRow Event!")}>
        <DataGridCell>
          <Button
            label="Trigger button event only"
            onClick={(e) => {
              e.stopPropagation()
              alert("Only the `Button` event has been triggered!")
            }}
          />
        </DataGridCell>
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
