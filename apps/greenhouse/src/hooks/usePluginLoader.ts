/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"

type PluginModule = {
  mount: (container: HTMLElement, options?: Record<string, any>) => void
  unmount: () => void
}

// Cache loaded modules at the module level (persists across component mounts)
const moduleCache = new Map<string, PluginModule>()

const getApp = async (appName: string): Promise<PluginModule | null> => {
  // Return cached module immediately if available
  if (moduleCache.has(appName)) {
    return moduleCache.get(appName)!
  }

  // Load the module
  let module: PluginModule | null = null
  switch (appName) {
    case "supernova":
      module = await import("@cloudoperators/juno-app-supernova")
      break
    case "doop":
      module = await import("@cloudoperators/juno-app-doop")
      break
    case "heureka":
      module = await import("@cloudoperators/juno-app-heureka")
      break
  }

  // Cache it for next time
  if (module) {
    moduleCache.set(appName, module)
  }

  return module
}

type UsePluginLoaderParams = {
  pluginName: string
  config: any
  appProps: AppProps
  pluginAuth: AuthStore
}

type UsePluginLoaderResult = {
  isLoading: boolean
  containerRef: React.RefObject<HTMLDivElement | null>
}

/**
 * Custom hook to handle plugin loading and mounting
 * Loads plugins dynamically with caching and handles mount/unmount lifecycle
 */
export function usePluginLoader({
  pluginName,
  config,
  appProps,
  pluginAuth,
}: UsePluginLoaderParams): UsePluginLoaderResult {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if module is already cached - if so, start with it loaded!
  const cachedModule = moduleCache.get(pluginName)
  const [app, setApp] = useState<PluginModule | null>(cachedModule || null)
  const [isLoading, setIsLoading] = useState(!cachedModule) // Only show loading if not cached

  // Load the plugin module dynamically (only if not already loaded)
  useEffect(() => {
    if (cachedModule) {
      return
    }

    let cancelled = false

    const loadApp = async () => {
      setIsLoading(true)
      try {
        const appModule = await getApp(pluginName)
        if (!cancelled) {
          setApp(appModule)
          setIsLoading(false)
        }
      } catch (error) {
        if (!cancelled) {
          setIsLoading(false)
        }
        throw error
      }
    }

    loadApp()

    return () => {
      cancelled = true
    }
  }, [pluginName, cachedModule])

  // Mount the app once it's loaded
  useEffect(() => {
    if (!app || !containerRef.current) {
      return
    }

    app.mount(containerRef.current, {
      props: {
        ...config.props,
        embedded: true,
        basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
        enableHashedRouting: appProps?.enableHashedRouting || false,
        auth: pluginAuth,
      },
    })

    return () => {
      app.unmount()
    }
  }, [app, config, router, pluginAuth, appProps])

  return { isLoading, containerRef }
}
