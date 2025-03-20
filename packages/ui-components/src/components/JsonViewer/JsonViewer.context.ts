/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ThemeContextType, ThemeColors } from "./JsonViewer.types"
import * as themes from "./themes"

// default indent width
const DEFAULT_INDENT_WIDTH = 4
// default expand setting
const DEFAULT_EXPANDED = 1

// DEFAULT THEME (DARK)
export const DEFAULT_THEME: themes.JsonViewerTheme = {
  base00: "var(--color-syntax-highlight-base00)", // background
  base01: "var(--color-syntax-highlight-base01)", // toolbar: border, background
  base02: "var(--color-syntax-highlight-base02)", // border, type background, border
  base03: "var(--color-syntax-highlight-base03)", // -
  base04: "var(--color-syntax-highlight-base04)", // size
  base05: "var(--color-syntax-highlight-base05)", // types: "undefined"
  base06: "var(--color-syntax-highlight-base06)", // -
  base07: "var(--color-syntax-highlight-base07)", // key, brace
  base08: "var(--color-syntax-highlight-base08)", // types: "NaN"
  base09: "var(--color-syntax-highlight-base09)", // ..., types: "string"
  base0A: "var(--color-syntax-highlight-base0A)", // types: "null", "regex"
  base0B: "var(--color-syntax-highlight-base0B)", // types: "float"
  base0C: "var(--color-syntax-highlight-base0C)", // array index
  base0D: "var(--color-syntax-highlight-base0D)", // expanded icon, types: "date", "function"
  base0E: "var(--color-syntax-highlight-base0E)", // collapsed icon, types: "boolean"
  base0F: "var(--color-syntax-highlight-base0F)", // copy icon, types: "integer"
}

// map of color keys to theme
export const colorMap = (theme: themes.JsonViewerTheme): ThemeColors => ({
  background: theme.base00,
  ellipsis: theme.base09,
  brace: theme.base07,
  key: theme.base07,
  index: theme.base0C,
  size: theme.base04,
  border: theme.base02,
  highlight: {
    foreground: theme.base06,
    background: theme.base02,
  },
  toolbar: {
    border: theme.base01,
    background: theme.base01,
    foreground: theme.base07,
  },
  icon: {
    expanded: theme.base0D,
    collapsed: theme.base0E,
    expandAll: theme.base0E,
  },
  dataType: {
    boolean: theme.base0E,
    date: theme.base0D,
    float: theme.base0B,
    function: theme.base0D,
    integer: theme.base0F,
    string: theme.base09,
    nan: theme.base08,
    null: theme.base0A,
    undefined: theme.base05,
    regexp: theme.base0A,
    background: theme.base02,
  },
})

// Theme context to provide colors, ident size ect. in component tree
export const ThemeContext = React.createContext<ThemeContextType>({
  colors: colorMap(DEFAULT_THEME),
  indentWidth: DEFAULT_INDENT_WIDTH,
  expanded: DEFAULT_EXPANDED,
})
