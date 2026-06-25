/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card } from "./Card.component"

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Some content in a Card with padding.",
    padding: true,
    onClick: undefined,
  },
}

export const WithClickEvent: Story = {
  args: {
    children:
      "Card rendered as <button> when onClick is passed (with padding). Note: Rendered as <a> when href is passed.",
    padding: true,
    onClick: () => alert("You clicked a card with an onClick event."),
  },
}

export const WithHref: Story = {
  args: {
    children: "Card rendered as <a> when href is passed (with padding).",
    padding: true,
    onClick: undefined,
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs",
  },
}

export const WithHrefAndClickEvent: Story = {
  args: {
    children: "Card rendered as <a> when href and onClick are passed (with padding).",
    padding: true,
    onClick: () => alert("You clicked the card."),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs",
  },
}

export const Disabled: Story = {
  args: {
    children: "Disabled card (with href, onClick and padding).",
    padding: true,
    onClick: () => alert("This card should be disabled"),
    href: "https://cloudoperators.github.io/juno/?path=/docs/components-card--docs",
    disabled: true,
  },
}

export const WithoutPadding: Story = {
  args: {
    children: "A Card without padding.",
    onClick: undefined,
  },
}

export const InteractiveHover: Story = {
  args: {
    children: "Hover or click me to see the interactive states.",
    padding: true,
    onClick: () => {},
  },
}
