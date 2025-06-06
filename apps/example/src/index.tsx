/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot, Root } from "react-dom/client"

const getCurrentUrlWithoutFilename = (): string => {
  const currentUrl = window.location.href
  const lastSlashIndex = currentUrl.lastIndexOf("/")
  const lastSegment = currentUrl.slice(lastSlashIndex + 1)

  // Remove whitespace or file name after the last slash
  return lastSegment.trim() === "" || lastSegment.includes(".") ? currentUrl.slice(0, lastSlashIndex) : currentUrl
}

const enableMocking = async (options: { endpoint: string }): Promise<void> => {
  // Uncomment the next line to disable mocking in production
  // if (process.env.NODE_ENV !== "development") return;

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
  const { default: App } = await import("./App")

  await enableMocking({ endpoint })

  // Create a root if it doesn't exist
  if (!mount.root) mount.root = createRoot(container)
  mount.root.render(<App {...options.props} endpoint={endpoint} />)
}

export const unmount = (): void => {
  if (mount.root) mount.root.unmount()
}

// Define the root property on the mount function to store the root instance
mount.root = null as Root | null
