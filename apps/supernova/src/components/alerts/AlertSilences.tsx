/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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

const AlertSilences = ({ alert }: any) => {
  // @ts-ignore
  const { getAlertByFingerprint } = useAlertsActions()
  // @ts-ignore
  const { setShowDetailsFor } = useGlobalsActions()

  // @ts-ignore
  const { setSilences } = useSilencesActions()

  // fetch silences
  const { error, data, isLoading } = useBoundQuery("silences")

  useEffect(() => {
    if (data) {
      setSilences({
        // @ts-expect-error TS(2339) FIXME: Property 'silences' does not exist on type 'any'.
        items: data?.silences,
      })
    }
  }, [data])

  if (error) {
    // @ts-expect-error TS(2304) FIXME: Cannot find name 'addMessage'.
    addMessage({
      variant: "error",
      // @ts-expect-error TS(2304) FIXME: Cannot find name 'parseError'.
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
                  <Button size="small" onClick={() => setShowDetailsFor(fingerprint)} icon="exitToApp">
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
