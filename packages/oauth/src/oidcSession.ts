/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  FlowType,
  AuthData,
  SessionState,
  OidcSessionParams,
  OidcSessionInstance,
  OidcConfig,
  OidcStateData,
  IdTokenData,
} from "./types"
import { parseIdTokenData } from "./tokenHelpers"
import * as implicitFlowHandler from "./implicitFlow"
import * as codeFlowHandler from "./codeFlow"

import { hasValidState, createState as createRequestState, getState as getResponseState } from "./oidcState"
import { getOidcConfig } from "./oidcConfig"
import { OAuthError } from "./OAuthError"
import { RequestParamsSchema } from "./schemas"

// define flow types
export const FLOW_TYPE = {
  IMPLICIT: "implicit" as const,
  CODE: "code" as const,
}

// the state is determined when the lib is loaded
const isOidcResponse = hasValidState()

// Flow handler interface
interface FlowHandler {
  buildRequestUrl: (_params: {
    issuerURL: string
    clientID: string
    oidcState: OidcStateData
    callbackURL?: string
    params?: Record<string, string>
  }) => Promise<string>
  handleResponse: (_params: { issuerURL: string; clientID: string; oidcState: OidcStateData }) => Promise<{
    tokenData: IdTokenData
    idToken: string
    refreshToken?: string | null | undefined
  } | null>
}

// returns the correct flow handler
const oidcFlowHandler = (flowType: FlowType): FlowHandler => {
  if (flowType === FLOW_TYPE.IMPLICIT) return implicitFlowHandler
  else if (flowType === FLOW_TYPE.CODE) return codeFlowHandler
  throw new Error("no flow handler for " + String(flowType))
}

interface CreateOidcRequestParams {
  issuerURL: string
  clientID: string
  flowType: FlowType
  requestParams?: string | Record<string, string>
  callbackURL?: string
}

//############################## REQUEST #################################
// This function initiates the oidc flow
const createOidcRequest = async ({
  issuerURL,
  clientID,
  flowType,
  requestParams,
  callbackURL,
}: CreateOidcRequestParams): Promise<void> => {
  try {
    // create state props and store them in the SessionStorage
    // to use them after the redirect back from the ID provider
    // for code flow we use pkce and without secret!
    const oidcState = await createRequestState({ flowType, callbackURL }, { pkce: flowType === FLOW_TYPE.CODE })
    const handler = oidcFlowHandler(flowType)

    // make the actual request
    let url = await handler.buildRequestUrl({
      issuerURL,
      clientID,
      oidcState,
      callbackURL,
    })

    // add additional search params
    if (requestParams) {
      const parsed: unknown = typeof requestParams === "string" ? JSON.parse(requestParams) : requestParams
      const params = RequestParamsSchema.parse(parsed)
      const newUrl = new URL(url)
      Object.keys(params).forEach((k) => newUrl.searchParams.append(k, String(params[k])))
      url = newUrl.href
    }

    // redirect to this URL
    window.location.replace(url)
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new OAuthError("(OAUTH) " + error.message, error)
    } else {
      // If the error is not an instance of Error, we throw it as is
      throw error
    }
  }
}

interface HandleOidcResponseParams {
  issuerURL: string
  clientID: string
}

//################################ RESPONSE #################################
// handle the response from ID provider
const handleOidcResponse = async ({ issuerURL, clientID }: HandleOidcResponseParams): Promise<AuthData | null> => {
  const oidcState = getResponseState()
  // no oidc state presented or it does not match the stored one -> return null
  if (!oidcState) {
    console.warn("(OAUTH) url state does not match stored state, ignore it!")
    return null
  }

  try {
    const handler = oidcFlowHandler(oidcState.flowType as FlowType)
    const response = await handler.handleResponse({
      issuerURL,
      clientID,
      oidcState,
    })

    // implicitFlow can return null if searchParams is not available
    // This shouldn't happen here since we validated state, but we handle it for type safety
    if (!response) {
      console.warn("(OAUTH) No response from flow handler")
      return null
    }

    const { tokenData, idToken, refreshToken } = response

    if (oidcState.nonce && tokenData?.nonce !== oidcState.nonce) throw new Error("compromised id token content")

    const authData: AuthData = {
      JWT: idToken,
      raw: tokenData,
      refreshToken: refreshToken || undefined,
      parsed: parseIdTokenData(tokenData),
    }

    if (oidcState.lastUrl) {
      // Return to the URL before the redirect.
      window.history.replaceState("", "", oidcState.lastUrl || "/")
    }
    return authData
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new OAuthError("(OAUTH) " + error.message, error)
    } else {
      // If the error is not an instance of Error, we throw it as is
      throw error
    }
  }
}

