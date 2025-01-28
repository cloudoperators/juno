/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { setupWorker, SetupWorkerApi } from "msw/browser"
import getHandlers from "./getHandlers"

interface StartWorkerOptions {
  endpoint: string
  [key: string]: unknown
}

let worker: SetupWorkerApi | null = null

export const startWorker = (options: StartWorkerOptions): Promise<void> => {
  // @ts-ignore
  worker = setupWorker(...getHandlers(options))
  // @ts-ignore
  return worker.start({
    serviceWorker: {
      url: `${options.endpoint}/mockServiceWorker.js`,
    },
    onUnhandledRequest(request, print) {
      const url = new URL(request.url)
      // Do not show unhandled request warning for the following paths
      const listToIgnore = ["/src", "/@", "/node_modules"]
      if (listToIgnore.some((str) => url.pathname.startsWith(str))) {
        return
      }
      // Otherwise, print an unhandled request warning.
      print.warning()
    },
  })
}
