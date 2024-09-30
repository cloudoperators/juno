/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import useClient from "../plugindefinitions/hooks/useClient"
import React, { useEffect } from "react"
import { Cluster } from "../../../types/types"
import { Select, SelectOption } from "@cloudoperators/juno-ui-components"
import useStore from "../plugindefinitions/store"

interface ClusterSelectProps {
  id?: string
  label?: string
  placeholder?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ClusterSelect: React.FC<ClusterSelectProps> = (props: ClusterSelectProps) => {
  const { client } = useClient()
  const namespace = useStore((state) => state.namespace)
  const [availableClusters, setAvailableClusters] = React.useState<Cluster[]>([])

  useEffect(() => {
    if (!client || !namespace) return

    const fetchClusters = async () => {
      try {
        const res = await client.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${namespace}/clusters`, {})
        if (res.kind !== "ClusterList") {
          console.log("ERROR: Failed to get Clusters")
        } else {
          const newClusters = res.items as Cluster[]
          // Only update state if the new clusters are different
          if (JSON.stringify(newClusters) !== JSON.stringify(availableClusters)) {
            setAvailableClusters(newClusters)
          }
        }
      } catch (error) {
        console.error("Error fetching clusters:", error)
      }
    }

    fetchClusters()
  }, [client, namespace]) // Do not include availableClusters in the dependency array

  const handleChange = (value: string): void => {
    let e = {
      target: {
        value: value,
        id: props.id,
        type: "cluster-select",
      },
    } as React.ChangeEvent<HTMLInputElement>
    if (props.onChange) {
      props.onChange!(e)
    }
  }

  return (
    <Select
      id={props.id}
      placeholder={props.placeholder}
      label={props.label}
      defaultValue={props.defaultValue}
      onChange={handleChange}
    >
      {availableClusters.map((cluster) => {
        return <SelectOption key={cluster.metadata!.name} value={cluster.metadata!.name} />
      })}
    </Select>
  )
}

export default ClusterSelect
