/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { z } from "zod"

/**
 * Zod schema for validating OAuth2/OIDC token responses
 * Based on RFC 6749 and OpenID Connect Core 1.0
 */
export const TokenResponseSchema = z
  .object({
    /** REQUIRED. The access token issued by the authorization server */
    access_token: z.string(),
    /** REQUIRED. The type of the token (typically "Bearer") */
    token_type: z.string(),
    /** RECOMMENDED. The lifetime in seconds of the access token */
    expires_in: z.number().optional(),
    /** OPTIONAL. The refresh token for obtaining new access tokens */
    refresh_token: z.string().optional(),
    /** OPTIONAL. The scope of the access token */
    scope: z.string().optional(),
    /** OPTIONAL. The ID token (OpenID Connect) */
    id_token: z.string().optional(),
  })
  .catchall(z.unknown()) // Allow additional fields from token endpoint

/**
 * Zod schema for OIDC Discovery configuration
 * Based on OpenID Connect Discovery 1.0 specification
 */
export const OidcConfigSchema = z
  .object({
    /** REQUIRED. URL of the OP's OAuth 2.0 Authorization Endpoint */
    authorization_endpoint: z.string().url(),
    /** REQUIRED. URL of the OP's OAuth 2.0 Token Endpoint */
    token_endpoint: z.string().url(),
    /** OPTIONAL. URL of the OP's OAuth 2.0 Revocation Endpoint */
    revocation_endpoint: z.string().url().optional(),
    /** OPTIONAL. URL of the OP's OAuth 2.0 Introspection Endpoint */
    introspection_endpoint: z.string().url().optional(),
    /** RECOMMENDED. URL of the OP's UserInfo Endpoint */
    userinfo_endpoint: z.string().url().optional(),
    /** OPTIONAL. URL of the OP's logout endpoint */
    end_session_endpoint: z.string().url().optional(),
  })
  .catchall(z.unknown()) // Allow additional fields from discovery document

/**
 * Zod schema for validating OAuth request parameters
 * Used for additional parameters passed to authorization endpoint
 */
export const RequestParamsSchema = z.record(z.string(), z.unknown())
