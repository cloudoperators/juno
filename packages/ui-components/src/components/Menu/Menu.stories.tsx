/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Menu } from "./"
import { MenuItem } from "../MenuItem/"
import { MenuSection } from "../MenuSection/"
import { Button } from "../Button/"

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

export const Default = {
  args: {
    children: [
      <MenuItem label="Label only" key="1" />,
      <MenuItem label="Label with Icon" icon="help" key="2" />,
      <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />,
      <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />,
      <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />,
      <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />,
      <MenuItem key="7">Menu Item with Children</MenuItem>,
      <MenuItem key="8">
        <Button label="Delete" size="small" variant="subdued" icon="deleteForever" className="jn-w-full" />
      </MenuItem>,
    ],
  },
}

export const Small = {
  args: {
    variant: "small",
    children: [
      <MenuItem label="Label only" key="1" />,
      <MenuItem label="Label with Icon" icon="help" key="2" />,
      <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />,
      <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />,
      <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />,
      <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />,
    ],
  },
}

export const WithASection = {
  args: {
    children: [
      <MenuSection key="m1">
        <MenuItem label="Label only" key="1" />
        <MenuItem label="Label with Icon" icon="help" key="2" />
      </MenuSection>,
      <MenuSection title="Danger Zone" key="m2">
        <MenuItem label="Item with a Link" href="https://github.com/cloudoperators/juno" key="3" />
        <MenuItem label="Item with a Link and icon" href="https://github.com/cloudoperators/juno" icon="help" key="4" />
        <MenuItem label="Item with OnClick" onClick={() => {}} key="5" />
        <MenuItem label="Item with OnClick and Icon" onClick={() => {}} icon="deleteForever" key="6" />
      </MenuSection>,
    ],
  },
}
