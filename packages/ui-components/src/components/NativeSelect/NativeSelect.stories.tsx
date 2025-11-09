/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelect } from "./NativeSelect.component"
import { NativeSelectOption } from "../NativeSelectOption/NativeSelectOption.component"
import { NativeSelectOptionGroup } from "../NativeSelectOptionGroup/NativeSelectOptionGroup.component"

const meta: Meta<typeof NativeSelect> = {
  title: "Forms/NativeSelect/NativeSelect",
  component: NativeSelect,
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
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const GroupedNativeSelect: Story = {
  args: {
    children: [
      <NativeSelectOptionGroup key={0} label="Option Group 1">
        <NativeSelectOption value="o-1" label="Option 1" />
        <NativeSelectOption value="o-2" label="Option 2" />
        <NativeSelectOption value="o-3" label="Option 3" />
      </NativeSelectOptionGroup>,
      <NativeSelectOptionGroup key={1} label="Option Group 2">
        <NativeSelectOption value="o-4" label="Option 4" />
        <NativeSelectOption value="o-5" label="Option 5" />
      </NativeSelectOptionGroup>,
    ],
  },
}

export const DisabledNativeSelect: Story = {
  args: {
    disabled: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const InvalidNativeSelect: Story = {
  args: {
    invalid: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const ValidNativeSelect: Story = {
  args: {
    valid: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const LoadingNativeSelect: Story = {
  args: {
    loading: true,
    children: [],
  },
}

export const NativeSelectWithError: Story = {
  args: {
    error: true,
    children: [],
  },
}
