/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { use, useCallback, useEffect, useRef, useState } from "react"
import { useRouter } from "@tanstack/react-router"
import { AppProps } from "../Shell"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"
import type { Plugin, PluginProps } from "@cloudoperators/greenhouse-core"

const getApp = async ({
  name,
  url,
  nonce,
}: {
  name: string
  url?: string | null
  nonce?: string
}): Promise<Plugin | null> => {
  let module: Plugin | null = null

  if (url) {
    // Append nonce on retry to bypass the browser's native ES-module cache.
    const sep = url.includes("?") ? "&" : "?"
    const importUrl = nonce ? `${url}${sep}_v=${nonce}` : url
    const remote: Record<string, unknown> = await import(/* @vite-ignore */ importUrl)
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

// Cache-bust nonce per key — set by clearPluginCache so the next import() uses a fresh URL,
// bypassing the browser's native ES-module cache for remote bundles.
const pluginRetryNonce = new Map<string, string>()

export const pluginCacheKey = ({ name, url }: { name: string; url?: string | null }) => url || name

const loadPlugin = (params: { name: string; url?: string | null }): Promise<Plugin> => {
  const key = pluginCacheKey(params)
  if (!pluginPromiseCache.has(key)) {
    const nonce = pluginRetryNonce.get(key)
    const promise = getApp({ ...params, nonce }).then((module) => {
      if (!module) throw new Error(`Plugin "${params.name}" could not be loaded`)
      return module
    })
    pluginPromiseCache.set(key, promise)
  }
  return pluginPromiseCache.get(key)!
}

// Drop a plugin's cached promise and record a nonce so the next import() fetches a fresh URL.
export const clearPluginCache = (key: string): void => {
  pluginPromiseCache.delete(key)
  pluginRetryNonce.set(key, String(Date.now()))
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

  // Catch errors thrown inside the plugin's separate React root (after a successful mount) and
  // re-throw them into greenhouse's tree so PluginErrorBoundary can display a recoverable UI.
  const [runtimeError, setRuntimeError] = useState<Error | null>(null)
  if (runtimeError) throw runtimeError

  // Normalise the unknown passed by onUncaughtError / a rejected mount into an Error.
  const reportError = useCallback((err: unknown) => {
    setRuntimeError(err instanceof Error ? err : new Error(String(err)))
  }, [])

  // Mount the app once it's loaded
  useEffect(() => {
    if (!app || !containerRef.current) {
      return
    }

    let cancelled = false

    // Host-forwarded props; changing these stays in this file, not greenhouse-core.
    const mountProps: GreenhouseMountProps = {
      ...config.props,
      embedded: true,
      basePath: `${router.basepath === "/" ? "" : router.basepath}/${config.id}`,
      enableHashedRouting: appProps?.enableHashedRouting || false,
      auth: pluginAuth,
    }

    const result = app.mount(containerRef.current, { props: mountProps, onError: reportError })

    // Handle plugins with async initialization: a rejected promise would otherwise produce an
    // unhandled rejection and a blank container instead of the error/retry UI.
    if (result instanceof Promise) {
      result.catch((err) => {
        if (!cancelled) reportError(err)
      })
    }

    return () => {
      cancelled = true
      app.unmount()
    }
  }, [app, config, router, pluginAuth, appProps, reportError])

  return { containerRef }
}
