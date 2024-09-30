/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { Messages } from "@cloudoperators/juno-messages-provider"
import { useEffect } from "react"
import PluginDefinitionPanel from "./plugindefinitions/components/PluginDefinitionPanel"
import WelcomeView from "./plugindefinitions/components/WelcomeView"
import PluginDetail from "./plugins/components/PluginDetail"
import PluginList from "./plugins/components/PluginList"
import useAPI from "./plugins/hooks/useAPI"

const AppContent = () => {
  const { getPlugins } = useAPI()

  useEffect(() => {
    if (!getPlugins) return
    getPlugins()
  }, [getPlugins])

  return (
    <Container py>
      <PluginDefinitionPanel />
      <PluginDetail />
      <Messages />
      <PluginList />
    </Container>
  )
}

export default AppContent
