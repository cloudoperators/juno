/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { PageFooter, PageFooterProps } from "./index"

export default {
  title: "Layout/PageFooter",
  component: PageFooter,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args: PageFooterProps) => <PageFooter {...args}></PageFooter>

export const Simple = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "The page footer component renders a footer at the bottom of the website. Place as last child of AppBody.",
      },
    },
  },

  args: {},
}
