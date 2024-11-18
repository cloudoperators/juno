/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { HeaderContainer, HeaderContainerProps } from "./index"

export default {
  title: "Internal/HeaderContainer",
  component: HeaderContainer,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

const Template = (args: HeaderContainerProps) => <HeaderContainer {...args}>Header content</HeaderContainer>

export const Main = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to create the framework of your application manually. In most cases, it is better to use the AppShell component instead. The header container includes <PageHeader> and <TopNavigation>. When scrolling the page, the component sticks to the top and above the content.",
      },
    },
  },

  args: {},
}
