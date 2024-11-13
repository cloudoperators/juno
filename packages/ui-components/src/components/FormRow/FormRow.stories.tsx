/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { FormRow } from "./FormRow.component"
import { TextInput } from "../TextInput/TextInput.component"

export default {
  title: "Forms/FormRow",
  component: FormRow,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

interface TemplateProps {
  children?: React.ReactNode
}

const Template = ({ children, ...args }: TemplateProps) => <FormRow {...args}>{children}</FormRow>

export const Default = {
  render: Template,

  args: {
    children: [<TextInput label="TextInput in a FormRow" placeholder="Your input here…" key="1" />],
  },
}
