/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DataGridRow } from './index.js';
import { DataGridCell } from '../DataGridCell/index.js';
import { Default as DataGridCellStory } from '../DataGridCell/DataGridCell.stories.js';
import { DataGrid } from '../DataGrid/index.js';

const columns = 5;

export default {
  title: 'Components/DataGrid/DataGridRow',
  component: DataGridRow,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
  decorators: [(story) => <DataGrid columns={columns}>{story()}</DataGrid>],
  parameters: {
    docs: {
      source: {
        excludeDecorators: false,
      },
    },
  },
};

const Template = ({ items, ...args }) => (
  <DataGridRow {...args}>
    {items.map((item, i) => (
      <DataGridCell {...item} key={`${i}`} />
    ))}
  </DataGridRow>
);

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'Juno DataGridRow for use in DataGrid',
      },
    },
  },

  args: {
    items: Array(columns).fill({ ...DataGridCellStory.args }),
  },
};
