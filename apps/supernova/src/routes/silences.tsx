/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import { createFileRoute, retainSearchParams } from "@tanstack/react-router"
import { z } from "zod"
import SilencesList from "../components/silences/SilencesList"
import { convertUrlStateToAppState } from "../lib/urlStateUtils"
import { useSilencesActions } from "../components/StoreProvider"

const searchSchema = z.object({
  /**
   * TODO: remove it when no longer needed
   * but we need to keep "org" search parameter due to it's significance in the shell app.
   */
  org: z.string().optional(),
  silencesRegEx: z.string().optional(),
  silencesStatus: z.string().optional(),
})

export const Route = createFileRoute("/silences")({
  validateSearch: searchSchema,
  beforeLoad: ({ search }) => {
    // extract silences specific state from the URL search params
    const { silencesRegEx, silencesStatus } = convertUrlStateToAppState(search)
    return {
      appStateFromUrl: {
        silencesRegEx,
        silencesStatus,
      },
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const {
    appStateFromUrl: { silencesRegEx, silencesStatus },
  } = Route.useRouteContext()
  const { setSilencesRegEx, setSilencesStatus } = useSilencesActions()

  /**
   * TODO: remove it later because we don't need to sync the URL state with the Zustand store
   * we can directly consume it from the route context anywhere
   * */
  useLayoutEffect(() => {
    setSilencesRegEx(silencesRegEx)
    setSilencesStatus(silencesStatus)
  }, [silencesRegEx, silencesStatus])

  return <SilencesList />
}
