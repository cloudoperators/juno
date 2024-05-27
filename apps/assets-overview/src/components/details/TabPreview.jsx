/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState, useRef } from "react"
import { useAppLoader } from "utils"
import { Box, Stack, Spinner, Message, Icon } from "juno-ui-components"
import PreviewAppPropsForm from "./PreviewAppPropsForm"
import useStore from "../../store"
import { stateToURL } from "url-state-provider"
import { useActions, Messages } from "messages-provider"
import { parseError } from "../../helpers"

const TabPreview = ({ asset }) => {
  const { addMessage } = useActions()
  const assetsUrl = useStore((state) => state.assetsUrl)
  const { mount } = useAppLoader(assetsUrl)
  const app = useRef(document.createElement("div"))
  const [isLoading, setIsLoading] = useState(false)
  const [appProps, setAppProps] = useState(null)
  const urlStateTestingKey = useStore((state) => state.urlStateTestingKey)

  useEffect(() => {
    // reset app props on change asset
    setAppProps({})
  }, [asset])

  const config = useMemo(() => {
    if (!asset || !appProps) return
    return {
      name: asset?.name,
      version: asset?.version,
      appPreview: asset?.latestAppPreview,
      props: appProps,
    }
  }, [asset, appProps])

  useEffect(() => {
    if (!mount || !app.current || !config?.appPreview) return
    setIsLoading(true)
    mount(app.current, config)
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        addMessage({
          variant: "error",
          text: parseError(error),
        })
      })
  }, [config])

  const onAppPropsChange = (newAppProps) => {
    setAppProps(newAppProps)
  }

  return (
    <>
      <Messages className="mt-4" />
      {config?.appPreview ? (
        <>
          <PreviewAppPropsForm
            asset={asset}
            onAppPropsChange={onAppPropsChange}
          />
          <Box>
            <Stack className="mt-2" distribution="end">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const url = stateToURL({
                    [urlStateTestingKey]: { p: "/testing", o: config },
                  })
                  window.open(url, "_blank")
                }}
              >
                <Icon color="jn-global-text" icon="openInNew" />
              </a>
            </Stack>

            <div className="px-8 pb-8 pt-2">
              {isLoading ? (
                <Stack alignment="center">
                  <Spinner variant="primary" />
                  Loading...
                </Stack>
              ) : (
                <>
                  {Object.keys(appProps || {}).length <= 0 && (
                    <p className="mb-6">
                      This is a preview of the <b>{config?.name}</b> micro
                      frontend without <b>any specific configuration.</b>
                    </p>
                  )}
                </>
              )}
              <div data-app={config?.name} ref={app}></div>
            </div>
          </Box>
        </>
      ) : (
        <Message
          className="mt-8"
          title={config?.name}
          text="There is no preview available for this micro frontend"
        />
      )}
    </>
  )
}

export default TabPreview
