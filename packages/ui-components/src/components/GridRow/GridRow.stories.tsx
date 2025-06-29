/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { GridRow } from "./GridRow.component"
import { GridColumn } from "../GridColumn/GridColumn.component"

const meta: Meta<typeof GridRow> = {
  title: "Layout/Grid/GridRow",
  component: GridRow,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="jn:bg-juno-blue-3 jn:text-juno-grey-blue">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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
