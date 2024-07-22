/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import PropTypes from "prop-types"
import React from "react"
import { DataList } from "./index.js"
import { DataListRow } from "../DataListRow/index.js"
import { DataListCell } from "../DataListCell/index.js"
import { Default as DataListRowStory } from "../DataListRow/DataListRow.stories.js"
import { Selectable as SelectableDataListRowStory } from "../DataListRow/DataListRow.stories.js"
import { AutoWidth as AutoWidthDataListRowStory } from "../DataListRow/DataListRow.stories.js"
import { PercentageWidths as PercentageWidthsDataListRowStory } from "../DataListRow/DataListRow.stories.js"
import { GridFitted as GridFittedDataListRowStory } from "../DataListRow/DataListRow.stories.js"

export default {
  title: "Deprecated/DataList/DataList",
  component: DataList,
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
  <DataList {...args}>
    {items.map((item, i) => (
      <DataListRow key={`${i}`}>
        {item.items.map((cell, c) => (
          <DataListCell {...cell} key={`${i}_${c}`} />
        ))}
      </DataListRow>
    ))}
  </DataList>
)
// define prop types for Template
Template.propTypes = {
  items: PropTypes.array,
}

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Default Juno DataList for displaying data",
      },
    },
  },

  args: {
    items: [
      { ...DataListRowStory.args },
      { ...DataListRowStory.args },
      { ...DataListRowStory.args },
      { ...DataListRowStory.args },
      { ...DataListRowStory.args },
    ],
  },
}

export const Selectable = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Selectable Juno DataList for displaying and selecting data",
      },
    },
  },

  args: {
    selectable: true,
    items: [
      { ...SelectableDataListRowStory.args },
      { ...SelectableDataListRowStory.args },
      { ...SelectableDataListRowStory.args },
      { ...SelectableDataListRowStory.args },
      { ...SelectableDataListRowStory.args },
    ],
  },
}

export const Auto = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Juno DataList with one column set to 'auto' to maximize its width",
      },
    },
  },

  args: {
    items: [
      { ...AutoWidthDataListRowStory.args },
      { ...AutoWidthDataListRowStory.args },
      { ...AutoWidthDataListRowStory.args },
      { ...AutoWidthDataListRowStory.args },
      { ...AutoWidthDataListRowStory.args },
    ],
  },
}

export const Percentage = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataList with percentage-based column widths",
      },
    },
  },

  args: {
    items: [
      { ...PercentageWidthsDataListRowStory.args },
      { ...PercentageWidthsDataListRowStory.args },
      { ...PercentageWidthsDataListRowStory.args },
      { ...PercentageWidthsDataListRowStory.args },
      { ...PercentageWidthsDataListRowStory.args },
    ],
  },
}

export const GridFitted = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataList with grid column-based column widths",
      },
    },
  },

  args: {
    items: [
      { ...GridFittedDataListRowStory.args },
      { ...GridFittedDataListRowStory.args },
      { ...GridFittedDataListRowStory.args },
      { ...GridFittedDataListRowStory.args },
      { ...GridFittedDataListRowStory.args },
    ],
  },
}
