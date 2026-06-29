/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { SideNavigation } from "../SideNavigation/SideNavigation.component"
import { SideNavigationItem } from "./SideNavigationItem.component"
import { KnownIconsEnum } from "../Icon/Icon.component"

const meta: Meta<typeof SideNavigationItem> = {
  title: "Navigation/SideNavigation/Item",
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
  parameters: {
    docs: {
      description: {
        story: "Displays a standard navigation item without additional attributes.",
      },
    },
  },
}

export const Active: Story = {
  args: {
    label: "Active Navigation Item",
    selected: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Showcases an item that is marked as selected or active within its group.",
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled Navigation Item",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a navigation item that is disabled and non-interactive.",
      },
    },
  },
}

export const WithIcon: Story = {
  args: {
    label: "Navigation Item With Icon",
    icon: "addCircle",
  },
  parameters: {
    docs: {
      description: {
        story: "Presents a navigation item that includes an icon for visual assistance.",
      },
    },
  },
}

export const AsLink: Story = {
  args: {
    label: "Navigation Item as Anchor",
    href: "#",
  },
  parameters: {
    docs: {
      description: {
        story: "Displays an item intended to function as a link within navigation.",
      },
    },
  },
}

export const WithChildren: Story = {
  args: {
    label: "Item with Children",
    children: "Item 1",
  },
  parameters: {
    docs: {
      description: {
        story: "Illustrates an item with children, showing nesting capabilities.",
      },
    },
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
          "Demonstrates an expandable SideNavigationItem with nested child items. Note that styling support is provided for three nested levels only.",
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
          "Illustrates an expandable navigation item with children and an icon, noting that only the first level can include an icon.",
      },
    },
  },
}

export const DisabledWithExpandable: Story = {
  args: {
    label: "Disabled Expandable Item",
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
        story: "Displays an expandable navigation item in a disabled state with nested children.",
      },
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const ControlledItem = () => {
      const [open, setOpen] = useState(true)
      return (
        <SideNavigationItem label={`Controlled Item (${open ? "open" : "closed"})`} open={open} onToggle={setOpen}>
          <SideNavigationItem label="Child A" href="#" />
          <SideNavigationItem label="Child B" href="#" />
        </SideNavigationItem>
      )
    }
    return <ControlledItem />
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a controlled SideNavigationItem: the parent owns the open state via the `open` prop and is notified of user toggles via `onToggle`. The chevron toggles open/close; the label remains independent for navigation.",
      },
    },
  },
}
