/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import type { PluginModule, PluginProps } from "@cloudoperators/greenhouse-core"

// Cache loaded modules at the module level (persists across component mounts)
const moduleCache = new Map<string, PluginModule>()

const getApp = async (appName: string): Promise<PluginModule | null> => {
  // Return cached module immediately if available
  if (moduleCache.has(appName)) {
    return moduleCache.get(appName)!
  }

  // Load the module and extract its `plugin` export (the single PluginModule surface each plugin's
  // `src/index.{ts,tsx}` exports). Letting plugins expose the whole PluginModule value as one named
  // export means a future contract change (new method, renamed method, …) does not require editing
  // any plugin — only the shell adapts to the new shape.
  let module: PluginModule | null = null
  switch (appName) {
    case "supernova":
      module = (await import("@cloudoperators/juno-app-supernova")).plugin
      break
    case "doop":
      module = (await import("@cloudoperators/juno-app-doop")).plugin
      break
    case "heureka":
      module = (await import("@cloudoperators/juno-app-heureka")).plugin
      break
  }

  // Cache it for next time
  if (module) {
    moduleCache.set(appName, module)
  }

  return module
}

/**
 * The subset of a plugin's config entry the loader needs to see.
 *
 * The plugin store's upstream shape is `any` (loaded dynamically from JSON config); this interface
 * narrows it to just the three fields `usePluginLoader` and `Extension` actually touch. The `props`
 * field is typed against the shared `PluginProps` contract so a change to the contract surfaces as
 * a `pnpm typecheck` error at this call site too (not only inside the plugins).
 */
export interface PluginLoaderConfig {
  id: string
  name: string
  props?: PluginProps
}

/**
 * The host-side shape of the props Greenhouse forwards to a plugin at mount time.
 *
 * `PluginProps` (from `@cloudoperators/greenhouse-core`) is the contract — the fields every plugin
 * can rely on. The three fields added here (`basePath`, `enableHashedRouting`, `auth`) are the
 * host's own convention: `apps/greenhouse` happens to forward them, but they are not part of the
 * shared contract. Keeping them in a host-local type means that changing what the host forwards
 * (renaming, adding, removing a field) is a change inside this file — it does NOT require bumping
 * `greenhouse-core`, publishing it, and asking every plugin to update.
 *
 * A plugin that reads one of these fields opts in by declaring it on its own `AppProps`.
 */
interface GreenhouseMountProps extends PluginProps {
  basePath?: string
  enableHashedRouting?: boolean
  auth?: AuthStore
}

type UsePluginLoaderParams = {
  pluginName: string
  config: PluginLoaderConfig
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

    // The literal below is typed as `GreenhouseMountProps` (host-side convention), which extends
    // the shared contract's `PluginProps`. If the host adds or removes a forwarded field, it is
    // changed here — not in `@cloudoperators/greenhouse-core`.
    const mountProps: GreenhouseMountProps = {
      ...config.props,
      embedded: true,
      basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
      enableHashedRouting: appProps?.enableHashedRouting || false,
      auth: pluginAuth,
    }

    app.mount(containerRef.current, { props: mountProps })

    return () => {
      app.unmount()
    }
  }, [app, config, router, pluginAuth, appProps])

  return { isLoading, containerRef }
}
