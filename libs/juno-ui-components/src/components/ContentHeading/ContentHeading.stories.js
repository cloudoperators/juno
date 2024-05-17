/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading } from "./index.js"
import { Button } from "../Button/index.js"

export default {
  title: "Internal/ContentHeading",
  component: ContentHeading,
  argTypes: {
    children: {
      control: false
    },
  },
}

const Template = (args) => <ContentHeading {...args} />

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    description: {
      story:
        "The the main heading of the content area of a page/view.",
    },
  },
}
Default.args = {
  heading: "My Page Heading",
}
