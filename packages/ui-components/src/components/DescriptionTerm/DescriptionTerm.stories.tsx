/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigationList } from "./DescriptionTerm.component"
import { SideNavigationItem } from "../SideNavigationItem"
import { SideNavigationGroup } from "../SideNavigationGroup"
import { SideNavigation } from "../SideNavigation"

const meta: Meta<typeof SideNavigationList> = {
  title: "Navigation/SideNavigation/SideNavigationList",
  component: SideNavigationList,
  decorators: [
    (Story) => (
      <SideNavigation>
        <Story />
      </SideNavigation>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "The SideNavigationList component organizes SideNavigationItems in a structured list format, supporting hierarchical navigation capabilities.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SideNavigationList>

export const NestedNavigationExample: Story = {
  render: () => (
    <SideNavigationList>
      <SideNavigationItem label="Overview" icon="home" />
      <SideNavigationItem label="Settings">
        <SideNavigationItem label="Profile" icon="home" />
        <SideNavigationItem label="Preferences" />
      </SideNavigationItem>
      <SideNavigationGroup label="Team" open={true}>
        <SideNavigationItem label="Members" />
        <SideNavigationItem label="Projects">
          <SideNavigationItem label="Current" />
          <SideNavigationItem label="Archived" disabled={true} />
        </SideNavigationItem>
      </SideNavigationGroup>
    </SideNavigationList>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus.",
      },
    },
  },
}
