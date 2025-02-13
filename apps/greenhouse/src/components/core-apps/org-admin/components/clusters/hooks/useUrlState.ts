/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react"
// @ts-expect-error TS(2792): Cannot find module '@cloudoperators/juno-url-state... Remove this comment to see the full error message
import { registerConsumer } from "@cloudoperators/juno-url-state-provider-v1"
import useStore from "../store"

const DEFAULT_KEY = "greenhouse-cluster-admin"
const SHOW_CLUSTER_DETAIL = "scd"
const SHOW_ONBOARD_CLUSTER = "soc"
const CLUSTER_DETAIL = "cd"

const useUrlState = (key: string): void => {
  const [isURLRead, setIsURLRead] = useState(false)
  const urlStateManager = registerConsumer(key || DEFAULT_KEY)

  // auth
  const loggedIn = useStore((state: any) => state.loggedIn)

  // globals
  const showClusterDetails = useStore((state: any) => state.showClusterDetails)
  const setShowClusterDetails = useStore((state: any) => state.setShowClusterDetails)
  const showOnboardCluster = useStore((state: any) => state.showOnBoardCluster)
  const setShowOnboardCluster = useStore((state: any) => state.setShowOnBoardCluster)
  const clusterDetails = useStore((state: any) => state.clusterDetails)
  const setClusterDetails = useStore((state: any) => state.setClusterDetails)
  const setClusterDetailPlugins = useStore((state: any) => state.setClusterDetailPlugins)

  // Set initial state from URL (on login)
  useEffect(() => {
    /* !!!IMPORTANT!!!
      don't read the url if we are already read it or if we are not logged in!!!!!
    */
    if (isURLRead || !loggedIn) return
    console.debug(
      `greenhouse-cluster-admin: (${key || DEFAULT_KEY}) setting up state from url:`,
      urlStateManager.currentState()
    )

    // READ the url state and set the state
    const newShowClusterDetail = urlStateManager.currentState()?.[SHOW_CLUSTER_DETAIL]
    const newShowOnboardCluster = urlStateManager.currentState()?.[SHOW_ONBOARD_CLUSTER]
    const newClusterDetail = urlStateManager.currentState()?.[CLUSTER_DETAIL]
    // SAVE the state
    if (newShowClusterDetail) setShowClusterDetails(newShowClusterDetail)
    if (newShowOnboardCluster) setShowOnboardCluster(newShowOnboardCluster)
    if (newClusterDetail) {
      setClusterDetails(newClusterDetail.cluster)
      setClusterDetailPlugins(newClusterDetail.plugins)
    }
    setIsURLRead(true)
  }, [loggedIn, setShowClusterDetails, setShowOnboardCluster, setClusterDetails])

  // SYNC states to URL state
  useEffect(() => {
    // don't sync if we are not logged in OR URL ist not yet read
    if (!isURLRead || !loggedIn) return
    urlStateManager.push({
      [SHOW_CLUSTER_DETAIL]: showClusterDetails,
      [SHOW_ONBOARD_CLUSTER]: showOnboardCluster,
      [CLUSTER_DETAIL]: clusterDetails,
    })
  }, [loggedIn, showClusterDetails, showOnboardCluster, clusterDetails])
}

export default useUrlState
