/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { GridColumn } from "./GridColumn.component"

const meta: Meta<typeof GridColumn> = {
  title: "Layout/Grid/GridColumn",
  component: GridColumn,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story, context) => (
      <div className="juno-container jn-px-6 jn-py-6">
        <Story {...context.args} />
      </div>
    ),
  ],
  render: (args) => {
    return <GridColumn {...args} className={`${args.className} jn-bg-juno-blue-3 jn-text-juno-grey-blue`} />
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Column",
  },
}

export const AutoColumn: Story = {
  args: {
    auto: true,
    children: "Auto Column",
  },
}

export const WidthColumn: Story = {
  args: {
    width: 50,
    children: "Column 50%",
  },
}
