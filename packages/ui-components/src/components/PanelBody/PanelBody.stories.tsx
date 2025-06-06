/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "../Button/Button.component"
import { Panel } from "../Panel/Panel.component"
import { PanelBody } from "./PanelBody.component"
import { PanelFooter } from "../PanelFooter/PanelFooter.component"
import { PortalProvider } from "../PortalProvider/PortalProvider.component"

const meta: Meta<typeof PanelBody> = {
  title: "Layout/Panel/PanelBody",
  component: PanelBody,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    footer: {
      control: false,
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
  decorators: [
    (Story) => (
      <PortalProvider>
        <div className="jn-contrast-100">
          <Story />
        </div>
      </PortalProvider>
    ),
  ],
  render: (args) => (
    <div>
      <Panel heading="My Panel" opened>
        <PanelBody {...args}>This is the panel body</PanelBody>
      </Panel>
      <div className="dummy-css-ignore jn-h-[250px]">Content Area</div>
    </div>
  ),
}

export default meta
type Story = StoryObj<typeof PanelBody>

const FooterExample = (
  <PanelFooter>
    <Button label="Click me"></Button>
  </PanelFooter>
)

export const Body: Story = {
  parameters: {
    docs: {
      description: {
        story: "A container for panel content.",
      },
    },
  },
  args: {},
}

export const BodyWithFooter: Story = {
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
