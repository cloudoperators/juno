/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/* eslint-disable no-unused-vars */
declare global {
  interface Window {
    __junoCommunicatorTabId?: string
    __junoEventListeners?: {
      [type: string]: {
        [event: string]: Function[]
      }
    }
    BroadcastChannel?: typeof BroadcastChannel
  }
}
export {}
