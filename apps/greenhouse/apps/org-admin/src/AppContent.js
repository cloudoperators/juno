/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect } from "react"
import PluginContainer from "./components/PluginContainer"
import { useApiEndpoint } from "./components/StoreProvider"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { Container } from "@cloudoperators/juno-ui-components"

const AppContent = () => {
  const { addMessage } = messageActions()
  const apiEndpoint = useApiEndpoint()

  useLayoutEffect(() => {
    if (!apiEndpoint) {
      addMessage({
        variant: "warning",
        text: " required api endpoint not set",
      })
    }
  }, [])

  return (
    <Container py={true} className="h-full">
      <PluginContainer />
    </Container>
  )
}

export default AppContent
