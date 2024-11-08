/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { StoryFn, Meta } from "@storybook/react"
import { Grid, GridProps } from "./Grid.component"
import { GridRow } from "../GridRow/GridRow.component"
import { GridColumn } from "../GridColumn/GridColumn.component"

export default {
  title: "Layout/Grid/Grid",
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story, context) => {
      const storyParams = context.parameters
      return (
        <div className="juno-container jn-px-6 jn-py-6">
          <Story {...storyParams} />
        </div>
      )
    },
  ],
} as Meta

const Template: StoryFn<GridProps> = (args, context) => (
  <Grid {...args} className={`${args.className} ${context.className || ""}`} />
)

export const Default = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`.",
      },
    },
  },
  args: {
    children: [
      <GridRow key="1">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>,
      <GridRow key="2">
        <GridColumn>Column</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
        <GridColumn cols={5}>Column cols-5</GridColumn>
        <GridColumn cols={2}>Column cols-2</GridColumn>
      </GridRow>,
    ],
  },
}

export const Auto = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size.",
      },
    },
  },
  args: {
    auto: true,
    children: [
      <GridRow key="1">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>,
      <GridRow key="2">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>,
      <GridRow key="3">
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
        <GridColumn>Column</GridColumn>
      </GridRow>,
    ],
  },
}

export const MixedGrid = {
  render: Template,
  args: {
    children: (
      <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
    ),
  },
}

export const MixedAutoGrid = {
  render: Template,
  args: {
    auto: true,
    children: (
      <GridRow>
        <GridColumn>Column</GridColumn>
        <GridColumn auto>Auto Column</GridColumn>
        <GridColumn width={10}>Column 10%</GridColumn>
        <GridColumn cols={3}>Column cols-3</GridColumn>
      </GridRow>
    ),
  },
}

export const NestedGrid = {
  render: Template,
  args: {
    children: (
      <GridRow>
        <GridColumn cols={3}>Column cols-3</GridColumn>
        <GridColumn cols={9}>
          <Grid>
            <GridRow>
              <GridColumn width={33.333333} className="bg-juno-blue-2">
                Nested Column 33.333333%
              </GridColumn>
              <GridColumn width={66.666666} className="bg-juno-blue-2">
                Nested Column 66.666666%
              </GridColumn>
            </GridRow>
          </Grid>
        </GridColumn>
      </GridRow>
    ),
  },
}
