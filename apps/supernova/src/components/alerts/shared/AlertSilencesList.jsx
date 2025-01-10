/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { DateTime } from "luxon"
import constants from "../../../constants"
import ExpireSilence from "../../silences/ExpireSilence"
import RecreateSilence from "../../silences/RecreateSilence"
import { getSilencesForAlert } from "../../../helpers"

import {
  Badge,
  DataGrid,
  DataGridCell,
  DataGridHeadCell,
  DataGridRow,
  Stack,
  Spinner,
} from "@cloudoperators/juno-ui-components"

import { useBoundQuery } from "../../../hooks/useBoundQuery"

const badgeVariant = (state) => {
  switch (state) {
    case constants.SILENCE_STATE_ACTIVE:
      return "info"
    default:
      return "default"
  }
}

const AlertSilencesList = ({ alert }) => {
  const dateFormat = { ...DateTime.DATETIME_SHORT }

  const formatDateTime = (timestamp) => {
    const time = DateTime.fromISO(timestamp)
    return time.toLocaleString(dateFormat)
  }

  const { error, data, isLoading } = useBoundQuery("silences")

  const silences = data?.silences || []
  const silenceList = getSilencesForAlert(alert, silences)

  if (isLoading) {
    return (
      <Stack gap="2">
        <span>Loading</span>
        <Spinner variant="primary" />
      </Stack>
    )
  }

  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
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
            {silenceList.map((silence) => (
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
