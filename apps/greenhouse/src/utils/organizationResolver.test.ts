/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, expect } from "vitest"
import {
  resolveOrganization,
  computeRouterBasePath,
  extractOrganizationName,
  getRouterBasePath,
} from "./organizationResolver"

describe("organizationResolver", () => {
  describe("resolveOrganization", () => {
    it("should extract organization from subdomain", () => {
      const result = resolveOrganization({
        url: new URL("https://demo.dashboard.cloud.sap/admin"),
      })

      expect(result).toEqual({
        name: "demo",
        source: "subdomain",
        staticBasePath: "",
      })
    })

    it("should extract organization from path", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/demo/admin"),
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "",
      })
    })

    it("should extract organization from path after stripping static basePath", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/greenhouse/demo/admin"),
        staticBasePath: "/greenhouse",
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "/greenhouse",
      })
    })

    it("should handle static basePath without leading slash", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/greenhouse/demo/admin"),
        staticBasePath: "greenhouse",
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "/greenhouse",
      })
    })

    it("should extract organization from hash when enableHashedRouting is true", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000#/demo/admin"),
        enableHashedRouting: true,
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "",
      })
    })

    it("should extract organization from hash with static basePath", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/greenhouse#/demo/admin"),
        staticBasePath: "/greenhouse",
        enableHashedRouting: true,
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "/greenhouse",
      })
    })

    it("should extract organization from auth groups when not in URL", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/"),
        authGroups: ["organization:demo", "role:admin"],
      })

      expect(result).toEqual({
        name: "demo",
        source: "token",
        staticBasePath: "",
      })
    })

    it("should prioritize subdomain over path", () => {
      const result = resolveOrganization({
        url: new URL("https://prod.dashboard.cloud.sap/demo/admin"),
      })

      expect(result).toEqual({
        name: "prod",
        source: "subdomain",
        staticBasePath: "",
      })
    })

    it("should prioritize path over auth token", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/demo/admin"),
        authGroups: ["organization:prod", "role:admin"],
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "",
      })
    })

    it("should return none when no organization found", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/"),
      })

      expect(result).toEqual({
        name: undefined,
        source: "none",
        staticBasePath: "",
      })
    })
  })

  describe("computeRouterBasePath", () => {
    it("should return / when org is in subdomain", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "subdomain",
        staticBasePath: "",
      })

      expect(result).toBe("/")
    })

    it("should return staticBasePath when org is in subdomain with staticBasePath", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "subdomain",
        staticBasePath: "/greenhouse",
      })

      expect(result).toBe("/greenhouse")
    })

    it("should return /orgName when org is from path", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "path",
        staticBasePath: "",
      })

      expect(result).toBe("/demo")
    })

    it("should return staticBasePath/orgName when org is from path with staticBasePath", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "path",
        staticBasePath: "/greenhouse",
      })

      expect(result).toBe("/greenhouse/demo")
    })

    it("should return /orgName when org is from token", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "token",
        staticBasePath: "",
      })

      expect(result).toBe("/demo")
    })

    it("should return staticBasePath/orgName when org is from token with staticBasePath", () => {
      const result = computeRouterBasePath({
        name: "demo",
        source: "token",
        staticBasePath: "/greenhouse",
      })

      expect(result).toBe("/greenhouse/demo")
    })

    it("should return / when no org found", () => {
      const result = computeRouterBasePath({
        name: undefined,
        source: "none",
        staticBasePath: "",
      })

      expect(result).toBe("/")
    })

    it("should return staticBasePath when no org found but staticBasePath provided", () => {
      const result = computeRouterBasePath({
        name: undefined,
        source: "none",
        staticBasePath: "/greenhouse",
      })

      expect(result).toBe("/greenhouse")
    })
  })

  describe("getRouterBasePath (backward compatibility)", () => {
    it("should compute router basePath from auth groups", () => {
      const result = getRouterBasePath(["organization:demo", "role:admin"], undefined)
      expect(result).toBe("/demo")
    })

    it("should compute router basePath with static basePath", () => {
      const result = getRouterBasePath(["organization:demo", "role:admin"], "/greenhouse")
      expect(result).toBe("/greenhouse/demo")
    })

    it("should return / when no auth groups", () => {
      const result = getRouterBasePath(undefined, undefined)
      expect(result).toBe("/")
    })

    it("should return staticBasePath when no auth groups but staticBasePath provided", () => {
      const result = getRouterBasePath(undefined, "/greenhouse")
      expect(result).toBe("/greenhouse")
    })
  })

  describe("edge cases", () => {
    it("should handle trailing slashes in staticBasePath", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/greenhouse/demo/admin"),
        staticBasePath: "/greenhouse/",
      })

      expect(result.staticBasePath).toBe("/greenhouse")
      expect(result.name).toBe("demo")
    })

    it("should handle empty path", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/"),
        staticBasePath: "/greenhouse",
      })

      expect(result).toEqual({
        name: undefined,
        source: "none",
        staticBasePath: "/greenhouse",
      })
    })

    it("should handle root staticBasePath", () => {
      const result = resolveOrganization({
        url: new URL("http://localhost:3000/demo/admin"),
        staticBasePath: "/",
      })

      expect(result).toEqual({
        name: "demo",
        source: "path",
        staticBasePath: "",
      })
    })
  })
})
