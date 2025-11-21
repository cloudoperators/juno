/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DL } from "./DescriptionList.component"
import { DT } from "../DescriptionTerm/DescriptionTerm.component"
import { DD } from "../DescriptionDefinition/DescriptionDefinition.component"

const meta: Meta<typeof DL> = {
  title: "Components/Description/DescriptionList",
  component: DL,
  argTypes: {
    children: {
      control: false,
      description: "Elements containing DescriptionTerm and DescriptionDefinition components.",
    },
  },
}

export default meta
type Story = StoryObj<typeof DL>

export const Default: Story = {
  render: (args) => (
    <DL {...args}>
      <DT>Term 1</DT>
      <DD>Description for term 1.</DD>
      <DT>Term 2</DT>
      <DD>Description for term 2.</DD>
    </DL>
  ),
}

export const MultipleDefinitions: Story = {
  render: (args) => (
    <DL {...args}>
      <DT>Term 1</DT>
      <DD>First description for term 1.</DD>
      <DD>Second description for term 1.</DD>
      <DT>Term 2</DT>
      <DD>Only description for term 2.</DD>
    </DL>
  ),
}
