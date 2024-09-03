/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { encodeBase64Json, decodeBase64Json, randomString } from "./utils"
import getPkce from "oauth-pkce"

type OidcState = {
  key: string
} & Record<string, any>

let lastStateKey: string

// check if search or hash contains the state param and if there
// is a saved state for this key. If there is a state in the store
// for the state param, then this page load is an oidc response
let state: OidcState | null
export let searchParams: any
export const setSearchParams = (paramsValue: any) => {
  searchParams = paramsValue
}
// check search query string

searchParams = new URLSearchParams(window.location.search)

let stateString: string | null = null
if (searchParams.get("state")) {
  stateString = window.sessionStorage.getItem(searchParams.get("state"))
}

if (!stateString) {
  // check hash query string
  searchParams = new URLSearchParams(window.location.hash?.replace(/^#(.*)/, "$1"))
  if (searchParams.get("state")) {
    stateString = window.sessionStorage.getItem(searchParams.get("state"))
  }
}

if (stateString) {
  // return if state exists
  // decode catches parse errors and returns null
  state = decodeBase64Json(stateString)
  window.sessionStorage.removeItem(state!.key)
}

export const hasValidState = (): boolean => !!state
export const getState = (): OidcState | null => state

export const createState = async (props: any = {}, options: any): Promise<any> => {
  window.sessionStorage.removeItem(lastStateKey)
  const state: OidcState = {
    key: randomString(),
    nonce: randomString(),
    lastUrl: window.location.href,
    ...props,
  }

  if (options?.pkce) {
    const { verifier, challenge }: any = await new Promise((resolve) => {
      getPkce(43, (error, { verifier, challenge }) => {
        if (error) throw error
        resolve({ verifier, challenge })
      })
    })

    state.verifier = verifier
    state.challenge = challenge
  }

  window.sessionStorage.setItem(state.key, encodeBase64Json(state))
  lastStateKey = state.key
  return state
}
