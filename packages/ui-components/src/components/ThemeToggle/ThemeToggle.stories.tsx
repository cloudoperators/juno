/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThemeToggle } from "./ThemeToggle.component"

export default {
  title: "WIP/ThemeToggle",
  component: ThemeToggle,
  argTypes: {},
}

export const Default = {
  parameters: {},
  args: {},
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
