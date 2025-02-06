/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState, ReactNode } from "react"
import { AppShell, Container, PageHeader } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import { Navigation } from "../Navigation"
import { ShellContent } from "./ShellContent"
import { AppProps } from "../../App"
import { SERVICES } from "../../constants"
import styles from "../../styles.scss?inline"

function Shell({ embedded }: AppProps) {
  const [selectedView, setView] = useState<ReactNode>(SERVICES)

  const handleActiveItemChange = useCallback((value: ReactNode) => {
    setView(value)
  }, [])

  return (
    <AppShell
      embedded={embedded}
      pageHeader={<PageHeader heading="Heureka" />}
      topNavigation={<Navigation activeItem={selectedView} onChange={handleActiveItemChange} />}
    >
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <Container px py className="h-full">
        <>
          <MessagesProvider>
            <Messages />
          </MessagesProvider>
          <ShellContent selectedView={selectedView} />
        </>
      </Container>
    </AppShell>
  )
}

export default Shell
