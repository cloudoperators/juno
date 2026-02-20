/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useRouteContext } from "@tanstack/react-router"
import { useMutation } from "@tanstack/react-query"
import { Button, Stack } from "@cloudoperators/juno-ui-components"
import { annotateResource } from "../api/annotateResource"
import { RouteContext } from "../../../routes/__root"
import { ErrorMessage } from "./ErrorBoundary/ErrorMessage"

interface ReconcileButtonProps {
  resourceType: string
  resourceName: string
  namespace: string
  onReconcile?: () => void
  onError?: (error: Error) => void
}

export const ReconcileButton: React.FC<ReconcileButtonProps> = ({
  resourceType,
  resourceName,
  namespace,
  onReconcile,
  onError,
}) => {
  const { apiClient } = useRouteContext({ strict: false }) as RouteContext

  const annotateMutation = useMutation({
    mutationFn: () =>
      annotateResource({
        apiClient,
        resourceType,
        resourceName,
        namespace,
        annotations: {
          "greenhouse.sap/reconcile": new Date().toISOString(),
        },
      }),
    onSuccess: () => {
      onReconcile?.()
    },
    onError: (error: Error) => {
      onError?.(error)
    },
  })

  const handleReconcile = () => {
    annotateMutation.mutate()
  }

  return (
    <Stack direction="vertical" gap="2" alignment="end">
      <Button
        variant="subdued"
        size="small"
        label={annotateMutation.isPending ? "Reconciling" : "Reconcile"}
        onClick={handleReconcile}
        disabled={annotateMutation.isPending}
      />
      {annotateMutation.error && <ErrorMessage error={annotateMutation.error} />}
    </Stack>
  )
}
