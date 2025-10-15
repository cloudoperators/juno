/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import constants from "../../../constants"
import ExpireSilence from "../../silences/ExpireSilence"
import RecreateSilence from "../../silences/RecreateSilence"

import { Badge, DataGrid, DataGridCell, DataGridHeadCell, DataGridRow } from "@cloudoperators/juno-ui-components"

import { useSilencesActions } from "../../StoreProvider"

const badgeVariant = (state: any) => {
  switch (state) {
    case constants.SILENCE_ACTIVE:
      return "info"
    default:
      return "default"
  }
}

const AlertSilencesList = ({ alert }: any) => {
  const { getSilencesForAlert } = useSilencesActions()
  const silenceList = getSilencesForAlert(alert)

  const formatDateTime = (timestamp: VarDate) => {
    const date = new Date(timestamp)
    return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }
  

  return (
    <>
      {silenceList.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2 mt-8">Silences</h2>
          <DataGrid columns={6} minContentColumns={[5]}>
            <DataGridRow>
              <DataGridHeadCell>Status</DataGridHeadCell>
              <DataGridHeadCell>Silence start</DataGridHeadCell>
              <DataGridHeadCell>Silence end</DataGridHeadCell>
              <DataGridHeadCell>Created by</DataGridHeadCell>
              <DataGridHeadCell>Comment</DataGridHeadCell>
              <DataGridHeadCell>Action</DataGridHeadCell>
            </DataGridRow>
            {silenceList.map((silence: any) => (
              <DataGridRow key={silence.id}>
                <DataGridCell>
                  <div>
                    <Badge variant={badgeVariant(silence?.status?.state)}>{silence.status?.state}</Badge>
                  </div>
                </DataGridCell>
                <DataGridCell>{formatDateTime(silence.startsAt)}</DataGridCell>
                <DataGridCell>{formatDateTime(silence.endsAt)}</DataGridCell>
                <DataGridCell>{silence.createdBy}</DataGridCell>
                <DataGridCell className="break-all">{silence.comment}</DataGridCell>
                <DataGridCell>
                  {
                    /// show the expire button if the silence is active or pending
                    // else show recreate button
                    silence?.status?.state === constants.SILENCE_ACTIVE ? (
                      <ExpireSilence silence={silence} fingerprint={alert.fingerprint} />
                    ) : (
                      <RecreateSilence silence={silence} fingerprint={alert.fingerprint} />
                    )
                  }
                </DataGridCell>
              </DataGridRow>
            ))}
          </DataGrid>
        </>
      )}
    </>
  )
}

export default AlertSilencesList
