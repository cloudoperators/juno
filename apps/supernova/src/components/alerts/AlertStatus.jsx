/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import {
  useSilencesItemsHash,
  useSilencesLocalItems,
  useSilencesActions,
  useAlertsActions,
} from "../../hooks/useAppStore"

const AlertStatus = ({ alert }) => {
  const { getAlertByFingerprint } = useAlertsActions()
  const allSilences = useSilencesItemsHash()
  const localSilences = useSilencesLocalItems()
  const { getMappingSilences, getMappedState } = useSilencesActions()

  // Gives silence which will still last the longest
  const silence = useMemo(() => {
    if (!alert) return []
    // sort by biggest endsAt (most far in the future)
    const silences = getMappingSilences(alert).sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt))
    return silences.length > 0 ? silences[0] : null
  }, [alert, allSilences, localSilences])

  // Gives inhibitor which will still last the longest
  const inhibitor = useMemo(() => {
    if (!alert) return []
    if (!alert?.status?.inhibitedBy) return []

    let inhibitedBy = alert.status.inhibitedBy.map((fingerprint) => {
      return getAlertByFingerprint(fingerprint)
    })
    // sort by biggest endsAt (most far in the future)
    inhibitedBy = inhibitedBy.sort((a, b) => new Date(b.endsAt) - new Date(a.endsAt))
    return inhibitedBy.length > 0 ? inhibitedBy[0] : null
  }, [alert, allSilences, localSilences])

  const state = useMemo(() => {
    if (!alert) return {}
    return getMappedState(alert)
  }, [alert, allSilences, localSilences])

  return (
    <div className="cursor-default">
      {state && (
        <>
          {state?.isProcessing ? (
            <Stack direction="vertical">
              <span>{state.type}</span>
              <span className="text-xs text-theme-warning">processing</span>
            </Stack>
          ) : (
            <span>{state.type}</span>
          )}
        </>
      )}
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
