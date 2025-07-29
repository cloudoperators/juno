/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import request, { RequestOptions } from "./request"
import { buildUrl } from "./urlHelpers"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "./watch"
import handleApiError, { K8sApiError } from "./apiErrorHandler"

interface ClientOptions {
  apiEndpoint: string
  token: string
  ignoreSsl?: boolean // New option to ignore SSL certificate validation
  debug?: boolean // Optional debug flag
  [key: string]: any // To allow additional properties if needed
}

function createClient(options: ClientOptions) {
  const { apiEndpoint, ignoreSsl = false } = options
  let token = options.token

  if (!apiEndpoint || !token) {
    throw new Error(`Bad options: ${JSON.stringify(options, null, 4)}. Please provide apiEndpoint and token`)
  }

  // Log warning when SSL verification is disabled
  if (ignoreSsl && options.debug === true) {
    console.warn(`⚠️  K8s Client: SSL certificate verification disabled for ${apiEndpoint}`)
    console.warn(`🔒 This should only be used in development or secure internal networks`)
  }

  const defaultHeaders = () => ({
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  })

  function extendOptions(options: RequestOptions, defaultOptions: RequestOptions = {}): RequestOptions {
    const headers = {
      ...defaultHeaders(),
      ...defaultOptions.headers,
      ...options.headers,
    }

    return {
      ...defaultOptions,
      ...options,
      headers,
    }
  }

  function head(path: string, options: RequestOptions = {}): Promise<Response | K8sApiError> {
    return request("HEAD", buildUrl(apiEndpoint, path), extendOptions(options)).catch(handleApiError)
  }

  function get(path: string, options: RequestOptions = {}): Promise<unknown> {
    return request("GET", buildUrl(apiEndpoint, path), extendOptions(options))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  function post(path: string, data: {}, options: RequestOptions = {}): Promise<unknown> {
    const result = request("POST", buildUrl(apiEndpoint, path), extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
    return result
  }

  function put(path: string, data: {}, options: RequestOptions = {}): Promise<unknown> {
    return request("PUT", buildUrl(apiEndpoint, path), extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  function patch(path: string, data: {}, options: RequestOptions = {}): Promise<unknown> {
    return request(
      "PATCH",
      buildUrl(apiEndpoint, path),
      extendOptions(options, {
        headers: { "Content-Type": "application/merge-patch+json" },
        body: data,
      })
    )
      .then((res) => res.json())
      .catch(handleApiError)
  }

  function del(path: string, data?: {} | null, options: RequestOptions = {}): Promise<unknown> {
    return request("DELETE", buildUrl(apiEndpoint, path), extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  function watch(path: string, options: RequestOptions = {}): Watch {
    return new Watch(buildUrl(apiEndpoint, path), extendOptions(options), () => token)
  }

  function refreshToken(newToken: string): void {
    token = newToken
  }

  function currentToken(): string {
    return token
  }

  return {
    WATCH_ERROR: ERROR,
    WATCH_ADDED: ADDED,
    WATCH_DELETED: DELETED,
    WATCH_MODIFIED: MODIFIED,
    head,
    get,
    post,
    put,
    patch,
    delete: del,
    watch,
    refreshToken,
    currentToken,
  }
}

export { createClient, type RequestOptions }
