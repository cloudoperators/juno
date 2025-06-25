/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Navigation, NavigationProps } from "./index"
import { NavigationItem } from "../NavigationItem/index"

const Template = ({ children, ...props }: NavigationProps) => <Navigation {...props}>{children}</Navigation>

const meta: Meta<NavigationProps> = {
  title: "Internal/Navigation",
  component: Navigation,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onActiveItemChange: {
      control: false,
      table: {
        type: { summary: "(value: ReactNode) => void" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const DefaultWithChildren: Story = {
  render: Template,
  args: {
    activeItem: "Item 1",
    children: [
      <NavigationItem key="i-1">Item 1</NavigationItem>,
      <NavigationItem key="i-2">Item 2</NavigationItem>,
      <NavigationItem key="i-3">Item 3</NavigationItem>,
      <NavigationItem key="i-4" disabled>
        Item 4
      </NavigationItem>,
    ],
  },
}

export const WithValuesAndLabels: Story = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="i-1" label="Item 1" />,
      <NavigationItem key="i-2" value="i-2" label="Item 2" />,
      <NavigationItem key="i-3" value="i-3" label="Item 3" />,
    ],
  },
}

export const WithValuesLabelsAndChildren: Story = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="i-1" label="Item 1 Label">
        Item 1
      </NavigationItem>,
      <NavigationItem key="i-2" value="i-2" label="Item 2 Label">
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3" value="i-3" label="Item 3 Label">
        Item 3
      </NavigationItem>,
    ],
  },
}

export const ValuesOnly: Story = {
  render: Template,
  args: {
    children: [
      <NavigationItem key="i-1" value="Item 1" />,
      <NavigationItem key="i-2" value="Item 2" active />,
      <NavigationItem key="i-3" value="Item 3" />,
    ],
  },
}

export const WithActiveItemByValue: Story = {
  render: Template,
  args: {
    activeItem: "item-2",
    children: [
      <NavigationItem key="i-1" value="item-1" label="Item 1" />,
      <NavigationItem key="i-2" value="item-2" label="Item 2" />,
      <NavigationItem key="i-3" value="item-3" label="Item 3" />,
    ],
  },
}

export const WithActiveItemByLabel: Story = {
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [
      <NavigationItem key="i-1" value="item-1" label="Item 1" />,
      <NavigationItem key="i-2" value="item-2" label="Item 2" />,
      <NavigationItem key="i-3" value="item-3" label="Item 3" />,
    ],
  },
}

export const WithActiveItemByChild: Story = {
  render: Template,
  args: {
    activeItem: "Item 2",
    children: [
      <NavigationItem key="i-1" value="itm-1">
        Item 1
      </NavigationItem>,
      <NavigationItem key="i-2" value="itm-2">
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3" value="itm-3">
        Item 3
      </NavigationItem>,
    ],
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
    children: [
      <NavigationItem key="i-1">Item 1</NavigationItem>,
      <NavigationItem key="i-2" active>
        Item 2
      </NavigationItem>,
      <NavigationItem key="i-3">Item 3</NavigationItem>,
    ],
  },
}

export const ItemsAsLinks: Story = {
  render: Template,
  args: {
    children: [
      <NavigationItem href="https://www.sap.com" key="i-1">
        Link 1
      </NavigationItem>,
      <NavigationItem href="https://www.sap.com" key="i-2">
        Link 2
      </NavigationItem>,
      <NavigationItem href="https://www.sap.com" key="i-3">
        Link 3
      </NavigationItem>,
    ],
  },
}
