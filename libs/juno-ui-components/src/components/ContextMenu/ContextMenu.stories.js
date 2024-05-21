/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContextMenu } from "./index.js"
import { MenuItem } from "../MenuItem/MenuItem.component"
import { Button } from "../Button/index"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

export default {
  title: "WiP/ContextMenu/ContextMenu",
  component: ContextMenu,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => (
  <ContextMenu {...args}>{children}</ContextMenu>
)

const PortalTemplate = ({ children, ...args }) => (
  <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args}>{children}</ContextMenu>
    </PortalProvider.Portal>
  </PortalProvider>
)

export const Default = {
  render: Template,

  args: {
    children: [
      <MenuItem
        key="1"
        label="Juno on Github"
        href="https://github.com/cloudoperators/juno"
      />,
      <MenuItem key="2" label="This item does nothing" icon="help" />,
      <MenuItem
        key="3"
        label="Disabled Item"
        href="https://github.com/cloudoperators/juno"
        disabled
      />,
      <MenuItem key="4">
        <Button
          key={0}
          label="Button as Child of MenuItem"
          variant="subdued"
          size="small"
          className="jn-w-full"
        />
      </MenuItem>,
      <MenuItem
        key="5"
        onClick={() => {}}
        label="Button as Item with OnClick"
        icon="help"
      />,
    ],
  },
}

export const InsidePortal = {
  render: PortalTemplate,

  args: {
    children: [
      <MenuItem
        key="1"
        label="Juno on Github"
        href="https://github.com/cloudoperators/juno"
      />,
      <MenuItem key="2" label="This item does nothing" />,
      <MenuItem
        key="3"
        label="Disabled Item"
        href="https://github.com/cloudoperators/juno"
        disabled
      />,
      <MenuItem key="4">
        <Button
          key={0}
          label="Button as Child of MenuItem"
          variant="subdued"
          size="small"
          className="jn-w-full"
        />
      </MenuItem>,
    ],
  },
}
