/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
// @ts-expect-error TS(2792) FIXME: Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
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
  // @ts-expect-error TS(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
  const inhibitedBy = inhibitedByAlerts.sort((a: any, b: any) => new Date(b.endsAt) - new Date(a.endsAt))
  return inhibitedBy[0]
}

const AlertStatus = ({ alert }: any) => {
  if (!alert) return null
  const alerts = useAlertsItems()
  // @ts-ignore
  const { getMappingSilences } = useSilencesActions()

  // Gives silence which will still last the longest
  // @ts-expect-error TS(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
  const silences = getMappingSilences(alert).sort((a: any, b: any) => new Date(b?.endsAt) - new Date(a?.endsAt))
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
