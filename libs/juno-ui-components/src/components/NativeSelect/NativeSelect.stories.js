/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { NativeSelect } from "./index.js"
import { NativeSelectOption } from "../NativeSelectOption/index.js"
import { NativeSelectOptionGroup } from "../NativeSelectOptionGroup/index.js"

export default {
  title: "Forms/NativeSelect/NativeSelect",
  component: NativeSelect,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => (
  <NativeSelect {...args}>{children}</NativeSelect>
)

export const Default = {
  render: Template,

  args: {
    children: [
      <NativeSelectOption value="o-1" label="Option 1" />,
      <NativeSelectOption value="o-2" label="Option 2" />,
      <NativeSelectOption value="o-3" label="Option 3" />,
    ],
  },
}

export const GroupedNativeSelect = {
  render: Template,

  args: {
    children: [
      <NativeSelectOptionGroup label="Option Group 1">
        <NativeSelectOption value="o-1" label="Option 1" />
        <NativeSelectOption value="o-2" label="Option 2" />
        <NativeSelectOption value="o-3" label="Option 3" />
      </NativeSelectOptionGroup>,
      <NativeSelectOptionGroup label="Option Group 2">
        <NativeSelectOption value="o-4" label="Option 4" />
        <NativeSelectOption value="o-5" label="Option 5" />
      </NativeSelectOptionGroup>,
    ],
  },
}

export const DisabledNativeSelect = {
  render: Template,

  args: {
    disabled: true,
    children: [
      <NativeSelectOption value="o-1" label="Option 1" />,
      <NativeSelectOption value="o-2" label="Option 2" />,
      <NativeSelectOption value="o-3" label="Option 3" />,
    ],
  },
}

export const InvalidNativeSelect = {
  render: Template,

  args: {
    invalid: true,
    children: [
      <NativeSelectOption value="o-1" label="Option 1" />,
      <NativeSelectOption value="o-2" label="Option 2" />,
      <NativeSelectOption value="o-3" label="Option 3" />,
    ],
  },
}

export const ValidNativeSelect = {
  render: Template,

  args: {
    valid: true,
    children: [
      <NativeSelectOption value="o-1" label="Option 1" />,
      <NativeSelectOption value="o-2" label="Option 2" />,
      <NativeSelectOption value="o-3" label="Option 3" />,
    ],
  },
}

export const LoadingNativeSelect = {
  render: Template,

  args: {
    loading: true,
    children: [],
  },
}

export const NativeSelectWithError = {
  render: Template,

  args: {
    error: true,
    children: [],
  },
}
