/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import {
  AppShell,
  Container,
  PageHeader,
  TopNavigation,
  TopNavigationItem,
} from "juno-ui-components"
import { Messages } from "messages-provider"
import {
  useAuthData,
  useAuthLogout,
  useCertActions,
  useAuthLoggedIn,
  useGlobalsActions,
  useGlobalsEmbedded,
} from "../hooks/useStore"
import HeaderUser from "./HeaderUser"

const CustomAppShell = ({ children }) => {
  const { setShowNewCert } = useCertActions()
  const authData = useAuthData()
  const loggedIn = useAuthLoggedIn()
  const logout = useAuthLogout()
  const { setSelectedCA } = useGlobalsActions()
  const embedded = useGlobalsEmbedded()

  const backToRootPath = () => {
    setShowNewCert(false)
    setSelectedCA("")
  }

  const pageHeader = React.useMemo(() => {
    return (
      <PageHeader heading="Converged Cloud | Volta" onClick={backToRootPath}>
        {loggedIn && <HeaderUser auth={authData} logout={logout} />}
      </PageHeader>
    )
  }, [loggedIn, authData, logout])

  const topBar = (
    <TopNavigation>
      <TopNavigationItem icon="home" label="Home" onClick={backToRootPath} />
    </TopNavigation>
  )

  return (
    <AppShell
      pageHeader={pageHeader}
      topNavigation={topBar}
      embedded={embedded}
    >
      <Container py>
        <Messages className="mb-6" />
        {children}
      </Container>
    </AppShell>
  )
}

export default CustomAppShell
