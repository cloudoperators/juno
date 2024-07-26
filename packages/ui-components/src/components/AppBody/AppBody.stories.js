/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppBody } from "./index.js"

export default {
  title: "Internal/AppBody",
  component: AppBody,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args) => <AppBody {...args}></AppBody>

export const Body = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead. Body of the app. Treat this like the body tag of an html page.",
      },
    },
  },

  args: {},
}
