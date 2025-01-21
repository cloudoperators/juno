/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import { useSilencesActions } from "../StoreProvider"
import { useAlertsQuery } from "../../hooks/useAlertsQuery"

// Gives inhibitor which will still last the longest
export const getInhibitor = (alertsInhibitedBy, alerts) => {
  if (!alertsInhibitedBy) return null

  // get all alerts which are inhibited by this alert
  const inhibitedByAlerts = alertsInhibitedBy.map((fingerprint) => {
    return alerts.find((alert) => alert.fingerprint === fingerprint)
  })

  // if no alert is found, return null
  if (!inhibitedByAlerts[0]) return null

  // sort by biggest endsAt (most far in the future)
  const inhibitedBy = inhibitedByAlerts.sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt))
  return inhibitedBy[0]
}

const AlertStatus = ({ alert }) => {
  if (!alert) return null
  const { data } = useAlertsQuery
  const { getMappingSilences } = useSilencesActions()

  // Gives silence which will still last the longest
  const silences = getMappingSilences(alert).sort((a, b) => new Date(b?.endsAt) - new Date(a?.endsAt))
  const silence = silences.length > 0 ? silences[0] : null

  const inhibitor = getInhibitor(alert?.status?.inhibitedBy, data?.alerts)

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
