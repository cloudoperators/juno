/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act } from "@testing-library/react"
import {
  useSilencesActions,
  useAlertsActions,
  useSilencesExcludedLabels,
  StoreProvider,
} from "../components/StoreProvider"
import { createFakeAlertStatustWith, createFakeAlertWith, createFakeSilenceWith } from "./fakeObjects"
import { countAlerts } from "./utils"

describe("getMappingSilences", () => {
  it("return all external silences referenced by silencedBy ", () => {
    const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
    const store = renderHook(
      () => ({
        alertActions: useAlertsActions(),
        silenceActions: useSilencesActions(),
      }),
      { wrapper }
    )

    // create an alert with custom status
    const status = createFakeAlertStatustWith({
      silencedBy: ["external"],
    })
    const alert = createFakeAlertWith({ status: status, fingerprint: "123" })
    // set the alert
    act(() =>
      store.result.current.alertActions.setAlertsData({
        items: [alert],
        counts: countAlerts([alert]),
      })
    )

    // create extern silences adding an id to the object
    const silence = createFakeSilenceWith({ id: "external" })

    act(() =>
      store.result.current.silenceActions.setSilences({
        items: [silence],
      })
    )

    // get mapping silences
    let mappingResult = null
    act(() => (mappingResult = store.result.current.silenceActions.getMappingSilences(alert)))
    expect(mappingResult!.length).toEqual(1)
    expect(mappingResult!.map((item: any) => item.id)).toContainEqual("external")
  })

  it("return silences also when alert silencedBy is just a string", () => {
    const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
    const store = renderHook(
      () => ({
        alertActions: useAlertsActions(),
        silenceActions: useSilencesActions(),
      }),
      { wrapper }
    )

    // create an alert
    const status = createFakeAlertStatustWith({ silencedBy: "external" })
    const alert = createFakeAlertWith({ status: status, fingerprint: "123" })
    // set the alert
    act(() =>
      store.result.current.alertActions.setAlertsData({
        items: [alert],
        counts: countAlerts([alert]),
      })
    )

    // create extern silences adding an id to the object
    const silence = createFakeSilenceWith({ id: "external" })

    act(() =>
      store.result.current.silenceActions.setSilences({
        items: [silence],
      })
    )

    // get mapping silences
    let mappingResult = null
    act(() => (mappingResult = store.result.current.silenceActions.getMappingSilences(alert)))
    expect(mappingResult!.length).toEqual(1)
    expect(mappingResult!.map((item: any) => item.id)).toContainEqual("external")
  })
})

describe("getExpiredSilences", () => {
  it("returns all silences which are expired matching the alert labels but omitting the excludeLabels", () => {
    const props = {
      silenceExcludedLabels: ["pod"],
    }

    const wrapper = ({ children }: any) => <StoreProvider options={props}>{children}</StoreProvider>

    const store = renderHook(
      () => ({
        alertActions: useAlertsActions(),
        silenceActions: useSilencesActions(),
      }),
      { wrapper }
    )

    // create an alert with custom status
    const alert = createFakeAlertWith({
      fingerprint: "123",
      labels: {
        severity: "critical",
        support_group: "containers",
        service: "automation",
        pod: "test",
      },
    })
    // set the alert
    act(() =>
      store.result.current.alertActions.setAlertsData({
        items: [alert],
        counts: countAlerts([alert]),
      })
    )
    // create external silences with different labels (service compute)
    const silence = createFakeSilenceWith({
      id: "test1",
      status: {
        state: "expired",
      },
      matchers: [
        { name: "severity", value: "critical", isRegex: false },
        { name: "support_group", value: "compute", isRegex: false },
        { name: "service", value: "compute", isRegex: false },
      ],
    })
    // create an external silences with matching labels
    const silence2 = createFakeSilenceWith({
      id: "test2",
      status: {
        state: "expired",
      },
      matchers: [
        { name: "severity", value: "critical", isRegex: false },
        { name: "support_group", value: "containers", isRegex: false },
        { name: "service", value: "automation", isRegex: false },
      ],
    })
    // create an external silences with less labels but matching
    const silence3 = createFakeSilenceWith({
      id: "test3",
      status: {
        state: "expired",
      },
      matchers: [
        { name: "severity", value: "info", isRegex: false },
        { name: "support_group", value: "containers", isRegex: false },
      ],
    })
    act(() =>
      store.result.current.silenceActions.setSilences({
        items: [silence, silence2, silence3],
      })
    )
    // get mapping silences
    let expResult = null
    act(() => (expResult = store.result.current.silenceActions.getExpiredSilences(alert)))
    expect(expResult!.length).toEqual(1)
    expect(expResult![0].id).toEqual("test2")
  })
})

describe("getLatestMappingSilence", () => {
  it("returns the silence with the latest endsAt timestamp ", () => {
    const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
    const store = renderHook(
      () => ({
        alertActions: useAlertsActions(),
        silenceActions: useSilencesActions(),
      }),
      { wrapper }
    )

    // create an alert with custom status
    const status = createFakeAlertStatustWith({
      silencedBy: ["external", "external2"],
    })
    const alert = createFakeAlertWith({ status: status, fingerprint: "123" })
    // set the alert
    act(() =>
      store.result.current.alertActions.setAlertsData({
        items: [alert],
        counts: countAlerts([alert]),
      })
    )
    // create extern silences adding an id to the object
    const silence = createFakeSilenceWith({
      id: "external",
      endsAt: "2023-06-21T15:17:28.327Z",
    })
    const silence2 = createFakeSilenceWith({
      id: "external2",
      endsAt: "2023-06-21T20:18:28.327Z",
    })
    act(() =>
      store.result.current.silenceActions.setSilences({
        items: [silence, silence2],
      })
    )

    // get mapping silences
    let mappingResult = null
    act(() => (mappingResult = store.result.current.silenceActions.getLatestMappingSilence(alert)))
    expect(mappingResult!.id).toEqual("external2")
  })
})

describe("setExcludedLabels", () => {
  it("return empty array as default", () => {
    const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
    const store = renderHook(
      () => ({
        actions: useSilencesActions(),
        excludedLabels: useSilencesExcludedLabels(),
      }),
      { wrapper }
    )
    expect(store.result.current.excludedLabels).toEqual([])
  })

  it("accepts array of strings containing the labels to use", () => {
    const props = {
      silenceExcludedLabels: ["pod", "pod_name", "instance"],
    }

    const wrapper = ({ children }: any) => <StoreProvider options={props}>{children}</StoreProvider>

    const store = renderHook(
      () => ({
        actions: useSilencesActions(),
        excludedLabels: useSilencesExcludedLabels(),
      }),
      { wrapper }
    )

    expect(store.result.current.excludedLabels).toEqual(["pod", "pod_name", "instance"])
  })

  it("warn the user if labels are different then an array of strings", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {})
    const props = {
      silenceExcludedLabels: "pod,pod_name,instance",
    }

    const wrapper = ({ children }: any) => <StoreProvider options={props}>{children}</StoreProvider>
    renderHook(
      () => ({
        actions: useSilencesActions(),
        excludedLabels: useSilencesExcludedLabels(),
      }),
      { wrapper }
    )

    expect(spy).toHaveBeenCalledTimes(1)
    expect(spy).toHaveBeenCalledWith("[supernova]::validateExcludedLabels: labels object is not an array of strings")
    spy.mockRestore()
  })
})
