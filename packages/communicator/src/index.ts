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
window.__junoCommunicatorTabId = window.__junoCommunicatorTabId || uniqString();
  
window.__junoEventListeners = window.__junoEventListeners || {
  broadcast: {},
  get: {},
};

const log = (...params: any[]) => console.log("Communicator Debug:", ...params)
const warn = (...params: any[]) => console.warn("Communicator Warning:", ...params)
const error = (...params: any[]) => console.error("Communicator Error:", ...params)

const addListener = (type: string, event: string, listener: Function): void => {
    if (!window.__junoEventListeners![type]) {
      window.__junoEventListeners![type] = {};
    }
  
    if (!window.__junoEventListeners![type][event]) {
      window.__junoEventListeners![type][event] = [];
    }
  
    window.__junoEventListeners![type][event].push(listener);
  };

  const removeListener = (type: string, event: string, listener: Function): void => {
    if (!window.__junoEventListeners![type]?.[event]) return;
  
    window.__junoEventListeners![type][event] = window.__junoEventListeners![type][event].filter(
      (l) => l !== listener
    );
  };
  

type ListenerCallback = (data: any, options?: any) => any;

const listenerWrapper =
  (callback: ListenerCallback) =>
  (data: any, options: any = {}): Promise<any> => {
    // Create a promise that will be resolved when the listener is executed
    return new Promise((resolve) => {
      const result = callback(data, options);
      resolve(result);
    });
  };

if (typeof BroadcastChannel === "undefined") {
  // BroadcastChannel is not available
  console.log(
    "BroadcastChannel is not supported in this browser. Use fake BroadcastChannel."
  );
  window.BroadcastChannel = function () {
    return {
      postMessage: () => null,
      onmessage: () => null,
      close: () => null,
    };
  } as unknown as typeof BroadcastChannel;
} else {
  // BroadcastChannel is available
  console.log("BroadcastChannel is supported in this browser.");
}

const crossWindowEventBridge = new BroadcastChannel(
    "__JUNO_CROSS_WINDOW_EVENT_BRIDGE__"
  )
  
