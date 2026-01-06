/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DescriptionList } from "./DescriptionList.component"
import { DT } from "../DescriptionTerm/DescriptionTerm.component"
import { DD } from "../DescriptionDefinition/DescriptionDefinition.component"

const meta: Meta<typeof DescriptionList> = {
  title: "Components/DescriptionList",
  component: DescriptionList,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof DescriptionList>

export const Default: Story = {
  render: (args) => (
    <DescriptionList {...args}>
      <DT>Warranty</DT>
      <DD>2 years limited warranty with options for extension.</DD>
    </DescriptionList>
  ),
}

/**
 * You can use many definitions per term.
 */
export const MultipleDefinitions: Story = {
  render: (args) => (
    <DescriptionList {...args}>
      <DT>Shipping</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
      <div className="">
        <DT>Delivery Time</DT>
        <DD>1 day, 2 days, 3 days.</DD>
      </div>
    </DescriptionList>
  ),
}
