/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { StoryFn } from "@storybook/react"

import { NativeSelect, NativeSelectProps } from "./NativeSelect.component"
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

const Template: StoryFn<NativeSelectProps> = (args) => <NativeSelect {...args} />

export const Default: StoryFn<NativeSelectProps> = Template.bind({})
Default.args = {
  children: [
    <NativeSelectOption key={0} value="o-1" label="Option 1" />,
    <NativeSelectOption key={1} value="o-2" label="Option 2" />,
    <NativeSelectOption key={2} value="o-3" label="Option 3" />,
  ],
}

export const GroupedNativeSelect: StoryFn<NativeSelectProps> = Template.bind({})
GroupedNativeSelect.args = {
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
}

export const DisabledNativeSelect: StoryFn<NativeSelectProps> = Template.bind({})
DisabledNativeSelect.args = {
  disabled: true,
  children: [
    <NativeSelectOption key={0} value="o-1" label="Option 1" />,
    <NativeSelectOption key={1} value="o-2" label="Option 2" />,
    <NativeSelectOption key={2} value="o-3" label="Option 3" />,
  ],
}

export const InvalidNativeSelect: StoryFn<NativeSelectProps> = Template.bind({})
InvalidNativeSelect.args = {
  invalid: true,
  children: [
    <NativeSelectOption key={0} value="o-1" label="Option 1" />,
    <NativeSelectOption key={1} value="o-2" label="Option 2" />,
    <NativeSelectOption key={2} value="o-3" label="Option 3" />,
  ],
}

export const ValidNativeSelect: StoryFn<NativeSelectProps> = Template.bind({})
ValidNativeSelect.args = {
  valid: true,
  children: [
    <NativeSelectOption key={0} value="o-1" label="Option 1" />,
    <NativeSelectOption key={1} value="o-2" label="Option 2" />,
    <NativeSelectOption key={2} value="o-3" label="Option 3" />,
  ],
}

export const LoadingNativeSelect: StoryFn<NativeSelectProps> = Template.bind({})
LoadingNativeSelect.args = {
  loading: true,
  children: [],
}

export const NativeSelectWithError: StoryFn<NativeSelectProps> = Template.bind({})
NativeSelectWithError.args = {
  error: true,
  children: [],
}
