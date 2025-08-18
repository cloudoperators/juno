/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"

import {
  Button,
  Container,
  DataGrid,
  DataGridCell,
  DataGridHeadCell,
  DataGridRow,
  Stack,
  Spinner,
} from "@cloudoperators/juno-ui-components"
import { useAlertsActions, useGlobalsActions, useSilencesActions } from "../StoreProvider"
import AlertDescription from "./shared/AlertDescription"
import AlertSilencesList from "./shared/AlertSilencesList"
import { useBoundQuery } from "../../hooks/useBoundQuery"
import { parseError } from "../../helpers"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { SilencesData } from "../../api/silences"
import { useNavigate } from "@tanstack/react-router"

const AlertSilences = ({ alert }: any) => {
  const navigate = useNavigate()
  const { getAlertByFingerprint } = useAlertsActions()
  const { setShowDetailsFor } = useGlobalsActions()
  const { setSilences } = useSilencesActions()
  const { addMessage } = useActions()

  // fetch silences
  const { error, data, isLoading } = useBoundQuery<SilencesData>("silences")

  useEffect(() => {
    if (data) {
      setSilences({
        items: data?.silences,
      })
    }
  }, [data])

  if (error) {
    addMessage({
      variant: "error",
      text: parseError(error),
    })
  }

  return (
    <Container py px={false}>
      {isLoading ? (
        <Stack gap="2">
          <span>Loading</span>
          <Spinner variant="primary" />
        </Stack>
      ) : (
        <AlertSilencesList alert={alert} />
      )}

      {alert.status.inhibitedBy.length > 0 && (
        <>
          <h2 className="text-xl font-bold mb-2 mt-8">Inhibited by</h2>
          <DataGrid columns={2}>
            <DataGridRow>
              <DataGridHeadCell>Alert</DataGridHeadCell>
              <DataGridHeadCell></DataGridHeadCell>
            </DataGridRow>
            {alert.status.inhibitedBy.map((fingerprint: any) => (
              <DataGridRow key={fingerprint}>
                <DataGridCell>
                  <div>{getAlertByFingerprint(fingerprint)?.annotations?.summary}</div>
                  <AlertDescription description={getAlertByFingerprint(fingerprint)?.annotations?.description} />
                </DataGridCell>
                <DataGridCell>
                  <Button
                    size="small"
                    onClick={() => {
                      setShowDetailsFor(fingerprint)
                      navigate({ to: "/", search: (prev) => ({ ...prev, detailsFor: fingerprint }) })
                    }}
                    icon="exitToApp"
                  >
                    Go to details
                  </Button>
                </DataGridCell>
              </DataGridRow>
            ))}
          </DataGrid>
        </>
      )}
    </Container>
  )
}

export default AlertSilences
