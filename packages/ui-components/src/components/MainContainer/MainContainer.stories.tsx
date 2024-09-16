/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { MainContainer, MainContainerProps } from "./index"

export default {
  title: "Internal/MainContainer",
  component: MainContainer,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = (args: MainContainerProps) => <MainContainer {...args}>main content</MainContainer>

export const Main = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          "Only needed if you want to build your app's scaffold manually. In most cases it is better to use the AppShell component instead. Main container for all content of the app. Wrapper for content containers.",
      },
    },
  },

  args: {},
}
