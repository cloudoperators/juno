/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Messages } from "@cloudoperators/juno-messages-provider"
import { Outlet } from "@tanstack/react-router"
import { Container } from "@cloudoperators/juno-ui-components"

const AppContent = () => {
  return (
    <Container px py className="h-full">
      <Messages className="pb-6" />
      <Outlet />
    </Container>
  )
}

export default AppContent
