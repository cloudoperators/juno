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
      <DD>Express shipping: 2-3 business days.</DD>
      <DT>Payment Options</DT>
      <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
    </DescriptionList>
  ),
}

export const GroupedDefinitions: Story = {
  render: (args) => (
    <DescriptionList {...args}>
      <div>
        <DT>Privacy Policy</DT>
        <DD>We value your privacy and ensure data protection.</DD>
        <DD>Your information will not be shared without consent.</DD>
        <DD>Regular audits are conducted for security assurance.</DD>
      </div>
      <div>
        <DT>Terms of Service</DT>
        <DD>By using our services, you agree to our terms.</DD>
      </div>
    </DescriptionList>
  ),
}

/**
 * You can wrap a term with multiple definitions in a <div> for grouping.
 */
export const UserProfileDetails: Story = {
  render: (args) => (
    <DescriptionList {...args}>
      <div>
        <DT>Full Name</DT>
        <DD>John Doe</DD>
      </div>
      <div>
        <DT>Email</DT>
        <DD>johndoe@example.com</DD>
      </div>
      <div>
        <DT>Membership</DT>
        <DD>Platinum Member</DD>
        <DD>Joined: January 2020</DD>
      </div>
      <div>
        <DT>Preferences</DT>
        <DD>Language: English</DD>
        <DD>Theme: Dark</DD>
      </div>
    </DescriptionList>
  ),
}
