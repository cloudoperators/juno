/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useRef, useEffect, useState } from "react"
import { currentState } from "url-state-provider"
import useStore from "../store"
import { useAppLoader } from "utils"
import { useActions, Messages } from "messages-provider"
import { Stack, Spinner } from "juno-ui-components"
import { parseError } from "../helpers"

const TestContent = () => {
  const assetsUrl = useStore((state) => state.assetsUrl)
  const { mount } = useAppLoader(assetsUrl)
  const { addMessage } = useActions()
  const urlStateTestingKey = useStore((state) => state.urlStateTestingKey)
  const urlState = currentState(urlStateTestingKey)
  const app = useRef(document.createElement("div"))
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false) // avoid rerenders when mounting the app

  const config = useMemo(() => {
    return urlState?.o || {}
  }, [urlState])

  useEffect(() => {
    if (!app.current || !config || !assetsUrl || isMounted) return
    mount(app.current, config)
      .then(() => {
        addMessage({
          variant: "warning",
          text: `This is a preview of ${config?.name}@${config?.version}. Not for productive use!`,
          dismissible: false,
        })
        setIsLoading(false)
        setIsMounted(true)
      })
      .catch((error) => {
        setIsLoading(false)
        addMessage({
          variant: "error",
          text: parseError(error),
        })
      })
  }, [assetsUrl, app, config])

  return (
    <Stack className="h-full" direction="vertical">
      <Messages />
      {isLoading && (
        <Stack alignment="center">
          <Spinner variant="primary" />
          Loading...
        </Stack>
      )}
      <div data-app={config.name} className="inline grow" ref={app} />
    </Stack>
  )
}

export default TestContent
