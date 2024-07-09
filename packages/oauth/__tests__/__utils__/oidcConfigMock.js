/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const config = {
  issuer: "https://issuer.com",
  authorization_endpoint: "https://issuer.com/auth",
  token_endpoint: "https://issuer.com/token",
  jwks_uri: "https://issuer.com/keys",
  userinfo_endpoint: "https://issuer.com/userinfo",
  device_authorization_endpoint: "https://issuer.com/device/code",
  grant_types_supported: [
    "authorization_code",
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:device_code",
  ],
  response_types_supported: ["code"],
  subject_types_supported: ["public"],
  id_token_signing_alg_values_supported: ["RS256"],
  code_challenge_methods_supported: ["S256", "plain"],
  scopes_supported: ["openid", "email", "profile", "groups", "offline_access"],
  token_endpoint_auth_methods_supported: [
    "client_secret_basic",
    "client_secret_post",
  ],
  claims_supported: [
    "iss",
    "sub",
    "aud",
    "iat",
    "exp",
    "email",
    "email_verified",
    "locale",
    "name",
    "preferred_username",
    "at_hash",
  ],
}

export default config
