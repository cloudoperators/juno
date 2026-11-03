/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, beforeEach } from "vitest"
import { SELECTED_FILTER_PREFIX } from "../../components/admin/constants"
import { hasAdminTabBeenVisited, markAdminTabVisited, resetAdminTabState } from "../../components/admin/adminTabState"
import { ADMIN_ROUTES } from "../../components/admin/adminRoutes"
import type { AdminRoute } from "../../components/admin/adminRoutes"

/**
 * These tests verify the default-filter logic used in beforeLoad for
 * exposed-services, clusters, and plugin-presets routes.
 *
 * The logic is:
 * - On the first visit to a tab: apply default filters if none are in the URL
 * - On return visits: skip (respect whatever the user left, including an explicitly cleared state)
 * The "first visit" is tracked via adminTabState, which survives component unmounts.
 */

const mockUser = { organization: "test-org", supportGroups: ["sci-admin"] }

const hasAnyFilter = (search: Record<string, unknown>) =>
  Object.keys(search).some((key) => key.startsWith(SELECTED_FILTER_PREFIX))

const getDefaultFilters = (user: typeof mockUser) => user.supportGroups.map((sg) => ({ id: "supportGroup", value: sg }))

const simulateBeforeLoad = (tab: AdminRoute, search: Record<string, unknown>, user: typeof mockUser) => {
  if (hasAdminTabBeenVisited(tab)) return "skip"
  markAdminTabVisited(tab)
  const defaultFilters = getDefaultFilters(user)
  if (!hasAnyFilter(search) && defaultFilters.length > 0) return "redirect"
  return "pass"
}

describe("default filter beforeLoad logic", () => {
  beforeEach(() => {
    resetAdminTabState()
  })

  it("applies default filters on first visit when no filters are present", () => {
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, mockUser)).toBe("redirect")
  })

  it("does not apply default filters on first visit when filters already in URL", () => {
    const search = { [`${SELECTED_FILTER_PREFIX}supportGroup`]: "sci-admin" }
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, search, mockUser)).toBe("pass")
  })

  it("does not apply default filters when user has no support groups", () => {
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, { ...mockUser, supportGroups: [] })).toBe("pass")
  })

  it("skips default filter logic on return visit, even with empty URL (user cleared filters)", () => {
    // First visit — applies defaults
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, mockUser)).toBe("redirect")
    // Return visit with no filters (user cleared them) — must NOT re-apply defaults
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, mockUser)).toBe("skip")
  })

  it("skips default filter logic on return visit when user-set filters are present", () => {
    const searchWithFilters = {
      [`${SELECTED_FILTER_PREFIX}supportGroup`]: "sci-admin",
      [`${SELECTED_FILTER_PREFIX}region`]: "ap-ae-1",
    }
    // First visit — already has filters, passes through
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, searchWithFilters, mockUser)).toBe("pass")
    // Return visit — skips entirely
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, searchWithFilters, mockUser)).toBe("skip")
  })

  it("tracks visited state independently per tab", () => {
    // Mark clusters visited
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, mockUser)).toBe("redirect")
    // Plugin presets is still unvisited — should still apply defaults
    expect(simulateBeforeLoad(ADMIN_ROUTES.PLUGIN_PRESETS, {}, mockUser)).toBe("redirect")
    // Both are now visited — both skip
    expect(simulateBeforeLoad(ADMIN_ROUTES.CLUSTERS, {}, mockUser)).toBe("skip")
    expect(simulateBeforeLoad(ADMIN_ROUTES.PLUGIN_PRESETS, {}, mockUser)).toBe("skip")
  })
})
