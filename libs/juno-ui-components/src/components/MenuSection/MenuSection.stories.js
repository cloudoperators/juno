/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { MenuSection } from "./index.js"
import { Menu } from "../Menu/index.js"
import { MenuItem } from "../MenuItem/index.js"

export default {
  title: "WiP/Menu/MenuSection",
  component: MenuSection,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => (
  <Menu>
    <MenuSection {...args}>{children}</MenuSection>
    <MenuSection {...args}>{children}</MenuSection>
  </Menu>
)

export const Default = {
  render: Template,

  args: {
    title: "Menu Section",
    children: [
      <MenuItem>Menu Item 1</MenuItem>,
      <MenuItem>Menu Item 2</MenuItem>,
      <MenuItem>Menu Item 3</MenuItem>,
    ],
  },
}
