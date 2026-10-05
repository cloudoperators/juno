/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, expect, test } from "vitest"
import { TokenResponseSchema, OidcConfigSchema, RequestParamsSchema } from "../src/schemas"

describe("TokenResponseSchema", () => {
  test("should validate a valid token response", () => {
    const validResponse = {
      access_token: "abc123",
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: "refresh123",
      scope: "openid profile email",
      id_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    }

    expect(() => TokenResponseSchema.parse(validResponse)).not.toThrow()
    const result = TokenResponseSchema.parse(validResponse)
    expect(result.access_token).toBe("abc123")
    expect(result.token_type).toBe("Bearer")
  })

  test("should reject response missing access_token", () => {
    const invalidResponse = {
      token_type: "Bearer",
    }

    expect(() => TokenResponseSchema.parse(invalidResponse)).toThrow()
  })

  test("should reject response missing token_type", () => {
    const invalidResponse = {
      access_token: "abc123",
    }

    expect(() => TokenResponseSchema.parse(invalidResponse)).toThrow()
  })

  test("should reject response with wrong type for access_token", () => {
    const invalidResponse = {
      access_token: 12345, // should be string
      token_type: "Bearer",
    }

    expect(() => TokenResponseSchema.parse(invalidResponse)).toThrow()
  })

  test("should reject null response", () => {
    expect(() => TokenResponseSchema.parse(null)).toThrow()
  })

  test("should reject array response", () => {
    expect(() => TokenResponseSchema.parse([])).toThrow()
  })

  test("should reject primitive response", () => {
    expect(() => TokenResponseSchema.parse("invalid")).toThrow()
  })

  test("should accept response with additional fields", () => {
    const responseWithExtras = {
      access_token: "abc123",
      token_type: "Bearer",
      session_state: "xyz789", // Keycloak-specific
      not_before_policy: 0, // Keycloak-specific
      custom_claim: "value",
    }

    expect(() => TokenResponseSchema.parse(responseWithExtras)).not.toThrow()
    const result = TokenResponseSchema.parse(responseWithExtras)
    expect(result.session_state).toBe("xyz789")
  })

  test("should accept minimal valid response", () => {
    const minimalResponse = {
      access_token: "abc123",
      token_type: "Bearer",
    }

    expect(() => TokenResponseSchema.parse(minimalResponse)).not.toThrow()
  })
})

describe("OidcConfigSchema", () => {
  test("should validate a valid OIDC config", () => {
    const validConfig = {
      authorization_endpoint: "https://issuer.com/authorize",
      token_endpoint: "https://issuer.com/token",
      userinfo_endpoint: "https://issuer.com/userinfo",
      end_session_endpoint: "https://issuer.com/logout",
    }

    expect(() => OidcConfigSchema.parse(validConfig)).not.toThrow()
    const result = OidcConfigSchema.parse(validConfig)
    expect(result.authorization_endpoint).toBe("https://issuer.com/authorize")
  })

  test("should reject config missing authorization_endpoint", () => {
    const invalidConfig = {
      token_endpoint: "https://issuer.com/token",
    }

    expect(() => OidcConfigSchema.parse(invalidConfig)).toThrow()
  })

  test("should reject config missing token_endpoint", () => {
    const invalidConfig = {
      authorization_endpoint: "https://issuer.com/authorize",
    }

    expect(() => OidcConfigSchema.parse(invalidConfig)).toThrow()
  })

  test("should reject config with invalid URL format", () => {
    const invalidConfig = {
      authorization_endpoint: "not-a-url",
      token_endpoint: "https://issuer.com/token",
    }

    expect(() => OidcConfigSchema.parse(invalidConfig)).toThrow()
  })

  test("should reject null config", () => {
    expect(() => OidcConfigSchema.parse(null)).toThrow()
  })

  test("should reject array config", () => {
    expect(() => OidcConfigSchema.parse([])).toThrow()
  })

  test("should accept config with additional discovery fields", () => {
    const configWithExtras = {
      authorization_endpoint: "https://issuer.com/authorize",
      token_endpoint: "https://issuer.com/token",
      scopes_supported: ["openid", "profile", "email"],
      response_types_supported: ["code", "token"],
    }

    expect(() => OidcConfigSchema.parse(configWithExtras)).not.toThrow()
    const result = OidcConfigSchema.parse(configWithExtras)
    expect(result.scopes_supported).toEqual(["openid", "profile", "email"])
  })

  test("should accept minimal valid config", () => {
    const minimalConfig = {
      authorization_endpoint: "https://issuer.com/authorize",
      token_endpoint: "https://issuer.com/token",
    }

    expect(() => OidcConfigSchema.parse(minimalConfig)).not.toThrow()
  })
})

describe("RequestParamsSchema", () => {
  test("should validate a valid request params object", () => {
    const validParams = {
      prompt: "consent",
      max_age: "3600",
      display: "popup",
    }

    expect(() => RequestParamsSchema.parse(validParams)).not.toThrow()
    const result = RequestParamsSchema.parse(validParams)
    expect(result.prompt).toBe("consent")
  })

  test("should accept empty object", () => {
    expect(() => RequestParamsSchema.parse({})).not.toThrow()
  })

  test("should reject null", () => {
    expect(() => RequestParamsSchema.parse(null)).toThrow()
  })

  test("should reject array", () => {
    expect(() => RequestParamsSchema.parse([])).toThrow()
  })

  test("should reject primitive", () => {
    expect(() => RequestParamsSchema.parse("invalid")).toThrow()
  })

  test("should accept params with various value types", () => {
    const params = {
      string_param: "value",
      number_param: 123,
      boolean_param: true,
      null_param: null,
    }

    expect(() => RequestParamsSchema.parse(params)).not.toThrow()
  })
})
