/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { NavigationItem } from "./index"
import { Navigation } from "../Navigation/index"

const meta: Meta<typeof NavigationItem> = {
  title: "Internal/Navigation/NavigationItem",
  component: NavigationItem,
  decorators: [
    (Story) => (
      <Navigation>
        <Story />
      </Navigation>
    ),
  ],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithChildren: Story = {
  args: {
    children: "Navigation Item",
  },
}

export const WithValueAndLabel: Story = {
  args: {
    value: "item-1",
    label: "Navigation Item 1",
  },
}

export const ActiveItem: Story = {
  args: {
    active: true,
    children: "Active Item",
  },
}

export const DisabledItem: Story = {
  args: {
    disabled: true,
    children: "Disabled Item",
  },
}

export const ItemAsLink: Story = {
  args: {
    href: "https://www.sap.com",
    children: "This item is a link",
  },
}

export const DisabledLinkItem: Story = {
  args: {
    href: "https://www.sap.com",
    children: "This item is a link",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    icon: "warning",
  },
}
