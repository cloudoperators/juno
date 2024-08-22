/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

interface CachedConfig {
  time: number
  config: Record<string, any>
}

let oidcConfig: Record<any, CachedConfig> = {}
const cacheDuration = 5 * 60 * 60 * 1000

export async function getOidcConfig(issuerURL: any): Promise<any> {
  // throw an error if no issuerURL is provided
  if (!issuerURL) throw new Error("No issuerURL provided")
  const cachedConfig = oidcConfig[issuerURL]

  // return cached config if it exists and is less than 5 minutes old
  if (cachedConfig?.time && cachedConfig?.time > Date.now() - cacheDuration) return cachedConfig.config

  // otherwise fetch the config
  // if issuerURL is a URL object, use it, otherwise create a new URL object
  const url = issuerURL instanceof URL ? issuerURL : new URL(issuerURL)
  // add the .well-known/openid-configuration path to the URL and remove any
  // double slashes from the path
  url.pathname = (url.pathname + "/.well-known/openid-configuration").replace(/\/\/+/g, "/")

  return fetch(url).then((r) => {
    oidcConfig[issuerURL] = {
      config: r.json(),
      time: Date.now(),
    }
    return oidcConfig[issuerURL].config
  })
}

export function resetCache() {
  oidcConfig = {}
}
