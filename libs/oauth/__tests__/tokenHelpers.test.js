/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { parseIdTokenData, decodeIDToken } from "../src/tokenHelpers"
import { testIdToken, testTokenData } from "./__utils__/idTokenMock"

describe("decodeIDToken", () => {
  test("should decode id token", () => {
    const data = decodeIDToken(testIdToken)
    expect(data).toEqual(expect.objectContaining(testTokenData))
  })
})

describe("parseIdTokenData", () => {
  test("should convert oidc token data without groups and login_name", () => {
    const data = parseIdTokenData({
      aud: "12a34b5c-6d78-9e1f-g345-67h89ijkl123",
      sub: "P123456",
      mail: "dona.moore@example.com",
      iss: "https://my-tenant.accounts.ondemand.com",
      last_name: "Moore",
      sap_uid: "123456abc7de8-fghi-9123-j456-78912kl34m56",
      exp: Math.floor((Date.now() + 8 * 60 * 60 * 1000) / 1000),
      iat: Math.floor(Date.now() / 1000),
      first_name: "Dona",
      jti: "38e42330-de7a-4130-a3a1-b582b528da98",
      nonce: "12345",
    })
    expect(data).toEqual(
      expect.objectContaining({
        loginName: "P123456",
        firstName: "Dona",
        lastName: "Moore",
        fullName: "Dona Moore",
        email: "dona.moore@example.com",
      })
    )
  })

  test("should extract organization and teams", () => {
    const data = parseIdTokenData({
      aud: "12a34b5c-6d78-9e1f-g345-67h89ijkl123",
      sub: "P123456",
      mail: "dona.moore@example.com",
      iss: "https://my-tenant.accounts.ondemand.com",
      last_name: "Moore",
      sap_uid: "123456abc7de8-fghi-9123-j456-78912kl34m56",
      exp: Math.floor((Date.now() + 8 * 60 * 60 * 1000) / 1000),
      iat: Math.floor(Date.now() / 1000),
      first_name: "Dona",
      jti: "38e42330-de7a-4130-a3a1-b582b528da98",
      nonce: "12345",
      groups: ["organization:test-org", "team:test-team-1", "team:test-team-2"],
    })
    expect(data).toEqual(
      expect.objectContaining({
        organizations: ["test-org"],
        teams: ["test-team-1", "test-team-2"],
      })
    )
  })

  test("should extract support groups, teams, organizations and roles from groups", () => {
    const data = parseIdTokenData({
      aud: "12a34b5c-6d78-9e1f-g345-67h89ijkl123",
      sub: "P123456",
      mail: "dona.moore@example.com",
      iss: "https://my-tenant.accounts.ondemand.com",
      last_name: "Moore",
      sap_uid: "123456abc7de8-fghi-9123-j456-78912kl34m56",
      exp: Math.floor((Date.now() + 8 * 60 * 60 * 1000) / 1000),
      iat: Math.floor(Date.now() / 1000),
      first_name: "Dona",
      jti: "38e42330-de7a-4130-a3a1-b582b528da98",
      nonce: "12345",
      groups: [
        "organization:test-org",
        "team:test-team-1",
        "team:test-team-2",
        "support-group:containers",
        "role:ccloud:admin",
      ],
    })
    expect(data).toEqual(
      expect.objectContaining({
        organizations: ["test-org"],
        teams: ["test-team-1", "test-team-2"],
        supportGroups: ["containers"],
        roles: ["ccloud:admin"],
      })
    )
  })

  test("should convert oidc token data including groups and login_name", () => {
    const data = parseIdTokenData({
      aud: "12a34b5c-6d78-9e1f-g345-67h89ijkl123",
      sub: "P123456",
      mail: "dona.moore@example.com",
      iss: "https://my-tenant.accounts.ondemand.com",
      last_name: "Moore",
      sap_uid: "123456abc7de8-fghi-9123-j456-78912kl34m56",
      exp: Math.floor((Date.now() + 8 * 60 * 60 * 1000) / 1000),
      iat: Math.floor(Date.now() / 1000),
      first_name: "Dona",
      jti: "38e42330-de7a-4130-a3a1-b582b528da98",
      nonce: "12345",
      groups: ["test"],
      login_name: "test",
    })
    expect(data).toEqual(
      expect.objectContaining({
        loginName: "P123456",
        firstName: "Dona",
        lastName: "Moore",
        fullName: "Dona Moore",
        email: "dona.moore@example.com",
        groups: ["test"],
        loginName: "test",
        userId: "P123456",
        avatarUrl: {
          small: `https://avatars.wdf.sap.corp/avatar/P123456?size=24`,
          large: `https://avatars.wdf.sap.corp/avatar/P123456?size=256`,
          default: `https://avatars.wdf.sap.corp/avatar/P123456`,
        },
      })
    )
  })

  test("should map valid userId from sub", () => {
    const data = parseIdTokenData({ sub: "P123456" })
    expect(data).toEqual(
      expect.objectContaining({
        userId: "P123456",
      })
    )
  })

  test("shouldn't map invalid userId from sub", () => {
    const data1 = parseIdTokenData({ sub: "A123456" })
    const data2 = parseIdTokenData({ sub: "DD1456" })
    const data3 = parseIdTokenData({ sub: "123456" })
    const data4 = parseIdTokenData({ sub: "d" })
    expect(data1).toEqual(expect.objectContaining({ userId: null }))
    expect(data2).toEqual(expect.objectContaining({ userId: null }))
    expect(data3).toEqual(expect.objectContaining({ userId: null }))
    expect(data4).toEqual(expect.objectContaining({ userId: null }))
  })

  test("should accept mail property for email", () => {
    const data = parseIdTokenData({
      mail: "dona.moore@example.com",
    })
    expect(data).toEqual(
      expect.objectContaining({
        email: "dona.moore@example.com",
      })
    )
  })

  test("should accept email property for email", () => {
    const data = parseIdTokenData({
      email: "dona.moore@example.com",
    })
    expect(data).toEqual(
      expect.objectContaining({
        email: "dona.moore@example.com",
      })
    )
  })

  describe("user name from email", () => {
    test("email contains one first name and one last name", () => {
      const data = parseIdTokenData({
        email: "dona.moore@example.com",
      })
      expect(data).toEqual(
        expect.objectContaining({
          firstName: "Dona",
          lastName: "Moore",
          fullName: "Dona Moore",
          email: "dona.moore@example.com",
        })
      )
    })

    test("email contains double first name and one last name", () => {
      const data = parseIdTokenData({
        email: "dona-anna.moore@example.com",
      })
      expect(data).toEqual(
        expect.objectContaining({
          firstName: "Dona-Anna",
          lastName: "Moore",
          fullName: "Dona-Anna Moore",
        })
      )
    })

    test("email contains multiple first names and one last name", () => {
      const data = parseIdTokenData({
        email: "dona-anna-maria.moore@example.com",
      })
      expect(data).toEqual(
        expect.objectContaining({
          firstName: "Dona-Anna-Maria",
          lastName: "Moore",
          fullName: "Dona-Anna-Maria Moore",
        })
      )
    })

    test("email contains double last name and one first name", () => {
      const data = parseIdTokenData({
        email: "dona.moore.mile@example.com",
      })
      expect(data).toEqual(
        expect.objectContaining({
          firstName: "Dona",
          lastName: "Moore Mile",
          fullName: "Dona Moore Mile",
        })
      )
    })

    test("email contains multiple last and first names", () => {
      const data = parseIdTokenData({
        email: "dona-maria.moore.mile@example.com",
      })
      expect(data).toEqual(
        expect.objectContaining({
          firstName: "Dona-Maria",
          lastName: "Moore Mile",
          fullName: "Dona-Maria Moore Mile",
        })
      )
    })
  })
})
