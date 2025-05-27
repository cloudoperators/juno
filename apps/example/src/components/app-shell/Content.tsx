/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container, Stack } from "@cloudoperators/juno-ui-components"
import useAuthStore from "../../store/useAuthStore"
import InfoMessage from "../messages/InfoMessage"
import HeaderLoginModal from "./header/HeaderLoginModal"
import PageRenderer from "./PageRenderer"
import PanelManager from "./PanelManager"

const AppContent: React.FC = () => {
  const loggedIn = useAuthStore((state) => state.loggedIn)

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
    <HeaderLoginModal />
  )
}

export default AppContent
