/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act, waitFor } from "@testing-library/react"
import { useMessages, useActions, MessagesProvider } from "./index"

const originalConsoleError = global.console.error

beforeEach(() => {
  global.console.error = (...args) => {
    const propTypeFailures = [/Failed prop type/, /Warning: Received/]

    if (propTypeFailures.some((p) => p.test(args[0]))) {
      throw new Error(args[0])
    }

    originalConsoleError(...args)
  }
  // reset store by each test
  // no need to reset the store since each provider creates in each test a new store
})

describe("messages-provider", () => {
  it("return no messages on initialize", () => {
    const wrapper = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const { result } = renderHook(() => useMessages(), { wrapper })
    expect(result.current.length).toBe(0)
  })

  it("adds a message correctly", async () => {
    const wrapper = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const store = renderHook(() => ({ actions: useActions(), messages: useMessages() }), { wrapper })
    let actionResult = null
    await act(
      () =>
        (actionResult = store.result.current.actions.addMessage({
          variant: "error",
          text: "this is an error",
        }))
    )

    waitFor(() => {
      expect(actionResult).toMatch(/message-/) //addMessage return message id if success
      expect(store.result.current.messages.length).toBe(1)
      expect(store.result.current.messages[0].variant).toEqual("error")
      expect(store.result.current.messages[0].text).toEqual("this is an error")
    })
  })

  it("adds a message extra props (ex. dismissible) correctly", () => {
    const wrapper = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const store = renderHook(() => ({ actions: useActions(), messages: useMessages() }), { wrapper })

    let actionResult = null
    act(
      () =>
        (actionResult = store.result.current.actions.addMessage({
          variant: "error",
          text: "this is an error",
          dismissible: true,
        }))
    )

    waitFor(() => {
      expect(actionResult).toMatch(/message-/) //addMessage return message id if success
      expect(store.result.current.messages.length).toBe(1)
      expect(store.result.current.messages[0].variant).toEqual("error")
      expect(store.result.current.messages[0].text).toEqual("this is an error")
      expect(store.result.current.messages[0].dismissible).toBeTruthy()
    })
  })

  it("remove a message correctly", () => {
    const wrapper = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const store = renderHook(() => ({ actions: useActions(), messages: useMessages() }), { wrapper })
    act(() =>
      store.result.current.actions.addMessage({
        variant: "error",
        text: "this is an error",
      })
    )
    act(() =>
      store.result.current.actions.addMessage({
        variant: "info",
        text: "this is an info message",
      })
    )

    expect(store.result.current.messages.length).toBe(2)
    act(() => store.result.current.actions.removeMessage(store.result.current.messages[1].id))
    expect(store.result.current.messages.length).toBe(1)
  })

  it("reset messages store", () => {
    const wrapper = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const store = renderHook(() => ({ actions: useActions(), messages: useMessages() }), { wrapper })
    act(() =>
      store.result.current.actions.addMessage({
        variant: "error",
        text: "this is an error",
      })
    )
    act(() =>
      store.result.current.actions.addMessage({
        variant: "info",
        text: "this is an info message",
      })
    )

    expect(store.result.current.messages.length).toBe(2)
    act(() => store.result.current.actions.resetMessages())
    expect(store.result.current.messages.length).toBe(0)
  })

  it("creates different stores when using different providers", () => {
    const wrapper1 = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const wrapper2 = ({ children }) => <MessagesProvider>{children}</MessagesProvider>
    const store = renderHook(() => ({ actions: useActions(), messages: useMessages() }), {
      wrapper: wrapper1,
    })
    const store2 = renderHook(() => ({ actions: useActions(), messages: useMessages() }), {
      wrapper: wrapper2,
    })

    act(() =>
      store.result.current.actions.addMessage({
        variant: "error",
        text: "this is an error",
      })
    )

    expect(store.result.current.messages.length).toBe(1)
    expect(store2.result.current.messages.length).toBe(0)
  })
})
