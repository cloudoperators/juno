/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid } from "../DataGrid/index.js"
import { DataGridRow } from "../DataGridRow/index.js"
import { DataGridCell } from "./index.js"

export default {
  title: "Components/DataGrid/DataGridCell",
  component: DataGridCell,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (story) => (
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

const Template = (args) => <DataGridCell {...args}></DataGridCell>

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCell for use in DataGrid",
      },
    },
  },

  args: {
    children: ["DataGridCell"],
  },
}

export const NoWrap = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCell with nowrap option (content has white-space: nowrap;)",
      },
    },
  },

  args: {
    nowrap: true,
    children: ["DataGridCell does not wrap"],
  },
}

export const ColSpan = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCell with colspan",
      },
    },
  },

  args: {
    colSpan: 3,
    children: ["DataGridCell with colspan"],
  },
}
