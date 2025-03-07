/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { sortAlerts, countAlerts } from "../lib/utils"
let compareAlertString: any

export interface AlertsData {
  alerts: any
  counts: any
}

export const fetchAlerts = async (endpoint: string) => {
  try {
    const response = await fetch(`${endpoint}/alerts`)

    if (!response.ok) {
      // Parse the error object from the response body
      const errorObject = await response.json().catch(() => {
        throw new Error(`Unexpected error: Unable to parse error response.`)
      })

      // Throw the error object directly
      throw errorObject
    }

    const items = await response.json() // Parse JSON data
    const alerts = sortAlerts(items)

    // copy additional filter options to labels for easier filter selection
    // because the alert object is nested this makes it a lot easier to filter, since we only use what is present in alert.labels
    alerts.forEach((alert: any) => {
      if (alert.labels) {
        alert.labels.status = alert.status?.state
      }
    })

    // check if new loaded alerts are different from the last response
    const newCompareString = JSON.stringify(alerts)
    if (compareAlertString !== newCompareString) {
      compareAlertString = newCompareString

      // inform listener to receive new alerts
      return {
        alerts: alerts,
        counts: countAlerts(alerts),
      }
    } else {
      // return null when nothing new
      return null
    }
  } catch (error) {
    console.error(error)
    throw error // Let React Query handle the error
  }
}
