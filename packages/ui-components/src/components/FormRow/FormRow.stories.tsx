/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FormRow } from "./FormRow.component"
import { TextInput } from "../TextInput/TextInput.component"

const meta: Meta<typeof FormRow> = {
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

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [<TextInput label="TextInput in a FormRow" placeholder="Your input here…" key="1" />],
  },
}
