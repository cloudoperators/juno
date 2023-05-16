import React, { useEffect, useMemo, useState } from "react"
import useAppLoader from "../../hooks/useAppLoader"
import { useRef } from "react"
import { Box, Stack, Spinner, Message } from "juno-ui-components"

const TabPreview = ({ config }) => {
  const { mount } = useAppLoader()
  const holder = useRef()
  const app = useRef(document.createElement("div"))
  const [isLoading, setIsLoading] = useState(false)

  // create a promise to mount the app
  // this promise is resolved once
  const mountApp = useMemo(
    () =>
      new Promise((resolve) => {
        const a = mount(app.current, config)
        setIsLoading(true)
        if (!a) resolve(false)
        else
          a.then(() => {
            setIsLoading(false)
            return resolve(true)
          })
      }),
    [mount, config]
  )

  useEffect(() => {
    if (config?.appPreview) {
      mountApp.then((loaded) => {
        if (!loaded) return
        holder.current.appendChild(app.current)
      })
    }
  }, [config])

  return (
    <Box className="p-8">
      {config?.appPreview ? (
        <>
          {isLoading ? (
            <Stack className="pt-2" alignment="center">
              <Spinner variant="primary" />
              Loading...
            </Stack>
          ) : (
            <>
              <p className="mb-6">
                This is a preview of the <b>{config.name}</b> micro frontend
                without <b>any specific configuration.</b>
              </p>
            </>
          )}
          <div data-app={config.name} ref={holder}></div>
        </>
      ) : (
        <Message
          title={<b>{config.name}</b>}
          text={
            <>
              This is a <b>backend</b> micro frontend without content and
              therefor no preview available
            </>
          }
        />
      )}
    </Box>
  )
}

export default TabPreview
