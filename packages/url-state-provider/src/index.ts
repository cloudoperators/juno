/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import LZString from "lz-string"
import superstate from "./superstate"

// Define the options type
type EncodeOptions = {
  mode?: "humanize" | "auto"
}
type UpdateStateOptions = {
  merge?: boolean
}
type HistoryOptions = {
  state?: boolean
  title?: string
  replace?: boolean
}

const jsonURLSerializer = superstate()
const SEARCH_KEY = "__s"

const regex = new RegExp(SEARCH_KEY + "=([^&]+)")
/**
 * Variable where to host listeners for history changes
 */
const onHistoryChangeListeners: { [key: string]: any } = {}
const onGlobalChangeListeners: any[] = []

/**
 * Encode json data using json-url or lz-string. It automatically detects the best encoding.
 * @param {JSON} json data to be encoded
 * @param {Object} options options for the encoding. Possible values: mode: "auto" or "humanize"
 * @returns encoded string
 */
function encode(json: object, options?: EncodeOptions): string {
  // Set options to an empty object if it's undefined
  options = options || {}

  try {
    let urlState = jsonURLSerializer.encode(json)

    if (options?.mode === "humanize") return urlState

    if (urlState.length > 1800) {
      urlState = LZString.compressToEncodedURIComponent(JSON.stringify(json))
    }

    return urlState
  } catch (e) {
    console.warn("URL State Provider: Could not encode data", json, e)
    return ""
  }
}

/**
 * Decode using json-url or lz-string. It automatically detects the encoding.
 * @param {string} string to be decoded
 * @returns json
 */
function decode(string: string): object {
  try {
    // try to decode using jsonURLSerializer
    const json = jsonURLSerializer.decode(string)

    // if parsed value is an object, return it
    if (json && typeof json === "object") return json
  } catch (_e) {
    // do nothing
    // go to the next step try to decode using lz-string
  }

  try {
    // try to decode as lz-string
    const json: object = JSON.parse(LZString.decompressFromEncodedURIComponent(string))
    return json
  } catch (e) {
    console.warn("URL State Provider: Could not decode string: ", string, e)
    return {}
  }
}

/**
 * find search param by key (regex) and convert it to json
 * @returns json
 */
function URLToState(): { [key: string]: any } {
  const match = window.location.href.match(regex)
  if (!match) return {}
  try {
    // decodeURIComponent is needed to convert url encoded characters
    return decode(decodeURIComponent(match[1]))
  } catch (e) {
    console.warn("URL State Provider: Could not decode string: ", match[1], e)
    return {}
  }
}

/**
 * Converts state data to query param
 * @param {JSON} state data
 * @returns new query param string with encoded data
 */
function stateToQueryParam(state: object): string {
  const encodedState = encode(state)
  return SEARCH_KEY + "=" + encodedState
}

/**
 * Converts state data to url string
 * @param {JSON} state data
 * @returns new url string with encoded data
 */
function stateToURL(state: object): string {
  const encodedState = encode(state)
  // get current url
  const newUrl = new URL(window.location.href)
  // set new search params
  newUrl.searchParams.set(SEARCH_KEY, encodedState)
  // return new url string, decodeURIComponent is needed to convert url encoded characters
  return decodeURIComponent(newUrl.toString())
}

/**
 *
 * @param {string} stateID
 * @returns state for stateID
 */
function currentState(stateID: string): object {
  return URLToState()[stateID] as object
}

/**
 *
 * @param {string} stateID a key of the state
 * @param {JSON} state
 * @returns new url string
 */
function updateState(stateID: string, state: object, options: UpdateStateOptions = {}) {
  // get current state from URL
  const newState: { [key: string]: any } = URLToState()
  // URLToState should return an object, if not return empty object
  if ("string" === typeof newState) return {}
  // change state, overwrite or merge if "merge" option is true
  newState[stateID] = options?.merge ? { ...newState[stateID], ...state } : state

  // inform listeners for all changes in the url
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  onGlobalChangeListeners.forEach((listener) => listener(newState))
  // convert to url
  return stateToURL(newState)
}

/**
 * Push new state. The old and the new state are merged.
 * @param {string} stateID key of the specific state in the search params
 * @param {JSON} state
 * @param {boolean} merge if true, the old and the new state are merged
 * @param {Object} historyOptions options for the window.history (state, title)
 * @param {boolean} historyOptions.state - The state object is a JavaScript object which is
 * associated with the new history entry created by pushState(). Whenever the user navigates to the new
 * state, a popstate event is fired, and the state property of the event contains a copy of the history
 * entry's state object.
 * @param {string} historyOptions.title - Most browsers currently ignores this parameter, although
 * they may use it in the future. Passing the empty string here should be safe against future
 * changes to the method.
 * @param {boolean} historyOptions.replace - If true it replaces the last state in the window history (default false).
 */
