/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { RadioRow } from "./index"

export default {
  title: "Deprecated/RadioRow",
  component: RadioRow,
  parameters: {
    docs: {
      description: {
        component:
          "DEPRECATED: A radio row containing a radio, associated label, and structural markup. This component is DEPRECATED, use Radio instead.",
      },
    },
  },
  argTypes: {},
}

export const Default = {
  args: {
    label: "Default Radio Row",
    id: "radio-row-default",
  },
}

export const Checked = {
  args: {
    label: "Checked Radio Row",
    checked: true,
    id: "radio-row-checked",
  },
}

export const WithHelpText = {
  args: {
    name: "my-input",
    label: "Radio Row with help text",
    helptext: "Oh so helpful helptext",
    id: "radio-row-withHelptext",
  },
}

export const WithHelpTextWithLink = {
  args: {
    name: "my-input",
    label: "Radio Row with help text",
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
    id: "radio-row-withHelptext-WithLink",
  },
}

export const Disabled = {
  args: {
    label: "Disabled Radio",
    id: "radio-row-disabled",
    disabled: true,
  },
}

export const Required = {
  args: {
    label: "Required Radio",
    id: "required-radio",
    required: true,
  },
}

export const Invalid = {
  args: {
    label: "Invalid Option",
    invalid: true,
  },
}

export const WithErrorText = {
  args: {
    label: "Option with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the RadioRow will be set to invalid automatically.",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing an `errortext` prop to the RadioRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well.",
      },
    },
  },
}

export const Valid = {
  args: {
    label: "Valid Option",
    valid: true,
  },
}

export const WithSuccessText = {
  args: {
    label: "Radio validated by successtext",
    successtext: "Pass a successtext to validate a CheckboxRow",
  },
}
