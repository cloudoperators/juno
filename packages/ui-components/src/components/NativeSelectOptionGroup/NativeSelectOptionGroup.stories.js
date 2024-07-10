/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { NativeSelectOptionGroup } from "./index.js"
import { NativeSelect } from "../NativeSelect/index.js"
import { NativeSelectOption } from "../NativeSelectOption/index.js"

// import {
//   Default as DefaultSelectOption,
//   Disabled as DisabledSelectOption,
// } from '../NativeSelectOption/NativeSelectOption.stories';

export default {
  title: "Forms/NativeSelect/NativeSelectOptionGroup",
  component: NativeSelectOptionGroup,
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
  <NativeSelect>
    <NativeSelectOptionGroup {...args}>{children}</NativeSelectOptionGroup>
  </NativeSelect>
)

export const Default = {
  render: Template,

  args: {
    label: "My option group",
    children: [
      <NativeSelectOption value="1" label="Option 1" />,
      <NativeSelectOption value="2" label="Option 2" />,
      <NativeSelectOption value="3" label="Option 3" />,
    ],
  },
}

export const Disabled = {
  render: Template,

  args: {
    label: "My disabled option group",
    children: [
      <NativeSelectOption value="1" label="Option 1" />,
      <NativeSelectOption value="2" label="Option 2" />,
      <NativeSelectOption value="3" label="Option 3" />,
    ],
    disabled: true,
  },
}
