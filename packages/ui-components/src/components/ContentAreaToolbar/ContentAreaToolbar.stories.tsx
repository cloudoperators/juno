/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Button } from "../Button/Button.component"
import { ContentAreaToolbar } from "./ContentAreaToolbar.component"
import { ContentAreaToolbarProps } from "./ContentAreaToolbar.component"

export default {
  title: "Layout/ContentAreaToolbar",
  component: ContentAreaToolbar,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

const Template = (args: ContentAreaToolbarProps) => (
  <ContentAreaToolbar {...args}>
    <Button>Main Action</Button>
  </ContentAreaToolbar>
)

export const Basic = {
  render: Template,
}
