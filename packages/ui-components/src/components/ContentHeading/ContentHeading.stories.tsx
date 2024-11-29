/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ContentHeading, ContentHeadingProps } from "./ContentHeading.component"

export default {
  title: "Internal/ContentHeading",
  component: ContentHeading,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

const Template = (args: ContentHeadingProps) => <ContentHeading {...args} />

export const Default = {
  render: Template,
  args: {
    heading: "My Page Heading",
  },
}
