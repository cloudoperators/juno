/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TextareaRow } from "./index.js"

export default {
  title: "Deprecated/TextareaRow",
  component: TextareaRow,
  parameters: {
    docs: {
      description: {
        component:
          "DEPRECATED: A textarea row containing a textarea, associated label, optional helptext, and structural markup. This component is DEPRECATED, use Textarea instead.",
      },
    },
  },
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
    children: {
      control: false,
    },
  },
}

export const Default = {
  args: {
    label: "Default Textarea Row",
  },
}

export const Disabled = {
  args: {
    label: "Disabled Textarea Row",
    disabled: true,
  },
}

export const WithHelpText = {
  args: {
    name: "my-input",
    label: "Textarea Row with Helptext",
    helptext: "Oh so helpful helptext",
  },
}

export const WithHelpTextWithLink = {
  args: {
    name: "my-input",
    label: "Textarea Row with Helptext",
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
  },
}

export const Required = {
  args: {
    label: "Required Textarea",
    required: true,
  },
}

export const Invalid = {
  args: {
    label: "Invalid TextareaRow",
    invalid: true,
  },
}

export const WithErrorText = {
  args: {
    label: "Textarea Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext:
      "When passed an errortext prop, the TextareaRow will be set to invalid automatically.",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing an `errortext` prop to the TextareaRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well.",
      },
    },
  },
}

export const Valid = {
  args: {
    label: "Valid TextareaRow",
    valid: true,
  },
}

export const WithSuccessText = {
  args: {
    label: "Textarea Row with Success Text",
    helptext: "Oh so helpful helptext",
    successtext:
      "When passed a successtext prop, the TextareaRow will be set to valid automatically.",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing a `successtext` prop to the TextareaRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well.",
      },
    },
  },
}
