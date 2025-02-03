/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createRoot, Root } from "react-dom/client"
import React from "react"

// Function to get the current URL without the filename
const getCurrentUrlWithoutFilename = (): string => {
  const currentUrl = window.location.href
  const lastSlashIndex = currentUrl.lastIndexOf("/")
  const lastSegment = currentUrl.slice(lastSlashIndex + 1)

  // If there is nothing after the last slash or if there is a file name then remove it
  return lastSegment.trim() === "" || lastSegment.includes(".") ? currentUrl.slice(0, lastSlashIndex) : currentUrl
}

// Function to enable mocking
const enableMocking = async (options: { endpoint: string }): Promise<void> => {
  /**
   * Note: If you do not want to enable mocking in production, you can uncomment the following lines
   * if (process.env.NODE_ENV !== "development") {
   * return
   * }
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

  // Create a root if it does not exist
  if (!mount.root) {
    mount.root = createRoot(container)
  }
  mount.root.render(<App {...options.props} endpoint={endpoint} />)
}

// Unmount function
export const unmount = (): void => {
  if (mount.root) {
    mount.root.unmount()
  }
}

// Define the root property on the mount function to store the root instance
mount.root = null as Root | null
