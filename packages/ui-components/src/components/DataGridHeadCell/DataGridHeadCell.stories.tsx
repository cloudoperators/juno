/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid } from "../DataGrid/index"
import { DataGridRow } from "../DataGridRow/index"
import { DataGridHeadCell, DataGridHeadCellProps } from "./index"

type StoryFunction = () => React.ReactNode

export default {
  title: "Components/DataGrid/DataGridHeadCell",
  component: DataGridHeadCell,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (story: StoryFunction) => (
      <DataGrid columns={3}>
        <DataGridRow>{story()}</DataGridRow>
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

const Template = (args: DataGridHeadCellProps) => <DataGridHeadCell {...args}></DataGridHeadCell>

export const Default = {
  render: Template,

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

export const NoWrap = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridHeadCell with nowrap option (content has white-space: nowrap;)",
      },
    },
  },

  args: {
    nowrap: true,
    children: ["DataGridHeadCell does not wrap"],
  },
}

export const ColSpan = {
  render: Template,

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
