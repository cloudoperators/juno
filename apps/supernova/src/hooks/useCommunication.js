/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react"
import { get, watch } from "@cloudoperators/juno-communicator"
import { useUserActivityActions, useAuthActions, useGlobalsIsURLRead } from "./useAppStore"

const useCommunication = () => {
  const isURLRead = useGlobalsIsURLRead()
  const { setIsActive } = useUserActivityActions()
  const { setData: authSetData, setSupportGroup } = useAuthActions()

  useEffect(() => {
    // watch for user activity updates messages
    // with the watcher we get the user activity object when this app is loaded before the Auth app
    const unwatch = watch(
      "USER_ACTIVITY_UPDATE_DATA",
      (data) => {
        console.debug("got message USER_ACTIVITY_UPDATE_DATA: ", data)
        setIsActive(data?.isActive)
      },
      { debug: true }
    )
    return unwatch
  }, [setIsActive])

  // WATCH for auth data updates
  // GET the auth data initially
  useEffect(() => {
    if (!isURLRead) return
    get("AUTH_GET_DATA", (data) => {
      authSetData(data)
      setSupportGroup(data?.auth?.parsed?.supportGroups)
    })
    const unwatchUpdate = watch("AUTH_UPDATE_DATA", (data) => {
      authSetData(data)
      // TODO: if the user gets reauthenticated we would reset all active filters with the support group. This would be fixed once the initial filters with the support group is set
      setSupportGroup(data?.auth?.parsed?.supportGroups)
    })
    return () => {
      if (unwatchUpdate) unwatchUpdate()
    }
  }, [isURLRead])
}

export default useCommunication
