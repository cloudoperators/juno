/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { setupWorker } from "msw/browser"
import getHandlers from "./getHandlers"

let worker = null

export const startWorker = (options) => {
  worker = setupWorker(...getHandlers(options))
  return worker.start({
    url: options.endpoint,
  })
}
