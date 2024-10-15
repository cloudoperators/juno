/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { renderHook, act } from "@testing-library/react"
import {
  StoreProvider,
  useGlobalsEmbedded,
  useGlobalsApiEndpoint,
  useGlobalsShowPanel,
  useGlobalsActiveView,
  useGlobalsActions,
  useGlobalsQueryClientFnReady,
  useGlobalsShowServiceDetail,
  useGlobalsShowIssueDetail,
  useGlobalsQueryOptions,
} from "../../components/StoreProvider"
import constants from "../../components/shared/constants"

describe("createGlobalsSlice", () => {
  const mockOptions = {
    apiEndpoint: "https://api.com", // Mock apiEndpoint
  }

  const wrapper = ({ children }) => <StoreProvider options={mockOptions}>{children}</StoreProvider>

  it("should initialize with correct default values", () => {
    const { result } = renderHook(
      () => ({
        embedded: useGlobalsEmbedded(),
        apiEndpoint: useGlobalsApiEndpoint(),
        queryClientFnReady: useGlobalsQueryClientFnReady(),
        activeView: useGlobalsActiveView(),
        showPanel: useGlobalsShowPanel(),
        showServiceDetail: useGlobalsShowServiceDetail(),
        showIssueDetail: useGlobalsShowIssueDetail(),
        views: {
          Services: useGlobalsQueryOptions("Services"),
          IssueMatches: useGlobalsQueryOptions("IssueMatches"),
          Components: useGlobalsQueryOptions("Components"),
        },
      }),
      { wrapper }
    )

    expect(result.current).toEqual({
      embedded: false,
      apiEndpoint: "https://api.com",
      queryClientFnReady: false,
      activeView: "Services",
      showPanel: constants.PANEL_NONE,
      showServiceDetail: null,
      showIssueDetail: null,
      views: {
        Services: { first: 20 },
        IssueMatches: { first: 20 },
        Components: { first: 20 },
      },
    })
  })

  it("should update queryClientFnReady", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        queryClientFnReady: useGlobalsQueryClientFnReady(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setQueryClientFnReady(true)
    })

    expect(result.current.queryClientFnReady).toBe(true)
  })

  it("should update query options for a specific view", () => {
    const newOptions = { first: 30, filter: "test" }
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        queryOptions: useGlobalsQueryOptions("Services"),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setQueryOptions("Services", newOptions)
    })

    expect(result.current.queryOptions).toEqual(newOptions)
  })

  it("should update embedded state", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        embedded: useGlobalsEmbedded(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setEmbedded(true)
    })

    expect(result.current.embedded).toBe(true)
  })

  it("should update apiEndpoint", () => {
    const newEndpoint = "https://newapi.com"
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        apiEndpoint: useGlobalsApiEndpoint(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setApiEndpoint(newEndpoint)
    })

    expect(result.current.apiEndpoint).toBe(newEndpoint)
  })

  it("should update activeView", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        activeView: useGlobalsActiveView(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setActiveView("IssueMatches")
    })

    expect(result.current.activeView).toBe("IssueMatches")
  })

  it("should update showPanel", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showPanel: useGlobalsShowPanel(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setShowPanel(constants.PANEL_SERVICE)
    })

    expect(result.current.showPanel).toBe(constants.PANEL_SERVICE)
  })

  it("should update showServiceDetail", () => {
    const serviceId = "service-123"
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showServiceDetail: useGlobalsShowServiceDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setShowServiceDetail(serviceId)
    })

    expect(result.current.showServiceDetail).toBe(serviceId)
  })

  it("should update showIssueDetail", () => {
    const issueName = "issue-456"
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showIssueDetail: useGlobalsShowIssueDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setShowIssueDetail(issueName)
    })

    expect(result.current.showIssueDetail).toBe(issueName)
  })

  it("should set service detail for deep linking", () => {
    const serviceId = "service-789"
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showPanel: useGlobalsShowPanel(),
        showServiceDetail: useGlobalsShowServiceDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setServiceDetail(serviceId)
    })

    expect(result.current.showPanel).toBe(constants.PANEL_SERVICE)
    expect(result.current.showServiceDetail).toBe(serviceId)
  })

  it("should set issue detail for deep linking", () => {
    const issueId = "issue-101"
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showPanel: useGlobalsShowPanel(),
        showIssueDetail: useGlobalsShowIssueDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setIssueDetail(issueId)
    })

    expect(result.current.showPanel).toBe(constants.PANEL_ISSUE)
    expect(result.current.showIssueDetail).toBe(issueId)
  })

  it("should sync details with URL correctly for service", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showPanel: useGlobalsShowPanel(),
        showServiceDetail: useGlobalsShowServiceDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setServiceDetail("service-123")
    })

    const urlState = result.current.actions.syncDetailsWithURL()
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_SERVICE,
      [constants.SERVICE_NAME]: "service-123",
    })
  })

  it("should sync details with URL correctly for issue", () => {
    const { result } = renderHook(
      () => ({
        actions: useGlobalsActions(),
        showPanel: useGlobalsShowPanel(),
        showIssueDetail: useGlobalsShowIssueDetail(),
      }),
      { wrapper }
    )

    act(() => {
      result.current.actions.setIssueDetail("issue-456")
    })

    const urlState = result.current.actions.syncDetailsWithURL()
    expect(urlState).toEqual({
      [constants.DETAILS_FOR]: constants.PANEL_ISSUE,
      [constants.ISSUE_ID]: "issue-456",
    })
  })
})
