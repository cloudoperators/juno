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

  const silences = useMemo(() => {
    if (!alert) return []
    return getMappingSilences(alert)
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
      {alert?.status?.inhibitedBy?.length > 0 && (
        <div className="text-xs mt-2">
          <Stack direction="vertical">
            <span>Inhibited by:</span>
            {alert.status.inhibitedBy.map((fingerprint, index) => (
              <span key={index}>{getAlertByFingerprint(fingerprint)?.annotations?.summary}</span>
            ))}
          </Stack>
        </div>
      )}
      {silences && silences.length > 0 && (
        <div className="text-xs mt-2">
          <Stack direction="vertical">
            <span>Silenced by:</span>
            {silences.map((data) => (
              <span key={data.id}>{data?.createdBy || data.id}</span>
            ))}
          </Stack>
        </div>
      )}
    </div>
  )
}

export default AlertStatus
