/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Markup } from "interweave"

import { Container, Panel, PanelBody, Stack } from "@cloudoperators/juno-ui-components"
import React from "react"
import useStore from "../store"

const ClusterDetail: React.FC<any> = () => {
  const namespace = useStore((state: any) => state.namespace)
  const showOnBoardCluster = useStore((state: any) => state.showOnBoardCluster)
  const setShowOnBoardCluster = useStore((state: any) => state.setShowOnBoardCluster)

  const onPanelClose = () => {
    setShowOnBoardCluster(false)
  }

  const markup = `
  <p>Download the latest <i>greenhousectl</i> binary from <a target='_blank' href='https://github.com/cloudoperators/greenhouse/releases'>here</a>. </p>
  <p>Place a valid kubeconfig file for the cluster to be onboarded in <code>/path/to/kubeconfig</code> </p>
  <p>Execute the following command to onboard your cluster: <br><br>
  <code>greenhousectl cluster bootstrap --org ${namespace} --bootstrap-kubeconfig /path/to/kubeconfig</code> </p>
  <br>
  <p>For more information, visit <a target='blank' href='https://cloudoperators.github.io/greenhouse/docs/user-guides/cluster/onboarding/'>the docs</a> </p>
  `

  return (
    <Panel heading="How to onboard a cluster" opened={!!showOnBoardCluster} onClose={onPanelClose}>
      <PanelBody>
        <Container px={false} py>
          <Stack distribution="center" alignment="center" wrap={true}>
            <Markup content={markup} />
          </Stack>
        </Container>
      </PanelBody>
    </Panel>
  )
}

export default ClusterDetail
