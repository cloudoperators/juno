/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseIdTokenData } from "./tokenHelpers"

const DEFAULT_MOCKED_TOKEN = {
  iss: "https://auth.mock",
  sub: "3ksXP1FQq7j9125Q6ayY",
  aud: "mock-dev-env",
  exp: Math.floor(Date.now() / 1000) + 8 * 3600,
  iat: Math.floor(Date.now() / 1000),
  nonce: "MOCK",
  email: "jane.doe@sap.com",
  email_verified: true,
  groups: ["organization:test-org", "test-team-1"],
  name: "I123456",
  preferred_username: "Jane Doe",
}

export const mockedAuthData = (tokenData) => {
  try {
    if (typeof tokenData === "string") {
      tokenData = JSON.parse(atob(tokenData))
    }
  } catch (_) {
    console.warn(`WARNING: (OAUTH MOCK) Could not parse token data: ${tokenData}`)
    tokenData = {}
  }

  const token = {
    ...DEFAULT_MOCKED_TOKEN,
    exp: Math.floor(Date.now() / 1000) + 8 * 3600,
    iat: Math.floor(Date.now() / 1000),
    ...tokenData,
  }
  return {
    JWT: btoa(token),
    raw: token,
    refreshToken: "MOCK",
    parsed: parseIdTokenData(token),
  }
}

export default function mockedSession(params) {
  let { token, initialLogin, onUpdate, ...unknownProps } = params || {}

  if (typeof onUpdate !== "function") {
    throw new Error("(OAUTH MOCK) onUpdate should be a function")
  }

  if (Object.keys(unknownProps).length > 0) {
    console.warn(
      `WARNING: (OAUTH) unknown options: ${Object.keys(
        unknownProps
      )}. Allowed options are token, initialLogin, onUpdate`
    )
  }

  let authData = mockedAuthData(token)
  let state = { auth: null, error: null, loggedIn: false, isProcessing: false }

  const login = () => {
    state = { auth: authData, error: null, loggedIn: true, isProcessing: false }
    onUpdate(state)
  }

  const logout = () => {
    state = { auth: null, error: null, loggedIn: false, isProcessing: false }
    onUpdate(state)
  }

  const refresh = () => {
    if (!state.loggedIn) return
    authData = mockedAuthData(token)
    state = { auth: authData, error: null, loggedIn: true, isProcessing: false }
    onUpdate(state)
  }

  if (initialLogin) login()

  return {
    login,
    logout,
    refresh,
    currentState: () => state,
  }
}
