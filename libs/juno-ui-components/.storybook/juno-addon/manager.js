/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "./ThemeToggle"
import { addons } from "@storybook/manager-api"
import { getCurrentTheme } from "./themes"
import { ICON_DATA_URL } from "./constants"

// <link rel="shortcut icon" href="/favicon.ico">
const favicon = document.head.querySelector("link[rel='icon']")
if (favicon) favicon.setAttribute("href", ICON_DATA_URL)

addons.setConfig({
  theme: getCurrentTheme(),
  toolbar: {
    "storybook/background": { hidden: true },
  },
})

console.log("Juno Addon Loaded")