function updateStateAndHistory(stateID: string, state: object, merge: boolean, historyOptions: HistoryOptions = {}) {
  const newUrl = updateState(stateID, state, { merge })
  const historyState = historyOptions.state || ""
  const historyTitle = historyOptions.title || ""

  if (historyOptions?.replace) {
    window.history.replaceState(historyState, historyTitle, newUrl as string)
  } else {
    window.history.pushState(historyState, historyTitle, newUrl as string)
  }
}

/**
 * Push new state. The old and the new state are merged.
 * @param {string} stateID key of the specific state in the search params
 * @param {JSON} state
 * @param {Object} historyOptions options for the window.history (state, title)
 * @param {boolean} historyOptions.state - The state object is a JavaScript object which is
 * associated with the new history entry created by pushState(). Whenever the user navigates to the new
 * state, a popstate event is fired, and the state property of the event contains a copy of the history
 * entry's state object.
 * @param {string} historyOptions.title - Most browsers currently ignores this parameter, although
 * they may use it in the future. Passing the empty string here should be safe against future
 * changes to the method.
 * @param {boolean} historyOptions.replace - If true it replaces the last state in the window history (default false).
 */
function push(stateID: string, state: object, historyOptions?: HistoryOptions) {
  historyOptions = historyOptions || {}
  updateStateAndHistory(stateID, state, true, historyOptions)
}

/**
 * Replace state. The old state is overwritten.
 * @param {string} stateID key of the specific state in the search params
 * @param {JSON} state
 * @param {Object} historyOptions options for the window.history (state, title)
 * @param {boolean} historyOptions.state - The state object is a JavaScript object which is
 * associated with the new history entry created by pushState(). Whenever the user navigates to the new
 * state, a popstate event is fired, and the state property of the event contains a copy of the history
 * entry's state object.
 * @param {string} historyOptions.title - Most browsers currently ignores this parameter, although
 * they may use it in the future. Passing the empty string here should be safe against future
 * changes to the method.
 * @param {boolean} historyOptions.replace - If true it replaces the last state in the window history (default false).
 */
function replace(stateID: string, state: object, historyOptions?: HistoryOptions) {
  // Set options to an empty object if it's undefined
  historyOptions = historyOptions || {}
  updateStateAndHistory(stateID, state, false, historyOptions)
}

/**
 * Add Listener for history changes for stateID
 * @param {string} stateID
 * @param {function} listener
 */
function addOnChangeListener(stateID: string, listener = () => {}) {
  onHistoryChangeListeners[stateID] = listener
}

/**
 * Remove listener for stateID
 * @param {string} stateID
 */
function removeOnChangeListener(stateID: string) {
  delete onHistoryChangeListeners[stateID]
}

/**
 * Add Listener for all changes to the state
 * @param {function} listener
 * @returns function to remove the listener
 */
function addOnGlobalChangeListener(listener = () => {}) {
  onGlobalChangeListeners.push(listener)
  return () => {
    const index = onGlobalChangeListeners.indexOf(listener)
    if (index > -1) {
      onGlobalChangeListeners.splice(index, 1)
    }
  }
}

/**
 * Inform the listener that the condition has changed. If oldState is given,
 * this function compares the new state with the old one and only executes
 * the listener if they differ.
 * @param {string} stateID
 * @param {object} newState required
 * @param {object} oldState optional
 * @returns
 */
function informListener(stateID: string, newState: object, oldState: object) {
  const listener = onHistoryChangeListeners[stateID]
  if (!listener) return

  if (oldState) {
    // convert old and new states to strings and compare them
    if (JSON.stringify(oldState) === JSON.stringify(newState)) return
  }

  // inform listener
  listener(newState)
}

function onGlobalChange(callback: () => void) {
  return addOnGlobalChangeListener(callback)
}

/**
 * Handle history pop events.
 * onpopstate is fired every time the browser back and forward buttons are clicked.
 * If the event is fired we update th global state to the state in URL and we inform
 * every listener but only if the individual state has changed.
 */
window.addEventListener("popstate", function () {
  const state = URLToState()
  Object.keys(state).forEach((stateID) => {
    informListener(stateID, state[stateID], {})
  })
})

function registerConsumer(stateID: string): object {
  return {
    currentState: function () {
      return currentState(stateID)
    },
    onChange: function (callback: () => void) {
      addOnChangeListener(stateID, callback)
      return function () {
        removeOnChangeListener(stateID)
      }
    },
    onGlobalChange,
    push: function (state: object, historyOptions: HistoryOptions) {
      push(stateID, state, historyOptions)
    },
    replace: function (state: object, historyOptions: HistoryOptions) {
      replace(stateID, state, historyOptions)
    },
  }
}

export {
  currentState,
  push,
  replace,
  addOnChangeListener,
  removeOnChangeListener,
  registerConsumer,
  stateToURL,
  stateToQueryParam,
  onGlobalChange,
  decode,
  encode,
}