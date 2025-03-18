/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
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

const AppContent = ({ expires }: any) => {
  const token = useStore((state: any) => state.token)
  const namespace = useStore((state: any) => state.namespace)
  const clusters = useStore((state: any) => state.clusters)
  const clusterDetails = useStore((state: any) => state.clusterDetails)
  const showClusterDetails = useStore((state: any) => state.showClusterDetails)
  const showOnBoardCluster = useStore((state: any) => state.showOnBoardCluster)
  const showDownloadKubeConfig = useStore((state: any) => state.showDownloadKubeConfig)
  const clusterInEdit = useStore((state: any) => state.clusterInEdit)
  const apiEndpoint = useStore((state: any) => state.endpoint)
  const setShowOnBoardCluster = useStore((state: any) => state.setShowOnBoardCluster)
  const setShowClusterDetails = useStore((state: any) => state.setShowClusterDetails)
  const setShowDownloadKubeConfig = useStore((state: any) => state.setShowDownloadKubeConfig)

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
