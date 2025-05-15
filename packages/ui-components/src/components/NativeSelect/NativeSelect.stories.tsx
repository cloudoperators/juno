/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { NativeSelect } from "./NativeSelect.component"
import { NativeSelectOption } from "../NativeSelectOption/NativeSelectOption.component"
import { NativeSelectOptionGroup } from "../NativeSelectOptionGroup/NativeSelectOptionGroup.component"

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
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
}

export const Default = {
  args: {
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const GroupedNativeSelect = {
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

export const DisabledNativeSelect = {
  args: {
    disabled: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const InvalidNativeSelect = {
  args: {
    invalid: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const ValidNativeSelect = {
  args: {
    valid: true,
    children: [
      <NativeSelectOption key={0} value="o-1" label="Option 1" />,
      <NativeSelectOption key={1} value="o-2" label="Option 2" />,
      <NativeSelectOption key={2} value="o-3" label="Option 3" />,
    ],
  },
}

export const LoadingNativeSelect = {
  args: {
    loading: true,
    children: [],
  },
}

export const NativeSelectWithError = {
  args: {
    error: true,
    children: [],
  },
}
