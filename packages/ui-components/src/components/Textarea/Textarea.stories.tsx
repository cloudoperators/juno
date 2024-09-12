/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Textarea } from "./index"

export default {
  title: "Forms/Textarea",
  component: Textarea,
  argTypes: {
    errortext: {
      control: false,
    },
    helptext: {
      control: false,
    },
    successtext: {
      control: false,
    },
  },
}

export const Default = {
  args: {
    placeholder: "Some text here",
  },
}

export const WithLabel = {
  args: {
    label: "Textarea",
  },
}

export const RequiredWithLabel = {
  args: {
    label: "Required Textarea",
    required: true,
  },
}

export const Invalid = {
  args: {
    invalid: true,
    placeholder: "Some invalid text here",
  },
}

export const Valid = {
  args: {
    valid: true,
    placeholder: "Some valid text here",
  },
}

export const Disabled = {
  args: {
    disabled: true,
    placeholder: "A disabled textarea",
  },
}

export const Autofocus = {
  args: {
    placeholder: "An autofocussing textarea",
    autoFocus: true,
  },
}

export const WithHelpText = {
  args: {
    helptext: "This is an explanatory text referring to the input",
  },
}

export const WithHelpTextAsNode = {
  args: {
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
  },
}

export const WithSuccessText = {
  args: {
    successtext: "This field is a great success!",
  },
}

export const WithErrorText = {
  args: {
    errortext: "This field has an error",
  },
}
