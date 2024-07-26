/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Panel } from "./index.js"
import { PanelBody } from "../PanelBody/index.js"
import { ContentAreaWrapper } from "../ContentAreaWrapper/index.js"
import { ContentArea } from "../ContentArea/index.js"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/Panel",
  component: Panel,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(story) => <div className="jn-contrast-100">{story()}</div>],
}

const Template = (args) => (
  <ContentAreaWrapper>
    <Panel {...args}>
      <PanelBody>Panel Body Content</PanelBody>
    </Panel>
    <ContentArea className="dummy-css-ignore jn-h-[150px]">Content Area</ContentArea>
  </ContentAreaWrapper>
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
