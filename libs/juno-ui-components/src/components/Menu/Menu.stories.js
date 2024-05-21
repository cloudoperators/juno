/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Menu } from "./index.js"
import { MenuItem } from "../MenuItem/index.js"
import { MenuSection } from "../MenuSection/index.js"

export default {
  title: "WiP/Menu",
  component: Menu,
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

const Template = ({ children, ...args }) => <Menu {...args}>{children}</Menu>

export const Default = {
  render: Template,

  args: {
    children: [
      <MenuItem label="Label only" key="1" />,
      <MenuItem label="Label with Icon" icon="help" key="2" />,
      <MenuItem
        label="Item with a Link"
        href="https://github.com/cloudoperators/juno"
        key="3"
      />,
      <MenuItem
        label="Item with a Link and icon"
        href="https://github.com/cloudoperators/juno"
        icon="help"
        key="4"
      />,
      <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />,
      <MenuItem
        label="Item with OnClick and Icon"
        onClick={() => {}}
        icon="deleteForever"
        key="6"
      />,
    ],
  },
}

export const Small = {
  render: Template,

  args: {
    variant: "small",
    children: [
      <MenuItem label="Label only" key="1" />,
      <MenuItem label="Label with Icon" icon="help" key="2" />,
      <MenuItem
        label="Item with a Link"
        href="https://github.com/cloudoperators/juno"
        key="3"
      />,
      <MenuItem
        label="Item with a Link and icon"
        href="https://github.com/cloudoperators/juno"
        icon="help"
        key="4"
      />,
      <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />,
      <MenuItem
        label="Item with OnClick and Icon"
        onClick={() => {}}
        icon="deleteForever"
        key="6"
      />,
    ],
  },
}

export const WithASection = {
  render: Template,

  args: {
    children: [
      <MenuSection key="m1">
        <MenuItem label="Label only" key="1" />
        <MenuItem label="Label with Icon" icon="help" key="2" />
      </MenuSection>,
      <MenuSection title="Danger Zone" key="m2">
        <MenuItem
          label="Item with a Link"
          href="https://github.com/cloudoperators/juno"
          key="3"
        />
        <MenuItem
          label="Item with a Link and icon"
          href="https://github.com/cloudoperators/juno"
          icon="help"
          key="4"
        />
        <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />
        <MenuItem
          label="Item with OnClick and Icon"
          onClick={() => {}}
          icon="deleteForever"
          key="6"
        />
      </MenuSection>,
    ],
  },
}
