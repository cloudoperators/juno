/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { DescriptionDefinition } from "./DescriptionDefinition.component"

const meta: Meta<typeof DescriptionDefinition> = {
  title: "Navigation/SideNavigation/SideNavigationList",
  component: DescriptionDefinition,
  decorators: [
    (Story) => (
      <DescriptionDefinition>
        <Story />
      </DescriptionDefinition>
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
type Story = StoryObj<typeof DescriptionDefinition>

export const NestedNavigationExample: Story = {
  render: () => <DescriptionDefinition></DescriptionDefinition>,
  parameters: {
    docs: {
      description: {
        story:
          "Illustrates a nested navigation structure using SideNavigationItems and SideNavigationGroups, enabling complex hierarchies and visual organization within side navigation menus.",
      },
    },
  },
}
