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
  Message,
  Stack,
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
  /** Called after a successful revert so the parent can refetch getRemediations and getImages. */
  onRevertSuccess?: (vulnerability: string) => void | Promise<void>
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
            <PopupMenu icon="moreVert" className="whitespace-nowrap" disabled={!!revertingId}>
              <PopupMenuOptions>
                <PopupMenuItem
                  label={revertingId === r.remediationId ? "Reverting..." : "Revert False Positive"}
                  onClick={() => handleRevert(r)}
                  disabled={!!revertingId}
                />
              </PopupMenuOptions>
            </PopupMenu>
          </DataGridCell>
        </DataGridRow>
      ))}
    </>
  )
}

type RevertMessage = { variant: "success" | "error"; text: string }

export const RemediationHistoryPanel = ({
  service,
  image,
  vulnerability,
  onClose,
  onRevertSuccess,
}: RemediationHistoryPanelProps) => {
  const { apiClient, queryClient } = useRouteContext({ from: "/services/$service" })
  const [revertMessage, setRevertMessage] = useState<RevertMessage | null>(null)

  const remediationsPromise = useMemo(() => {
    if (!vulnerability) return null

    return fetchRemediations({
      apiClient,
      queryClient,
      filter: {
        service: [service],
        image: [image],
        vulnerability: [vulnerability],
      },
    })
  }, [service, image, vulnerability, apiClient, queryClient])

  const handleRevert = async (remediationId: string) => {
    try {
      await deleteRemediation({ apiClient, remediationId })
      const text = `Vulnerability ${vulnerability ?? "unknown"} reverted from false positive successfully.`
      setRevertMessage({ variant: "success", text })

      // Refresh panel/list data after showing success feedback.
      // This keeps the success toast visible even if refresh fails.
      try {
        if (vulnerability) {
          await onRevertSuccess?.(vulnerability)
        }
      } catch (refreshError) {
        console.error("Failed to refresh data after remediation revert:", refreshError)
      }
    } catch (err) {
      setRevertMessage({
        variant: "error",
        text: err instanceof Error ? err.message : "Failed to delete remediation",
      })
    }
  }

  const handlePanelClose = () => {
    setRevertMessage(null)
    onClose()
  }

  return (
    <Panel
      heading={vulnerability ? `Remediations for ${vulnerability}` : undefined}
      opened={!!vulnerability || !!revertMessage}
      onClose={handlePanelClose}
      size="large"
    >
      <PanelBody>
        {revertMessage && (
          <Stack direction="vertical" gap="2" className="jn-mb-4">
            <Message variant={revertMessage.variant === "error" ? "error" : "success"} text={revertMessage.text} />
          </Stack>
        )}
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
