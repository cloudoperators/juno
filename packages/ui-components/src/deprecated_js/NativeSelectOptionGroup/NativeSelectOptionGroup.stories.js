/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
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

Template.propTypes = {
  children: PropTypes.node,
}

export const Default = {
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

export const Disabled = {
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
