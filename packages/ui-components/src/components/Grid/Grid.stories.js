/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Grid } from './index.js';
import { GridRow } from '../GridRow/GridRow.component.js';
import { GridColumn } from '../GridColumn/GridColumn.component.js';

export default {
  title: 'Layout/Grid/Grid',
  component: Grid,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <Story className="jn-bg-juno-blue-3 jn-text-juno-grey-blue" />],
};

// for the decorator to work like this (passing props to the story) we have to access the passed props from the decorator
// from the context. This might be storybook 6.x-specific. Double check when we upgrade to storybook 7.x
const Template = (args, context) => <Grid {...args} className={context.className}></Grid>;

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          'By default, Juno uses a 12-column fluid grid. Columns can be made to span multiple columns by passing `cols={n}`.',
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
        <GridColumn cols={5}>Column cols-6</GridColumn>
        <GridColumn cols={2}>Column cols-2</GridColumn>
      </GridRow>,
    ],
  },
};

export const Auto = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          'By passing `auto` to the grid, all of its contained columns will automatically size to share available space equally. Columns with `cols={n}` will switch their behaviour to auto-size.',
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
        <GridColumn>Column</GridColumn>
      </GridRow>,
    ],
  },
};

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
};

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
};

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
};
