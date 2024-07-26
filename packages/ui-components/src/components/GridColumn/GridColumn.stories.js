/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { GridColumn } from "./index.js"

export default {
  title: "Layout/Grid/GridColumn",
  component: GridColumn,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <Story className="jn-bg-juno-blue-3 jn-text-juno-grey-blue" />],
}

// for the decorator to work like this (passing props to the story) we have to access the passed props from the decorator
// from the context. This might be storybook 6.x-specific. Double check when we upgrade to storybook 7.x
const Template = (args, context) => <GridColumn {...args} className={context.className}></GridColumn>

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
