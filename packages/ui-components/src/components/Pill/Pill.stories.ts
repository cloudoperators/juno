/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pill } from "./index.ts"

export default {
  title: "Components/Pill",
  component: Pill,
  argTypes: {},
}

export const Default = {
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
  },
}

export const Closeable = {
  args: {
    pillKey: "os",
    pillKeyLabel: "OS",
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true,
  },
}

export const ValueOnly = {
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
  },
}

export const ValueOnlyCloseable = {
  args: {
    pillValue: "mac_os",
    pillValueLabel: "Mac OS",
    closeable: true,
  },
}
