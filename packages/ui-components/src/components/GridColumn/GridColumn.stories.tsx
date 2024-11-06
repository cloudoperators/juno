/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { StoryFn, Meta } from "@storybook/react"

import { GridColumn, GridColumnProps } from "./GridColumn.component" // Ensure the type is imported correctly

export default {
  title: "Layout/Grid/GridColumn",
  component: GridColumn,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="jn-bg-juno-blue-3 jn-text-juno-grey-blue">
        <Story />
      </div>
    ),
  ],
} as Meta

const Template: StoryFn<GridColumnProps> = (args) => <GridColumn {...args} />

export const Default = {
  render: Template,
  args: {
    children: "Column",
  },
}

export const AutoColumn = {
  render: Template,
  args: {
    auto: true,
    children: "Auto Column",
  },
}

export const WidthColumn = {
  render: Template,
  args: {
    width: 50,
    children: "Column 50%",
  },
}
