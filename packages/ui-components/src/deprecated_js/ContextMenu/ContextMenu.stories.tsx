/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { CSSProperties, ReactNode } from "react"
import { Meta, StoryFn } from "@storybook/react"

import { ContextMenu, ContextMenuProps } from "./ContextMenu.component"
import { MenuItem } from "../MenuItem/MenuItem.component"
import { Button } from "../../components/Button/Button.component"
import { PortalProvider } from "../../components/PortalProvider/PortalProvider.component"

export default {
  title: "Deprecated/ContextMenu",
  component: ContextMenu,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "DEPRECATED. Use PopupMenu instead.",
      },
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div className="jn-pb-12" style={{ minHeight: "250px" }}>
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
} as Meta<typeof ContextMenu>

const childrenElements: ReactNode[] = [
  <MenuItem key="1" label="Juno on Github" href="https://github.com/cloudoperators/juno" />,
  <MenuItem key="2" label="This item does nothing" icon="help" />,
  <MenuItem key="3" label="Disabled Item" href="https://github.com/cloudoperators/juno" disabled />,
  <MenuItem key="4">
    <Button key="0" label="Button as Child of MenuItem" variant="subdued" size="small" className="jn-w-full" />
  </MenuItem>,
  <MenuItem key="5" onClick={() => {}} label="Button as Item with OnClick" icon="help" />,
]

const Template: StoryFn<ContextMenuProps> = (args) => <ContextMenu {...args} />

export const Default = Template.bind({})
Default.args = {
  children: childrenElements,
}

const PortalTemplate: StoryFn<ContextMenuProps> = (args) => (
  <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>
)

export const InsidePortal = PortalTemplate.bind({})
InsidePortal.args = {
  children: childrenElements,
}

export const ManyOptions: StoryFn<ContextMenuProps> = (args) => (
  <PortalProvider>
    <PortalProvider.Portal>
      <ContextMenu {...args} />
    </PortalProvider.Portal>
  </PortalProvider>
)
ManyOptions.args = {
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
}

interface CustomTemplateProps extends ContextMenuProps {
  parentStyles?: CSSProperties
}

// eslint-disable-next-line react/prop-types
const CustomPortalTemplate: StoryFn<CustomTemplateProps> = ({ parentStyles, ...args }) => (
  <div style={parentStyles}>
    <PortalProvider>
      <PortalProvider.Portal>
        <ContextMenu {...args} />
      </PortalProvider.Portal>
    </PortalProvider>
  </div>
)

export const BottomLeftPositionedSelect = CustomPortalTemplate.bind({})
BottomLeftPositionedSelect.args = {
  parentStyles: {
    position: "absolute",
    bottom: "0",
  },
  children: childrenElements,
}

export const TopRightPositionedSelect = CustomPortalTemplate.bind({})
TopRightPositionedSelect.args = {
  parentStyles: {
    position: "absolute",
    right: "0",
  },
  children: childrenElements,
}

export const BottomRightPositionedSelect = CustomPortalTemplate.bind({})
BottomRightPositionedSelect.args = {
  parentStyles: {
    position: "absolute",
    right: "0",
    bottom: "0",
  },
  children: childrenElements,
}
