/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { create } from "@storybook/theming/create"
import { LOGO_DARK_DATA_URL, LOGO_LIGHT_DATA_URL, STORAGE_KEY } from "./constants"
// import { themes } from "@storybook/theming"
// console.log(themes.dark)

const staticOptions = {
  brandTitle: "Juno UI",
  brandUrl: window.location.origin + window.location.pathname,
  brandTarget: "_self",
  // Fonts
  fontBase:
    '"Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontCode:
    'ui-monospace, Menlo, Monaco, "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Droid Sans Mono", "Courier New", monospace',
}

const dark = create({
  ...staticOptions,
  base: "dark",
  brandImage: LOGO_DARK_DATA_URL,
  //
  colorPrimary: "rgb(15, 167, 180)",
  colorSecondary: "rgb(21, 208, 224)",

  // UI
  appBg: "rgb(36, 42, 49)",
  appContentBg: "rgb(18, 25, 32)",
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,

  //Buttons
  booleanBg: "rgb(23, 30, 37)",
  booleanSelectedBg: "#2E3438",
  buttonBg: "rgb(23, 30, 37)",
  buttonBorder: "rgba(255,255,255,.1)",

  // Text colors
  textColor: "rgb(187,187,187)",
  textInverseColor: "rgb(76, 76, 76)",

  // Toolbar default and active colors
  barTextColor: "rgb(187,187,187)",
  barSelectedColor: "rgb(187,187,187)",
  barBg: "rgb(36, 42, 49)",

  // Form colors
  inputBg: "rgb(23, 30, 37)",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: "rgb(187, 187, 187)",
  inputBorderRadius: 2,

  // Menu

  textMutedColor: "rgb(122, 122, 122)",
})

const light = create({
  ...staticOptions,
  base: "light",
  brandImage: LOGO_LIGHT_DATA_URL,

  //
  colorPrimary: "rgb(30, 106, 146)",
  colorSecondary: "rgb(0, 125, 184)",

  // UI
  appBg: "rgb(249, 249, 249)",
  appContentBg: "rgb(255, 255, 255)",
  appBorderColor: "rgba(64, 64, 64, .1)",
  appBorderRadius: 4,

  //Buttons
  booleanBg: "rgb(233, 233, 233)",
  booleanSelectedBg: "#2E3438",
  buttonBg: "rgb(233, 233, 233)",
  buttonBorder: "rgba(64, 64, 64, .1)",

  // Text colors
  textColor: "rgb(76, 76, 76)",
  textInverseColor: "rgb(76, 76, 76)",

  // Toolbar default and active colors
  barTextColor: "rgb(76, 76, 76)",
  barSelectedColor: "rgb(76, 76, 76)",
  barBg: "rgb(249, 249, 249)",

  // Form colors
  inputBg: "rgb(233, 233, 233)",
  inputBorder: "rgba(64, 64, 64, .1)",
  inputTextColor: "rgb(76, 76, 76)",
  inputBorderRadius: 2,

  // Menu

  textMutedColor: "rgb(122, 122, 122)",
})

const setCurrentThemeMode = (mode) => localStorage.setItem(STORAGE_KEY, mode)
const getCurrentThemeMode = () => localStorage.getItem(STORAGE_KEY) || "dark"
const getCurrentTheme = () => (getCurrentThemeMode() === "dark" ? dark : light)

export { dark, light, getCurrentTheme, setCurrentThemeMode, getCurrentThemeMode }
