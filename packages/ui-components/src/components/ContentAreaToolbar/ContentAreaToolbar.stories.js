/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { ContentAreaToolbar } from "./index.js"
import { Button } from "../Button/index.js"

export default {
  title: "Layout/ContentAreaToolbar",
  component: ContentAreaToolbar,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args) => (
  <ContentAreaToolbar {...args}>
    <Button>Main Action</Button>
  </ContentAreaToolbar>
)

export const Basic = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "This is the main toolbar of the content area. Add main actions, search bar, filters for the current page here.",
      },
    },
  },

  args: {},
}
