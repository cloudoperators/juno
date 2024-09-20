/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridRow } from "./index"
import { DataGridCell } from "../DataGridCell/index"
import { Default as DataGridCellStory } from "../DataGridCell/DataGridCell.stories"
import { DataGrid, DataGridProps } from "../DataGrid/index"

const columns = 5

type StoryFunction = () => JSX.Element

export default {
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
    },
  },
  decorators: [(story: StoryFunction) => <DataGrid columns={columns}>{story()}</DataGrid>],
  parameters: {
    docs: {
      source: {
        excludeDecorators: false,
      },
    },
  },
}

const Template = ({ items, ...args }: TemplateProps) => (
  <DataGridRow {...args}>
    {items.map((item, i) => (
      <DataGridCell {...item} key={`${i}`} />
    ))}
  </DataGridRow>
)

interface TemplateProps {
  items: DataGridProps[]
}

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridRow for use in DataGrid",
      },
    },
  },

  args: {
    items: Array(columns).fill({ ...DataGridCellStory.args }),
  },
}
