/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { PageHeader } from "."
import { PageHeaderProps } from "./PageHeader.component"

export default {
  title: "Layout/PageHeader",
  component: PageHeader,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args: PageHeaderProps) => <PageHeader {...args}></PageHeader>

export const Simple = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: "The page header component renders a header at the top of the website. Place as first child of AppBody.",
      },
    },
  },

  args: {},
}

export const WithHeading = {
  render: Template,

  parameters: {
    docs: {
      description: { story: "PageHeader with Heading." },
    },
  },

  args: {
    heading: "My Awesome App",
  },
}
