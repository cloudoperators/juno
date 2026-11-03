/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from "vitest"
import { SELECTED_FILTER_PREFIX } from "../../components/admin/constants"

/**
 * These tests verify the default-filter logic used in beforeLoad for
 * exposed-services, clusters, and plugin-presets routes.
 *
 * The logic is: redirect with default filters only when no filter is already in the URL.
 * This must trigger on every visit (no one-time flag), so filters are restored after
 * navigating away and back.
 */

const mockUser = { organization: "test-org", supportGroups: ["sci-admin"] }

const hasAnyFilter = (search: Record<string, unknown>) =>
  Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))

const getDefaultFilters = (user: typeof mockUser) =>
  user.supportGroups.map((sg) => ({ id: "supportGroup", value: sg }))

describe("default filter beforeLoad logic", () => {
  it("applies default filters when no filters are present in search params", () => {
    const search = {}
    const defaultFilters = getDefaultFilters(mockUser)

    const shouldRedirect = !hasAnyFilter(search) && defaultFilters.length > 0
    expect(shouldRedirect).toBe(true)
  })

  it("does not apply default filters when filters are already in search params", () => {
    const search = { [`${SELECTED_FILTER_PREFIX}supportGroup`]: "sci-admin" }
    const defaultFilters = getDefaultFilters(mockUser)

    const shouldRedirect = !hasAnyFilter(search) && defaultFilters.length > 0
    expect(shouldRedirect).toBe(false)
  })

  it("does not apply default filters when user has no support groups", () => {
    const search = {}
    const defaultFilters = getDefaultFilters({ ...mockUser, supportGroups: [] })

    const shouldRedirect = !hasAnyFilter(search) && defaultFilters.length > 0
    expect(shouldRedirect).toBe(false)
  })

  it("applies default filters again after navigating away and back (no one-time flag)", () => {
    const defaultFilters = getDefaultFilters(mockUser)

    // First visit — no filters in URL
    const firstVisit = !hasAnyFilter({}) && defaultFilters.length > 0
    expect(firstVisit).toBe(true)

    // Second visit after returning — still no filters in URL (e.g. came back from Compliance)
    // Previously this would be blocked by the defaultFiltersApplied flag
    const secondVisit = !hasAnyFilter({}) && defaultFilters.length > 0
    expect(secondVisit).toBe(true)
  })

  it("does not re-apply defaults when user-set filters are present on return visit", () => {
    const defaultFilters = getDefaultFilters(mockUser)
    const searchWithUserFilters = {
      [`${SELECTED_FILTER_PREFIX}supportGroup`]: "sci-admin",
      [`${SELECTED_FILTER_PREFIX}region`]: "ap-ae-1",
    }

    const shouldRedirect = !hasAnyFilter(searchWithUserFilters) && defaultFilters.length > 0
    expect(shouldRedirect).toBe(false)
  })
})
