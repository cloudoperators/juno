/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Label } from "./index"

export default {
  title: "Deprecated/Forms/Label (JS)",
  component: Label,
  argTypes: {},
}

export const Default = {
  args: {
    text: "My Label",
  },
}

export const Disabled = {
  args: {
    text: "My disabled label",
    disabled: true,
  },
}

export const Required = {
  args: {
    text: "My required label",
    required: true,
  },
}
