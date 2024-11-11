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
  title: "WiP/Menu/MenuSection",
  component: MenuSection,
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
