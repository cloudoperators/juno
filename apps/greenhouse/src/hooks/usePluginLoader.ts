/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { use, useEffect, useRef } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import type { Plugin, PluginProps } from "@cloudoperators/greenhouse-core"

const getApp = async ({ name, url }: { name: string; url?: string | null }): Promise<Plugin | null> => {
  let module: Plugin | null = null

  if (url) {
    // Remote plugin: import the hosted ESM bundle (@vite-ignore = don't resolve at build time).
    const remote: Record<string, unknown> = await import(/* @vite-ignore */ url)
    // Accept a `plugin` export or bare mount/unmount; normalise to the Plugin contract.
    const candidate = (remote.plugin ?? { mount: remote.mount, unmount: remote.unmount }) as Partial<Plugin>
    if (typeof candidate.mount === "function" && typeof candidate.unmount === "function") {
      module = candidate as Plugin
    }
  } else {
    // Internal plugins are bundled into the shell and resolved by name at build time.
    switch (name) {
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
  }

  return module
}

// Stable promise per plugin for use() (keyed by url, else name); rejects on failure so the
// surrounding ErrorBoundary catches it.
const pluginPromiseCache = new Map<string, Promise<Plugin>>()

export const pluginCacheKey = ({ name, url }: { name: string; url?: string | null }) => url || name

const loadPlugin = (params: { name: string; url?: string | null }): Promise<Plugin> => {
  const key = pluginCacheKey(params)
  if (!pluginPromiseCache.has(key)) {
    const promise = getApp(params).then((module) => {
      if (!module) throw new Error(`Plugin "${params.name}" could not be loaded`)
      return module
    })
    pluginPromiseCache.set(key, promise)
  }
  return pluginPromiseCache.get(key)!
}

// Drop a plugin's cached promise so Retry re-imports it.
export const clearPluginCache = (key: string): void => {
  pluginPromiseCache.delete(key)
}

// Fields of a plugin's store config the loader and Extension use.
export interface PluginLoaderConfig {
  id: string
  name: string
  // Remote bundle URL from the plugin's k8s CR; when set, the loader imports it instead of a bundled plugin.
  url?: string | null
  props?: PluginProps
}

// Props the host forwards at mount time — host convention, not part of the greenhouse-core contract.
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
  containerRef: React.RefObject<HTMLDivElement | null>
}

// Loads the plugin as a Suspense resource (use() suspends; failures throw to the ErrorBoundary)
// and mounts/unmounts it into the container ref.
export function usePluginLoader({
  pluginName,
  config,
  appProps,
  pluginAuth,
}: UsePluginLoaderParams): UsePluginLoaderResult {
  const router = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)

  // Suspends until the module resolves; re-throws to the ErrorBoundary if the load rejects.
  const app = use(loadPlugin({ name: pluginName, url: config.url }))

  // Mount the app once it's loaded
  useEffect(() => {
    if (!app || !containerRef.current) {
      return
    }

    // Host-forwarded props; changing these stays in this file, not greenhouse-core.
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

  return { containerRef }
}
