/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const getNumberColorStyle = (status: string) => {
  switch (status?.toLowerCase()) {
    case "safe":
      return "text-theme-success" // Green
    case "caution":
      return "text-theme-warning" // Yellow
    case "unsafe":
      return "text-theme-danger" // Red
    default:
      return "text-theme-highest" // White
  }
}
