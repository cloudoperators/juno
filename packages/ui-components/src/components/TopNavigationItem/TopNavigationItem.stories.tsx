/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { TopNavigation } from "../TopNavigation/index"
import { TopNavigationItem } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof TopNavigationItem> = {
  title: "Navigation/TopNavigation/TopNavigationItem",
  component: TopNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...Object.values(KnownIconsEnum)],
      control: { type: "select" },
    },
    onClick: {
      control: false,
    },
    children: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
  },
  render: (args) => (
    <TopNavigation>
      <TopNavigationItem {...args} />
    </TopNavigation>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Navigation Item",
  },
}

export const Active: Story = {
  args: {
    label: "Navigation Item",
    active: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Disabled Item",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Navigation Item",
    icon: "warning",
  },
}

export const AsLink: Story = {
  args: {
    label: "Navigation Item",
    href: "#",
  },
}

export const WithChildren: Story = {
  args: {
    value: "itm-1",
    children: "Item 1",
  },
}
