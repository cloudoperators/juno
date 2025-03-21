/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect, beforeEach } from "vitest"
import { create } from "zustand"
import createGlobalsSlice from "./createGlobalsSlice"
import constants from "../../components/shared/constants"

describe("createGlobalsSlice", () => {
  let useStore: any
  let initialState: any

  beforeEach(() => {
    // @ts-expect-error TS(7006): Parameter 'set' implicitly has an 'any' type.
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
        ComponentInstancesOfService: { queryOptions: { first: 8 } },
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
    const serviceId = "service-123"
    const urlState = useStore.getState().globals.actions.syncDetailsWithURL(serviceId, null, constants.PANEL_SERVICE)
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_SERVICE,
      [constants.SERVICE_NAME]: serviceId,
    })
  })

  it("should sync details with URL correctly for issue", () => {
    const issueId = "issue-456"
    const urlState = useStore.getState().globals.actions.syncDetailsWithURL(null, issueId, constants.PANEL_ISSUE)
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_ISSUE,
      [constants.ISSUE_ID]: issueId,
    })
  })

  it("should handle clearing details for URL correctly when no panel is open", () => {
    const urlState = useStore.getState().globals.actions.syncDetailsWithURL(undefined, undefined, undefined)
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: undefined,
      [constants.SERVICE_NAME]: undefined,
      [constants.ISSUE_ID]: undefined,
    })
  })
})
