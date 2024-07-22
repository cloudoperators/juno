/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { DataListRow } from "./index.js"
import { DataListCell } from "../DataListCell/index.js"
import { DataListCheckboxCell } from "../DataListCheckboxCell/index.js"
import { Default as DataListCellStory } from "../DataListCell/DataListCell.stories.js"

export default {
  title: "Deprecated/DataList/DataListRow",
  component: DataListRow,
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
  parameters: {
    docs: {
      description: {
        component:
          "DataList is deprecated and will be removed. Please use DataGrid instead.",
      },
    },
  },
}

const Template = ({ items, ...args }) => (
  <DataListRow {...args}>
    {items.map((item, i) => (
      <DataListCell {...item} key={`${i}`} />
    ))}
  </DataListRow>
)

Template.propTypes = {
  items: PropTypes.array,
}

const SelectableTemplate = ({ items, ...args }) => (
  <DataListRow {...args}>
    <DataListCheckboxCell />
    {items.map((item, i) => (
      <DataListCell {...item} key={`${i}`} />
    ))}
  </DataListRow>
)

SelectableTemplate.propTypes = {
  items: PropTypes.array,
}

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataListRow for displaying data",
      },
    },
  },

  args: {
    items: [
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
    ],
  },
}

export const Selectable = {
  render: SelectableTemplate,

  parameters: {
    docs: {
      description: {
        story:
          "Selectable DataListRow for displaying and selecting data. Note that highlighting the row will not work when rendered outside a DataList. ",
      },
    },
  },

  args: {
    items: [
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
    ],
  },
}

export const AutoWidth = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Row with one cell set to 'auto' in oder to maximize its width",
      },
    },
  },

  args: {
    items: [
      { ...DataListCellStory.args },
      { ...DataListCellStory.args, auto: true, children: "Auto DataListCell" },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
      { ...DataListCellStory.args },
    ],
  },
}

export const PercentageWidths = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Row with Cells set to individual percentage widths",
      },
    },
  },

  args: {
    items: [
      { ...DataListCellStory.args, width: 10 },
      { ...DataListCellStory.args, width: 45 },
      { ...DataListCellStory.args, width: 25 },
      { ...DataListCellStory.args, width: 10 },
      { ...DataListCellStory.args, width: 10 },
    ],
  },
}

export const GridFitted = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Row with cells fitted to the Grid",
      },
    },
  },

  args: {
    items: [
      { ...DataListCellStory.args, cols: 1, children: "cols 1" },
      { ...DataListCellStory.args, cols: 6, children: "cols 6" },
      { ...DataListCellStory.args, cols: 3, children: "cols 3" },
      { ...DataListCellStory.args, cols: 2, children: "cols 2" },
    ],
  },
}
