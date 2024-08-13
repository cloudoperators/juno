import request from "./request"
import * as logger from "./logger"

const ADDED = "ADDED"
const MODIFIED = "MODIFIED"
const DELETED = "DELETED"
const ERROR = "ERROR"
const BOOKMARK = "BOOKMARK"

type Listener = (items: any) => void

interface WatchOptions {
  params?: Record<string, any>
  headers?: Record<string, string>
  signal?: AbortSignal
  body?: any
  mode?: RequestMode
  cache?: RequestCache
  credentials?: RequestCredentials
}

class Watch {
  private listeners: Record<string, Listener[]> = {
    [ADDED]: [],
    [MODIFIED]: [],
    [DELETED]: [],
    [ERROR]: [],
  }
  private controller: AbortController = new AbortController()
  private signal: AbortSignal = this.controller.signal
  private resourceVersion: string | null = null
  private PREFIX = "watch >"
  private decoder = new TextDecoder()
  private url: string
  private options: WatchOptions
  private getCurrentToken?: () => string

  constructor(url: string, options: WatchOptions = {}, getCurrentToken?: () => string) {
    this.url = url
    this.options = options
    this.getCurrentToken = getCurrentToken

    // Use given resourceVersion if provided
    if (options.params && options.params.resourceVersion) {
      this.resourceVersion = options.params.resourceVersion
      delete options.params.resourceVersion
    }
  }

  refreshToken(newToken: string) {
    if (this.options.headers) {
      this.options.headers["Authorization"] = `Bearer ${newToken}`
    }
  }

  private checkType(type: string) {
    if (![ADDED, MODIFIED, DELETED, ERROR].includes(type)) {
      throw new Error(`Bad type: ${type}`)
    }
  }

  private addListener(type: string, listener: Listener) {
    this.checkType(type)
    this.listeners[type].push(listener)
  }

  private informListeners(type: string, items: any) {
    const listeners = this.listeners[type]
    if (listeners) {
      listeners.forEach((listener) => {
        try {
          listener(items)
        } catch (e) {
          // Handle listener errors if necessary
        }
      })
    }
  }

  private handleEvents(events: any) {
    if (!Array.isArray(events)) events = [events]

    setTimeout(() => {
      const eventsByType: Record<string, any[]> = {}

      events.forEach((event: any) => {
        if (event.type === BOOKMARK) {
          this.resourceVersion = event.object.metadata.resourceVersion
        } else {
          if (!eventsByType[event.type]) {
            eventsByType[event.type] = []
          }
          eventsByType[event.type].push(event.object)
        }
      })

      Object.keys(eventsByType).forEach((type) => this.informListeners(type, eventsByType[type]))
    })
  }

  private async getResourceVersion(): Promise<string | null> {
    if (this.resourceVersion) return this.resourceVersion

    logger.debug(this.PREFIX, "get resource version from API")
    const { metadata, items } = await request("GET", this.url, this.options).then((response) => response.json())

    this.resourceVersion = metadata.resourceVersion
    if (items) this.informListeners(ADDED, items)

    return this.resourceVersion
  }

  start() {
    if (this.getCurrentToken) {
      this.refreshToken(this.getCurrentToken())
    }

    this.getResourceVersion()
      .then((resourceVersion) => {
        logger.debug(this.PREFIX, "current resource version", resourceVersion)
        return request("GET", this.url, {
          ...this.options,
          params: {
            ...this.options.params,
            watch: 1,
            allowWatchBookmarks: true,
            resourceVersion,
          },
          signal: this.signal,
        })
      })
      .then(async (res) => {
        const reader = res.body?.getReader()
        let done = false
        let data = ""

        while (!done) {
          logger.debug(this.PREFIX, "read stream chunk")
          const result = await reader?.read()
          done = result?.done ?? true
          data += this.decoder.decode(result?.value || new Uint8Array())

          let events = data.split(/\n|\r|\r\n/)
          data = events.pop() || ""

          const parsedEvents: any[] = []
          events.forEach((e) => {
            const parsedEvent = JSON.parse(e)
            if (parsedEvent.type === ERROR && parsedEvent.object.code === 410) {
              this.cancel()
              setTimeout(() => {
                logger.debug(this.PREFIX, "resource is gone 410", "recreate watch request!")
                this.start()
              })
              return
            }
            parsedEvents.push(parsedEvent)
          })

          logger.debug(this.PREFIX, "inform listeners", events)
          this.handleEvents(parsedEvents)
        }
      })
      .catch((e) => {
        if (e.name === "AbortError") return
        const status = e.code || (e.response && e.response.status)

        if (status === 410) {
          logger.debug(this.PREFIX, "resource is gone 410")
          this.resourceVersion = null
          setTimeout(() => this.start(), 0)
          return
        }

        if ([404].includes(status)) {
          this.handleEvents({ type: ERROR, object: e })
          this.cancel()
          return
        }

        logger.error("WATCH ERROR", e, e.code, status, e.response)
        console.dir(e)

        setTimeout(() => {
          logger.debug(this.PREFIX, "recover connection", "restart!")
          this.start()
        }, 30000)
      })

    return this.cancel
  }

  on(type: string, listener: Listener) {
    this.addListener(type, listener)
    return this
  }

  cancel() {
    logger.debug(this.PREFIX, "cancel connection")
    this.controller.abort()
  }
}

export { ADDED, MODIFIED, DELETED, ERROR, Watch }
