/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Menu } from "../Menu/"
import { MenuSection } from "./"
import { MenuItem } from "../MenuItem/"

type StoryDefinition = () => React.ReactNode

export default {
  title: "Deprecated/Menu/MenuSection",
  component: MenuSection,
  parameters: {
    docs: {
      description: {
        component: "DEPRECATED: Use `PopupMenu` with `PopupMenu.Section` instead.",
      },
    },
  },
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(story: StoryDefinition) => <Menu>{story()}</Menu>],
}

export const Default = {
  args: {
    children: [<MenuItem label="Menu item 1" key="1" />, <MenuItem label="Menu item 2" key="2" />],
  },
}

export const WithTitle = {
  args: {
    title: "Menu Section Title",
    children: [<MenuItem label="Menu item 1" key="1" />, <MenuItem label="Menu item 2" key="2" />],
  },
}
