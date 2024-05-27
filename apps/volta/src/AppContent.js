/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useCallback, useMemo } from "react"
import { getCAs } from "./queries"
import { useActions, MessagesProvider } from "messages-provider"
import { parseError } from "./helpers"
import {
  useGlobalsEndpoint,
  useGlobalsDisabledCAs,
  useAuthData,
  useAuthIsProcessing,
  useAuthLoggedIn,
  useAuthError,
  useAuthLogin,
  useGlobalsSelectedCA,
  useGlobalsIsMock,
} from "./hooks/useStore"
import useUrlState from "./hooks/useUrlState"

import WelcomeView from "./components/WelcomeView"
import CustomAppShell from "./components/CustomAppShell"
import NewCertificate from "./components/NewCertificate"
import CAsList from "./components/CAsList"
import CertificateList from "./components/CertificateList"

const AppContent = () => {
  const { addMessage } = useActions()
  const endpoint = useGlobalsEndpoint()
  const disabledCAs = useGlobalsDisabledCAs()
  const selectedCAName = useGlobalsSelectedCA()
  const isMock = useGlobalsIsMock()

  const authData = useAuthData()
  const authIsProcessing = useAuthIsProcessing()
  const loggedIn = useAuthLoggedIn()
  const authError = useAuthError()
  const login = useAuthLogin()

  useUrlState()

  // set an error message when oidc fails
  useEffect(() => {
    if (authError) {
      addMessage({
        variant: "error",
        text: parseError(authError),
      })
    }
  }, [authError])

  // fetch the CAs
  // pass disabled cas to just fetch the ones that should be displayed
  const cas = getCAs(authData?.JWT, endpoint, disabledCAs, isMock)

  // dispatch error with useEffect because error variable will first set once all retries did not succeed
  // TODO think about to add the message error with an onError callback directly on getCAs
  useEffect(() => {
    if (cas?.error) {
      addMessage({
        variant: "error",
        text: parseError(cas?.error),
      })
    }
  }, [cas?.error])

  // find ca given per param in the url
  const selectedCA = useMemo(() => {
    if (cas?.data?.length > 0 && selectedCAName?.length > 0) {
      const index = cas?.data.findIndex((e) => e.name == selectedCAName)
      if (index >= 0) {
        return cas?.data[index]
      }
    }
    return null
  }, [cas, selectedCAName])

  const displayCAs = useMemo(() => {
    if (!cas?.data) return []
    if (!Array.isArray(disabledCAs)) return cas
    // return just the CAs that should be displayed
    return cas?.data?.filter(
      (ca) => !disabledCAs.some((caName) => ca.name === caName)
    )
  }, [cas?.data, disabledCAs])

  return (
    <CustomAppShell>
      {authError || !loggedIn ? (
        <WelcomeView loginCallback={login} isProcessing={authIsProcessing} />
      ) : (
        <>
          {selectedCA ? (
            <>
              {/* create a new messges-provider for the panel in NewCertificate to be able to share messages to the different panel bodies */}
              <MessagesProvider>
                <NewCertificate ca={selectedCA?.name} />
              </MessagesProvider>
              <CertificateList ca={selectedCA} />
            </>
          ) : (
            <CAsList cas={displayCAs} isLoading={cas?.isLoading} />
          )}
        </>
      )}
    </CustomAppShell>
  )
}

export default AppContent
