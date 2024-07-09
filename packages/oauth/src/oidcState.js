/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { encodeBase64Json, decodeBase64Json, randomString } from "./utils"
import getPkce from "oauth-pkce"

let lastStateKey

// check if search or hash contains the state param and if there
// is a saved state for this key. If there is a state in the store
// for the state param, then this page load is an oidc response
let state
export let searchParams
// check search query string

searchParams = new URLSearchParams(window.location.search)
if (searchParams.get("state")) {
  state = window.sessionStorage.getItem(searchParams.get("state"))
}

if (!state) {
  // check hash query string
  searchParams = new URLSearchParams(
    window.location.hash?.replace(/^#(.*)/, "$1")
  )
  if (searchParams.get("state")) {
    state = window.sessionStorage.getItem(searchParams.get("state"))
  }
}

if (state) {
  // return if state exists
  // decode catches parse errors and returns null
  state = decodeBase64Json(state)
  window.sessionStorage.removeItem(state?.key)
}

export const hasValidState = () => !!state
export const getState = () => state

export const createState = async (props = {}, options) => {
  window.sessionStorage.removeItem(lastStateKey)
  const state = {
    key: randomString(),
    nonce: randomString(),
    lastUrl: window.location.href,
    ...props,
  }

  if (options?.pkce) {
    const { verifier, challenge } = await new Promise((resolve) => {
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
