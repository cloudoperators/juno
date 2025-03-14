/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ReactNode } from "react"
import { AppShell, Container, PageHeader } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { Navigation } from "../Navigation"
import { SERVICES, ISSUES } from "../../constants"
import { Services } from "../Services"
import { Issues } from "../Issues"

const getViewComponent = (selectedView: ReactNode) => {
  switch (selectedView) {
    case SERVICES:
      return Services
    case ISSUES:
      return Issues
    default:
      return () => null
  }
}

type ShellProps = {
  embedded?: boolean
  defaultSelectedView?: ReactNode
}

export const Shell = ({ embedded, defaultSelectedView = SERVICES }: ShellProps) => {
  const [selectedView, setSelectedView] = useState<ReactNode>(defaultSelectedView)
  const SelectedViewComponent = getViewComponent(selectedView)

  return (
    <AppShell
      embedded={embedded}
      pageHeader={<PageHeader heading="Heureka" />}
      topNavigation={<Navigation activeItem={selectedView} onChange={setSelectedView} />}
    >
      <Container py px className="flex flex-1 flex-col overflow-hidden">
        <MessagesProvider>
          <Messages />
        </MessagesProvider>
        <SelectedViewComponent />
      </Container>
    </AppShell>
  )
}
