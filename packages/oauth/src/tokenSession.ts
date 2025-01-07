/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseIdTokenData, decodeIDToken } from "./tokenHelpers"

interface AuthData {
  JWT: string
  raw: Record<string, any>
  refreshToken: string
  parsed: any // Adjust this type as per the return type of parseIdTokenData
}

export const composeAuthData = (token: string, options: any): AuthData => {
  let tokenData = {}
  try {
    tokenData = decodeIDToken(token)
  } catch (_) {
    console.warn(`WARNING: (OAUTH) Could not parse token: ${token}`)
  }

  // extend tokenData with the options
  tokenData = { ...tokenData, ...options }

  return {
    JWT: token,
    raw: tokenData,
    refreshToken: "TOKEN",
    parsed: parseIdTokenData(tokenData),
  }
}

interface TokenSessionReturnType {
  login: () => void
  logout: () => void
  currentState: () => Record<string, any>
}

export default function tokenSession(params: any = {}): TokenSessionReturnType {
  const { token, onUpdate, options, ...unknownProps } = params || {}

  if (typeof onUpdate !== "function") {
    throw new Error("(OAUTH MOCK) onUpdate should be a function")
  }

  if (Object.keys(unknownProps).length > 0) {
    console.warn(
      `WARNING: (OAUTH) unknown options: ${Object.keys(unknownProps).join(",")}. Allowed options are token, onUpdate`
    )
  }

  const authData = composeAuthData(token, options)
  let state: Record<string, any> = { auth: null, error: null, loggedIn: false, isProcessing: false }

  const login = () => {
    state = { auth: authData, error: null, loggedIn: true, isProcessing: false }
    onUpdate(state)
  }

  const logout = () => {
    state = { auth: null, error: null, loggedIn: false, isProcessing: false }
    onUpdate(state)
  }

  login()

  return {
    login,
    logout,
    currentState: () => state,
  }
}