interface RefreshOidcTokenParams {
  issuerURL: string
  clientID: string
  flowType: FlowType
  refreshToken: string
}

// Refresh token works only for the code flow!
const refreshOidcToken = async ({
  issuerURL,
  clientID,
  flowType,
  refreshToken,
}: RefreshOidcTokenParams): Promise<AuthData | null> => {
  if (flowType !== FLOW_TYPE.CODE) return null
  try {
    const {
      tokenData,
      idToken,
      refreshToken: newRefreshToken,
    } = await codeFlowHandler.refreshToken({
      issuerURL,
      clientID,
      refreshToken,
    })

    return {
      JWT: idToken,
      raw: tokenData,
      refreshToken: newRefreshToken || undefined,
      parsed: parseIdTokenData(tokenData),
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      // eslint-disable-next-line preserve-caught-error -- Error cause not supported in ES6 target
      throw new Error("(OAUTH) refresh token, " + error?.message)
    } else {
      throw error
    }
  }
}

interface OidcLogoutParams {
  issuerURL: string
  silent?: boolean
}

// This function removes cached token from storage.
// We use iframe for ending oidc session in id provider
// if we don't want user to leave current page
function oidcLogout({ issuerURL, silent }: OidcLogoutParams): void {
  getOidcConfig(issuerURL).then(
    (config: OidcConfig) => {
      if (!config.end_session_endpoint) {
        console.warn(
          'WARNING: (OAUTH) Id provider does not offer an endpoint for logout. Checked: "end_session_endpoint"'
        )
        return
      }
      const url = config.end_session_endpoint
      if (silent) {
        const currentScript = document.querySelector(`iframe[id="__oauth_logout_silent_mode"]`)
        if (currentScript) currentScript.remove()
        // refresh token using iframe and postMessage API
        const iframe = document.createElement("iframe")
        iframe.setAttribute("id", "__oauth_silent_mode")
        iframe.setAttribute("src", url + "&prompt=none")
        iframe.setAttribute("width", "0")
        iframe.setAttribute("height", "0")
        document.body.append(iframe)
      } else {
        window.location.replace(url)
      }
    },
    () => {}
  )
}

/**
 * Create an OIDC session for authentication
 * @param params - Session configuration parameters
 * @returns Session instance with login, logout, refresh methods
 */
