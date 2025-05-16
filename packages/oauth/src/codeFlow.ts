/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { getOidcConfig } from "./oidcConfig"
import { decodeIDToken } from "./tokenHelpers"
import { searchParams } from "./oidcState"
import { paramsToUrl } from "./utils"

interface TokenResponse {
  access_token: string
  token_type: string
  expires_in?: number
  refresh_token?: string
  scope?: string
  id_token?: string
  [key: string]: unknown // Optional: allows unexpected fields
}

interface ExchangeCodeParams {
  tokenEndpoint: string
  code: string
  verifier?: string
  clientID: string
}

export const exchangeCode = async ({
  tokenEndpoint,
  code,
  verifier,
  clientID,
}: ExchangeCodeParams): Promise<TokenResponse> => {
  if (!clientID) throw new Error("clientID is required")

  const body: Record<string, string> = {
    grant_type: "authorization_code",
    code,
    redirect_uri: window.location.origin,
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

  const data: TokenResponse = await response.json()
  return data
}

const buildRequestUrl = async ({ issuerURL, clientID, oidcState, params, callbackURL }: Record<string, any>) => {
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
    code_challenge: oidcState.challenge,
    code_challenge_method: "S256",
    ...params,
  })

  return config.authorization_endpoint + "?" + urlParams
}

const handleResponse = async ({ issuerURL, clientID, oidcState }: Record<string, any>) => {
  if (!searchParams) return null

  const code = searchParams.get("code")
  const error = searchParams.get("error")

  if (error) throw new Error(error)
  if (!code) throw new Error("bad response, missing code param")

  // get token endpoint
  const config = await getOidcConfig(issuerURL)
  if (!config) throw new Error("could not load oidc config, issuerURL: " + issuerURL)

  const data = await exchangeCode({
    tokenEndpoint: config.token_endpoint,
    code,
    verifier: oidcState.verifier,
    clientID,
  })
  if (!data?.id_token || typeof data.id_token !== "string") throw new Error("bad response, missing id_token")

  const tokenData = decodeIDToken(data.id_token)
  if (!tokenData) throw new Error("bad format of id_token")
  if (!tokenData) throw new Error("bad format of id_token")

  return {
    tokenData,
    idToken: data.id_token,
    refreshToken: data.refresh_token,
  }
}

const refreshToken = async ({ issuerURL, clientID, refreshToken }: Record<string, any>) => {
  if (!issuerURL) throw new Error("issuerURL is required")
  if (!clientID) throw new Error("clientID is required")

  const config = await getOidcConfig(issuerURL)

  const body: any = {
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientID,
  }

  const formBody = Object.keys(body)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(body[k])}`)
    .join("&")

  const data = await fetch(config.token_endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then((r) => r.json())

  if (data?.error) throw new Error(data.error)
  if (!data?.id_token) throw new Error("bad response, missing id_token")

  const tokenData = decodeIDToken(data.id_token)
  if (!tokenData) throw new Error("bad format of id_token")

  return { tokenData, idToken: data.id_token, refreshToken: data.refresh_token }
}

export { handleResponse, buildRequestUrl, refreshToken }
