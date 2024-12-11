/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot } from "react-dom/client"
import React from "react"

const getCurrentUrlWithoutFilename = () => {
  let currentUrl = window.location.href
  let lastSlashIndex = currentUrl.lastIndexOf("/")
  let lastSegment = currentUrl.slice(lastSlashIndex + 1)

  // If there is nothing after the last slash or if there is a file name then remove it
  return lastSegment.trim() === "" || lastSegment.includes(".") ? currentUrl.slice(0, lastSlashIndex) : currentUrl
}

const enableMocking = async (options) => {
  /**
   * Note: If you do not want to enable mocking in production, you can uncomment the following lines
   * if (process.env.NODE_ENV !== "development") {
   * return
   * }
   */
  const { startWorker } = await import("./mocks/browser")
  return startWorker(options)
}

// export mount and unmount functions
export const mount = async (container, options = {}) => {
  const endpoint = options?.props?.endpoint ?? getCurrentUrlWithoutFilename()
  await enableMocking({ endpoint }) // we need to first enable mocking before rendering the application
  const App = await import("./App")
  mount.root = createRoot(container)
  mount.root.render(React.createElement(App.default, { ...options?.props, endpoint }))
}

export const unmount = () => mount.root && mount.root.unmount()
