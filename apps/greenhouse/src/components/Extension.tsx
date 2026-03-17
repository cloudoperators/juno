/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, useEffect, useRef, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore, EmbeddedAuth } from "@cloudoperators/greenhouse-auth-provider"

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

type ExtensionProps = {
  id: string
  config: any
  auth: any
  appProps: AppProps
  pluginAuth: AuthStore
}

function Extension({ id, config, auth, appProps, pluginAuth }: ExtensionProps) {
  const router = useRouter()
  const appContainerRef = useRef<HTMLDivElement>(null)
  // Check if module is already cached - if so, start with it loaded!
  const cachedModule = moduleCache.get(config.name)
  const [app, setApp] = useState<PluginModule | null>(cachedModule || null)
  const [isLoading, setIsLoading] = useState(!cachedModule) // Only show loading if not cached

  // Remove the setter from the pluginAuth before passing it to the plugin, to prevent plugins from changing the auth state directly
  const authForPlugin: EmbeddedAuth = Object.freeze({
    getSnapshot: pluginAuth.getSnapshot,
  })

  // Load the plugin module dynamically (only if not already loaded)
  useEffect(() => {
    // Skip loading if we already have the module from cache
    if (cachedModule) {
      return
    }

    let cancelled = false

    const loadApp = async () => {
      setIsLoading(true)
      try {
        const appModule = await getApp(config.name)
        if (!cancelled) {
          setApp(appModule)
          setIsLoading(false)
        }
      } catch (error) {
        console.error(`Failed to load plugin ${config.name}:`, error)
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    loadApp()

    return () => {
      cancelled = true
    }
  }, [config.name, cachedModule])

  // Mount the app once it's loaded
  useEffect(() => {
    if (!app || !appContainerRef.current) {
      return
    }

    app.mount(appContainerRef.current, {
      props: {
        ...config.props,
        ...(!config.core
          ? {
              embedded: true,
              basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
              enableHashedRouting: appProps?.enableHashedRouting || false,
              auth: authForPlugin,
            }
          : { auth: auth }),
      },
    })

    return () => {
      app.unmount()
    }
  }, [app, config, pluginAuth])

  if (isLoading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    )
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div key={id} ref={appContainerRef}></div>
    </Suspense>
  )
}

export default Extension
