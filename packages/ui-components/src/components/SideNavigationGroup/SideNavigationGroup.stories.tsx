/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"
import { SideNavigationGroup } from "./SideNavigationGroup.component"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"
import { SideNavigationItem } from "../SideNavigationItem/SideNavigationItem.component"

const meta: Meta<typeof SideNavigationGroup> = {
  title: "Navigation/SideNavigation/Group",
  component: SideNavigationGroup,
  args: {
    onToggle: fn(),
  },
  argTypes: {
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
    label: "Group",
    children: [
      <SideNavigationItem key="1" label="Item 1" href="#" />,
      <SideNavigationItem key="2" label="Item 2" href="#" />,
      <SideNavigationItem key="3" label="Item 3" href="#" />,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a simple SideNavigationGroup with a few items, useful for organizing items.",
      },
    },
  },
}

export const Expandable: Story = {
  args: {
    label: "Expandable Group",
    children: (
      <>
        <SideNavigationItem label="1st Level Item" href="#" />
        <SideNavigationItem label="Nested">
          <SideNavigationItem label="2nd Level Item">
            <SideNavigationItem label="3rd Level Item" href="#" />
            <SideNavigationItem label="4th Level Item" href="#" />
          </SideNavigationItem>
        </SideNavigationItem>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Shows a SideNavigationGroup with expandable items, demonstrating hierarchical navigation.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const ControlledGroup = () => {
      const [open, setOpen] = useState(true)
      return (
        <SideNavigationGroup label={`Controlled Group (${open ? "open" : "closed"})`} open={open} onToggle={setOpen}>
          <SideNavigationItem label="Item 1" href="#" />
          <SideNavigationItem label="Item 2" href="#" />
          <SideNavigationItem label="Item 3" href="#" />
        </SideNavigationGroup>
      )
    }
    return <ControlledGroup />
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a controlled SideNavigationGroup: the parent owns the open state via the `open` prop and is notified of user toggles via `onToggle`.",
      },
    },
  },
}
