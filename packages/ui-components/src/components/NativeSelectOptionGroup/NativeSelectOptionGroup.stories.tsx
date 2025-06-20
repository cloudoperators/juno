/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelect } from "../NativeSelect/NativeSelect.component"
import { NativeSelectOption } from "../NativeSelectOption/NativeSelectOption.component"
import { NativeSelectOptionGroup, NativeSelectOptionGroupProps } from "./NativeSelectOptionGroup.component"

const Template = ({ children, ...args }: NativeSelectOptionGroupProps) => (
  <NativeSelect>
    <NativeSelectOptionGroup {...args}>{children}</NativeSelectOptionGroup>
  </NativeSelect>
)

const meta: Meta<typeof NativeSelectOptionGroup> = {
  title: "Forms/NativeSelect/NativeSelectOptionGroup",
  component: NativeSelectOptionGroup,
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
  render: Template,
  args: {
    label: "My option group",
    children: [
      <NativeSelectOption key={0} value="1" label="Option 1" />,
      <NativeSelectOption key={1} value="2" label="Option 2" />,
      <NativeSelectOption key={2} value="3" label="Option 3" />,
    ],
  },
}

export const Disabled: Story = {
  render: Template,
  args: {
    label: "My disabled option group",
    children: [
      <NativeSelectOption key={0} value="1" label="Option 1" />,
      <NativeSelectOption key={1} value="2" label="Option 2" />,
      <NativeSelectOption key={2} value="3" label="Option 3" />,
    ],
    disabled: true,
  },
}
