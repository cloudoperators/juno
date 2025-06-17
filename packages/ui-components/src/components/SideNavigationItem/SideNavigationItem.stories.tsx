/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigationItem } from "./index"
import { SideNavigation } from "../SideNavigation/index"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof SideNavigationItem> = {
  title: "Navigation/SideNavigation/SideNavigationItem",
  component: SideNavigationItem,
  argTypes: {
    icon: {
      options: [null, ...Object.keys(KnownIconsEnum)],
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
  decorators: [
    (Story) => (
      <SideNavigation>
        <Story />
      </SideNavigation>
    ),
  ],
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
    label: "Active Navigation Item",
    active: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Navigation Item",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: "Navigation Item With Icon",
    icon: "warning",
  },
}

export const AsLink: Story = {
  args: {
    label: "Navigation Item as Anchor",
    href: "#",
  },
}

export const WithChildren: Story = {
  args: {
    value: "itm-1",
    children: "Item 1",
  },
}
