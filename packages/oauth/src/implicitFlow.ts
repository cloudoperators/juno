/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { OidcStateData, FlowResponse } from "./types"
import { decodeIDToken } from "./tokenHelpers"
import { getOidcConfig } from "./oidcConfig"
import { searchParams } from "./oidcState"
import { paramsToUrl } from "./utils"

interface ImplicitFlowParams {
  issuerURL: string
  clientID: string
  oidcState: OidcStateData
  callbackURL?: string
  params?: Record<string, string>
}

const buildRequestUrl = async ({
  issuerURL,
  clientID,
  oidcState,
  callbackURL,
  params,
}: ImplicitFlowParams): Promise<string> => {
  const config = await getOidcConfig(issuerURL)

  const urlParams = paramsToUrl({
    response_type: "id_token",
    client_id: clientID,
    redirect_uri: callbackURL || window.location.origin,
    scope: "openid",
    state: oidcState.key,
    nonce: oidcState.nonce,
    ...params,
  })

  return config.authorization_endpoint + "?" + urlParams
}

/**
 * Handle the implicit flow response (id token flow)
 * @returns Promise resolves to token data or null
 */
// eslint-disable-next-line @typescript-eslint/require-await
const handleResponse = async (): Promise<FlowResponse | null> => {
  if (!searchParams) return null

  const idToken = searchParams.get("id_token")
  const error = searchParams.get("error")
  const refreshToken = null

  if (error) throw new Error(error)
  if (!idToken) throw new Error("bad response, missing id_token")

  const tokenData = decodeIDToken(idToken)
  if (!tokenData) throw new Error("bad format of id_token")

  return { tokenData, idToken, refreshToken }
}

export { handleResponse, buildRequestUrl }
