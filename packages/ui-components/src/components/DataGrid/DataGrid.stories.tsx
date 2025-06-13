/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGrid } from "./index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridCell } from "../DataGridCell/index"
import { DataGridHeadCell } from "../DataGridHeadCell/index"

const defaultColumns = 3

type TemplateProps = {
  hideHead?: boolean
  includeColSpanRow?: boolean
} & React.ComponentProps<typeof DataGrid>

const meta: Meta<typeof DataGrid> = {
  title: "Components/DataGrid/DataGrid",
  component: DataGrid,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}
export default meta

const Template = (args: TemplateProps) => {
  const { hideHead, includeColSpanRow, columns = defaultColumns } = args

  return (
    <DataGrid {...args}>
      {!hideHead && (
        <DataGridRow>
          {[...Array<unknown>(columns)].map((_, c) => (
            <DataGridHeadCell key={`h_${c}`}>{`Head cell ${c}`}</DataGridHeadCell>
          ))}
        </DataGridRow>
      )}

      {!includeColSpanRow &&
        [...Array<unknown>(4)].map((_, r) => (
          <DataGridRow key={`b_${r}`}>
            {[...Array<unknown>(columns)].map((_, c) => (
              <DataGridCell key={`b_${r}_${c}`}>
                {c === columns - 2 ? `Cell ${r}-${c} has more content than others` : `Cell ${r}-${c}`}
              </DataGridCell>
            ))}
          </DataGridRow>
        ))}

      {includeColSpanRow && (
        <DataGridRow>
          <DataGridCell colSpan={columns}>This is a cell with colspan spanning all available columns</DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}

export const Default: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
  },
  parameters: {
    docs: {
      description: {
        story: "Juno DataGrid for displaying data. Example with 5 columns.",
      },
    },
  },
}

export const EqualColumnSize: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
    columnMaxSize: "1fr",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others",
      },
    },
  },
}

export const ColumnMinSize: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
    columnMinSize: "300px",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore",
      },
    },
  },
}

export const MinimumSizedColumns: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
    minContentColumns: [0, 4],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button",
      },
    },
  },
}

export const CustomGridTemplate: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    gridColumnTemplate: `20% repeat(${defaultColumns - 1}, auto)`,
    columns: defaultColumns,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored",
      },
    },
  },
}

export const NoHead: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
    hideHead: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Without head cells",
      },
    },
  },
}

export const ColSpanCell: StoryObj<TemplateProps> = {
  render: Template,
  args: {
    columns: 5,
    includeColSpanRow: true,
  },
  parameters: {
    docs: {
      description: {
        story: "With a col span cell",
      },
    },
  },
}
