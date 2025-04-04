/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { AppShell, Container, PageHeader } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { Navigation } from "../Navigation"
import { Services } from "../Services"
import { useStore } from "../../store/StoreProvider"
import { UserView } from "../../store/StoreProvider/types"
import { ServiceDetails } from "../Services/ServiceDetails"

// TODO: remove this when used a Routing library
const getViewComponent = (viewId: ReactNode) => {
  switch (viewId) {
    case UserView.Services:
      return Services
    case UserView.ServiceDetails:
      return ServiceDetails
    default:
      return () => null
  }
}

type ShellProps = {
  embedded?: boolean
}

export const Shell = ({ embedded }: ShellProps) => {
  const state = useStore()
  const SelectedViewComponent = getViewComponent(state.selectedView?.viewId)

  return (
    <AppShell
      embedded={embedded}
      pageHeader={<PageHeader heading="Heureka" />}
      // topNavigation={<Navigation activeItem={state.selectedView?.viewId} />}
    >
      <Container py px>
        <MessagesProvider>
          <Messages />
          <SelectedViewComponent />
        </MessagesProvider>
      </Container>
    </AppShell>
  )
}
