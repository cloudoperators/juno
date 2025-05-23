/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Cluster } from "../../types/types"
import useStore from "./store"

import { act, renderHook } from "@testing-library/react"

let testCluster: Cluster = {
  apiVersion: "greenhouse.sap/v1alpha1",
  kind: "Cluster",
  metadata: {
    name: "test-cluster",
    namespace: "test-namespace",
  },
}

describe("store tests", () => {
  afterEach(() => {
    const { result } = renderHook(() => useStore())
    act(() => {
      result.current.clusters = []
    })
  })

  describe("Add Clusters", () => {
    test("Should successfully add clusters", () => {
      const { result } = renderHook(() => useStore())
      act(() => {
        result.current.modifyClusters([testCluster])
      })
      expect(result.current.clusters).toEqual([testCluster])
    })
    test("Should not duplicate cluster input", () => {
      const { result } = renderHook(() => useStore())
      act(() => {
        result.current.modifyClusters([testCluster])
        result.current.modifyClusters([testCluster])
      })
      expect(result.current.clusters).toHaveLength(1)
    })
  })

  describe("Modify Cluster", () => {
    const version = "greenhouse.sap/v1alpha1"

    test("check valid modification", () => {
      const { result } = renderHook(() => useStore())
      act(() => {
        result.current.modifyClusters([testCluster])
      })
      expect(result.current.clusters).toHaveLength(1)
      expect(result.current.clusters[0].metadata!.name!).toEqual("test-cluster")
      let updateTestCluster = { ...testCluster }

      act(() => {
        updateTestCluster.metadata!.name = "updated-name"
        result.current.modifyClusters([updateTestCluster])
      })

      expect(result.current.clusters[0].metadata!.name!).toEqual("updated-name")
      expect(result.current.clusters).toHaveLength(1)
    })
  })
  describe("Delete Cluster", () => {
    test("check valid deletion", () => {
      const { result } = renderHook(() => useStore())
      act(() => {
        result.current.modifyClusters([testCluster])
      })
      expect(result.current.clusters).toHaveLength(1)
      act(() => {
        result.current.deleteClusters([testCluster])
      })
      expect(result.current.clusters).toHaveLength(0)
    })
  })
})
