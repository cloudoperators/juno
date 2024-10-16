/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, beforeEach } from "vitest"
import { create } from "zustand"
import createGlobalsSlice from "./createGlobalsSlice"
import constants from "../../components/shared/constants"

describe("createGlobalsSlice", () => {
  let useStore
  let initialState

  beforeEach(() => {
    useStore = create((set, get) => ({
      ...createGlobalsSlice(set, get, { apiEndpoint: "https://api.example.com" }),
    }))
    initialState = useStore.getState().globals
  })

  it("should initialize with correct default values", () => {
    expect(initialState).toEqual({
      embedded: false,
      apiEndpoint: "https://api.example.com",
      isUrlStateSetup: false,
      queryClientFnReady: false,
      activeView: "Services",
      showPanel: constants.PANEL_NONE,
      showServiceDetail: null,
      showIssueDetail: null,
      views: {
        Services: { queryOptions: { first: 20 } },
        IssueMatches: { queryOptions: { first: 20 } },
        Components: { queryOptions: { first: 20 } },
      },
      actions: expect.any(Object),
    })
  })

  it("should update queryClientFnReady", () => {
    useStore.getState().globals.actions.setQueryClientFnReady(true)
    expect(useStore.getState().globals.queryClientFnReady).toBe(true)
  })

  it("should update query options for a specific view", () => {
    const newOptions = { first: 30, filter: "test" }
    useStore.getState().globals.actions.setQueryOptions("Services", newOptions)
    expect(useStore.getState().globals.views.Services.queryOptions).toEqual(newOptions)
  })

  it("should update embedded state", () => {
    useStore.getState().globals.actions.setEmbedded(true)
    expect(useStore.getState().globals.embedded).toBe(true)
  })

  it("should update apiEndpoint", () => {
    const newEndpoint = "https://newapi.example.com"
    useStore.getState().globals.actions.setApiEndpoint(newEndpoint)
    expect(useStore.getState().globals.apiEndpoint).toBe(newEndpoint)
  })

  it("should update activeView", () => {
    useStore.getState().globals.actions.setActiveView("IssueMatches")
    expect(useStore.getState().globals.activeView).toBe("IssueMatches")
  })

  it("should update showPanel", () => {
    useStore.getState().globals.actions.setShowPanel(constants.PANEL_SERVICE)
    expect(useStore.getState().globals.showPanel).toBe(constants.PANEL_SERVICE)
  })

  it("should update showServiceDetail", () => {
    const serviceId = "service-123"
    useStore.getState().globals.actions.setShowServiceDetail(serviceId)
    expect(useStore.getState().globals.showServiceDetail).toBe(serviceId)
  })

  it("should update showIssueDetail", () => {
    const issueName = "issue-456"
    useStore.getState().globals.actions.setShowIssueDetail(issueName)
    expect(useStore.getState().globals.showIssueDetail).toBe(issueName)
  })

  it("should set service detail for deep linking", () => {
    const serviceId = "service-789"
    useStore.getState().globals.actions.setServiceDetail(serviceId)
    expect(useStore.getState().globals.showPanel).toBe(constants.PANEL_SERVICE)
    expect(useStore.getState().globals.showServiceDetail).toBe(serviceId)
  })

  it("should set issue detail for deep linking", () => {
    const issueId = "issue-101"
    useStore.getState().globals.actions.setIssueDetail(issueId)
    expect(useStore.getState().globals.showPanel).toBe(constants.PANEL_ISSUE)
    expect(useStore.getState().globals.showIssueDetail).toBe(issueId)
  })

  it("should sync details with URL correctly for service", () => {
    useStore.getState().globals.actions.setServiceDetail("service-123")
    const urlState = useStore.getState().globals.actions.syncDetailsWithURL()
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_SERVICE,
      [constants.SERVICE_NAME]: "service-123",
    })
  })

  it("should sync details with URL correctly for issue", () => {
    useStore.getState().globals.actions.setIssueDetail("issue-456")
    const urlState = useStore.getState().globals.actions.syncDetailsWithURL()
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_ISSUE,
      [constants.ISSUE_ID]: "issue-456",
    })
  })
})
