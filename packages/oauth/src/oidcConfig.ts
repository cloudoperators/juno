/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { OidcConfig, CachedConfig } from "./types"
import { OidcConfigSchema } from "./schemas"

let oidcConfig: Record<string, CachedConfig> = {}
const cacheDuration = 5 * 60 * 60 * 1000

export async function getOidcConfig(issuerURL: string | URL): Promise<OidcConfig> {
  // throw an error if no issuerURL is provided
  if (!issuerURL) throw new Error("No issuerURL provided")

  const issuerKey = String(issuerURL)
  const cachedConfig = oidcConfig[issuerKey]

  // return cached config if it exists and is less than 5 minutes old
  if (cachedConfig?.time && cachedConfig?.time > Date.now() - cacheDuration) return cachedConfig.config

  // otherwise fetch the config
  // if issuerURL is a URL object, use it, otherwise create a new URL object
  const url = issuerURL instanceof URL ? issuerURL : new URL(issuerURL)
  // add the .well-known/openid-configuration path to the URL and remove any
  // double slashes from the path
  url.pathname = (url.pathname + "/.well-known/openid-configuration").replace(/\/\/+/g, "/")

  return fetch(url).then(async (r) => {
    if (!r.ok) {
      throw new Error(`Failed to fetch OIDC config: ${r.statusText}`)
    }
    const json: unknown = await r.json()
    const config: OidcConfig = OidcConfigSchema.parse(json)
    oidcConfig[issuerKey] = {
      config,
      time: Date.now(),
    }
    return oidcConfig[issuerKey].config
  })
}

export function resetCache() {
  oidcConfig = {}
}
