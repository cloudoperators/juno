/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"

import { renderHook } from "@testing-library/react"
import { AuthProvider, useAuth } from "./AuthProvider"
import * as sessions from "@cloudoperators/juno-oauth"

describe("AuthProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // @ts-expect-error TS(2790): The operand of a 'delete' operator must be optiona... Remove this comment to see the full error message
    delete window.location
    // @ts-expect-error TS(2322): Type 'URL' is not assignable to type '(string | Lo... Remove this comment to see the full error message
    window.location = new URL("https://example.com")
  })

  describe("initializes the oidc session", () => {
    it("initializes default the oidc session but return error because no issuerUrl or clientId provided", () => {
      const wrapper = ({ children }: any) => <AuthProvider options={{}}>{children}</AuthProvider>
      const { result } = renderHook(() => useAuth(), { wrapper })
      expect(result.current.loggedIn).toBe(false)
      expect(result.current.isDemoMode).toBe(false)
      expect(result.current.error).not.toBe(null)
    })
  })

  describe("initializes the mock session", () => {
    beforeEach(() => {
      vi.restoreAllMocks()
    })

    it("initializes mocked auth session when mockAuth is enabled as boolean", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})
      const wrapper = ({ children }: any) => <AuthProvider options={{ mockAuth: true }}>{children}</AuthProvider>

      const { result } = renderHook(() => useAuth(), { wrapper })
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      console.log(result.current.data.refreshToken)
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(replaceStateSpy).toHaveBeenCalledTimes(1)
    })

    it("initializes mocked auth session when mockAuth is enabled as boolean string", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})
      const wrapper = ({ children }: any) => <AuthProvider options={{ mockAuth: "true" }}>{children}</AuthProvider>

      const { result } = renderHook(() => useAuth(), { wrapper })
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      console.log(result.current.data.refreshToken)
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(replaceStateSpy).toHaveBeenCalledTimes(1)
    })

    it("initializes mocked auth session when mockAuth is a JSON object", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})

      const mockAuthData = {
        groups: ["organization:miau", "team:containers"],
      }

      const wrapper = ({ children }: any) => (
        <AuthProvider options={{ mockAuth: mockAuthData }}>{children}</AuthProvider>
      )

      const { result } = renderHook(() => useAuth(), { wrapper })

      expect(replaceStateSpy).toHaveBeenCalledTimes(1)

      const expectedUrl = new URL(window.location.href)
      expectedUrl.searchParams.set("org", "miau")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.refreshToken).toEqual("MOCK")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.parsed.groups).toEqual(mockAuthData.groups)
    })

    it("initializes mocked auth session when mockAuth is a JSON string", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})

      const mockAuthData = {
        groups: ["organization:miau", "team:containers"],
      }
      const mockAuthDataString = JSON.stringify(mockAuthData)

      const wrapper = ({ children }: any) => (
        <AuthProvider options={{ mockAuth: mockAuthDataString }}>{children}</AuthProvider>
      )

      const { result } = renderHook(() => useAuth(), { wrapper })

      expect(replaceStateSpy).toHaveBeenCalledTimes(1)

      const expectedUrl = new URL(window.location.href)
      expectedUrl.searchParams.set("org", "miau")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.refreshToken).toEqual("MOCK")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.parsed.groups).toEqual(mockAuthData.groups)
    })

    it("preserves case in JSON string mockAuth data", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})

      // Test with mixed-case data that should NOT be lowercased
      const mockAuthData = {
        email: "Jane.Doe@Example.com",
        name: "Jane Doe",
        groups: ["organization:TestOrg", "team:DevTeam"],
      }
      const mockAuthDataString = JSON.stringify(mockAuthData)

      const wrapper = ({ children }: any) => (
        <AuthProvider options={{ mockAuth: mockAuthDataString }}>{children}</AuthProvider>
      )

      const { result } = renderHook(() => useAuth(), { wrapper })

      expect(replaceStateSpy).toHaveBeenCalledTimes(1)
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.raw.email).toEqual("Jane.Doe@Example.com")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.raw.name).toEqual("Jane Doe")
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      expect(result.current.data.raw.groups).toContain("organization:TestOrg")
    })

    it("rejects invalid mockAuth values (number, array, etc)", () => {
      const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

      // Test with number (invalid)
      const wrapper1 = ({ children }: any) => <AuthProvider options={{ mockAuth: 123 }}>{children}</AuthProvider>
      const { result: result1 } = renderHook(() => useAuth(), { wrapper: wrapper1 })
      expect(result1.current.loggedIn).toBe(false)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("Invalid mockAuth value"),
        123
      )

      consoleWarnSpy.mockClear()

      // Test with array (invalid)
      const wrapper2 = ({ children }: any) => <AuthProvider options={{ mockAuth: [1, 2, 3] }}>{children}</AuthProvider>
      const { result: result2 } = renderHook(() => useAuth(), { wrapper: wrapper2 })
      expect(result2.current.loggedIn).toBe(false)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining("Invalid mockAuth value"),
        [1, 2, 3]
      )

      consoleWarnSpy.mockRestore()
    })
  })

  describe("initializes demo auth session", () => {
    it("initializes demo auth session when demoOrg matches org in URL as domain", () => {
      const demoOrg = "demo123"
      // window.location = new URL(`https://example.com?org=${demoOrg}`)

      const tokenSession = vi.fn()
      vi.spyOn(sessions, "tokenSession").mockImplementation(tokenSession)

      // set the URL to a demo org to trigger the demo auth session
      // @ts-expect-error TS(2790): The operand of a 'delete' operator must be optiona... Remove this comment to see the full error message
      delete window.location
      // @ts-expect-error TS(2322): Type 'URL' is not assignable to type '(string | Lo... Remove this comment to see the full error message
      window.location = new URL(`https://${demoOrg}.dashboard.example.com`)

      const wrapper = ({ children }: any) => (
        <AuthProvider options={{ demoOrg: demoOrg, demoUserToken: "demoToken" }}>{children}</AuthProvider>
      )

      renderHook(() => useAuth(), { wrapper })

      expect(tokenSession).toHaveBeenCalledWith(
        expect.objectContaining({
          token: "demoToken",
          options: expect.objectContaining({
            groups: [`organization:${demoOrg}`],
          }),
        })
      )
    })

    it("initializes demo auth session when demoOrg matches org in URL pathname", () => {
      const demoOrg = "demoArturo"

      const tokenSession = vi.fn()
      vi.spyOn(sessions, "tokenSession").mockImplementation(tokenSession)

      // set the URL to a demo org to trigger the demo auth session
      // @ts-expect-error TS(2790): The operand of a 'delete' operator must be optiona... Remove this comment to see the full error message
      delete window.location
      // @ts-expect-error TS(2322): Type 'URL' is not assignable to type '(string | Lo... Remove this comment to see the full error message
      window.location = new URL(`https://dashboard.example.com/${demoOrg}`)

      const wrapper = ({ children }: any) => (
        <AuthProvider options={{ demoOrg: demoOrg, demoUserToken: "demoToken" }}>{children}</AuthProvider>
      )

      renderHook(() => useAuth(), { wrapper })

      expect(tokenSession).toHaveBeenCalledWith(
        expect.objectContaining({
          token: "demoToken",
          options: expect.objectContaining({
            groups: [`organization:${demoOrg}`],
          }),
        })
      )
    })
  })
})
