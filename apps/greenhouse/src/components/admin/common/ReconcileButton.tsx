/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useRouteContext } from "@tanstack/react-router"
import { useMutation } from "@tanstack/react-query"
import { Button } from "@cloudoperators/juno-ui-components"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { annotateResource } from "../api/annotateResource"
import { RouteContext } from "../../../routes/__root"

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
  const { addMessage } = useActions()

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
    onError: (error) => {
      let errorMessage = "Unknown error"
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (typeof error === "string") {
        errorMessage = error
      }
      addMessage({
        variant: "error",
        text: `Failed to reconcile ${resourceType} "${resourceName}": ${errorMessage}`,
      })
      if (onError) {
        const errorForCallback = error instanceof Error ? error : new Error(errorMessage)
        onError(errorForCallback)
      }
    },
  })

  const handleReconcile = () => {
    annotateMutation.mutate()
  }

  return (
    <Button
      variant="subdued"
      size="small"
      label={annotateMutation.isPending ? "Reconciling" : "Reconcile"}
      onClick={handleReconcile}
      progress={annotateMutation.isPending}
      disabled={annotateMutation.isPending}
    />
  )
}
