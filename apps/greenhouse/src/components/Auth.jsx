import React from "react"
import { Button, LoadingIndicator, Spinner, Stack } from "juno-ui-components"
import useStore from "../hooks/useStore"
import useAppLoader from "../hooks/useAppLoader"
import { Transition } from "@tailwindui/react"

const Auth = ({ children }) => {
  const auth = useStore((state) => state.auth)
  const ref = React.createRef()
  const { mount } = useAppLoader()
  const config = useStore((state) => state.apps.config)
  const [loading, setLoading] = React.useState(!auth?.appLoaded)
  const [longLoading, setLongLoading] = React.useState(false)

  React.useEffect(() => {
    if (!mount || !config["auth"]) return
    mount(ref.current, config["auth"])
  }, [mount, config["auth"]])

  // timeout for waiting for auth
  React.useEffect(() => {
    if (auth?.appLoaded) return
    // set timeout for waiting for auth app
    let loadingTimer
    if (!auth?.appLoaded) {
      loadingTimer = setTimeout(() => {
        if (!auth?.appLoaded) setLoading(false)
      }, 30000) // 30 seconds
    }

    return () => loadingTimer && clearTimeout(loadingTimer)
  }, [auth?.appLoaded])

  // set long loading
  React.useEffect(() => {
    let longLoadingTimer = setTimeout(() => setLongLoading(true), 5000) // long loading if longer than 5 seconds
    return () => longLoadingTimer && clearTimeout(longLoadingTimer)
  }, [])

  // console.log(
  //   "===================auth",
  //   "loggedIn",auth?.loggedIn,
  //   "isProcessing",auth?.isProcessing,
  //   "loading",loading,
  //   "appLoaded", auth?.appLoaded
  // )
  return (
    <>
      <div data-app="greenhouse-auth" ref={ref} />

      <Transition
        show={auth?.loggedIn}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
      {console.log("====", auth.loggedIn, auth)}

      {!auth?.loggedIn && (
        <Stack
          alignment="center"
          distribution="center"
          direction="vertical"
          className="h-screen"
        >
          {loading || auth?.isProcessing ? (
            <>
              {longLoading ? (
                <LoadingIndicator className="jn-text-theme-info" />
              ) : (
                <Spinner
                  className="mx-6 mb-3"
                  variant="primary"
                  size="1.5rem"
                />
              )}
              {loading ? "Loading..." : "Signing on..."}
            </>
          ) : (
            <>
              {auth?.appLoaded ? (
                <>
                  <span>
                    {auth?.error
                      ? JSON.stringify(auth?.error)
                      : "Authentication required"}
                  </span>
                  <Button onClick={() => auth?.login()} className="mt-3">
                    Sign in
                  </Button>
                </>
              ) : (
                "Looks like the auth app is missing!"
              )}
            </>
          )}
        </Stack>
      )}
    </>
  )
}

export default Auth
