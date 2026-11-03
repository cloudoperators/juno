/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AdminRoute } from "./adminRoutes"

/**
 * Tracks which admin tabs have been visited this session.
 * Stored at module level so it survives component unmounts (e.g. navigating away to Compliance).
 * Used by route beforeLoad hooks to apply default filters only on the first visit to a tab,
 * preserving the user's explicit filter changes (including clearing all filters) on return.
 */
const visitedAdminTabs = new Set<AdminRoute>()

export const markAdminTabVisited = (path: AdminRoute) => visitedAdminTabs.add(path)

export const hasAdminTabBeenVisited = (path: AdminRoute) => visitedAdminTabs.has(path)

export const resetAdminTabState = () => visitedAdminTabs.clear()
