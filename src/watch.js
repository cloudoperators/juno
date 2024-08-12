import request from "./request"
import * as logger from "./logger"

const ADDED = "ADDED"
const MODIFIED = "MODIFIED"
const DELETED = "DELETED"
const ERROR = "ERROR"
const BOOKMARK = "BOOKMARK"

/**
 *
 * @param {string} url
 * @param {object} options
 * @param {function} getCurrentToken Optional, if given this watch request will call it before every start.
 */
function Watch(url, options = {}, getCurrentToken) {
  // listeners
  const listeners = {
    [ADDED]: [],
    [MODIFIED]: [],
    [DELETED]: [],
    [ERROR]: [],
  }

  const PREFIX = `watch >`

  const controller = new AbortController()
  const signal = controller.signal
  let resourceVersion = null

  // use given resourceVersion if provided
  if (options && options.params && options.params.resourceVersion) {
    resourceVersion = options.params.resourceVersion
    // remove resourceVersion from params (cleanup)
    delete options.params.resourceVersion
  }

  this.refreshToken = (newToken) => {
    options.headers["Authorization"] = `Bearer ${newToken}`
  }

  // throw error if type is not known.
  // type should be one of ADDED, MODIFIED, DELETED or ERROR
  const checkType = (type) => {
    if ([ADDED, MODIFIED, DELETED, ERROR].indexOf(type) < 0)
      throw new Error(`Bad type: ${type}`)
  }

  const addListener = (type, listener) => {
    checkType(type)

    const index = listeners[type].length
    listeners[type].push(listener)
    return index
  }

  // TODO: automatic cleanup
  // remove listener at specific position (index)
  // const removeListener = (type, index) => {
  //   checkType(type)
  //   listeners[type].splice(index, 1)

  //   const listenersCount = Object.values(listeners).reduce((sum, listeners) => {
  //     sum = sum + listeners.length
  //   }, 0)

  //   if (listenersCount === 0) AbortController.cancel()
  // }

  const informListeners = (type, items) => {
    if (!listeners[type]) return
    listeners[type].forEach((listener, index) => {
      try {
        listener(items)
      } catch (e) {
        // if e === reference error
        // removeListener(type,index)
      }
    })
  }

  // Inform all listeners about updates
  const handleEvents = (events) => {
    if (!Array.isArray(events)) events = [events]

    // do not block this function
    setTimeout(() => {
      // collect events by type
      const eventsByType = {}
      for (let event of events) {
        // update resourceVersion on BOOKMARK events
        if (event.type === BOOKMARK) {
          resourceVersion = event.object.metadata.resourceVersion
          continue
        }
        eventsByType[event.type] = eventsByType[event.type] || []
        eventsByType[event.type].push(event.object)
      }

      Object.keys(eventsByType).forEach((type) =>
        informListeners(type, eventsByType[type])
      )
    })
  }

  const getResourceVersion = async () => {
    // return if resourceVersion already known
    if (resourceVersion) return resourceVersion

    logger.debug(PREFIX, "get resource version from api")
    // make a list request to get resourceVersion
    const { metadata, items } = await request("GET", url, options).then(
      (response) => response.json()
    )
    resourceVersion = metadata.resourceVersion
    if (items) informListeners(ADDED, items)

    return resourceVersion
  }

  var decoder = new TextDecoder()

  /**
   * Start watching.
   * @return {function} cancel
   */
  this.start = () => {
    if (getCurrentToken) this.refreshToken(getCurrentToken())

    getResourceVersion()
      .then((resourceVersion) => {
        logger.debug(PREFIX, "current resource version", resourceVersion)
        // make a watch request
        return request("GET", url, {
          ...options,
          params: Object.assign({}, options.params, {
            watch: 1,
            allowWatchBookmarks: true,
            resourceVersion,
          }),
          signal,
        })
      })
      .then(async (res) => {
        // get stream reader
        const reader = res.body.getReader()
        let done = true
        let data = ""

        do {
          logger.debug(PREFIX, "read stream chunk")
          // receive a chunk
          const result = await reader.read()
          done = result.done
          // decode to text
          data += decoder.decode(result.value || new Uint8Array())

          // split by new line character
          let events = data.split(/\n|\r|\r\n/)
          // remove last element. The last element is an empty string if last character is a CRLF or
          // it is an incomplete event if last character is not a CRLF. In this case
          // the next received chunk will complete the event data.
          data = events.pop() || ""

          // {"type":"ERROR","object":{"kind":"Status","apiVersion":"v1","metadata":{},"status":"Failure","message":"too old resource version: 52869594 (52871049)","reason":"Gone","code":410}}

          const parsedEvents = []
          events.forEach((e) => {
            const parsedEvent = JSON.parse(e)
            if (parsedEvent.type === ERROR && parsedEvent.object.code === 410) {
              this.cancel()
              setTimeout(() => {
                logger.debug(
                  PREFIX,
                  "resource is gone 410",
                  "recreate watch request!"
                )
                this.start()
              })
              return
            }
            parsedEvents.push(parsedEvent)
          })

          logger.debug(PREFIX, "inform listeners", events)
          // inform listeners
          //handleEvents(events.map((e) => e && JSON.parse(e)))
          handleEvents(parsedEvents)
        } while (!done)
      })
      .catch((e) => {
        // do nothing if request was aborted -> closing
        if (e.name === "AbortError") return
        // error response status
        const status = e.code || (e.response && e.response.status)

        if (status === 410) {
          // connection is gone
          logger.debug(PREFIX, "resource is gone 410")
          resourceVersion = null
          setTimeout(this.start)
          return
        }

        if ([404].indexOf(status) >= 0) {
          handleEvents({ type: ERROR, object: e })
          this.cancel()
          return
        }

        logger.error("WATCH ERROR", e, e.code, status, e.response)
        console.dir(e)

        // recover connection for all other errors
        setTimeout(() => {
          logger.debug(PREFIX, "recover connection", "restart!")
          this.start()
        }, 30000)

        //this.cancel()
      })

    return this.cancel
  }

  /**
   * Register a listener for type.
   * @param {string} type ADDED, MODIFIED, DELETED or ERROR
   * @param {function} listener
   * @return {Watch} this object
   */
  this.on = (type, listener) => {
    addListener(type, listener)
    return this
  }

  /**
   * Cancel current watch.
   */
  this.cancel = () => {
    logger.debug(PREFIX, "cancel connection")
    controller.abort()
  }
}

export { ADDED, MODIFIED, DELETED, ERROR, Watch }
