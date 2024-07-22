/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { ContentArea } from "./index.js"

export default {
  title: "Deprecated/ContentArea",
  component: ContentArea,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args) => (
  <ContentArea {...args}>Content goes here</ContentArea>
)

export const Basic = Template.bind({})
Basic.parameters = {
  docs: {
    description: {
      story:
        "Deprecated: This component used to be used internally by AppShell but has been removed there since. It was only needed to manually scaffold an app. Use AppShell to scaffold an app layout.",
    },
  },
}
Basic.args = {}
