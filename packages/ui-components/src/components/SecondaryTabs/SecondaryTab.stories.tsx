/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { KnownIconsEnum } from "../Icon/Icon.component"
import { SecondaryTabs } from "./SecondaryTabs.component"
import { SecondaryTab } from "./SecondaryTab.component"

const iconOptions = [undefined, ...Object.values(KnownIconsEnum)] as const

const meta: Meta<typeof SecondaryTab> = {
  title: "WIP/SecondaryTabs/SecondaryTab",
  component: SecondaryTab,
  decorators: [
    (Story) => (
      <SecondaryTabs defaultTab="demo">
        <Story />
      </SecondaryTabs>
    ),
  ],
  argTypes: {
    value: { control: "text" },
    disabled: { control: "boolean" },
    iconLeft: {
      options: iconOptions,
      control: { type: "select" },
    },
    iconRight: {
      options: iconOptions,
      control: { type: "select" },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default inactive tab. Becomes active when selected.",
      },
    },
  },
  args: {
    value: "demo",
    children: "Tab Label",
  },
}

export const Inactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "A tab that is not the currently active tab.",
      },
    },
  },
  args: {
    value: "other",
    children: "Inactive Tab",
  },
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "A tab that cannot be selected. Uses `aria-disabled` to remain in the accessibility tree.",
      },
    },
  },
  args: {
    value: "demo",
    disabled: true,
    children: "Disabled Tab",
  },
}

export const WithIconLeft: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tab with an icon rendered to the left of the label.",
      },
    },
  },
  args: {
    value: "demo",
    iconLeft: "openInNew",
    children: "With Icon Left",
  },
}

export const WithIconRight: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tab with an icon rendered to the right of the label.",
      },
    },
  },
  args: {
    value: "demo",
    iconRight: "info",
    children: "With Icon Right",
  },
}

export const WithBothIcons: Story = {
  parameters: {
    docs: {
      description: {
        story: "Tab with icons on both sides.",
      },
    },
  },
  args: {
    value: "demo",
    iconLeft: "openInNew",
    iconRight: "info",
    children: "Both Icons",
  },
}
