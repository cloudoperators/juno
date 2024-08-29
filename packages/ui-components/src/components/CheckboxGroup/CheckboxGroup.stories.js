/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"
import { CheckboxGroup } from "./index.js"
import { Checkbox } from "../Checkbox/index.js"

export default {
  title: "Forms/Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
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
    selected: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }) => <CheckboxGroup {...args}>{children}</CheckboxGroup>

Template.propTypes = {
  children: PropTypes.node,
}

export const Default = {
  render: Template,

  args: {
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" label="Option 3" key="3" />,
    ],
  },
}

export const Selected = {
  render: Template,

  args: {
    selected: ["val-2"],
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" label="Option 3" key="3" />,
    ],
  },
}

export const IndividuallyChecked = {
  render: Template,

  args: {
    children: [
      <Checkbox value="val-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" label="Option 2" key="2" checked />,
      <Checkbox value="val-3" label="Option 3" key="3" checked />,
      <Checkbox value="val-4" label="Option 4" key="4" />,
    ],
  },
}

export const WithLabel = {
  render: Template,

  args: {
    name: "Labelled ChechboxGroup",
    label: "A Labelled CheckboxGroup",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const Required = {
  render: Template,

  args: {
    name: "Required Labelled ChechboxGroup",
    label: "A Required, Labelled CheckboxGroup",
    required: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const Disabled = {
  render: Template,

  args: {
    label: "A disabled CheckboxGroup",
    disabled: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const ValidCheckboxGroup = {
  render: Template,

  args: {
    name: "valid-checkbox-group",
    label: "A valid CheckboxGroup",
    valid: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptext = {
  render: Template,

  args: {
    name: "checkbox-group-with-helptext",
    label: "A CheckboxGroup with helptext",
    helptext: "A helptext",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithHelptextAsNode = {
  render: Template,

  args: {
    name: "checkbox-group-with-helptext-as-node",
    label: "A CheckboxGroup with helptext as node",
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithSuccesstext = {
  render: Template,

  args: {
    name: "checkbox-group-with-success",
    label: "A CheckboxGroup with successful validation",
    successtext: "This group is valid.",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const InvalidCheckboxGroup = {
  render: Template,

  args: {
    name: "invalid-checkbox-group",
    label: "An invalid CheckboxGroup",
    invalid: true,
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}

export const WithErrortext = {
  render: Template,

  args: {
    name: "checkbox-group-with-error",
    label: "A CheckboxGroup with an Error",
    errortext: "This group has an error.",
    children: [
      <Checkbox value="val-1" id="c-1" label="Option 1" key="1" />,
      <Checkbox value="val-2" id="c-2" label="Option 2" key="2" />,
      <Checkbox value="val-3" id="c-3" label="Option 3" key="3" />,
    ],
  },
}
