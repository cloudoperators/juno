/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getSeverityColor = (severity: string): string => {
  switch (severity.toLowerCase()) {
    case "critical":
      return "text-theme-danger"
    case "high":
      return "text-theme-warning"
    case "medium":
      return "text-theme-warning"
    case "low":
      return "text-theme-info"
    case "none":
      return "text-theme-default"
    default:
      return "text-theme-default"
  }
}
