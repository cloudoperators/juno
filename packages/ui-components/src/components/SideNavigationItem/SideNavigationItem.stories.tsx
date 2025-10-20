/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"
import { SideNavigationItem } from "./SideNavigationItem.component"
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
    selected: true,
  },
}

export const Disabled: Story = {
  args: {
    label: "Active Navigation Item",
    disabled: true,
    href: "#",
  },
}

export const WithIcon: Story = {
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle",
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
    label: "itm-1",
    children: "Item 1",
  },
}

export const Expandable: Story = {
  args: {
    label: "Expandable Navigation Item",
    children: (
      <>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2">
          <SideNavigationItem label="Sub-Child Item 1" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2">
          <SideNavigationItem label="Sub-Child Item 1" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates an expandable SideNavigationItem with nested child items. Note: Styling is supported for three nested levels only (recommended). Beyond this, custom styling is required.",
      },
    },
  },
}

export const ExpandableWithIcon: Story = {
  args: {
    label: "Expandable Navigation Item",
    icon: "error",
    children: (
      <>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" icon="addCircle">
          <SideNavigationItem label="Sub-Child Item 1" icon="addCircle" />
          <SideNavigationItem label="Sub-Child Item 2" />
        </SideNavigationItem>
        <SideNavigationItem label="Child Item 1" />
        <SideNavigationItem label="Child Item 2" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates an expandable SideNavigationItem with nested child items with icon. Note: Only the first level can contain an icon.",
      },
    },
  },
}

export const DisabledWithExpandable: Story = {
  args: {
    label: "1st Level Item",
    icon: "error",
    disabled: true,
    children: (
      <>
        <SideNavigationItem label="2nd Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="2nd Level Item" icon="addCircle">
          <SideNavigationItem label="3rd Level Item" icon="addCircle">
            <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
          </SideNavigationItem>
        </SideNavigationItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates an expandable SideNavigationItem with nested child items with icons.",
      },
    },
  },
}
