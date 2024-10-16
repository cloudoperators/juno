/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, ButtonRow, Container, DataGridToolbar } from "@cloudoperators/juno-ui-components"
import ClusterDetail from "./components/ClusterDetail"
import ClusterEdit from "./components/ClusterEdit"
import ClusterList from "./components/ClusterList"
import DownloadKubeConfig from "./components/DownloadKubeConfig"
import OnBoardCluster from "./components/OnBoardCluster"
import useStore from "./store"

const AppContent = ({ expires }) => {
  const token = useStore((state) => state.token)
  const namespace = useStore((state) => state.namespace)
  const clusters = useStore((state) => state.clusters)
  const clusterDetails = useStore((state) => state.clusterDetails)
  const showClusterDetails = useStore((state) => state.showClusterDetails)
  const showOnBoardCluster = useStore((state) => state.showOnBoardCluster)
  const showDownloadKubeConfig = useStore((state) => state.showDownloadKubeConfig)
  const clusterInEdit = useStore((state) => state.clusterInEdit)
  const apiEndpoint = useStore((state) => state.endpoint)
  const setShowOnBoardCluster = useStore((state) => state.setShowOnBoardCluster)
  const setShowClusterDetails = useStore((state) => state.setShowClusterDetails)
  const setShowDownloadKubeConfig = useStore((state) => state.setShowDownloadKubeConfig)

  const openOnBoardCluster = () => {
    setShowOnBoardCluster(true)
    setShowClusterDetails(false)
    setShowDownloadKubeConfig(false)
  }

  const openShowDownloadKubeConfig = () => {
    setShowOnBoardCluster(false)
    setShowClusterDetails(false)
    setShowDownloadKubeConfig(true)
  }

  return (
    <Container>
      <>
        <DataGridToolbar>
          <ButtonRow>
            <Button
              icon="openInBrowser"
              label="Access greenhouse cluster"
              onClick={() => openShowDownloadKubeConfig()}
            />
            <Button icon="addCircle" label="Onboard Cluster" onClick={() => openOnBoardCluster()} />
          </ButtonRow>
        </DataGridToolbar>

        {showOnBoardCluster && <OnBoardCluster />}
        {showDownloadKubeConfig && (
          <DownloadKubeConfig namespace={namespace} token={token} endpoint={apiEndpoint} expiry={expires} />
        )}
        {clusters.length > 0 && <ClusterList clusters={clusters} />}
        {showClusterDetails && clusterDetails.cluster && <ClusterDetail />}
        {clusterInEdit && <ClusterEdit />}
      </>
    </Container>
  )
}

export default AppContent
