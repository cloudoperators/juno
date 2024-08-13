import request from "./request"
import { buildUrl } from "./urlHelpers"
import { Watch, ADDED, MODIFIED, DELETED, ERROR } from "./watch"
import handleApiError from "./apiErrorHandler"

interface ClientOptions {
  apiEndpoint: string
  token: string
  [key: string]: any // To allow additional properties if needed
}

interface RequestOptions {
  params?: Record<string, any>
  headers?: Record<string, string>
  body?: any
  signal?: AbortSignal
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
}

class Client {
  WATCH_ERROR = ERROR
  WATCH_ADDED = ADDED
  WATCH_DELETED = DELETED
  WATCH_MODIFIED = MODIFIED
  private apiEndpoint: string
  private token: string
  private defaultHeaders: Record<string, string>

  constructor(options: ClientOptions) {
    const { apiEndpoint, token } = options

    if (!apiEndpoint || !token) {
      throw new Error(`Bad options: ${JSON.stringify(options, null, 4)}. Please provide apiEndpoint and token`)
    }

    this.apiEndpoint = apiEndpoint
    this.token = token

    this.defaultHeaders = {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    }
  }

  private extendOptions(options: RequestOptions, defaultOptions: RequestOptions = {}): RequestOptions {
    const headers = {
      ...this.defaultHeaders,
      ...defaultOptions.headers,
      ...options.headers,
    }

    return {
      ...defaultOptions,
      ...options,
      headers,
    }
  }

  head(path: string, options: RequestOptions = {}): Promise<Response> {
    return request("HEAD", buildUrl(this.apiEndpoint, path), this.extendOptions(options)).catch(handleApiError)
  }

  get(path: string, options: RequestOptions = {}): Promise<any> {
    return request("GET", buildUrl(this.apiEndpoint, path), this.extendOptions(options))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  post(path: string, data: any, options: RequestOptions = {}): Promise<any> {
    return request("POST", buildUrl(this.apiEndpoint, path), this.extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  put(path: string, data: any, options: RequestOptions = {}): Promise<any> {
    return request("PUT", buildUrl(this.apiEndpoint, path), this.extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  patch(path: string, data: any, options: RequestOptions = {}): Promise<any> {
    return request(
      "PATCH",
      buildUrl(this.apiEndpoint, path),
      this.extendOptions(options, {
        headers: { "Content-Type": "application/merge-patch+json" },
        body: data,
      })
    )
      .then((res) => res.json())
      .catch(handleApiError)
  }

  delete(path: string, data?: any, options: RequestOptions = {}): Promise<any> {
    return request("DELETE", buildUrl(this.apiEndpoint, path), this.extendOptions(options, { body: data }))
      .then((res) => res.json())
      .catch(handleApiError)
  }

  watch(path: string, options: RequestOptions = {}): Watch {
    return new Watch(buildUrl(this.apiEndpoint, path), this.extendOptions(options), () => this.token)
  }

  refreshToken(newToken: string): void {
    this.token = newToken
  }

  currentToken(): string {
    return this.token
  }
}

function createClient(options: ClientOptions): Client {
  return new Client(options)
}

export { createClient, Client }
