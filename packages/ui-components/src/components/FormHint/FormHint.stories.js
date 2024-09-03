/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { FormHint } from "./index.js"

export default {
  title: "Forms/FormHint (JS, deprecated)",
  component: FormHint,
  argTypes: {
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => <FormHint {...args}>{children}</FormHint>
Template.propTypes = {
  children: PropTypes.node,
}

export const Default = {
  render: Template,

  args: {
    text: "A simple hint to be associated with a form input",
  },
}

export const WithChildren = {
  render: Template,

  args: {
    children: (
      <>
        A FormHint with a <a href="#">Link</a>.
      </>
    ),
  },
}

export const WithTextAsChildren = {
  render: Template,

  args: {
    text: (
      <>
        A FormHint with a <a href="#">Link</a>.
      </>
    ),
  },
}

export const ErrorVariant = {
  render: Template,

  args: {
    variant: "error",
    text: "A FormHint containing an error or invalidation message",
  },
}

export const SuccessVariant = {
  render: Template,

  args: {
    variant: "success",
    text: "A FormHint containg a success or validation message",
  },
}
