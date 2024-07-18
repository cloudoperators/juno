/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const CHANNEL_PREFIX = "JUNO_COMMUNICATOR#"
/**
 *
 * @returns epoch timestamp (count of seconds since 1970)
 */
const uniqString = () => Math.random().toString(36).substring(2)

// create an uniq id for current window (current context)
// this id is used to identify the current when intra-window communication is used
window.__junoCommunicatorTabId = window.__junoCommunicatorTabId || uniqString()

window.__junoEventListeners = window.__junoEventListeners || {
  broadcast: {},
  get: {},
}

const log = (...params) => console.log("Communicator Debug:", ...params)
const warn = (...params) => console.warn("Communicator Warning:", ...params)
const error = (...params) => console.error("Communicator Error:", ...params)

const addListener = (type, event, listener) => {
  if (!window.__junoEventListeners[type]?.[event]) {
    window.__junoEventListeners[type][event] = []
  }
  window.__junoEventListeners[type][event].push(listener)
}

const removeListener = (type, event, listener) => {
  if (!window.__junoEventListeners[type]?.[event]) return
  window.__junoEventListeners[type][event] = window.__junoEventListeners[type][
    event
  ].filter((l) => l !== listener)
}

// encapsulate the listener in a wrapper that returns a promise
// we don't want to wait for the listener to be executed
const listenerWrapper =
  (callback) =>
  (data, options = {}) => {
    // Create a promise that will be resolved when the listener is executed
    return new Promise((resolve) => {
      const result = callback(data, options)
      resolve(result)
    })
  }

if (typeof BroadcastChannel === "undefined") {
  // BroadcastChannel is not available
  console.log(
    "BroadcastChannel is not supported in this browser. Use fake BroadcastChannel."
  )
  window.BroadcastChannel = function () {
    return {
      postMessage: () => null,
      onmessage: () => null,
      close: () => null,
    }
  }
} else {
  // BroadcastChannel is available
  console.log("BroadcastChannel is supported in this browser.")
}

const crossWindowEventBridge = new BroadcastChannel(
  "__JUNO_CROSS_WINDOW_EVENT_BRIDGE__"
)

crossWindowEventBridge.onmessage = (e) => {
  const { type, name, data, sourceWindowId } = e.data || {}

  if (type === "broadcast") {
    window.__junoEventListeners["broadcast"]?.[name]?.forEach((listener) => {
      try {
        listener(data, {
          crossWindow: true,
          sourceWindowId,
          thisWindowId: window.__junoCommunicatorTabId,
        })
      } catch (e) {
        warn(e)
      }
    })
  }
}

/**
 * Send messages via BroadcastChannel across contexts (e.g. several tabs on
 * the same origin). The last message is stored by default. However, it
 * is possible to influence the storage period using the expire option.
 * @param {string} name
 * @param {any} data
 * @param {object} options (optional) allowed options are debug:undefined|boolean and expires:undefined|number
 * @returns void
 */
const broadcast = (name, data, options = {}) => {
  try {
    if (typeof name !== "string")
      throw new Error("(broadcast) the message name must be given.")
    if (data === undefined) data = null

    const {
      debug,
      crossWindow = false,
      consumerID,
      ...unknownOptions
    } = options || {}
    const unknownOptionsKeys = Object.keys(unknownOptions)
    if (unknownOptionsKeys.length > 0)
      warn(`(broadcast) unknown options: ${unknownOptionsKeys.join(", ")}`)
    if (debug != undefined && typeof debug !== "boolean")
      warn("(broadcast) debug must be a boolean")
    if (typeof crossWindow !== "boolean")
      warn("(broadcast) crossWindow must be a boolean")

    // backward compatibility
    name = CHANNEL_PREFIX + name

    if (debug) {
      log(
        `${consumerID ? `(${consumerID})` : ""} broadcast ${
          crossWindow ? "cross-window" : "intra-window"
        } message ${name} with data `,
        data
      )
      // log(`${consumerID ? `(${consumerID})` : ""} broadcast EVENT: ${name}`)
    }

    window.__junoEventListeners["broadcast"]?.[name]?.forEach((listener) => {
      try {
        listener(data, {
          sourceWindowId: window.__junoCommunicatorTabId,
          thisWindowId: window.__junoCommunicatorTabId,
        })
      } catch (e) {
        warn(e)
      }
    })

    if (crossWindow) {
      crossWindowEventBridge.postMessage({
        type: "broadcast",
        name,
        data,
        sourceWindowId: window.__junoCommunicatorTabId,
      })
    }
  } catch (e) {
    error(e.message)
  }
}

