/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import type { PluginModule } from "@cloudoperators/juno-app-supernova"

// Cache loaded modules at the module level (persists across component mounts)
const moduleCache = new Map<string, PluginModule>()

const getApp = async (
  appName: string,
  pluginPath?: string
): Promise<PluginModule | null> => {
  // Return cached module immediately if available
  if (moduleCache.has(appName)) {
    return moduleCache.get(appName)!
  }

  let module: PluginModule | null = null

  // Try loading from plugin path (relative path = same origin via Ingress, no CORS!)
  if (pluginPath) {
    try {
      console.log(`Loading plugin ${appName} from ${pluginPath}`)
      // @vite-ignore allows dynamic import of paths/URLs
      module = await import(/* @vite-ignore */ pluginPath)
      console.log(`Successfully loaded plugin ${appName}`)
    } catch (error) {
      console.error(`Failed to load plugin ${appName} from ${pluginPath}:`, error)
      // Continue to fallback logic
    }
  }

  // Fallback to bundled apps (backward compatibility)
  if (!module) {
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
      default:
        console.warn(`Unknown plugin: ${appName}, no fallback available`)
        return null
    }
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
  pluginPath?: string // NEW: Path to load plugin from (relative = same origin, absolute = external CDN)
}

type UsePluginLoaderResult = {
  isLoading: boolean
  error: Error | null // NEW: Track loading errors
  containerRef: React.RefObject<HTMLDivElement | null>
}

/**
 * Custom hook to handle plugin loading and mounting
 * Loads plugins dynamically with caching and handles mount/unmount lifecycle
 * Supports both bundled plugins and remote plugins
 * Remote plugins use relative paths (same origin via Ingress) - no CORS needed!
 */
export function usePluginLoader({
  pluginName,
  config,
  appProps,
  pluginAuth,
  pluginPath, // NEW
}: UsePluginLoaderParams): UsePluginLoaderResult {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if module is already cached - if so, start with it loaded!
  const cachedModule = moduleCache.get(pluginName)
  const [app, setApp] = useState<PluginModule | null>(cachedModule || null)
  const [isLoading, setIsLoading] = useState(!cachedModule) // Only show loading if not cached
  const [error, setError] = useState<Error | null>(null) // NEW

  // Load the plugin module dynamically (only if not already loaded)
  useEffect(() => {
    if (cachedModule) {
      return
    }

    let cancelled = false

    const loadApp = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const appModule = await getApp(pluginName, pluginPath) // Pass pluginPath
        if (!cancelled) {
          setApp(appModule)
          setIsLoading(false)
        }
      } catch (error) {
        if (!cancelled) {
          setIsLoading(false)
          setError(error instanceof Error ? error : new Error(String(error)))
          console.error(`Error loading plugin ${pluginName}:`, error)
        }
      }
    }

    loadApp()

    return () => {
      cancelled = true
    }
  }, [pluginName, pluginPath, cachedModule])

  // Mount the app once it's loaded
  useEffect(() => {
    if (!app || !containerRef.current) {
      return
    }

    try {
      app.mount(containerRef.current, {
        props: {
          ...config.props,
          embedded: true,
          basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
          enableHashedRouting: appProps?.enableHashedRouting || false,
          auth: pluginAuth,
        },
      })
    } catch (error) {
      console.error(`Error mounting plugin ${pluginName}:`, error)
      setError(error instanceof Error ? error : new Error(String(error)))
    }

    return () => {
      try {
        app.unmount()
      } catch (error) {
        console.error(`Error unmounting plugin ${pluginName}:`, error)
      }
    }
  }, [app, config, router, pluginAuth, appProps])

  return { isLoading, error, containerRef }
}
