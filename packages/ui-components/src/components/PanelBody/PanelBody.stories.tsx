/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { Button } from "../Button/Button.component"
import { Panel } from "../Panel/Panel.component"
import { PanelBody, PanelBodyProps } from "./PanelBody.component"
import { PanelFooter } from "../PanelFooter/PanelFooter.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/PanelBody",
  component: PanelBody,
  argTypes: {},
  decorators: [
    (story: () => React.ReactNode) => (
      <PortalProvider>
        <div className="jn-contrast-100">{story()}</div>
      </PortalProvider>
    ),
  ],
} as Meta

const FooterExample = (
  <PanelFooter>
    <Button label="Click me"></Button>
  </PanelFooter>
)

const Template: StoryFn<PanelBodyProps> = (args) => (
  <div>
    <Panel heading="My Panel" opened>
      <PanelBody {...args}>This is the panel body</PanelBody>
    </Panel>
    <div className="dummy-css-ignore jn-h-[250px]">Content Area</div>
  </div>
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
