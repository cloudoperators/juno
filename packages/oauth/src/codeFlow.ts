/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { TokenResponse, OidcStateData, FlowResponse } from "./types"
import { getOidcConfig } from "./oidcConfig"
import { decodeIDToken } from "./tokenHelpers"
import { searchParams } from "./oidcState"
import { paramsToUrl } from "./utils"
import { TokenResponseSchema } from "./schemas"

interface ExchangeCodeParams {
  tokenEndpoint: string
  code: string
  verifier?: string
  clientID: string
  callbackURL?: string
}

export const exchangeCode = async ({
  tokenEndpoint,
  code,
  verifier,
  clientID,
  callbackURL,
}: ExchangeCodeParams): Promise<TokenResponse> => {
  if (!clientID) throw new Error("clientID is required")

  const body: Record<string, string> = {
    grant_type: "authorization_code",
    code,
    redirect_uri: callbackURL || window.location.origin,
    client_id: clientID,
  }

  if (verifier) {
    body.code_verifier = verifier
  }

  const formBody = new URLSearchParams(body).toString()

  const response = await fetch(tokenEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })

  if (!response.ok) {
    throw new Error(`Token exchange failed: ${response.statusText}`)
  }

  const json: unknown = await response.json()
  const data: TokenResponse = TokenResponseSchema.parse(json)
  return data
}

interface CodeFlowParams {
  issuerURL: string
  clientID: string
  oidcState: OidcStateData
  params?: Record<string, string>
  callbackURL?: string
}

const buildRequestUrl = async ({
  issuerURL,
  clientID,
  oidcState,
  params,
  callbackURL,
}: CodeFlowParams): Promise<string> => {
  const config = await getOidcConfig(issuerURL)

  let scope = "openid email profile offline_access"
  if (config?.scopes_supported && Array.isArray(config.scopes_supported)) {
    scope = config.scopes_supported.join(" ")
  }

  const urlParams = paramsToUrl({
    response_type: "code",
    client_id: clientID,
    redirect_uri: callbackURL || window.location.origin,
    scope,
    state: oidcState.key,
    nonce: oidcState.nonce,
    code_challenge: oidcState.challenge || "",
    code_challenge_method: "S256",
    ...params,
  })

  return config.authorization_endpoint + "?" + urlParams
}

interface HandleResponseParams {
  issuerURL: string
  clientID: string
  oidcState: OidcStateData
}

const handleResponse = async ({ issuerURL, clientID, oidcState }: HandleResponseParams): Promise<FlowResponse> => {
  if (!searchParams) throw new Error("no search params available")

  const code = searchParams.get("code")
  const error = searchParams.get("error")

  if (error) throw new Error(error)
  if (!code) throw new Error("bad response, missing code param")

  // get token endpoint
  const config = await getOidcConfig(issuerURL)
  if (!config) throw new Error("could not load oidc config, issuerURL: " + issuerURL)

  // Retrieve callbackURL from the persisted OIDC state
  const callbackURL = typeof oidcState.callbackURL === "string" ? oidcState.callbackURL : undefined

  const data = await exchangeCode({
    tokenEndpoint: config.token_endpoint,
    code,
    verifier: oidcState.verifier,
    clientID,
    callbackURL,
  })
  if (!data?.id_token || typeof data.id_token !== "string") throw new Error("bad response, missing id_token")

  const tokenData = decodeIDToken(data.id_token)
  if (!tokenData) throw new Error("bad format of id_token")

  return {
    tokenData,
    idToken: data.id_token,
    refreshToken: data.refresh_token,
  }
}

interface RefreshTokenParams {
  issuerURL: string
  clientID: string
  refreshToken: string
}

const refreshToken = async ({ issuerURL, clientID, refreshToken }: RefreshTokenParams): Promise<FlowResponse> => {
  if (!issuerURL) throw new Error("issuerURL is required")
  if (!clientID) throw new Error("clientID is required")

  const config = await getOidcConfig(issuerURL)

  const body: Record<string, string> = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientID,
  }

  const formBody = Object.keys(body)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
    .join("&")

  const response = await fetch(config.token_endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  })

  if (!response.ok) {
    throw new Error(`Token refresh failed: ${response.statusText}`)
  }

  const json: unknown = await response.json()
  const data: TokenResponse = TokenResponseSchema.parse(json)

  if ("error" in data && data.error)
    throw new Error(typeof data.error === "string" ? data.error : "Token refresh failed")
  if (!data?.id_token) throw new Error("bad response, missing id_token")

  const tokenData = decodeIDToken(data.id_token)
  if (!tokenData) throw new Error("bad format of id_token")

  return { tokenData, idToken: data.id_token, refreshToken: data.refresh_token }
}

export { handleResponse, buildRequestUrl, refreshToken }
