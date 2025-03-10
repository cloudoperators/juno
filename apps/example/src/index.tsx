/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot, Root } from "react-dom/client"

// Get the current URL without file name
const getCurrentUrlWithoutFilename = (): string => {
  const currentUrl = window.location.href
  const lastSlashIndex = currentUrl.lastIndexOf("/")
  const lastSegment = currentUrl.slice(lastSlashIndex + 1)

  // Remove whitespace or file name after the last slash
  return lastSegment.trim() === "" || lastSegment.includes(".") ? currentUrl.slice(0, lastSlashIndex) : currentUrl
}

// Enable mocking
const enableMocking = async (options: { endpoint: string }): Promise<void> => {
  /**
   * Note: If you don't want to enable mocking in production, uncomment the following line:
   * if (process.env.NODE_ENV !== "development") return
   */
  const { startWorker } = await import("./mocks/browser")
  return startWorker(options)
}

interface MountOptions {
  container: Element | DocumentFragment
  props?: {
    endpoint?: string
    [key: string]: any
  }
}

export const mount = async (
  container: Element | DocumentFragment,
  options: MountOptions = { container }
): Promise<void> => {
  const endpoint = options.props?.endpoint ?? getCurrentUrlWithoutFilename()
  await enableMocking({ endpoint }) // Enable mocking before rendering the application
  const AppModule = await import("./App")
  const App = AppModule.default

  // Create a root if it doesn't exist
  if (!mount.root) {
    mount.root = createRoot(container)
  }
  mount.root.render(<App {...options.props} endpoint={endpoint} />)
}

export const unmount = (): void => {
  if (mount.root) {
    mount.root.unmount()
  }
}

// Define the root property on the mount function to store the root instance
mount.root = null as Root | null