/**
 * Register a listener for a specific message. Messages are observed
 * across contexts (e.g. several tabs on the same origin).
 * If a current saved message already exists for the name,
 * then the listener is executed immediately with this message.
 * The expires option set by the "send" method has an effect here.
 * In addition, the age of the listened messages can be determined
 * with the youngerThan option.
 * @param {string} name
 * @param {function} callback:(data) => void
 * @param {object} options
 * @returns {function} unregister:()=>void, a function to stop listening
 */
const watch = (name, callback, options = {}) => {
  try {
    if (typeof name !== "string")
      throw new Error("(watch) the message name must be given.")
    if (typeof callback !== "function")
      throw new Error("(watch) the callback parameter must be a function.")

    const { debug, consumerID, ...unknownOptions } = options || {}
    const unknownOptionsKeys = Object.keys(unknownOptions)
    if (unknownOptionsKeys.length > 0)
      warn(`(watch) unknown options: ${unknownOptionsKeys.join(", ")}`)

    // backward compatibility
    name = CHANNEL_PREFIX + name

    if (debug) {
      log(`${consumerID ? `(${consumerID})` : ""} watch for message ${name}`)
      // log(`${consumerID ? `(${consumerID})` : ""} watch EVENT: ${name}`)
    }

    addListener("broadcast", name, listenerWrapper(callback))

    return () => removeListener("broadcast", name, listenerWrapper(callback))
  } catch (e) {
    error(e.message)
  }
}

/**
 * This function implements a 1:1 communication
 * @param {string} name
 * @param {function} callback
 * @param {object} options
 * @returns cancel function
 */
const get = (name, callback, options = {}) => {
  try {
    if (typeof name !== "string")
      throw new Error("(get) the message name must be given.")
    if (typeof callback !== "function")
      throw new Error("(get) the callback parameter must be a function.")
    const { debug, consumerID, ...unknownOptions } = options || {}
    const unknownOptionsKeys = Object.keys(unknownOptions)
    if (unknownOptionsKeys.length > 0)
      warn(`(get) unknown options: ${unknownOptionsKeys.join(", ")}`)

    // backward compatibility
    name = CHANNEL_PREFIX + "GET:" + name

    if (debug) {
      log(
        `${
          consumerID ? `(${consumerID})` : ""
        } get data for intra-window message ${name}`
      )
      // log(`${consumerID ? `(${consumerID})` : ""} get EVENT: ${name}`)
    }

    if (window.__junoEventListeners["get"]?.[name]?.length === 0) return

    // console.log("==============get", window.__junoEventListeners["get"]?.[name])
    window.__junoEventListeners["get"][name]?.forEach((onGetListener) => {
      try {
        // get data from onGetListener
        onGetListener(options?.getOptions).then((data) => {
          callback(data, {
            sourceWindowId: window.__junoCommunicatorTabId,
            thisWindowId: window.__junoCommunicatorTabId,
          })
        })
      } catch (e) {
        warn(e)
      }
    })
  } catch (e) {
    error(e.message)
  }
}

/**
 * Listen to get messages
 * @param {string} name
 * @param {function} callback
 * @param {object} options
 * @returns cancel function
 */
const onGet = (name, getDataCallback, options = {}) => {
  try {
    if (typeof name !== "string")
      throw new Error("(onGet) the message name must be given.")
    if (typeof getDataCallback !== "function")
      throw new Error("(onGet) the callback parameter must be a function.")
    const { debug, consumerID, ...unknownOptions } = options || {}
    const unknownOptionsKeys = Object.keys(unknownOptions)
    if (unknownOptionsKeys.length > 0)
      warn(`(onGet) unknown options: ${unknownOptionsKeys.join(", ")}`)

    // backward compatibility
    name = CHANNEL_PREFIX + "GET:" + name

    if (debug) {
      log(
        `${
          consumerID ? `(${consumerID})` : ""
        } send data for intra-window message ${name}`
      )
      // log(`${consumerID ? `(${consumerID})` : ""} onGet EVENT: ${name}`)
    }

    // is a function (data, options = {}) => data
    const onGetListener = listenerWrapper(getDataCallback)

    addListener("get", name, onGetListener)

    return () => removeListener("get", name, listenerWrapper(getDataCallback))
  } catch (e) {
    error(e.message)
  }
}

export { broadcast, watch, get, onGet }
