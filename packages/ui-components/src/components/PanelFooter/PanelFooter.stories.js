/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { PanelFooter } from "./index.js"
import { ContentAreaWrapper } from "../ContentAreaWrapper/index.js"
import { ContentArea } from "../ContentArea/index.js"
import { Button } from "../Button/index.js"
import { Panel } from "../Panel/index.js"
import { PanelBody } from "../PanelBody/index.js"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/PanelFooter",
  component: PanelFooter,
  argTypes: {},
  decorators: [(story) => <div className="jn-contrast-100">{story()}</div>],
}

const Template = (args) => (
  <ContentAreaWrapper>
    <Panel heading="My Panel" opened>
      <PanelBody
        footer={
          <PanelFooter {...args}>
            <Button>Do it</Button>
          </PanelFooter>
        }
      >
        This is the panel body
      </PanelBody>
    </Panel>
    <ContentArea className="dummy-css-ignore jn-h-[250px]">Content Area</ContentArea>
  </ContentAreaWrapper>
)

export const Footer = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "A container for panel footer elements, typically buttons. Add the footer to the PanelBody component via its `footer` parameter.",
      },
    },
  },

  args: {},
}
