/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { ContentContainer, ContentContainerProps } from "./ContentContainer.component"

export default {
  title: "Internal/ContentContainer",
  component: ContentContainer,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

const Template = (args: ContentContainerProps) => <ContentContainer {...args}>content</ContentContainer>

export const Centered = {
  render: Template,
}
