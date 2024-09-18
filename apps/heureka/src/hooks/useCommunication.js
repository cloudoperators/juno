/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useCallback } from "react"
import { get, watch } from "@cloudoperators/juno-communicator"
import {
  useUserActivityActions,
  useAuthActions,
  useIssueMatchesActiveFilters,
  useServiceActiveFilters,
  useComponentActiveFilters,
  useFilterActions,
  useIssueMatchesFilterLabels,
  useServiceFilterLabels,
  useComponentFilterLabels,
} from "./useAppStore"

const useCommunication = () => {
  console.debug("[heureka] useCommunication setup")
  const { setIsActive } = useUserActivityActions()
  const { setData: authSetData } = useAuthActions()

  // Active filters for each entity
  const issueMatchesActiveFilters = useIssueMatchesActiveFilters()
  const serviceActiveFilters = useServiceActiveFilters()
  const componentActiveFilters = useComponentActiveFilters()

  // Filter labels for each entity
  const issueMatchesFilterLabels = useIssueMatchesFilterLabels()
  const serviceFilterLabels = useServiceFilterLabels()
  const componentFilterLabels = useComponentFilterLabels()

  const { setActiveFilters } = useFilterActions()

  const setAuthData = useCallback(
    (data) => {
      if (!data) return

      // Set the auth data
      authSetData(data)

      // The following code exists for historical reasons and should be refactored
      // We preset the support group filter based on auth data. This should be done
      // with predefined filters prop

      // Handle support group filters for IssueMatches
      if (
        !issueMatchesActiveFilters?.support_group &&
        data?.auth?.parsed?.supportGroups &&
        issueMatchesFilterLabels?.includes("support_group")
      ) {
        setActiveFilters("IssueMatches", { support_group: data.auth.parsed.supportGroups })
      }

      // Handle support group filters for Services
      if (
        !serviceActiveFilters?.support_group &&
        data?.auth?.parsed?.supportGroups &&
        serviceFilterLabels?.includes("support_group")
      ) {
        setActiveFilters("Services", { support_group: data.auth.parsed.supportGroups })
      }
    },
    [
      authSetData,
      issueMatchesFilterLabels,
      serviceFilterLabels,
      componentFilterLabels,
      issueMatchesActiveFilters,
      serviceActiveFilters,
      componentActiveFilters,
      setActiveFilters,
    ]
  )

  useEffect(() => {
    // Watch for user activity updates
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

  useEffect(() => {
    // Fetch and watch for auth data updates
    if (!setAuthData) return

    get("AUTH_GET_DATA", setAuthData)
    const unwatchUpdate = watch("AUTH_UPDATE_DATA", setAuthData)

    return () => {
      if (unwatchUpdate) unwatchUpdate()
    }
  }, [setAuthData])
}

export default useCommunication
