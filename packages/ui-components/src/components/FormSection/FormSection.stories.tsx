/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FormSection } from "../FormSection/FormSection.component"
import { TextInput } from "../TextInput/TextInput.component"
import { FormRow } from "../FormRow/FormRow.component"

const meta: Meta<typeof FormSection> = {
  title: "Forms/FormSection",
  component: FormSection,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
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

export const WithTitle: Story = {
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
