/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useSilencesExcludedLabels } from "./components/StoreProvider"
import { useAlertEnrichedLabels } from "./components/StoreProvider"
import { useAlertsQuery } from "./hooks/useAlertsQuery"

export const parseError = (error) => {
  // check if error is JSON containing message or just string
  if (typeof error === "string") {
    if (error.includes("Failed to fetch")) {
      return "Could not reach endpoint. Possible causes could include network issues, incorrect URL, or server outages."
    }
    return parseMessage(error)
  }

  // check if the error is a object containing message
  if (typeof error === "object") {
    if (error?.message) {
      return (error?.code ? `API: ${error.code}, ` : "") + error?.message
    }
  }

  return "An error occurred"
}

const parseMessage = (message) => {
  let newMsg = message
  try {
    newMsg = JSON.parse(message)
    if (newMsg?.message) {
      newMsg = (newMsg?.code ? `API: ${newMsg.code}, ` : "") + newMsg?.message
    }
  } catch (error) {
    console.warn(error)
    return message
  }

  return newMsg
}

// debounce helper. This will debounce the passed function by the passed delay (in milliseconds)
export const debounce = (func, delay) => {
  let timeout
  return function (...args) {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(context, args), delay)
  }
}

/*
      Find all silences (also expired ones) in items that matches all labels (key&value) from the alert but omit the labels that are excluded (excludedLabels)
      */
export const getSilencesForAlert = (alert, silences) => {
  // collect all excluded Labels
  const excludedLabels = useSilencesExcludedLabels() || []
  const enrichedLabels = useAlertEnrichedLabels() || []

  if (!alert || !Array.isArray(silences)) return
  const alertLabels = alert?.labels || {}

  // combine the arrays containing the labels that shouldn't be used for matching into one for easier checking
  const labelsExcludedForMatching = [...excludedLabels, ...enrichedLabels]

  // Find all silences where all silence.labels are a subset of alerts.labels (excluding the excluded excludedLabels)
  return silences.filter((silence) => {
    const silenceMatchers = silence?.matchers || []

    // Check if all non-excluded labels from the silence are included in the alert
    return silenceMatchers.every((silenceLabel) => {
      if (labelsExcludedForMatching.includes(silenceLabel.name)) return true
      const alertLabelValue = alertLabels[silenceLabel.name]

      // If the label is not a regex, check if the values are equal
      if (!silenceLabel.isRegex) {
        return silenceLabel.value === alertLabelValue
      }

      // SilenceLabel.isRegex is true so we need to check if the alertLabelValue matches the regex
      const regex = new RegExp(silenceLabel.value)
      return regex.test(alertLabelValue)
    })
  })
}

export const getAlertByFingerprint = (fingerprint, data) => {
  return data.find((alert) => alert.fingerprint === fingerprint)
}
