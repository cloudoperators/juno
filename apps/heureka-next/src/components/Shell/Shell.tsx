/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useState } from "react"
import { AppShell, Container } from "@cloudoperators/juno-ui-components"
import { MessagesProvider, Messages } from "@cloudoperators/juno-messages-provider"
import Navigation from "../Navigation"
import View from "./View"
import { SERVICES } from "../../constants"
import styles from "../../styles.scss?inline"

function Shell({ embedded }: AppProps) {
  const [view, setView] = useState<ItemKeyType>(SERVICES)

  const handleActiveItemChange = useCallback((value: ItemKeyType) => {
    setView(value)
  }, [])

  return (
    <AppShell embedded={embedded} topNavigation={<Navigation activeItem={view} onChange={handleActiveItemChange} />}>
      {/* load styles inside the shadow dom */}
      <style>{styles.toString()}</style>
      <Container px py className="h-full">
        <>
          <MessagesProvider>
            <Messages />
          </MessagesProvider>
          <View view={view} />
        </>
      </Container>
    </AppShell>
  )
}

export default Shell
