/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { action } from "storybook/actions"
import { SideNavigation } from "./index"
import { SideNavigationItem } from "../SideNavigationItem/SideNavigationItem.component"
import { SideNavigationList } from "../SideNavigationList/SideNavigationList.component"
import { SideNavigationGroup } from "../SideNavigationGroup/SideNavigationGroup.component"

const meta: Meta<typeof SideNavigation> = {
  title: "Navigation/SideNavigation/Default",
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
        <SideNavigationItem label="Home" href="#" />
        <SideNavigationItem label="Messages" onToggle={action("onToggle")}>
          <SideNavigationItem label="Inbox" />
          <SideNavigationItem label="Sent Items" />
        </SideNavigationItem>
        <SideNavigationItem label="Searches" />
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
        <SideNavigationGroup label="Group 1" open onToggle={action("onToggle")}>
          <SideNavigationItem label="Grouped-Item 1" />
          <SideNavigationItem label="Grouped-Item 2" onToggle={action("onToggle")}>
            <SideNavigationItem label="Grouped-Item 3" />
          </SideNavigationItem>
        </SideNavigationGroup>
        <SideNavigationGroup label="Group 2" open onToggle={action("onToggle")}>
          <SideNavigationItem label="Grouped Item 1" />
          <SideNavigationItem label="Grouped Item 2" onToggle={action("onToggle")}>
            <SideNavigationItem label="Sub-Child 1" />
            <SideNavigationItem label="Sub-Child 2" />
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
