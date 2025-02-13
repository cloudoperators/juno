/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseIdTokenData, decodeIDToken } from "./tokenHelpers"

interface AuthData {
  JWT: string
  raw: Record<string, unknown>
  refreshToken: string
  parsed: ReturnType<typeof parseIdTokenData>
}

export const composeAuthData = (token: string, options: any): { authData: AuthData | null; error: Error | null } => {
  let tokenData: Record<string, unknown> = {}
  let parsedData: unknown = {}

  try {
    tokenData = decodeIDToken(token)
  } catch (e) {
    return {
      authData: null,
      error: new Error(`Could not decode token: ${token}. ${(e as Error)?.message}`),
    }
  }
  // extend tokenData with the options
  tokenData = { ...tokenData, ...options }

  try {
    parsedData = parseIdTokenData(tokenData)
  } catch (e) {
    return {
      authData: null,
      error: new Error(`Could not parse token: ${token}. ${(e as Error)?.message}`),
    }
  }

  return {
    authData: {
      JWT: token,
      raw: tokenData,
      refreshToken: "TOKEN",
      parsed: parsedData,
    },
    error: null,
  }
}

interface TokenSessionState {
  auth: AuthData | null
  error: unknown
  loggedIn: boolean
  isProcessing: boolean
}

interface TokenSessionReturnType {
  login: () => void
  logout: () => void
  currentState: () => TokenSessionState
}

interface TokenSessionParams {
  token: string
  options?: Record<string, any>
  initialLogin?: boolean
  onUpdate: (_state: TokenSessionState) => void
}

/**
 * Creates a token-based session where the provided token is validated, parsed,
 * and extended with the specified options. The resulting authentication state
 * is returned when the callback method is triggered.
 *
 * @param params.token - The token to be validated, parsed, and extended with the given options.
 * @param params.onUpdate - A callback function invoked on login and logout events.
 * @param params.initialLogin - A boolean indicating whether the login should be performed immediately
 *                              on the first call, triggering the callback method.
 * @param params.options - Additional options to extend the token data.
 *                         See the following documentation for details on the returned auth data structure
 *                         and usage of the `options` parameter:
 *                         [Juno Auth Data Documentation](https://github.com/cloudoperators/juno/blob/main/packages/oauth/README.md#auth-data)
 *
 * @returns An object containing the following methods:
 * - `login()`: Triggers the login process.
 * - `logout()`: Triggers the logout process.
 * - `currentState()`: Returns the current authentication state.
 *
 * @example
 * ```typescript
 * const session = tokenSession({
 *   token: jwtToken,
 *   options: {
 *     groups: [`organization:${demoOrg}`],
 *   },
 *   onUpdate: (authData) => {
 *     saveAuthData(authData);
 *   },
 * });
 */
export default function tokenSession(params: TokenSessionParams): TokenSessionReturnType {
  const { token, onUpdate, initialLogin, options } = params || {}

  const { authData, error } = composeAuthData(token, options)

  const state = { auth: authData, error: error, loggedIn: false, isProcessing: false }

  const login = () => {
    onUpdate({ ...state, auth: authData, loggedIn: true })
  }

  const logout = () => {
    onUpdate({ ...state, auth: null, loggedIn: false })
  }

  if (initialLogin) {
    login()
  }

  return {
    login,
    logout,
    currentState: () => ({ auth: null, error: error, loggedIn: false, isProcessing: false }),
  }
}
