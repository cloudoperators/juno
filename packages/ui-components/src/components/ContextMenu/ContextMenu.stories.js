/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { ContextMenu } from "./index.js"
import { MenuItem } from "../MenuItem/MenuItem.component"
import { Button } from "../../deprecated_js/Button/index"
import { PortalProvider } from "../../deprecated_js/PortalProvider/PortalProvider.component"

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
      <div className="jn-pb-12" style={{ minHeight: "250px" }}>
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

export const ManyOptions = {
  render: PortalTemplate,

  args: {
    children: [
      <MenuItem key="1" label="Option 1" />,
      <MenuItem key="2" label="Option 2" />,
      <MenuItem key="3" label="Option 3" />,
      <MenuItem key="4" label="Option 4" />,
      <MenuItem key="5" label="Option 5" />,
      <MenuItem key="6" label="Option 6" />,
      <MenuItem key="7" label="Option 7" />,
      <MenuItem key="8" label="Option 8" />,
      <MenuItem key="9" label="Option 9" />,
      <MenuItem key="10" label="Option 10" />,
      <MenuItem key="11" label="Option 11" />,
      <MenuItem key="12" label="Option 12" />,
      <MenuItem key="13" label="Option 13" />,
      <MenuItem key="14" label="Option 14" />,
      <MenuItem key="15" label="Option 15" />,
    ],
  },
}

export const BottomLeftPositionedSelect = {
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

export const TopRightPositionedSelect = {
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

export const BottomRightPositionedSelect = {
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
