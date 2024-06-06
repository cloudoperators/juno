/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { TextInput } from "./index.js";

export default {
  title: "Forms/TextInput",
  component: TextInput,
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
};

export const Default = {
  args: {},
};

export const WithLabel = {
  args: {
    label: "Text Input",
  },
};

export const RequiredWithLabel = {
  args: {
    label: "Required Text Input",
    required: true,
  },
};

export const Invalid = {
  args: {
    invalid: true,
  },
};

export const Valid = {
  args: {
    valid: true,
  },
};

export const Autofocus = {
  args: {
    autoFocus: true,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const ReadOnly = {
  args: {
    readOnly: true,
    value: "Readonly, can not be edited.",
  },
};

export const Email = {
  args: {
    type: "email",
  },
};

export const Tel = {
  args: {
    type: "tel",
  },
};

export const Url = {
  args: {
    type: "url",
  },
};

export const Number = {
  args: {
    type: "number",
  },
};

export const Password = {
  args: {
    type: "password",
  },
};

export const WithHelpText = {
  args: {
    helptext: "This is an explanatory text referring to the input",
  },
};

export const WithHelpTextAsNode = {
  args: {
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
  },
};

export const WithSuccessText = {
  args: {
    successtext: "This field is a great success!",
  },
};

export const WithErrorText = {
  args: {
    errortext: "This field has an error",
  },
};
