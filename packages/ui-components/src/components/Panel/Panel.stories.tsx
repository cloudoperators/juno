/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel, PanelProps } from "./Panel.component"
import { PanelBody } from "../PanelBody/PanelBody.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"
import { Meta, StoryFn } from "@storybook/react"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/Panel",
  component: Panel,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (story: () => React.ReactNode) => (
      <PortalProvider>
        <div className="jn-contrast-100">{story()}</div>
      </PortalProvider>
    ),
  ],
} as Meta

const Template: StoryFn<PanelProps> = (args) => (
  <div>
    <Panel {...args}>
      <PanelBody>Hey Panel Body</PanelBody>
    </Panel>
    <div className="dummy-css-ignore jn-h-[150px]">Hey Div</div>
  </div>
)

export const WithHeading = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          'The panel component slides into view from the right. It is to be used as a drawer containing forms for actions on the current view, like "new item" etc. Panels should have a heading.',
      },
    },
  },

  args: {
    heading: "Panel Heading",
    opened: true,
  },
}

export const Plain = {
  render: Template,

  args: {
    opened: true,
  },
}
