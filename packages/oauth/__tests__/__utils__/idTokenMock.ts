/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const testTokenData = {
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
}

export const testIdToken = "test_header." + btoa(JSON.stringify(testTokenData)) + ".test_signature"
