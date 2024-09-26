/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { DateTime } from "luxon"

export const listOfCommaSeparatedObjs = (objs, prop) => {
  objs = objs?.edges || []
  return objs
    .filter((obj) => obj?.node?.[prop])
    .map((obj) => obj?.node?.[prop])
    .join(", ")
}

export const formatDate = (dateStr) => {
  const dateObj = DateTime.fromISO(dateStr)
  const dateFormat = { ...DateTime.DATE_MED } // Use the predefined DATE_MED format
  return dateObj.toLocaleString(dateFormat) // Format the date using the predefined format
}

export const highestSeverity = (vulnerablities) => {
  const highest = vulnerablities.reduce((max, vulnerability) => {
    const currentScore = vulnerability?.node?.severity?.score
    const maxScore = max?.node?.severity?.score

    // If the current score is null skip this vulnerability
    if (currentScore == null) {
      return max
    }

    // If current score is higher, update max
    if (maxScore == null || currentScore > maxScore) {
      return vulnerability
    }

    // Otherwise, keep the current max
    return max
  }, vulnerablities[0])
  return highest?.node?.severity
}

export const severityString = (severity) => {
  // return -  if there is no value to show nothing.
  if (!severity?.value) return "—"

  return severity?.value + " (" + severity?.score + ")"
}

// Helper function to extract the last four parts of a URL - used for displaying ccrn
export const extractLastFourParts = (url) => {
  if (!url) return ""
  const parts = url.split("/")
  return parts.slice(-4).join("/")
}

export const cellSeverityClasses = (severity) => {
  let borderColor = "border-text-theme-default"
  switch (severity) {
    case "Critical":
    case "High":
      borderColor = "border-theme-danger"
      break
    case "Medium":
      borderColor = "border-theme-warning"
      break
    case "Low":
      borderColor = "border-theme-info"
      break
    case "None":
      borderColor = "" // No special border color for "None"
      break
  }

  return `
    border-l-2
    ${borderColor}
    h-full
    pl-5
  `
}
