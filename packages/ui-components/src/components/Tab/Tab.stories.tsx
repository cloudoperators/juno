/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Tab } from "./index"
import { KnownIconsEnum } from "../Icon/Icon.component"

export default {
  title: "Layout/Tabs/Tab",
  component: Tab,
  argTypes: {
    icon: {
      options: ["default", ...Object.keys(KnownIconsEnum)],
      control: { type: "select" },
    },
    children: {
      control: false,
    },
  },
}

export const Default = {
  args: {
    label: "A Tab Label",
    children: "Tab 1",
  },
}

export const WithIcon = {
  args: {
    children: "Tab with Icon",
    icon: "danger",
  },
}
