/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { createFileRoute, useRouteContext } from "@tanstack/react-router"
import { Container, ContentHeading, Stack } from "@cloudoperators/juno-ui-components"
import { useAuth } from "../../components/AuthProvider"
import { useGlobalsApiEndpoint } from "../../components/StoreProvider"
import { ClustersAppWithoutShadowDOM } from "../../components/core-apps/org-admin/components/clusters/App"
import { useActions } from "@cloudoperators/juno-messages-provider"

export const Route = createFileRoute("/admin/clusters")({
  component: RouteComponent,
  loader: () => ({
    crumb: {
      label: "Clusters",
      icon: "home",
    },
  }),
})

function RouteComponent() {
  const { data: authData } = useAuth()
  const { addMessage, removeMessage } = useActions()
  const apiEndpoint = useGlobalsApiEndpoint()
  const { user } = useRouteContext({ from: "/admin/clusters" })
  const token = authData?.JWT
  const namespace = user.organization

  useEffect(() => {
    const messageId = addMessage({
      variant: "warning",
      text: "This view is from the legacy interface and will be updated with a modern design and improved functionality.",
      dismissible: false,
    })
    return () => {
      if (messageId) {
        removeMessage(messageId)
      }
    }
  }, [addMessage, removeMessage])

  return (
    <Stack direction="vertical" gap="4">
      <Container px={false} py={false}>
        <ContentHeading>Clusters Overview</ContentHeading>
        <p>Manage and monitor clusters</p>
      </Container>
      {/* @ts-expect-error TS(2339): Property 'data' does not exist on type 'unknown'. */}
      <ClustersAppWithoutShadowDOM apiEndpoint={apiEndpoint} token={token} namespace={namespace} />
    </Stack>
  )
}
