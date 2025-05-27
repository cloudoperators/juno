/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, Stack } from "@cloudoperators/juno-ui-components"

import { useAuthLoggedIn } from "../../store/StoreProvider"
import InfoMessage from "../messages/InfoMessage"

import HeaderLoginModal from "./header/HeaderLoginModal"
import PageRenderer from "./PageRenderer"
import PanelManager from "./PanelManager"

interface AppContentProps {
  login: () => void
}

const AppContent: React.FC<AppContentProps> = ({ login }) => {
  const loggedIn = useAuthLoggedIn()

  return loggedIn ? (
    <Container>
      <PanelManager />
      <Stack direction="vertical" gap="5">
        <InfoMessage />
        <Container py>
          <PageRenderer />
        </Container>
      </Stack>
    </Container>
  ) : (
    <HeaderLoginModal login={login} />
  )
}

export default AppContent
