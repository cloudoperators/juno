/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryFn } from "@storybook/react-vite"

import { Button } from "../Button/Button.component"
import { Panel } from "../Panel/Panel.component"
import { PanelBody } from "../PanelBody/PanelBody.component"
import { PanelFooter, PanelFooterProps } from "./PanelFooter.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

// the decorator captures the panel's fixed positioning within the iframe. otherwise it would be placed relative to the viewport which is unwieldy in storybook
export default {
  title: "Layout/Panel/PanelFooter",
  component: PanelFooter,
  argTypes: {
    children: {
      control: false,
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
} as Meta

const Template: StoryFn<PanelFooterProps> = (args) => (
  <div>
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
    <div className="dummy-css-ignore jn-h-[250px]">Content Area</div>
  </div>
)

export const Footer: {
  render: StoryFn<PanelFooterProps>
  parameters: {
    docs: {
      description: {
        story: string
      }
    }
  }
  args: Record<string, unknown>
} = {
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
