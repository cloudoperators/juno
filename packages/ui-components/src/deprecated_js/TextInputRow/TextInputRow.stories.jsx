/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TextInputRow } from "./index.js"

export default {
  title: "Deprecated/TextInputRow",
  component: TextInputRow,
  parameters: {
    docs: {
      description: {
        component:
          "DEPRECATED: A text input row containing an input of type text, password, email, tel, or url, an associated label, and necessary structural markup. This component is DEPRECATED, use TextInput instead.",
      },
    },
  },
  argTypes: {
    type: {
      options: ["text", "password", "email", "tel", "url", "number"],
      control: { type: "select" },
    },
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
    label: "Default Text Input Row",
  },
}

export const Disabled = {
  args: {
    label: "Disabled Text Input Row",
    disabled: true,
  },

  parameters: {
    docs: {
      description: {
        story: "Set `disabled` to true to disable the input.",
      },
    },
  },
}

export const WithHelpText = {
  args: {
    name: "my-input",
    label: "Text Input Row with Help Text",
    helptext: "Oh so helpful helptext",
  },
}

export const WithHelpTextWithLink = {
  args: {
    name: "my-input",
    label: "Text Input Row with Help Text containing a link",
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
  },
}

export const Required = {
  args: {
    label: "Required Input Row",
    required: true,
    helptext: "this field is required",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Setting `required` to true to render the required marker to the label. Note that this will not set the html-`required` attribute in the rendered. You will have to manage checking for completeness and showing error messages yourself.",
      },
    },
  },
}

export const Invalid = {
  args: {
    label: "Invalid Input Row",
    invalid: true,
  },

  parameters: {
    docs: {
      description: {
        story: "Set `invalid` to true to invalidate the field and render the associated styles and the icon.",
      },
    },
  },
}

export const WithErrorText = {
  args: {
    label: "Input Row with Error Text",
    helptext: "Oh so helpful helptext",
    errortext: "When passed an errortext prop, the InputRow will be set to invalid automatically.",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing an `errortext` prop to the TextInputRow component will automatically invalidate it, so there is no need to explicitly set `invalid` as well.",
      },
    },
  },
}

export const Valid = {
  args: {
    label: "Valid Input Row",
    valid: true,
  },

  parameters: {
    docs: {
      description: {
        story: "Set `valid` to true to set the field to valid and render the associated styles and the icon.",
      },
    },
  },
}

export const WithSuccessText = {
  args: {
    label: "Input Row with Success Text",
    helptext: "Oh so helpful helptext",
    successtext: "When passed an errortext prop, the InputRow will be set to invalid automatically.",
  },

  parameters: {
    docs: {
      description: {
        story:
          "Passing a `successtext` prop to the TextInputRow component will automatically set it to valid, so there is no need to explicitly set `valid` as well.",
      },
    },
  },
}

export const Autofocus = {
  args: {
    autoFocus: true,
    label: "Text Input Row",
  },

  parameters: {
    docs: {
      description: {
        story: "Set `autoFocus` to true to automatically focus the input.",
      },
    },
  },
}
