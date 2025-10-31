/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DescriptionList } from "./DescriptionList.component"
import { DescriptionTerm } from "../DescriptionTerm/DescriptionTerm.component"

const meta: Meta<typeof DescriptionList> = {
  title: "Navigation/SideNavigation/SideNavigationList",
  component: DescriptionList,
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
type Story = StoryObj<typeof DescriptionList>

export const NestedNavigationExample: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionTerm />
      <DescriptionTerm label="Settings">
        <DescriptionTerm label="Profile" icon="home" />
        <DescriptionTerm label="Preferences" />
      </DescriptionTerm>
    </DescriptionList>
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
