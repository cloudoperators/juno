/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { OidcStateData } from "./types"
import { encodeBase64Json, decodeBase64Json, randomString } from "./utils"
import getPkceImport from "oauth-pkce"

// Handle both ESM and CJS imports - Vite 8 changed CommonJS interop
const getPkce =
  typeof getPkceImport === "function"
    ? getPkceImport
    : (getPkceImport as { default?: typeof getPkceImport })?.default || getPkceImport

// PKCE callback type from oauth-pkce library
type PkceCallback = (_error: Error | null, _result: { verifier: string; challenge: string }) => void

let lastStateKey: string

// check if search or hash contains the state param and if there
// is a saved state for this key. If there is a state in the store
// for the state param, then this page load is an oidc response
let state: OidcStateData | null
export let searchParams: URLSearchParams | null
export const setSearchParams = (paramsValue: URLSearchParams | null) => {
  searchParams = paramsValue
}
// check search query string

searchParams = new URLSearchParams(window.location.search)

let stateString: string | null = null
const stateParam = searchParams.get("state")
if (stateParam) {
  stateString = window.sessionStorage.getItem(stateParam)
}

if (!stateString) {
  // check hash query string
  searchParams = new URLSearchParams(window.location.hash?.replace(/^#(.*)/, "$1"))
  const hashStateParam = searchParams.get("state")
  if (hashStateParam) {
    stateString = window.sessionStorage.getItem(hashStateParam)
  }
}

if (stateString) {
  // return if state exists
  // decode catches parse errors and returns null
  const decodedState = decodeBase64Json(stateString)
  if (
    decodedState &&
    typeof decodedState === "object" &&
    "key" in decodedState &&
    typeof decodedState.key === "string" &&
    "nonce" in decodedState &&
    typeof decodedState.nonce === "string"
  ) {
    state = decodedState as OidcStateData
    window.sessionStorage.removeItem(state.key)
  } else {
    state = null
  }
}

export const hasValidState = (): boolean => !!state
export const getState = (): OidcStateData | null => state

export const createState = async (
  props: Partial<OidcStateData> = {},
  options?: { pkce?: boolean }
): Promise<OidcStateData> => {
  window.sessionStorage.removeItem(lastStateKey)
  const state: OidcStateData = {
    key: randomString(),
    nonce: randomString(),
    lastUrl: window.location.href,
    ...props,
  }

  if (options?.pkce) {
    const { verifier, challenge } = await new Promise<{ verifier: string; challenge: string }>((resolve, reject) => {
      const callback: PkceCallback = (error, result) => {
        if (error) reject(error instanceof Error ? error : new Error(String(error)))
        else resolve(result)
      }
      getPkce(43, callback)
    })

    state.verifier = verifier
    state.challenge = challenge
  }

  window.sessionStorage.setItem(state.key, encodeBase64Json(state))
  lastStateKey = state.key
  return state
}
