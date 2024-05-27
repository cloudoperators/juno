/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useMemo, useCallback } from "react"

const DEFAULT_TIMEOUT = 1800 // 30 min
const DEFAULT_EVENTS = ["mousemove", "click", "scroll", "keydown", "focus"]

const useIdleTimer = ({ timeout, events, onTimeout, onActive, debug }) => {
  const [counter, setCounter] = useState(0)
  const [isActive, setIsActive] = useState(true) // default to true so it is not starting inactive

  debug = useMemo(() => {
    if (debug === true || debug === "true") return true
    return false
  }, [debug])

  if (debug)
    console.log(
      " USER_ACTIVITY useIdleTimmer hook. isActive: ",
      isActive,
      " Counter: ",
      counter
    )

  // set a default timeout
  timeout = useMemo(() => {
    if (isNaN(parseInt(timeout, 10))) timeout = DEFAULT_TIMEOUT
    if (debug)
      console.log("USER_ACTIVITY useIdleTimmer hook. timneout: ", timeout)
    return timeout
  }, [timeout])

  // set default events
  events = useMemo(() => {
    if (!events) return DEFAULT_EVENTS
    if (!Array.isArray(events)) events = [events]
    if (debug) console.log("USER_ACTIVITY useIdleTimmer hook. Events: ", events)
    return events
  }, [events])

  // on load bind events and reset on timeout changes
  useEffect(() => {
    if (!timeout || !events) return
    // track user activity by adding event listeners
    events.forEach((e) => window.addEventListener(e, activity))
    // init interval to check the timeout
    const interval = startInterval()
    return () => {
      // cleanup all events
      events.forEach((e) => window.removeEventListener(e, activity))
      // clear the interval
      clearInterval(interval)
    }
  }, [timeout, events])

  // dispatch callbacks and save state into the store
  useEffect(() => {
    // send callbacks
    if (isActive) {
      if (onActive) onActive()
    } else {
      if (onTimeout) onTimeout()
    }
  }, [isActive])

  // manage the active state
  useEffect(() => {
    if (counter >= timeout && isActive !== false) {
      setIsActive(false)
    }
  }, [counter])

  // set the expire time by reducing noise
  const activity = () => {
    setIsActive(true)
    setCounter(0)
  }

  // check the time elapsed
  const startInterval = () => {
    return setInterval(() => {
      // use functional updates since interval will be created once
      // but we need to read the updated counter
      setCounter((prevCounter) => {
        return prevCounter + 1
      })
    }, 1000)
  }

  return { isActive }
}

export default useIdleTimer
