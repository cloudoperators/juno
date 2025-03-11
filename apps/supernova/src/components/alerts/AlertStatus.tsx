/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useSilencesActions, useAlertsItems } from "../StoreProvider"

// Gives inhibitor which will still last the longest
export const getInhibitor = (alertsInhibitedBy: any, alerts: any) => {
  if (!alertsInhibitedBy) return null

  // get all alerts which are inhibited by this alert
  const inhibitedByAlerts = alertsInhibitedBy.map((fingerprint: any) => {
    return alerts.find((alert: any) => alert.fingerprint === fingerprint)
  })

  // if no alert is found, return null
  if (!inhibitedByAlerts[0]) return null

  // sort by biggest endsAt (most far in the future)
  const inhibitedBy = inhibitedByAlerts.sort(
    (a: any, b: any) => new Date(b.endsAt).getTime() - new Date(a.endsAt).getTime()
  )
  return inhibitedBy[0]
}

const AlertStatus = ({ alert }: any) => {
  if (!alert) return null
  const alerts = useAlertsItems()
  const { getMappingSilences } = useSilencesActions()

  // Gives silence which will still last the longest
  const silences = getMappingSilences(alert).sort(
    (a: any, b: any) => new Date(b?.endsAt).getTime() - new Date(a?.endsAt).getTime()
  )
  const silence = silences.length > 0 ? silences[0] : null

  const inhibitor = getInhibitor(alert?.status?.inhibitedBy, alerts)

  return (
    <div className="cursor-default">
      {alert && <span>{alert?.status?.state}</span>}
      {inhibitor && (
        <div className="text-xs mt-2">
          <Stack direction="vertical">
            <span>Inhibited by:</span>
            <span>{inhibitor?.annotations?.summary}</span>
          </Stack>
        </div>
      )}
      {silence && (
        <div className="text-xs mt-2">
          <Stack direction="vertical">
            <span>Silenced by:</span>
            <span key={silence.id}>{silence?.createdBy || silence.id}</span>
          </Stack>
        </div>
      )}
    </div>
  )
}

export default AlertStatus
