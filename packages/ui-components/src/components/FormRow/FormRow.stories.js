/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { FormRow } from "./index.js"
import { TextInput } from "../TextInput/index.js"

export default {
  title: "Forms/FormRow",
  component: FormRow,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => (
  <FormRow {...args}>{children}</FormRow>
)
Template.propTypes = {
  children: PropTypes.node,
}

export const Default = {
  render: Template,

  args: {
    children: [
      <TextInput
        label="TextInput in a FormRow"
        placeholder="Your input here…"
        key="1"
      />,
    ],
  },
}
