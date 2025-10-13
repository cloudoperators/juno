/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigation } from "./index"
import { SideNavigationItem } from "../SideNavigationItem/SideNavigationItem.component"
import { SideNavigationList } from "../SideNavigationList/SideNavigationList.component"
import { SideNavigationGroup } from "../SideNavigationGroup/SideNavigationGroup.component"

const meta: Meta<typeof SideNavigation> = {
  title: "Navigation/SideNavigation/SideNavigation",
  component: SideNavigation,
  decorators: [
    (Story) => (
      <div style={{ width: 250 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof SideNavigation>

export const Default: Story = {
  args: {
    ariaLabel: "Default Side Navigation",
  },
  render: (args) => (
    <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Home" href="/" />
        <SideNavigationItem label="Messages">
          <SideNavigationItem label="Inbox" />
          <SideNavigationItem label="Sent Items" />
        </SideNavigationItem>
        <SideNavigationItem label="Searches" icon="search" />
      </SideNavigationList>
    </SideNavigation>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This default setup includes a basic side navigation menu with various items, showcasing fundamental usage.",
      },
    },
  },
}

export const NavigationWithGroups: Story = {
  render: (args) => (
    <SideNavigation {...args}>
      <SideNavigationList>
        <SideNavigationItem label="Item 1" icon="addCircle" selected={true} href="#" />
        <SideNavigationItem label="Item 2" icon="addCircle">
          <SideNavigationItem label="Sub-Child 1" />
          <SideNavigationItem label="Sub-Child 2" />
        </SideNavigationItem>
        <SideNavigationGroup label="Group Example">
          <SideNavigationItem label="Grouped Item 1" />
          <SideNavigationItem label="Grouped Item 2">
            <SideNavigationItem label="Sub-Child 1" />
            <SideNavigationItem label="Sub-Child 2" selected />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigationList>
    </SideNavigation>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a SideNavigation with nested lists and groups, showing hierarchical navigation structure.",
      },
    },
  },
}

// Add more complex examples to showcase different functionalities

export const InteractiveNavigation: Story = {
  render: (args) => (
    <SideNavigation {...args} onActiveItemChange={(item) => console.log("Active item changed:", item)}>
      <SideNavigationList>
        <SideNavigationItem label="Dashboard" href="/" />
        <SideNavigationItem label="Settings" icon="search">
          <SideNavigationItem label="Profile" />
          <SideNavigationItem label="Preferences" />
        </SideNavigationItem>
        <SideNavigationGroup label="Project Management">
          <SideNavigationItem label="Overview" />
          <SideNavigationItem label="Analytics">
            <SideNavigationItem label="Reports" />
            <SideNavigationItem label="Statistics" selected />
          </SideNavigationItem>
        </SideNavigationGroup>
      </SideNavigationList>
    </SideNavigation>
  ),
  parameters: {
    docs: {
      description: {
        story: "An interactive navigation setup that logs active item changes.",
      },
    },
  },
}
