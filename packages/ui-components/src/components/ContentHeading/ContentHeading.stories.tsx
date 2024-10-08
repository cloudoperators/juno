/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading, ContentHeadingProps } from "./index"
// import { Button } from "../../deprecated_js/Button/index.js"

export default {
  title: "Internal/ContentHeading",
  component: ContentHeading,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args: ContentHeadingProps) => <ContentHeading {...args} />

export const Default = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "The the main heading of the content area of a page/view.",
      },
    },
  },
  args: {
    heading: "My Page Heading",
  },
}
