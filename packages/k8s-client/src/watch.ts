/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import request from "./request"
import * as logger from "./logger"
import { K8sApiError } from "./apiErrorHandler"

const ADDED = "ADDED"
const MODIFIED = "MODIFIED"
const DELETED = "DELETED"
const ERROR = "ERROR"
const BOOKMARK = "BOOKMARK"

type Listener = (_items: unknown) => void

interface WatchEvent {
  type: string
  object?: {
    metadata?: {
      resourceVersion?: string
    }
    code?: number
  }
}

interface ApiResponseData {
  items: unknown
  metadata: {
    resourceVersion: string | null
  }
}

interface WatchOptions {
  params?: Record<string, string>
  headers?: Record<string, string>
  signal?: AbortSignal
  body?: Object | null
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
}

class Watch {
  private readonly listeners: Record<string, Listener[]> = {
    [ADDED]: [],
    [MODIFIED]: [],
    [DELETED]: [],
    [ERROR]: [],
  }
  private readonly controller: AbortController = new AbortController()
  private readonly signal: AbortSignal = this.controller.signal
  private resourceVersion: string | null = null
  private readonly PREFIX = "watch >"
  private readonly decoder = new TextDecoder()
  private readonly url: string
  private readonly options: WatchOptions
  private readonly getCurrentToken?: () => string

  constructor(url: string, options: WatchOptions = {}, getCurrentToken?: () => string) {
    this.url = url
    this.options = options
    this.getCurrentToken = getCurrentToken

    // Use given resourceVersion if provided
    if (options?.params?.resourceVersion) {
      this.resourceVersion = options.params.resourceVersion
      delete options.params.resourceVersion
    }
  }

  refreshToken = (newToken: string) => {
    if (this.options.headers) {
      this.options.headers["Authorization"] = `Bearer ${newToken}`
    }
  }

  private checkType = (type: string) => {
    if (![ADDED, MODIFIED, DELETED, ERROR].includes(type)) {
      throw new Error(`Bad type: ${type}`)
    }
  }

  private addListener = (type: string, listener: Listener) => {
    this.checkType(type)
    this.listeners[type].push(listener)
  }

  private informListeners = (type: string, items: unknown) => {
    const listeners = this.listeners[type]
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(items)
        } catch (e) {
          logger.error(e)
          // Handle listener errors if necessary
        }
      })
    }
  }

  private handleEvents = (events: WatchEvent | WatchEvent[]) => {
    if (!Array.isArray(events)) events = [events]

    // Pass correct "this" context to be referenced in asynchronous callbacks
    const that = this

    setTimeout(() => {
      const eventsByType: Record<string, any[]> = {}

      events.forEach((event: WatchEvent) => {
        if (event.type === BOOKMARK) {
          that.resourceVersion = event?.object?.metadata?.resourceVersion ?? null
        } else {
          if (!eventsByType[event.type]) {
            eventsByType[event.type] = []
          }
          eventsByType[event.type].push(event.object)
        }
      })

      Object.keys(eventsByType).forEach((type) => that.informListeners(type, eventsByType[type]))
    })
  }

  private getResourceVersion = async (): Promise<string | null> => {
    if (this.resourceVersion) return this.resourceVersion

    logger.debug(this.PREFIX, "get resource version from API")
    const { metadata, items } = (await request("GET", this.url, this.options).then((response) =>
      // 'Body.json()' type definition expects 'any' as a return value
      response.json()
    )) as ApiResponseData

    this.resourceVersion = metadata.resourceVersion
    if (items) this.informListeners(ADDED, items)

    return this.resourceVersion
  }

  start = () => {
    // Pass correct "this" context to be referenced in asynchronous callbacks
    const that = this

    if (that.getCurrentToken) {
      that.refreshToken(that.getCurrentToken())
    }

    that
      .getResourceVersion()
      .then((resourceVersion) => {
        logger.debug(that.PREFIX, "current resource version", resourceVersion)
        return request("GET", that.url, {
          ...that.options,
          params: {
            ...that.options.params,
            watch: 1,
            allowWatchBookmarks: true,
            resourceVersion,
          },
          signal: that.signal,
        })
      })
      .then(async (res) => {
        const reader = res.body?.getReader()
        let done = false
        let data = ""

        while (!done) {
          logger.debug(that.PREFIX, "read stream chunk")
          const result = await reader?.read()
          done = result?.done ?? true
          data += that.decoder.decode(result?.value || new Uint8Array())

          const events = data.split(/\n|\r|\r\n/)
          data = events.pop() ?? ""

          const parsedEvents: WatchEvent[] = []
          events.forEach((e) => {
            // 'JSON.parse' type definition expects 'any' as a return value
            const parsedEvent = JSON.parse(e) as WatchEvent
            if (parsedEvent.type === ERROR && parsedEvent?.object?.code === 410) {
              that.cancel()
              setTimeout(() => {
                logger.debug(that.PREFIX, "resource is gone 410", "recreate watch request!")
                that.start()
              })
              return
            }
            parsedEvents.push(parsedEvent)
          })

          logger.debug(that.PREFIX, "inform listeners", events)
          that.handleEvents(parsedEvents)
        }
      })
      .catch((e: K8sApiError) => {
        if (e.name === "AbortError") return
        const status = e.code || e?.response?.status

        if (status === 410) {
          logger.debug(that.PREFIX, "resource is gone 410")
          that.resourceVersion = null
          setTimeout(() => that.start(), 0)
          return
        }

        if (status === 404) {
          that.handleEvents({ type: ERROR, object: e })
          that.cancel()
          return
        }

        logger.error("WATCH ERROR", e, e.code, status, e.response)
        console.dir(e)

        setTimeout(() => {
          logger.debug(that.PREFIX, "recover connection", "restart!")
          that.start()
        }, 30000)
      })

    return that.cancel
  }

  on = (type: string, listener: Listener) => {
    this.addListener(type, listener)
    return this
  }

  cancel = () => {
    logger.debug(this.PREFIX, "cancel connection")
    this.controller.abort()
  }
}

export { ADDED, MODIFIED, DELETED, ERROR, Watch }
