/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */
// @ts-expect-error TS(2792): Cannot find module 'luxon'. Did you mean to set th... Remove this comment to see the full error message
import { DateTime } from "luxon"

export const listOfCommaSeparatedObjs = (objs: any, prop: any) => {
  objs = objs?.edges || []
  return objs
    .filter((obj: any) => obj?.node?.[prop])
    .map((obj: any) => obj?.node?.[prop])
    .join(", ")
}

export const formatDate = (dateStr: any) => {
  const dateObj = DateTime.fromISO(dateStr)
  const dateFormat = { ...DateTime.DATE_MED } // Use the predefined DATE_MED format
  return dateObj.toLocaleString(dateFormat) // Format the date using the predefined format
}

export const highestSeverity = (vulnerablities: any) => {
  const highest = vulnerablities.reduce((max: any, vulnerability: any) => {
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

export const severityString = (severity: any) => {
  // return -  if there is no value to show nothing.
  if (!severity?.value) return "—"

  return severity?.value + " (" + severity?.score + ")"
}

export const cellSeverityClasses = (severity: any) => {
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
