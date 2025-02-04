/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { MenuItem } from "./MenuItem.component"
import { Menu } from "../Menu/Menu.component"
import { Button } from "../../components/Button/Button.component"

export default {
  title: "Deprecated/Menu/MenuItem",
  component: MenuItem,
  parameters: {
    menuVariant: "normal", // Default value for all stories
    docs: {
      description: {
        component: "DEPRECATED. Use `PopupMenu` with `PopupMenu.Item` instead.",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (storyFn: () => React.ReactNode, context: { parameters: { menuVariant: "normal" | "small" } }) => {
      // Access the menuVariant parameter from the story context
      const { menuVariant } = context.parameters

      return (
        <Menu variant={menuVariant}>
          <>{storyFn()}</>
        </Menu>
      )
    },
  ],
}

export const Default = {
  args: {
    label: "A menu item",
    onClick: null,
  },
}

export const SmallMenuItem = {
  args: {
    label: "A small menu item",
    onClick: null,
  },
  parameters: {
    menuVariant: "small",
  },
}

export const WithIcon = {
  args: {
    label: "A menu item with icon",
    icon: "deleteForever",
    onClick: null,
  },
}

export const SmallWithIcon = {
  args: {
    label: "A small menu item with icon",
    icon: "deleteForever",
    onClick: null,
  },
  parameters: {
    menuVariant: "small",
  },
}

export const MenuItemAsLink = {
  args: {
    label: "A menu item as a link",
    href: "https://github.com/cloudoperators/juno",
  },
}

export const MenuItemAsButton = {
  args: {
    label: "Menu Item as Button",
    onClick: () => {},
  },
}

export const MenuItemWithChildren = {
  args: {
    children: [
      <Button label="Delete" size="small" variant="subdued" icon="deleteForever" className="jn-w-full" key="1" />,
    ],
  },
}

export const DisabledMenuItem = {
  args: {
    disabled: true,
    label: "Disabled menu item",
  },
}

export const DisabledMenuItemAsLink = {
  args: {
    disabled: true,
    label: "Disabled menu item as link",
    href: "https://github.com/cloudoperators/juno",
  },
}
