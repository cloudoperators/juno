/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Panel, PanelProps } from "./Panel.component"
import { PanelBody } from "../PanelBody/PanelBody.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
const meta: Meta<typeof Panel> = {
  title: "Layout/Panel/Panel",
  component: Panel,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    heading: {
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <PortalProvider>
        <div className="jn-contrast-100">{story()}</div>
      </PortalProvider>
    ),
  ],
  render: (args) => (
    <div>
      <Panel {...args}>
        <PanelBody>Panel Body Content</PanelBody>
      </Panel>
      <div className="dummy-css-ignore jn-h-[150px]">Content Area</div>
    </div>
  ),
}

export default meta
type Story = StoryObj<PanelProps>

export const WithHeading: Story = {
  args: {
    heading: "Panel Heading",
    opened: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.',
      },
    },
  },
}

export const Plain: Story = {
  args: {
    opened: true,
  },
}