const oidcSession = (params: OidcSessionParams): OidcSessionInstance => {
  const {
    issuerURL,
    clientID,
    initialLogin,
    refresh,
    flowType: flowTypeParam,
    onUpdate,
    requestParams,
    callbackURL,
    ...unknownProps
  } = params || {}
  let flowType = flowTypeParam
  if (!issuerURL || !clientID) {
    throw new Error("(OAUTH) issuerURL and clientID are required")
  }
  if (onUpdate && typeof onUpdate !== "function") {
    throw new Error("(OAUTH) onUpdate should be a function")
  }
  if (!flowType) {
    console.info("INFO: (OAUTH) no flowType provided, default to code")
    flowType = "code"
  } else if (Object.values(FLOW_TYPE).indexOf(flowType) < 0) {
    throw new Error("(OAUTH) flowType " + flowType + " is not supported!")
  }

  if (Object.keys(unknownProps).length > 0) {
    console.warn(
      `WARNING: (OAUTH) unknown options: ${Object.keys(unknownProps).join(
        ","
      )}. Allowed options are issuerURL, clientID, initialLogin, refresh, flowType, onUpdate, requestParams, callbackURL`
    )
  }

  // initialize state
  // this state is updated on every change on the auth status
  let state: SessionState = { auth: null, error: null, isProcessing: false, loggedIn: false }

  let refreshTimer: NodeJS.Timeout
  // this function re-creates a refresh timer if a refreshToken is presented
  const updateRefresher = () => {
    // clear refresh timer every time the auth date gets updated
    clearTimeout(refreshTimer)

    // TypeScript discriminated union requires checking loggedIn to narrow the type.
    // When loggedIn is true, TypeScript knows state.auth is AuthData (not null).
    if (!state.loggedIn || !state.auth?.refreshToken) return

    const expiresAt = state.auth?.parsed?.expiresAt

    if (expiresAt) {
      const expiresIn = expiresAt - Date.now() - 5000
      console.info("(OAUTH) refresh token in", Math.floor(expiresIn / 1000), "seconds")
      // start timer for refresh
      refreshTimer = setTimeout(refreshAuth, expiresIn)
    }
  }

  let expirationTimer: NodeJS.Timeout
  const updateExpirationTimer = () => {
    clearTimeout(expirationTimer)
    if (!state.loggedIn) return
    const expiresAt = state.auth.parsed?.expiresAt
    if (expiresAt) {
      const expiresIn = expiresAt - Date.now() - 5000
      console.info("(OAUTH) logout token in", Math.floor(expiresIn / 1000), "seconds")
      expirationTimer = setTimeout(logout, expiresIn)
    }
  }

  // define update method which updates the state and calls the callback function
  // Define a type-safe update parameter that enforces the discriminated union
  type SessionStateUpdate =
    // Update to logged-in state (must have auth)
    | (Partial<{ error: string | null; isProcessing: boolean }> & { loggedIn: true; auth: AuthData })
    // Update to logged-out state (must have auth: null)
    | (Partial<{ error: string | null; isProcessing: boolean }> & { loggedIn: false; auth: null })
    // Update only error/isProcessing without touching loggedIn/auth
    | Partial<Pick<SessionState, "error" | "isProcessing">>

  const update = (newState: SessionStateUpdate) => {
    state = { ...state, ...newState }
    if (onUpdate) onUpdate({ ...state })

    // TypeScript discriminated union requires checking loggedIn to narrow the type.
    // When loggedIn is true, TypeScript knows state.auth is AuthData (not null).
    if (refresh && state.loggedIn && state.auth?.refreshToken) updateRefresher()
    else if (state.loggedIn && state.auth?.parsed?.expiresAt) updateExpirationTimer()
  }

  // handle new data from odic response
  const receiveNewData = async (promise: Promise<AuthData | null>) => {
    try {
      const data = await promise
      if (data) {
        // Logged in with auth data
        update({ auth: data, error: null, loggedIn: true, isProcessing: false })
      } else {
        // No auth data received
        update({ auth: null, error: null, loggedIn: false, isProcessing: false })
      }
    } catch (error: unknown) {
      update({
        auth: null,
        error: error instanceof Error ? error.toString() : "",
        loggedIn: false,
        isProcessing: false,
      })
    }
  }

  // refresh function
  const refreshAuth = () => {
    if (!refresh) return
    if (!state.loggedIn) return
    const refreshToken = state.auth.refreshToken
    if (refreshToken) {
      console.info("(OAUTH) refresh token now")
      const promise = refreshOidcToken({
        issuerURL,
        clientID,
        flowType,
        refreshToken,
      })
      receiveNewData(promise).then(
        () => {},
        () => {}
      )
    }
  }

  const login = () => {
    update({ isProcessing: true })
    createOidcRequest({ issuerURL, clientID, flowType, requestParams, callbackURL }).then(
      () => {},
      () => {}
    )
  }

  const logout = (options?: { resetOIDCSession?: boolean; silent?: boolean }) => {
    console.info("(OAUTH) logout")
    update({ auth: null, error: null, loggedIn: false, isProcessing: false })
    if (options?.resetOIDCSession) oidcLogout({ issuerURL, silent: options?.silent === true })
  }

  //############### HANDLE OIDC RESPONSE ################
  // if oidc is present, then the current page load is a oidc response!
  // handle the oidc response if odicState is present
  if (isOidcResponse) {
    console.info("(OAUTH) handle oidc response")
    update({ isProcessing: true })
    // try to get auth infos from the URL if current page load is a redirect from ID Provider
    // Initial auth state!
    receiveNewData(handleOidcResponse({ issuerURL, clientID })).then(
      () => {},
      () => {}
    )
  }

  //############### START OIDC ################
  if (!isOidcResponse && initialLogin) {
    console.info("(OAUTH) login")
    login()
  }
  return {
    login,
    logout,
    refresh: refreshAuth,
    currentState: () => ({ ...state }),
  }
}

export default oidcSession
