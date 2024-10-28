/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export interface JsonViewerTheme {
  base00: string
  base01: string
  base02: string
  base03: string
  base04: string
  base05: string
  base06: string
  base07: string
  base08: string
  base09: string
  base0A: string
  base0B: string
  base0C: string
  base0D: string
  base0E: string
  base0F: string
}

export const dark: JsonViewerTheme = {
  base00: "rgb(39, 40, 34)",
  base01: "rgb(245, 245, 245)",
  base02: "rgb(73, 72, 62)",
  base03: "#93a1a1",
  base04: "rgb(165, 159, 133)",
  base05: "rgb(248, 248, 242)",
  base06: "#073642",
  base07: "rgb(249, 248, 245)",
  base08: "rgb(249, 38, 114)",
  base09: "rgb(253, 151, 31)",
  base0A: "rgb(244, 191, 117)",
  base0B: "rgb(166, 226, 46)",
  base0C: "rgb(161, 239, 228)",
  base0D: "rgb(102, 217, 239)",
  base0E: "rgb(174, 129, 255)",
  base0F: "rgb(204, 102, 51)",
}

export const light: JsonViewerTheme = {
  base00: "#fff",
  base01: "rgb(245, 245, 245)",
  base02: "rgb(235, 235, 235)",
  base03: "#93a1a1",
  base04: "rgba(0, 0, 0, 0.3)",
  base05: "#586e75",
  base06: "#073642",
  base07: "#002b36",
  base08: "#d33682",
  base09: "#cb4b16",
  base0A: "#dc322f",
  base0B: "#859900",
  base0C: "#6c71c4",
  base0D: "#586e75",
  base0E: "#2aa198",
  base0F: "#268bd2",
}
