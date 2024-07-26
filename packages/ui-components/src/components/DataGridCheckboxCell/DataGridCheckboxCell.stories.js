/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGrid } from "../DataGrid/index.js"
import { DataGridRow } from "../DataGridRow/index.js"
import { DataGridCheckboxCell } from "./index.js"

export default {
  title: "WiP/DataGrid/DataGridCheckboxCell",
  component: DataGridCheckboxCell,
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

const Template = (args) => <DataGridCheckboxCell {...args}></DataGridCheckboxCell>

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridCheckboxCell for use in DataGrid",
      },
    },
  },

  args: {},
}

export const Disabled = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Disabled Juno DataGridCheckboxCell for use in DataGrid",
      },
    },
  },

  args: {
    disabled: true,
  },
}
