/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridToolbar, DataGridToolbarProps } from "./index"

export default {
  title: "Components/DataGrid/DataGridToolbar",
  component: DataGridToolbar,
  argTypes: {
    children: {
      control: { type: "text" },
    },
    search: {
      control: { type: "text" },
    },
  },
}

const Template = (args: DataGridToolbarProps) => (
  <DataGridToolbar {...args}>
    <button>Add</button>
  </DataGridToolbar>
)

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Optional toolbar for use in DataGrid. Use ButtonRow for multiple buttons",
      },
    },
  },

  args: {},
}
