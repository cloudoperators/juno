/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { GridRow } from "./index.js"
import { GridColumn } from "../GridColumn/GridColumn.component.js"

export default {
  title: "Layout/Grid/GridRow",
  component: GridRow,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(Story) => <Story className="jn-bg-juno-blue-3 jn-text-juno-grey-blue" />],
}

// for the decorator to work like this (passing props to the story) we have to access the passed props from the decorator
// from the context. This might be storybook 6.x-specific. Double check when we upgrade to storybook 7.x
const Template = ({ /*columns,*/ ...args }, context) => <GridRow {...args} className={context.className}></GridRow>

Template.propTypes = {
  columns: PropTypes.number,
}

export const Default = {
  render: Template,

  args: {
    children: [
      <GridColumn key="1">Column</GridColumn>,
      <GridColumn key="2">Column</GridColumn>,
      <GridColumn key="3">Column</GridColumn>,
      <GridColumn key="4">Column</GridColumn>,
      <GridColumn key="5">Column</GridColumn>,
      <GridColumn key="6">Column</GridColumn>,
      <GridColumn key="7">Column</GridColumn>,
      <GridColumn key="8">Column</GridColumn>,
      <GridColumn key="9">Column</GridColumn>,
      <GridColumn key="10">Column</GridColumn>,
      <GridColumn key="11">Column</GridColumn>,
      <GridColumn key="12">Column</GridColumn>,
    ],
  },
}
