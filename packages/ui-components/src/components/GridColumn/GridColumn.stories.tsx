/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { GridColumn, GridColumnProps } from "./GridColumn.component"

export default {
  title: "Layout/Grid/GridColumn",
  component: GridColumn,
  argTypes: {
    children: { control: false },
  },
  decorators: [
    (Story, context) => (
      <div className="juno-container jn:px-6 jn:py-6">
        <Story {...context.args} />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<GridColumnProps> = (args) => {
  return <GridColumn {...args} className={`${args.className} jn:bg-juno-blue-3 jn:text-juno-grey-blue`} />
}

type Story = StoryObj<GridColumnProps>

export const Default: Story = {
  render: Template,
  args: {
    children: "Column",
  },
}

export const AutoColumn: Story = {
  render: Template,
  args: {
    auto: true,
    children: "Auto Column",
  },
}

export const WidthColumn: Story = {
  render: Template,
  args: {
    width: 50,
    children: "Column 50%",
  },
}
