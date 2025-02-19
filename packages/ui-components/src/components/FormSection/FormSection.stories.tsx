/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { FormSection } from "../FormSection/FormSection.component"
import { TextInput } from "../TextInput/TextInput.component"
import { FormRow } from "../FormRow/FormRow.component"

export default {
  title: "Forms/FormSection",
  component: FormSection,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
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

const Template = ({ children, ...args }: TemplateProps) => <FormSection {...args}>{children}</FormSection>

export const Default = {
  render: Template,

  args: {
    children: [
      <FormRow key="1">
        <TextInput label="Address Line 1" />
      </FormRow>,
      <FormRow key="2">
        <TextInput label="Address Line 2" />
      </FormRow>,
    ],
  },
}

export const WithTitle = {
  render: Template,

  args: {
    title: "Form Section With Title",
    children: [
      <FormRow key="1">
        <TextInput label="Address Line 1" />
      </FormRow>,
      <FormRow key="2">
        <TextInput label="Address Line 2" />
      </FormRow>,
    ],
  },
}
