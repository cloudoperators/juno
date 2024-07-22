/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataGridFoot } from "./index.js"

export default {
  title: "WiP/DataGrid/DataGridFoot",
  component: DataGridFoot,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(story) => <table>{story()}</table>],
  parameters: {
    docs: {
      source: {
        excludeDecorators: false,
      },
    },
  },
}

const Template = ({ /*items,*/ ...args }) => (
  <DataGridFoot {...args}>
    {/* {items.map((item, i) => (
      <DataGridFootRow key={`f_${i}`}>
        {item.items.map((cell, c) => (
          <DataGridCell {...cell} key={`f_${i}_${c}`} />
        ))}
      </DataGridFootRow>
    ))} */}
  </DataGridFoot>
)

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataGridFoot for use in DataGrid",
      },
    },
  },

  args: {},
}
