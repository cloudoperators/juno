/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { CheckboxRow } from "./index.js"

export default {
  title: "Deprecated/CheckboxRow",
  component: CheckboxRow,
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
    label: "Default Checkbox Row",
    id: "default",
  },
}

export const Checked = {
  args: {
    label: "Checked CheckboxRow",
    id: "checked",
    checked: true,
  },
}

export const WithHelpText = {
  args: {
    name: "my-input",
    label: "Checkbox Row with Help text",
    helptext: "Oh so helpful helptext",
    id: "withHelptext",
  },
}

export const WithHelpTextWithLink = {
  args: {
    name: "my-input",
    label: "Checkbox Row with Help text",
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
    id: "withHelptext-withLink",
  },
}

export const Required = {
  args: {
    label: "Required Checkbox Row",
    required: true,
    id: "required",
  },
}

export const Disabled = {
  args: {
    label: "Disabled Checkbox Row",
    id: "disabled-checkbox-row",
    disabled: true,
  },
}

export const Invalid = {
  args: {
    label: "Invalid Checkbox",
    id: "invalid-checkbox-row",
    invalid: true,
  },
}

export const WithErrorText = {
  args: {
    label: "Checkbox invalidated by errortext",
    id: "invalid-checkbox-by-errortext",
    errortext: "Pass an errortext to invalidate a CheckboxRow",
  },
}

export const Valid = {
  args: {
    label: "Valid Checkbox",
    id: "valid-checkbox-row",
    valid: true,
  },
}

export const WithSuccessText = {
  args: {
    label: "Checkbox validated by successtext",
    id: "valid-checkbox-by-successtext",
    successtext: "Pass a successtext to validate a CheckboxRow",
  },
}
