/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { ContentContainer } from "./index.js"

export default {
  title: "Internal/ContentContainer",
  component: ContentContainer,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args) => <ContentContainer {...args}>content</ContentContainer>

export const Centered = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead. A wrapper for content components. Parent of ContentArea. Width will grow to the maximum breakpoint width and then be centered on the page if the browser is wider.",
      },
    },
  },

  args: {},
}
