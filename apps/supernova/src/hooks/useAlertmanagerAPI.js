/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import {
  useAlertsActions,
  useUserIsActive,
  useSilencesActions,
  useSilencesLocalItems,
} from "../components/StoreProvider"

// Create a worker using Vite's way of handling worker files
const createWorker = (workerPath) => {
  const worker = new Worker(new URL(workerPath, import.meta.url), {
    type: "module",
  })

  const stopWorker = () => {
    if (worker) worker.terminate()
  }

  return { worker, stopWorker }
}

// create workers
const alertsWorker = createWorker("../workers/alerts.js")
const silencesWorker = createWorker("../workers/silences.js")

const useAlertmanagerAPI = (apiEndpoint) => {
  const {
    setAlertsData,
    setIsLoading: setAlertsIsLoading,
    setIsUpdating: setAlertsIsUpdating,
    setError: setAlertsError,
  } = useAlertsActions()

  const isUserActive = useUserIsActive()

  const {
    setSilences,
    setIsUpdating: setSilencesIsUpdating,
    setIsLoading: setSilencesIsLoading,
    setError: setSilencesError,
  } = useSilencesActions()

  // Setup web workers
  useEffect(() => {
    let cleanupAlertsWorker = () => alertsWorker.stopWorker()
    let cleanupSilencesWorker = () => silencesWorker.stopWorker()

    // receive messages from worker
    alertsWorker.worker.onmessage = (e) => {
      const action = e.data.action
      switch (action) {
        case "ALERTS_UPDATE":
          console.debug("Worker::ALERT_UPDATE::", e.data)
          setAlertsData({ items: e.data.alerts, counts: e.data.counts })
          break
        case "ALERTS_FETCH_START":
          console.debug("Worker::ALERTS_FETCH_START::")
          setAlertsIsUpdating(true)
          break
        case "ALERTS_FETCH_END":
          console.debug("Worker::ALERTS_FETCH_END::")
          setAlertsIsUpdating(false)
          break
        case "ALERTS_FETCH_ERROR":
          console.debug("Worker::ALERTS_FETCH_ERROR::", e.data.error)
          setAlertsIsUpdating(false)
          // error comes as object string and have to be parsed
          setAlertsError(e.data.error)
          break
      }
    }

    // receive messages from worker
    silencesWorker.worker.onmessage = (e) => {
      const action = e.data.action
      switch (action) {
        case "SILENCES_UPDATE":
          console.debug("Worker::SILENCES_UPDATE::", e.data)
          setSilences({
            items: e.data?.silences,
            itemsHash: e.data?.silencesHash,
            itemsByState: e.data?.silencesBySate,
          })
          break
        case "SILENCES_FETCH_START":
          console.debug("Worker::SILENCES_FETCH_START::")
          setSilencesIsUpdating(true)
          break
        case "SILENCES_FETCH_END":
          console.debug("Worker::SILENCES_FETCH_END::")
          setSilencesIsUpdating(false)
          break
        case "SILENCES_FETCH_ERROR":
          console.debug("Worker::SILENCES_FETCH_ERROR::", e.data.error)
          setSilencesIsUpdating(false)
          // error comes as object string and have to be parsed
          setSilencesError(e.data.error)
          break
      }
    }

    return () => {
      cleanupAlertsWorker()
      cleanupSilencesWorker()
    }
  }, [])

  // Reconfigure workers each time we get a new API endpoint
  useEffect(() => {
    if (!apiEndpoint) return

    setAlertsIsLoading(true)
    alertsWorker.worker.postMessage({
      action: "ALERTS_CONFIGURE",
      fetchVars: { apiEndpoint, options: {} },
      debug: true,
    })

    setSilencesIsLoading(true)
    silencesWorker.worker.postMessage({
      action: "SILENCES_CONFIGURE",
      apiEndpoint,
    })
  }, [apiEndpoint])

  // Enable or disable watching in the workers based on user activity
  useEffect(() => {
    if (isUserActive === undefined) return

    alertsWorker.worker.postMessage({
      action: "ALERTS_CONFIGURE",
      watch: isUserActive,
    })

    silencesWorker.worker.postMessage({
      action: "SILENCES_CONFIGURE",
      watch: isUserActive,
    })
  }, [isUserActive])

  // Handle re-fetching silences when local items change
  const localItems = useSilencesLocalItems()
  useEffect(() => {
    // if we have no silences locally we don't need to refetch them otherwise
    // we will end up in an infinite loop
    if (!localItems || Object.keys(localItems).length <= 0) return

    // Use setTimeout to delay the worker call delayed by 10s
    setTimeout(() => {
      silencesWorker.worker.postMessage({ action: "SILENCES_FETCH" })
    }, 10000)

    return () => {
      if (silencesWorker.worker) {
        silencesWorker.worker.terminate()
      }
    }
  }, [localItems])
}

export default useAlertmanagerAPI
