/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn } from "@storybook/react"

import { PanelBody, PanelBodyProps } from "./PanelBody.component"
import { Button } from "../Button/Button.component"
import { Panel } from "../Panel/Panel.component"
import { PanelFooter } from "../PanelFooter/PanelFooter.component"
import { ContentArea } from "../ContentArea/ContentArea.component"
import { ContentAreaWrapper } from "../ContentAreaWrapper/ContentAreaWrapper.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

// The decorator captures the panel's fixed positioning within the iframe. Otherwise, it would be placed relative to the viewport, which is unwieldy in Storybook.
export default {
  title: "Layout/Panel/PanelBody",
  component: PanelBody,
  argTypes: {},
  decorators: [
    (Story: StoryFn) => (
      <PortalProvider>
        <div className="jn-contrast-100">
          <Story />
        </div>
      </PortalProvider>
    ),
  ],
} as Meta<typeof PanelBody>

const FooterExample: React.ReactNode = (
  <PanelFooter>
    <Button label="Click me" />
  </PanelFooter>
)

const Template: StoryFn<PanelBodyProps> = (args) => (
  <ContentAreaWrapper>
    <Panel heading="My Panel" opened>
      <PanelBody {...args}>This is the panel body</PanelBody>
    </Panel>
    <ContentArea className="dummy-css-ignore jn-h-[250px]">
      <div>Content Area</div>
    </ContentArea>
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
