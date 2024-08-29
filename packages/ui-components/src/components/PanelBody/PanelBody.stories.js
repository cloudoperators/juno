/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { PanelBody } from "./index.js"
import { ContentAreaWrapper } from "../ContentAreaWrapper/index.js"
import { ContentArea } from "../ContentArea/index.js"
import { Panel } from "../Panel/index.js"
import { PanelFooter } from "../PanelFooter/index.js"
import { Button } from "../Button/index.js"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/PanelBody",
  component: PanelBody,
  argTypes: {},
  decorators: [(story) => <div className="jn-contrast-100">{story()}</div>],
}

const FooterExample = (
  <PanelFooter>
    <Button label="Click me"></Button>
  </PanelFooter>
)

const Template = (args) => (
  <ContentAreaWrapper>
    <Panel heading="My Panel" opened>
      <PanelBody {...args}>This is the panel body</PanelBody>
    </Panel>
    <ContentArea className="dummy-css-ignore jn-h-[250px]">Content Area</ContentArea>
  </ContentAreaWrapper>
)

export const Body = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A container for panel content.",
      },
    },
  },

  args: {},
}

export const BodyWithFooter = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "A container for panel content with footer.",
      },
    },
  },

  args: {
    footer: FooterExample,
  },
}
