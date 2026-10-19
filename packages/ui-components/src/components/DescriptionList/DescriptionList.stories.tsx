/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DL } from "./DescriptionList.component"
import { DLC } from "../DescriptionListColumn/DescriptionListColumn.component"
import { DT } from "../DescriptionTerm/DescriptionTerm.component"
import { DD } from "../DescriptionDefinition/DescriptionDefinition.component"

const meta: Meta<typeof DL> = {
  title: "Components/DescriptionList",
  component: DL,
  parameters: {
    docs: {
      description: {
        component: `
A component that contains a list of terms and their corresponding descriptions.

This component enforces structure by expecting child elements of \`DescriptionTerm\` and \`DescriptionDefinition\`.

### Grid Layout
By default, the component uses a two-column grid where the term column sizes to its content and the definition column takes the remaining space. Use the \`termWidth\` prop to set a fixed width for the term column — it accepts any valid CSS length or percentage value (e.g. \`"25%"\`, \`"200px"\`, \`"12rem"\`).

### Multi-column layout
Pass \`multiColumn\` to arrange content side by side. Wrap each column's \`DescriptionTerm\` and \`DescriptionDefinition\` pairs in a \`DescriptionListColumn\`. Each column inherits the parent's \`termWidth\` but can override it individually.
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

export const LeftAligned: Story = {
  render: (args) => (
    <DL alignTerms="left" {...args}>
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

export const TermWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Pass `termWidth` to fix the width of the term column. Accepts any valid CSS length or percentage (e.g. `"25%"`, `"200px"`, `"12rem"`). The definition column takes the remaining space.',
      },
    },
  },
  render: (args) => (
    <DL termWidth="33%" {...args}>
      <DT>Shipping Method</DT>
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

export const MultiColumn: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Pass `multiColumn` to arrange content side by side. Wrap each column's term-definition pairs in a `DescriptionListColumn`. Each column sizes its term to content by default.",
      },
    },
  },
  render: (args) => (
    <DL multiColumn {...args}>
      <DLC>
        <DT>Shipping Method</DT>
        <DD>Standard shipping: 5-7 business days.</DD>
        <DT>Payment Options</DT>
        <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
        <DT>Delivery Time</DT>
        <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      </DLC>
      <DLC>
        <DT>Return Policy</DT>
        <DD>
          Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
          condition.
        </DD>
        <DT>Customer Support</DT>
        <DD>Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.</DD>
      </DLC>
    </DL>
  ),
}

export const MultiColumnTermWidthOverride: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Each `DescriptionListColumn` inherits `termWidth` from the parent `DescriptionList`, but can override it individually. Here the parent sets `"25%"`, the middle column overrides to `"auto"`, and the right column to `"60%"`.',
      },
    },
  },
  render: (args) => (
    <DL multiColumn termWidth="25%" {...args}>
      <DLC>
        <DT>Shipping Method</DT>
        <DD>Standard shipping: 5-7 business days.</DD>
        <DT>Payment Options</DT>
        <DD>Credit/Debit cards, PayPal, and bank transfer.</DD>
        <DT>Delivery Time</DT>
        <DD>Estimated delivery between 1 to 3 business days after shipping.</DD>
      </DLC>
      <DLC termWidth="auto">
        <DT>Return Policy</DT>
        <DD>
          Returns are accepted within 30 days of purchase. Items must be returned in their original packaging and
          condition.
        </DD>
        <DT>Customer Support</DT>
        <DD>Available via phone, email, and live chat from 9 AM to 6 PM, Monday to Friday.</DD>
      </DLC>
      <DLC termWidth="60%">
        <DT>Warranty</DT>
        <DD>All products come with a 2-year manufacturer warranty covering defects and malfunctions.</DD>
        <DT>Gift Wrapping</DT>
        <DD>Available at checkout for an additional fee.</DD>
      </DLC>
    </DL>
  ),
}

export const MultipleDefinitions: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A single term can have multiple definitions. Since the default two-column grid would misplace additional `DD` elements, use `gridColumnTemplate` to define a custom `grid-template-columns` value that allocates a track for each definition. `gridColumnTemplate` is the general escape hatch for any layout that `termWidth` cannot cover.",
      },
    },
  },
  render: (args) => (
    <DL gridColumnTemplate="auto 1fr 1fr 1fr" {...args}>
      <DT>Shipping Method</DT>
      <DD>Standard shipping</DD>
      <DD>Livraison standard</DD>
      <DD>Spedizione standard</DD>
      <DT>Payment Options</DT>
      <DD>Credit/Debit cards, PayPal, and bank transfer</DD>
      <DD>Cartes de crédit, PayPal et virement bancaire</DD>
      <DD>Carte di credito, PayPal e bonifico bancario</DD>
      <DT>Delivery Time</DT>
      <DD>1–3 business days</DD>
      <DD>1–3 jours ouvrables</DD>
      <DD>1–3 giorni lavorativi</DD>
    </DL>
  ),
}
