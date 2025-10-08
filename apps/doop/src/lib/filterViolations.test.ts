/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { filterViolations } from "./filterViolations"

describe("filterViolations", () => {
  let originalViolationGroups: any[]
  let clusterIdentities: any[]

  beforeEach(() => {
    originalViolationGroups = [
      {
        id: "vg1",
        constraints: [
          {
            metadata: { severity: "debug", name: "cpu" },
            violation_groups: [{ pattern: { object_identity: { service: "alpha" } }, instances: [{ cluster: "c1" }] }],
          },
          {
            metadata: { severity: "critical", name: "memory" },
            violation_groups: [{ pattern: { object_identity: { service: "beta" } }, instances: [{ cluster: "c2" }] }],
          },
        ],
      },
      {
        id: "vg2",
        constraints: [
          {
            metadata: { severity: "warning", name: "disk" },
            violation_groups: [{ pattern: { object_identity: { service: "gamma" } }, instances: [{ cluster: "c1" }] }],
          },
        ],
      },
    ]

    clusterIdentities = [
      { cluster: "c1", region: "eu" },
      { cluster: "c2", region: "us" },
    ]
  })

  it("filters out debug severities when showDebugSeverities is false", () => {
    const inputCopy = JSON.parse(JSON.stringify(originalViolationGroups))
    const result = filterViolations({
      violationGroups: inputCopy,
      clusterIdentities,
      activeFilters: [],
      searchTerm: "",
      showDebugSeverities: false,
    })

    expect(result).toHaveLength(2)
    expect(result[0].constraints).toHaveLength(1)
    expect(result[0].constraints[0].metadata.severity).toBe("critical")

    // Check original input is not modified
    expect(inputCopy[0].constraints).toHaveLength(2)
  })

  it("filters by active filters (severity and check)", () => {
    const activeFilters = [
      { key: "violation_group:severity", value: "warning" },
      { key: "check:service", value: "gamma" },
    ]

    const inputCopy = JSON.parse(JSON.stringify(originalViolationGroups))
    const result = filterViolations({
      violationGroups: inputCopy,
      clusterIdentities,
      activeFilters,
      searchTerm: "",
      showDebugSeverities: true,
    })

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe("vg2")
    expect(result[0].constraints[0].metadata.name).toBe("disk")

    // Original input is intact
    expect(inputCopy[1].constraints[0].metadata.name).toBe("disk")
  })

  it("filters by search term", () => {
    const inputCopy = JSON.parse(JSON.stringify(originalViolationGroups))
    const result = filterViolations({
      violationGroups: inputCopy,
      clusterIdentities,
      activeFilters: [],
      searchTerm: "memory",
      showDebugSeverities: true,
    })

    expect(result).toHaveLength(1)
    expect(result[0].constraints[0].metadata.name).toBe("memory")

    // Original input unchanged
    expect(inputCopy[0].constraints).toHaveLength(2)
  })

  it("applies all filters together", () => {
    const activeFilters = [{ key: "check:service", value: "beta" }]
    const inputCopy = JSON.parse(JSON.stringify(originalViolationGroups))
    const result = filterViolations({
      violationGroups: inputCopy,
      clusterIdentities,
      activeFilters,
      searchTerm: "memory",
      showDebugSeverities: false,
    })

    expect(result).toHaveLength(1)
    expect(result[0].constraints[0].metadata.name).toBe("memory")

    // Original input unchanged !!!
    expect(inputCopy[0].constraints.map((c: any) => c.metadata.name)).toEqual(["cpu", "memory"])
  })

  it("returns empty array if nothing matches", () => {
    const result = filterViolations({
      violationGroups: JSON.parse(JSON.stringify(originalViolationGroups)),
      clusterIdentities,
      activeFilters: [{ key: "check:service", value: "nonexistent" }],
      searchTerm: "nope",
      showDebugSeverities: false,
    })

    expect(result).toEqual([])
  })
})
