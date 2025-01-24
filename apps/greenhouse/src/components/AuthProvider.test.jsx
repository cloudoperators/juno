import React from "react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { renderHook } from "@testing-library/react"
import { AuthProvider, useAuth } from "./AuthProvider"
import * as sessions from "@cloudoperators/juno-oauth"

describe("AuthProvider", () => {
  beforeEach(() => {
    vi.clearAllMocks()
    delete window.location
    window.location = new URL("https://example.com")
  })

  describe("initializes the oidc session", () => {
    it("initializes default the oidc session but return error because no issuerUrl or clientId provided", () => {
      const wrapper = ({ children }) => <AuthProvider options={{}}>{children}</AuthProvider>
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
      const wrapper = ({ children }) => <AuthProvider options={{ mockAuth: true }}>{children}</AuthProvider>

      const { result } = renderHook(() => useAuth(), { wrapper })

      console.log(result.current.data.refreshToken)
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(replaceStateSpy).toHaveBeenCalledTimes(1)
    })

    it("initializes mocked auth session when mockAuth is enabled as boolean string", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})
      const wrapper = ({ children }) => <AuthProvider options={{ mockAuth: "true" }}>{children}</AuthProvider>

      const { result } = renderHook(() => useAuth(), { wrapper })

      console.log(result.current.data.refreshToken)
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(replaceStateSpy).toHaveBeenCalledTimes(1)
    })

    it("initializes mocked auth session when mockAuth is a JSON object", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})

      const mockAuthData = {
        groups: ["organization:miau", "team:containers"],
      }

      const wrapper = ({ children }) => <AuthProvider options={{ mockAuth: mockAuthData }}>{children}</AuthProvider>

      const { result } = renderHook(() => useAuth(), { wrapper })

      expect(replaceStateSpy).toHaveBeenCalledTimes(1)

      const expectedUrl = new URL(window.location.href)
      expectedUrl.searchParams.set("org", "miau")
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(result.current.data.parsed.groups).toEqual(mockAuthData.groups)
    })

    it("initializes mocked auth session when mockAuth is a JSON string", () => {
      const replaceStateSpy = vi.spyOn(window.history, "replaceState").mockImplementation(() => {})

      const mockAuthData = {
        groups: ["organization:miau", "team:containers"],
      }
      const mockAuthDataString = JSON.stringify(mockAuthData)

      const wrapper = ({ children }) => (
        <AuthProvider options={{ mockAuth: mockAuthDataString }}>{children}</AuthProvider>
      )

      const { result } = renderHook(() => useAuth(), { wrapper })

      expect(replaceStateSpy).toHaveBeenCalledTimes(1)

      const expectedUrl = new URL(window.location.href)
      expectedUrl.searchParams.set("org", "miau")
      expect(result.current.data.refreshToken).toEqual("MOCK")
      expect(result.current.data.parsed.groups).toEqual(mockAuthData.groups)
    })
  })

  describe("initializes demo auth session", () => {
    it("initializes demo auth session when demoOrg matches org in URL as domain", () => {
      const demoOrg = "demo123"
      // window.location = new URL(`https://example.com?org=${demoOrg}`)

      const tokenSession = vi.fn()
      vi.spyOn(sessions, "tokenSession").mockImplementation(tokenSession)

      // set the URL to a demo org to trigger the demo auth session
      delete window.location
      window.location = new URL(`https://${demoOrg}.dashboard.example.com`)

      const wrapper = ({ children }) => (
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

    it("initializes demo auth session when demoOrg matches org in URL as query param", () => {
      const demoOrg = "demoArturo"

      const tokenSession = vi.fn()
      vi.spyOn(sessions, "tokenSession").mockImplementation(tokenSession)

      // set the URL to a demo org to trigger the demo auth session
      delete window.location
      window.location = new URL(`https://dashboard.example.com/?org=${demoOrg}`)

      const wrapper = ({ children }) => (
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
