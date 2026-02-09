/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, Suspense, use, useState } from "react"
import { useRouteContext } from "@tanstack/react-router"
import {
  Panel,
  PanelBody,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  PopupMenu,
  PopupMenuOptions,
  PopupMenuItem,
} from "@cloudoperators/juno-ui-components"
import { fetchRemediations } from "../../../../../api/fetchRemediations"
import { deleteRemediation } from "../../../../../api/deleteRemediation"
import { getNormalizedRemediationsResponse } from "../../../../Services/utils"
import { GetRemediationsQuery } from "../../../../../generated/graphql"
import { ErrorBoundary } from "../../../../common/ErrorBoundary"
import { EmptyDataGridRow } from "../../../../common/EmptyDataGridRow"
import { LoadingDataRow } from "../../../../common/LoadingDataRow"
import { getErrorDataRowComponent } from "../../../../common/getErrorDataRow"
import type { RemediatedVulnerability } from "../../../../Services/utils"

type RemediationHistoryPanelProps = {
  service: string
  image: string
  vulnerability: string | null
  onClose: () => void
}

const COLUMN_SPAN = 6

function formatDateTime(value: string | null): string {
  if (!value) return "—"
  try {
    const d = new Date(value)
    return Number.isNaN(d.getTime())
      ? value
      : d.toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })
  } catch {
    return value
  }
}

const RemediationHistoryTable = ({
  remediationsPromise,
  onRevert,
}: {
  remediationsPromise: ReturnType<typeof fetchRemediations>
  onRevert: (remediationId: string) => Promise<void>
}) => {
  const [revertingId, setRevertingId] = useState<string | null>(null)
  const { error, data } = use(remediationsPromise)
  const { remediatedVulnerabilities } = getNormalizedRemediationsResponse(data as GetRemediationsQuery | undefined)

  const handleRevert = async (r: RemediatedVulnerability) => {
    setRevertingId(r.remediationId)
    try {
      await onRevert(r.remediationId)
    } finally {
      setRevertingId(null)
    }
  }

  if (error) {
    return <EmptyDataGridRow colSpan={COLUMN_SPAN}>Error loading remediations: {error.message}</EmptyDataGridRow>
  }

  if (remediatedVulnerabilities.length === 0) {
    return <EmptyDataGridRow colSpan={COLUMN_SPAN}>No remediations found for this vulnerability.</EmptyDataGridRow>
  }

  return (
    <>
      {remediatedVulnerabilities.map((r: RemediatedVulnerability) => (
        <DataGridRow key={r.remediationId}>
          <DataGridCell className="whitespace-nowrap">{formatDateTime(r.expirationDate)}</DataGridCell>
          <DataGridCell className="whitespace-nowrap">{formatDateTime(r.remediationDate)}</DataGridCell>
          <DataGridCell>{r.remediatedBy ?? "—"}</DataGridCell>
          <DataGridCell>{r.type ?? "—"}</DataGridCell>
          <DataGridCell>{r.description ?? "—"}</DataGridCell>
          <DataGridCell className="cursor-default interactive" onClick={(e) => e.stopPropagation()}>
            <PopupMenu icon="moreVert" className="whitespace-nowrap" disabled={revertingId === r.remediationId}>
              <PopupMenuOptions>
                <PopupMenuItem
                  label={revertingId === r.remediationId ? "Reverting..." : "Revert False Positive"}
                  onClick={() => handleRevert(r)}
                  disabled={revertingId === r.remediationId}
                />
              </PopupMenuOptions>
            </PopupMenu>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}

export const RemediationHistoryPanel = ({ service, image, vulnerability, onClose }: RemediationHistoryPanelProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })

  const remediationsPromise = useMemo(() => {
    if (!vulnerability) return null
    // TODO(BE): Remove workaround once getRemediations filter and deleteRemediation are fixed. See comment below.
    return fetchRemediations({
      apiClient,
      queryClient,
      filter: {
        service: [service],
        image: [vulnerability],
        vulnerability: [image],
      },
    })
  }, [service, image, vulnerability, apiClient, queryClient])

  const handleRevert = async (remediationId: string) => {
    await deleteRemediation({ apiClient, remediationId })
    queryClient.invalidateQueries({ queryKey: ["remediations"] })
    queryClient.invalidateQueries({ queryKey: ["images"] })
  }

  return (
    <Panel
      heading={vulnerability ? `Remediations for ${vulnerability}` : undefined}
      opened={!!vulnerability}
      onClose={onClose}
      size="large"
    >
      <PanelBody>
        {remediationsPromise && (
          <ErrorBoundary
            displayErrorMessage
            fallbackRender={getErrorDataRowComponent({ colspan: COLUMN_SPAN })}
            resetKeys={[remediationsPromise]}
          >
            <DataGrid columns={COLUMN_SPAN} cellVerticalAlignment="top">
              <DataGridRow>
                <DataGridHeadCell>Expiration Date</DataGridHeadCell>
                <DataGridHeadCell>Remediation Date</DataGridHeadCell>
                <DataGridHeadCell>Remediated By</DataGridHeadCell>
                <DataGridHeadCell>Type</DataGridHeadCell>
                <DataGridHeadCell>Description</DataGridHeadCell>
                <DataGridHeadCell>Actions</DataGridHeadCell>
              </DataGridRow>
              <Suspense fallback={<LoadingDataRow colSpan={COLUMN_SPAN} />}>
                <RemediationHistoryTable remediationsPromise={remediationsPromise} onRevert={handleRevert} />
              </Suspense>
            </DataGrid>
          </ErrorBoundary>
        )}
      </PanelBody>
    </Panel>
  )
}
