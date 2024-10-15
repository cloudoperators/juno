/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import useUrlState from "../hooks/useUrlState"
import useSecretApi from "../../plugindefinitions/hooks/useSecretApi"
import usePluginDefinitionApi from "../../plugindefinitions/hooks/usePluginDefinitionApi"
import { useActions } from "@cloudoperators/juno-messages-provider"

const AsyncWorker = () => {
  useUrlState()
  const { watchSecretsWithoutHelm } = useSecretApi()
  const { watchPluginDefinitions } = usePluginDefinitionApi()
  const { addMessage } = useActions()

  useEffect(() => {
    watchPluginDefinitions()

    watchSecretsWithoutHelm().then((res) => {
      // we bubble up a warning, if user is not authorized to watch secrets.
      // UI will still work for plugins, but user will not see secrets
      if (!res.ok) {
        if (res.message && res.status == 403) {
          addMessage({
            variant: "warning",
            text: res.message,
          })
        }
      }
    })
  }, [])

  return null
}

export default AsyncWorker
