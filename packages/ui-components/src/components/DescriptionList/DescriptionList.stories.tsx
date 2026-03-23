/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DL } from "./DescriptionList.component"
import { DT } from "../DescriptionTerm/DescriptionTerm.component"
import { DD } from "../DescriptionDefinition/DescriptionDefinition.component"

const meta: Meta<typeof DL> = {
  title: "Components/DescriptionList",
  component: DL,
  parameters: {
    docs: {
      description: {
        component: `
A wrapper component that semantically represents a list of terms and their corresponding descriptions. 

This component enforces structure by expecting child elements of \`DescriptionTerm\` or \`DescriptionDefinition\`.

### Grid Layout
- By default, the component uses a 4-column grid layout where each \`DescriptionTerm\` spans 1 column and each \`DescriptionDefinition\` spans 3 columns.
- Customize the grid template by passing other Tailwind CSS grid classes via the \`className\` prop to override the defaults.

#### Example
\`\`\`jsx
<DL className="jn:grid-cols-2">
  <DT className="jn:col-span-1">Shipping Method</DT>
  <DD className="jn:col-span-2">Standard shipping: 5-7 business days.</DD>
</DL>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof DL>

export const Default: Story = {
  render: (args) => (
    <DL {...args}>
      <DT>Shipping</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots and lots of options. Oh so many, many options.
      </DD>
      <DT>Delivery Time</DT>
      <DD>1 day, 2 days, 3 days.</DD>
    </DL>
  ),
}

export const RightAligned: Story = {
  render: (args) => (
    <DL alignTerms="right" {...args}>
      <DT>Shipping Method</DT>
      <DD>Standard shipping: 5-7 business days.</DD>
      <DT>Payment Options</DT>
      <DD>
        Credit/Debit cards, PayPal, and bank transfer. Lots and lots of options available for a seamless transaction
        experience.
      </DD>
      <DT>Delivery Time</DT>
      <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      <DT>Return Policy</DT>
      <DD>
        Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
        condition.
      </DD>
      <DT>Customer Support</DT>
      <DD>
        Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday. Our support team is ready to
        assist with any inquiries.
      </DD>
    </DL>
  ),
}
