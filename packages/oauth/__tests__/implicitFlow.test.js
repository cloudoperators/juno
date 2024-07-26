/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import "./__utils__/globalsMock"
import config from "./__utils__/oidcConfigMock"
import { testIdToken, testTokenData } from "./__utils__/idTokenMock"

import { buildRequestUrl, handleResponse } from "../src/implicitFlow"

const oidcState = require("../src/oidcState")

jest.mock("../src/oidcConfig.js", () => {
  const testConfig = require("./__utils__/oidcConfigMock").default
  return {
    getOidcConfig: jest.fn().mockResolvedValue(testConfig),
  }
})

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
      oidcState: { nonce: "test", key: "123456" },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=id_token&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://dummy.com"
        )}&scope=openid&state=123456&nonce=test`
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
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=id_token&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://dummy.com"
        )}&scope=openid&state=123456&nonce=test&origanization=test&project=test`
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
      },
    }).then((url) => {
      expect(url).toEqual(
        `${config.authorization_endpoint}?response_type=id_token&client_id=12345&redirect_uri=${encodeURIComponent(
          "http://another-issuer.com"
        )}&scope=openid&state=123456&nonce=test&origanization=test&project=test`
      )
    })
  })
})

describe("handleResponse", () => {
  test("url does not contain id_token and error", async () => {
    oidcState.searchParams = new URLSearchParams()
    await expect(handleResponse()).rejects.toThrow("bad response, missing id_token")
  })

  test("url contains error", async () => {
    oidcState.searchParams = new URLSearchParams("error=unsupported_response_type")
    await expect(handleResponse()).rejects.toThrow("unsupported_response_type")
  })

  test("id_token has bad format", async () => {
    oidcState.searchParams = new URLSearchParams("id_token=test")

    await expect(handleResponse()).rejects.toThrow("bad format of id_token")
  })

  test("should return token data", async () => {
    oidcState.searchParams = new URLSearchParams("id_token=" + testIdToken)

    await handleResponse().then(({ tokenData, idToken }) => {
      expect(tokenData).toEqual(expect.objectContaining(testTokenData))
      expect(idToken).toEqual(testIdToken)
    })
  })
})
