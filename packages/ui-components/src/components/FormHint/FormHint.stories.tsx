/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

import { FormHint } from "./FormHint.component"

const meta: Meta<typeof FormHint> = {
  title: "Forms/FormHint",
  component: FormHint,
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
    text: "A simple hint to be associated with a form input",
  },
}

export const WithChildren: Story = {
  args: {
    children: (
      <>
        A FormHint with a <a href="#">Link</a>.
      </>
    ),
  },
}

export const WithTextAsChildren: Story = {
  args: {
    text: (
      <>
        A FormHint with a <a href="#">Link</a>.
      </>
    ),
  },
}

export const ErrorVariant: Story = {
  args: {
    variant: "error",
    text: "A FormHint containing an error or invalidation message",
  },
}

export const SuccessVariant: Story = {
  args: {
    variant: "success",
    text: "A FormHint containg a success or validation message",
  },
}
