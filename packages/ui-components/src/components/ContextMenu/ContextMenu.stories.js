/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
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
  decorators: [
    (Story) => (
      <div className="jn-pb-12" style={{ minHeight: "200px" }}>
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
}

const Template = ({ children, ...args }) => <ContextMenu {...args}>{children}</ContextMenu>

Template.propTypes = {
  children: PropTypes.node,
}

const PortalTemplate = ({ children, ...args }) => (
  <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args}>{children}</ContextMenu>
    </PortalProvider.Portal>
  </PortalProvider>
)

PortalTemplate.propTypes = {
  children: PropTypes.node,
}

const CustomPortalTemplate = ({ parentStyles, children, ...args }) => (
  <div style={parentStyles}>
    <PortalTemplate {...args}>{children}</PortalTemplate>
  </div>
)

CustomPortalTemplate.propTypes = {
  parentStyles: PropTypes.object,
  children: PropTypes.node,
}

export const Default = {
  render: Template,

  args: {
    children: [
      <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
      <MenuItem key="2" label="This item does nothing" icon="help" />,
      <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
      <MenuItem key="4">
        <Button key={0} label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
      </MenuItem>,
      <MenuItem key="5" onClick={() => {}} label="Button as Item with OnClick" icon="help" />,
    ],
  },
}

export const InsidePortal = {
  render: PortalTemplate,

  args: {
    children: [
      <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
      <MenuItem key="2" label="This item does nothing" />,
      <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
      <MenuItem key="4">
        <Button key={0} label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
      </MenuItem>,
    ],
  },
}

export const BottomPositionedSelect = {
  render: CustomPortalTemplate,

  args: {
    parentStyles: {
      position: "absolute",
      bottom: "0",
    },
    children: [
      <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
      <MenuItem key="2" label="This item does nothing" icon="help" />,
      <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
      <MenuItem key="4">
        <Button key={0} label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
      </MenuItem>,
      <MenuItem key="5" onClick={() => {}} label="Button as Item with OnClick" icon="help" />,
    ],
  },
}

export const RightPositionedSelect = {
  render: CustomPortalTemplate,

  args: {
    parentStyles: {
      position: "absolute",
      right: "0",
    },
    children: [
      <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
      <MenuItem key="2" label="This item does nothing" icon="help" />,
      <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
      <MenuItem key="4">
        <Button key={0} label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
      </MenuItem>,
      <MenuItem key="5" onClick={() => {}} label="Button as Item with OnClick" icon="help" />,
    ],
  },
}

export const BottomLeftPositionedSelect = {
  render: CustomPortalTemplate,

  args: {
    parentStyles: {
      position: "absolute",
      right: "0",
      bottom: "0",
    },
    children: [
      <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
      <MenuItem key="2" label="This item does nothing" icon="help" />,
      <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
      <MenuItem key="4">
        <Button key={0} label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
      </MenuItem>,
      <MenuItem key="5" onClick={() => {}} label="Button as Item with OnClick" icon="help" />,
    ],
  },
}
