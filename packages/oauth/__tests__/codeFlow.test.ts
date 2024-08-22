/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { describe, expect, test, vi } from "vitest"

import "./__utils__/globalsMock"
import { getOidcConfig } from "../src/oidcConfig"
import { buildRequestUrl, handleResponse, refreshToken } from "../src/codeFlow"
import { testIdToken, testTokenData } from "./__utils__/idTokenMock"
import config from "./__utils__/oidcConfigMock"
import * as oidcState from "../src/oidcState"

vi.mock("../src/oidcConfig.ts", async () => {
  const testConfig = await import("./__utils__/oidcConfigMock.ts")
  return {
    getOidcConfig: vi.fn().mockResolvedValue(testConfig.default),
  }
})

const mockIdTokenResponse = {
  ok: true,
  statusText: "OK",
  json: () => {
    return { id_token: testIdToken }
  },
} as any
global.fetch = vi.fn().mockResolvedValue(mockIdTokenResponse)

describe("buildRequestUrl", () => {
  test("should be a function", () => {
    expect(typeof buildRequestUrl).toEqual("function")
  })

  test("should return a promise", () => {
    expect(
      buildRequestUrl({
        issuerURL: "http://issuer.com",
        clientID: "12345",
        oidcState: {},
      }).then
    ).toBeDefined()
  })

  test("should build url for implicit flow", async () => {
    await buildRequestUrl({
      issuerURL: "http://issuer.com",
      clientID: "12345",
      oidcState: {
        nonce: "test",
        key: "123456",
        challenge: "12345",
        verifier: "12345",
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=code&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://dummy.com"
        )}&scope=openid+email+profile+groups+offline_access&state=123456&nonce=test&code_challenge=12345&code_challenge_method=S256`
      )
    })
  })

  test("include additional request params", async () => {
    await buildRequestUrl({
      issuerURL: "http://issuer.com",
      clientID: "12345",
      params: { origanization: "test", project: "test" },
      oidcState: {
        nonce: "test",
        key: "123456",
        challenge: "12345",
        verifier: "12345",
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=code&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://dummy.com"
        )}&scope=openid+email+profile+groups+offline_access&state=123456&nonce=test&code_challenge=12345&code_challenge_method=S256&origanization=test&project=test`
      )
    })
  })

  test("use given callbackURL", async () => {
    await buildRequestUrl({
      issuerURL: "http://issuer.com",
      clientID: "12345",
      callbackURL: "http://another-issuer.com",
      params: { origanization: "test", project: "test" },
      oidcState: {
        nonce: "test",
        key: "123456",
        challenge: "12345",
        verifier: "12345",
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=code&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://another-issuer.com"
        )}&scope=openid+email+profile+groups+offline_access&state=123456&nonce=test&code_challenge=12345&code_challenge_method=S256&origanization=test&project=test`
      )
    })
  })

  test("should use scope from config", async () => {
    const org_scopes_supported = config.scopes_supported
    config.scopes_supported = ["openid", "email"]

    await buildRequestUrl({
      issuerURL: "http://issuer.com",
      clientID: "12345",
      callbackURL: "http://another-issuer.com",
      params: { origanization: "test", project: "test" },
      oidcState: {
        nonce: "test",
        key: "123456",
        challenge: "12345",
        verifier: "12345",
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=code&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://another-issuer.com"
        )}&scope=openid+email&state=123456&nonce=test&code_challenge=12345&code_challenge_method=S256&origanization=test&project=test`
      )
      config.scopes_supported = org_scopes_supported
    })
  })
})

describe("handleResponse", () => {
  test("url does not contain code and error", async () => {
    oidcState.setSearchParams(new URLSearchParams(""))

    await expect(
      handleResponse({
        issuerURL: "http://issuer.com",
        clientID: "12345",
        oidcState: {},
      })
    ).rejects.toThrow("bad response, missing code param")
  })

  test("url contains error", async () => {
    oidcState.setSearchParams(new URLSearchParams("error=unsupported_response_type"))

    await expect(
      handleResponse({
        issuerURL: "http://issuer.com",
        clientID: "12345",
        oidcState: {},
      })
    ).rejects.toThrow("unsupported_response_type")
  })

  test("cliend_id is required", async () => {
    oidcState.setSearchParams(new URLSearchParams("code=test"))

    await expect(
      handleResponse({
        issuerURL: "http://issuer.com",
        oidcState: {},
      })
    ).rejects.toThrow("clientID is required")
  })

  describe("code is presented", () => {
    test("call getOidcConfig", async () => {
      oidcState.setSearchParams(new URLSearchParams("code=123456789"))

      await handleResponse({
        issuerURL: "http://issuer.com",
        clientID: "test",
        oidcState: {},
      })

      expect(getOidcConfig).toHaveBeenCalledWith("http://issuer.com")
    })

    test("global fetch is called", async () => {
      oidcState.setSearchParams(new URLSearchParams("code=12345678"))

      await handleResponse({
        issuerURL: "http://issuer.com",
        clientID: "test",
        oidcState: {
          verifier: "12345",
        },
      })

      expect(globalThis.fetch).toHaveBeenCalledWith(
        "https://issuer.com/token",
        expect.objectContaining({
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          method: "POST",
          body: "grant_type=authorization_code&code=12345678&redirect_uri=http%3A%2F%2Fdummy.com&client_id=test&code_verifier=12345",
        })
      )
    })

    test("fetch returns token data", async () => {
      oidcState.setSearchParams(new URLSearchParams("code=123456789"))

      const data = await handleResponse({
        issuerURL: "http://issuer.com",
        clientID: "test",
        oidcState: {},
      })

      expect(data!.tokenData).toEqual(expect.objectContaining(testTokenData))
    })
  })
})

describe("refreshToken", () => {
  test("should be a function", () => {
    expect(typeof refreshToken).toEqual("function")
  })

  test("should call the token endpoint", async () => {
    await refreshToken({
      issuerURL: "http://issuer.com",
      clientID: "test",
      refreshToken: "123456",
    })

    expect(globalThis.fetch).toHaveBeenLastCalledWith(
      "https://issuer.com/token",
      expect.objectContaining({
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
        body: "grant_type=refresh_token&refresh_token=123456&client_id=test",
      })
    )
  })
})
