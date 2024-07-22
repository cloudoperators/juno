/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
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

Template.propTypes = {
  children: PropTypes.array,
}

export const Default = {
  render: Template,

  args: {
    title: "Menu Section",
    children: [
      <MenuItem key="1">Menu Item 1</MenuItem>,
      <MenuItem key="2">Menu Item 2</MenuItem>,
      <MenuItem key="3">Menu Item 3</MenuItem>,
    ],
  },
}
