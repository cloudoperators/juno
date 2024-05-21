/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DataGrid } from './index.js';
import { DataGridRow } from '../DataGridRow/index.js';
import { DataGridCell } from '../DataGridCell/index.js';
// import { DataGridCheckboxCell } from "../DataGridCheckboxCell/index.js"
import { DataGridHeadCell } from '../DataGridHeadCell/index.js';
import { ContentArea } from '../ContentArea/index.js';
import { Container } from '../Container/index.js';
import { PreseletedWithSearch as FiltersStory } from '../Filters/Filters.stories';
import { Filters } from '../Filters/index.js';
import { DataGridToolbar } from '../DataGridToolbar/index.js';
import { Default as DataGridToolbarStory } from '../DataGridToolbar/DataGridToolbar.stories';
import { Button } from '../Button/index.js';

export default {
  title: 'Components/DataGrid/DataGrid',
  component: DataGrid,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const defaultColumns = 3;

const Template = ({ hideHead, includeColSpanRow, withToolbar, withFilters, ...args }) => (
  <>
    {withFilters && <Filters {...FiltersStory.args}></Filters>}
    {withToolbar && (
      <DataGridToolbar {...DataGridToolbarStory.args}>
        <Button variant="primary">Add new</Button>
      </DataGridToolbar>
    )}
    <DataGrid {...args}>
      {!hideHead && (
        <DataGridRow>
          {[...Array(args.columns || defaultColumns)].map((_, c) => (
            <DataGridHeadCell key={`h_${c}`}>{`Head cell ${c}`}</DataGridHeadCell>
          ))}
        </DataGridRow>
      )}
      {!includeColSpanRow &&
        [...Array(4)].map((_, r) => (
          <DataGridRow key={`b_${r}`}>
            {[...Array(args.columns || defaultColumns)].map((_, c) => (
              <DataGridCell key={`b_${r}_${c}`}>
                {c === args.columns - 2
                  ? `Cell ${r}-${c} has more content than others`
                  : `Cell ${r}-${c}`}
              </DataGridCell>
            ))}
          </DataGridRow>
        ))}
      {includeColSpanRow && (
        <DataGridRow>
          <DataGridCell colSpan={args.columns}>
            This is a cell with colspan spanning all available columns
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  </>
);

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'Juno DataGrid for displaying data. Example with 5 columns.',
      },
    },
  },

  args: {
    columns: 5,
  },
};

export const EqualColumnSize = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Example: change column max size to '1fr'. This ensures that all columns get the same width, even if some columns have more content than others",
      },
    },
  },

  args: {
    columns: 5,
    columnMaxSize: '1fr',
  },
};

export const ColumnMinSize = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Example: set a minimum width for columns. Columns will always be at least this wide, even if they have very little content. This may cause horizontal scrollbars if the DataGrid doesn't fit into the container anymore",
      },
    },
  },

  args: {
    columns: 5,
    columnMinSize: '300px',
  },
};

export const MinimumSizedColumns = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          'Example: specify some columns that should be as small as possible (typically used for when you have a cell that contains only a button and you want to ensure the cell is only exactly as wide as the button',
      },
    },
  },

  args: {
    columns: 5,
    minContentColumns: [0, 4],
  },
};

export const CustomGridTemplate = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Example: specify a completely custom css grid column template. The value passed is used for the css 'grid-template-columns' property. All other settings are ignored",
      },
    },
  },

  args: {
    gridColumnTemplate: `20% repeat(${defaultColumns - 1}, auto)`,
  },
};

export const NoHead = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'Without head cells',
      },
    },
  },

  args: {
    columns: 5,
    hideHead: true,
  },
};

export const ColSpanCell = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'With a col span cell',
      },
    },
  },

  args: {
    columns: 5,
    includeColSpanRow: true,
  },
};

export const WithToolbar = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'With toolbar',
      },
    },
  },

  args: {
    columns: 5,
    withToolbar: true,
  },
};

export const WithFilters = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'With filters',
      },
    },
  },

  args: {
    columns: 5,
    withFilters: true,
  },
};

export const WithToolbarAndFilters = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'With toolbar and filters',
      },
    },
  },

  args: {
    columns: 5,
    withFilters: true,
    withToolbar: true,
  },
};
