/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigationGroup } from "./SideNavigationGroup.component"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"
import { SideNavigationItem } from "../SideNavigationItem/SideNavigationItem.component"

const meta: Meta<typeof SideNavigationGroup> = {
  title: "Navigation/SideNavigation/Group",
  component: SideNavigationGroup,
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
  },
  parameters: {
    docs: {
      description: {
        story: "Displays a simple SideNavigationGroup without children, useful for organizing items.",
      },
    },
  },
}

export const Expandable: Story = {
  args: {
    label: "Expandable Group",
    children: (
      <>
        <SideNavigationItem label="1st Level Item" href="#" icon="addCircle" />
        <SideNavigationItem label="Nested" icon="addCircle">
          <SideNavigationItem label="2nd Level Item" icon="addCircle">
            <SideNavigationItem label="3rd Level Item" href="#" icon="addCircle" />
            <SideNavigationItem label="4th Level Item" href="#" icon="addCircle" />
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
