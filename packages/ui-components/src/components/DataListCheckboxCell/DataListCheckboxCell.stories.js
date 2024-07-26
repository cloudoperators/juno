/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DataListCheckboxCell } from "./index.js"

export default {
  title: "Deprecated/DataList/DataListCheckboxCell",
  component: DataListCheckboxCell,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "DataList is deprecated and will be removed. Please use DataGrid instead.",
      },
    },
  },
}

const Template = (args) => <DataListCheckboxCell {...args}></DataListCheckboxCell>

export const Default = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Juno DataListCheckboxCell for use in DataList",
      },
    },
  },

  args: {},
}

export const Disabled = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "Disabled Juno DataListCheckboxCell for use in DataList",
      },
    },
  },

  args: {
    disabled: true,
  },
}
