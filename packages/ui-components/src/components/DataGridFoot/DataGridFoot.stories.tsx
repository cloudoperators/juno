/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DataGridFoot } from "./index"

const meta: Meta<typeof DataGridFoot> = {
  title: "WiP/DataGrid/DataGridFoot",
  component: DataGridFoot,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [(Story) => <table>{Story()}</table>],
  parameters: {
    docs: {
      source: {
        excludeDecorators: false,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <DataGridFoot {...args}>
      {/* {items.map((item, i) => (
        <DataGridFootRow key={`f_${i}`}>
          {item.items.map((cell, c) => (
            <DataGridCell {...cell} key={`f_${i}_${c}`} />
          ))}
        </DataGridFootRow>
      ))} */}
    </DataGridFoot>
  ),
  parameters: {
    docs: {
      description: {
        story: "Juno DataGridFoot for use in DataGrid",
      },
    },
  },
  args: {},
}
