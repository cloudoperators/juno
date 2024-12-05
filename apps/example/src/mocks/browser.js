/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { setupWorker } from "msw/browser"
import getHandlers from "./getHandlers"

let worker = null

export const startWorker = (options) => {
  worker = setupWorker(...getHandlers(options))
  console.log(`Starting worker at ${options.endpoint}/mockServiceWorker.js`)
  return worker.start({
    findWorker: (scriptUrl, mockServiceWorkerUrl) => {
      console.log({ scriptUrl, mockServiceWorkerUrl })
      return scriptUrl.includes("mockServiceWorker")
    },
  })
}
