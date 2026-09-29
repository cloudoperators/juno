/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * OAuth flow types supported by this library
 */
export type FlowType = "implicit" | "code"

/**
 * OpenID Connect Discovery Configuration
 * Based on: https://openid.net/specs/openid-connect-discovery-1_0.html
 */
export interface OidcConfig {
  /** REQUIRED. URL of the OP's OAuth 2.0 Authorization Endpoint */
  authorization_endpoint: string
  /** REQUIRED. URL of the OP's OAuth 2.0 Token Endpoint */
  token_endpoint: string
  /** URL of the OP's OAuth 2.0 Revocation Endpoint */
  revocation_endpoint?: string
  /** URL of the OP's OAuth 2.0 Introspection Endpoint */
  introspection_endpoint?: string
  /** RECOMMENDED. URL of the OP's UserInfo Endpoint */
  userinfo_endpoint?: string
  /** URL of the OP's logout endpoint */
  end_session_endpoint?: string
  /** RECOMMENDED. JSON array containing a list of the OAuth 2.0 [RFC6749] scope values supported */
  scopes_supported?: string[]
  /** REQUIRED. JSON array containing a list of the OAuth 2.0 response_type values supported */
  response_types_supported?: string[]
  /** JSON array containing a list of the OAuth 2.0 grant type values supported */
  grant_types_supported?: string[]
  /** RECOMMENDED. URL of the OP's JWK Set document */
  jwks_uri?: string
  /** REQUIRED. URL of the OP's OpenID Provider Issuer */
  issuer?: string
  /** Allows additional fields from OIDC Discovery spec */
  [key: string]: unknown
}

/**
 * Cached OIDC configuration with timestamp
 */
export interface CachedConfig {
  time: number
  config: OidcConfig
}

/**
 * Raw ID Token data (JWT payload)
 * Based on OpenID Connect Core 1.0 and RFC 7519
 */
export interface IdTokenData {
  /** Issuer Identifier */
  iss?: string
  /** Subject Identifier */
  sub?: string
  /** Audience(s) */
  aud?: string | string[]
  /** Expiration time (seconds since epoch) */
  exp?: number
  /** Issued at time (seconds since epoch) */
  iat?: number
  /** Time when authentication occurred */
  auth_time?: number
  /** String value used to associate a Client session with an ID Token */
  nonce?: string
  /** Authentication Context Class Reference */
  acr?: string
  /** Authentication Methods References */
  amr?: string[]
  /** Authorized party */
  azp?: string
  /** Email address */
  email?: string
  /** Email verified flag */
  email_verified?: boolean
  /** User's full name */
  name?: string
  /** Given name(s) or first name(s) */
  given_name?: string
  /** Surname(s) or last name(s) */
  family_name?: string
  /** First name */
  first_name?: string
  /** Last name */
  last_name?: string
  /** Preferred username */
  preferred_username?: string
  /** Login name */
  login_name?: string
  /** User's full name in displayable form */
  subject?: string
  /** Email */
  mail?: string
  /** Groups the user belongs to */
  groups?: string[]
  /** Allows additional claims */
  [key: string]: unknown
}

/**
 * Parsed token data with extracted user information
 */
export interface ParsedTokenData {
  loginName: string
  email: string
  firstName: string
  lastName: string
  fullName: string
  expiresAt: number
  expiresAtDate: Date
  groups: string[] | undefined
  userId: string | null
  avatarUrl: {
    small: string
    large: string
    default: string
  }
  organizations?: string[]
  teams?: string[]
  roles?: string[]
  supportGroups?: string[]
}

/**
 * Complete authentication data structure
 */
export interface AuthData {
  /** The JWT token string */
  JWT: string
  /** Raw token data (decoded JWT payload) */
  raw: IdTokenData
  /** Refresh token (if available) */
  refreshToken?: string
  /** Parsed and processed token data */
  parsed: ParsedTokenData
}

/**
 * Session state using discriminated union for type safety
 * Inspired by greenhouse-auth-provider pattern
 */
export type SessionState =
  | {
      loggedIn: false
      auth: null
      error: string | null
      isProcessing: boolean
    }
  | {
      loggedIn: true
      auth: AuthData
      error: string | null
      isProcessing: boolean
    }

/**
 * OIDC state data stored during OAuth flow
 */
export interface OidcStateData {
  /** Unique key for this state */
  key: string
  /** Nonce value for security */
  nonce: string
  /** URL to return to after OAuth flow */
  lastUrl?: string
  /** Flow type being used */
  flowType?: FlowType
  /** PKCE verifier (for code flow) */
  verifier?: string
  /** PKCE challenge (for code flow) */
  challenge?: string
  /** Allows additional state properties */
  [key: string]: unknown
}

/**
 * OAuth token response from token endpoint
 * Based on RFC 6749 Section 5.1
 */
export interface TokenResponse {
  /** The access token issued by the authorization server */
  access_token: string
  /** The type of the token (e.g., "Bearer") */
  token_type: string
  /** The lifetime in seconds of the access token */
  expires_in?: number
  /** The refresh token (if issued) */
  refresh_token?: string
  /** The scope of the access token */
  scope?: string
  /** The ID token (OpenID Connect) */
  id_token?: string
  /** Allows additional fields from token endpoint response */
  [key: string]: unknown
}

/**
 * Result from OAuth flow handlers (implicit or code flow)
 */
export interface FlowResponse {
  /** Decoded token data */
  tokenData: IdTokenData
  /** The ID token string */
  idToken: string
  /** The refresh token (if available) */
  refreshToken?: string | null
}

/**
 * Parameters for building OAuth request URL
 */
export interface BuildRequestUrlParams {
  issuerURL: string
  clientID: string
  oidcState: OidcStateData
  callbackURL?: string
  params?: Record<string, string>
}

/**
 * Parameters for handling OAuth response
 */
export interface HandleResponseParams {
  issuerURL: string
  clientID: string
  oidcState: OidcStateData
}

/**
 * Parameters for exchanging authorization code for tokens
 */
export interface ExchangeCodeParams {
  tokenEndpoint: string
  code: string
  verifier?: string
  clientID: string
}

/**
 * Parameters for refreshing tokens
 */
export interface RefreshTokenParams {
  issuerURL: string
  clientID: string
  refreshToken: string
}

/**
 * OIDC session configuration parameters
 */
export interface OidcSessionParams {
  /** OIDC issuer URL */
  issuerURL: string
  /** OAuth client ID */
  clientID: string
  /** Whether to initiate login immediately */
  initialLogin?: boolean
  /** Whether to automatically refresh tokens */
  refresh?: boolean
  /** OAuth flow type to use */
  flowType?: FlowType
  /** Callback function called on auth state updates */
  onUpdate?: (_state: SessionState) => void
  /** Additional request parameters */
  requestParams?: string | Record<string, string>
  /** Internal: callback URL override */
  _callbackURL?: string
}

/**
 * OIDC session instance (return value)
 */
export interface OidcSessionInstance {
  /** Initiate login flow */
  login: () => void
  /** Logout user */
  logout: (_options?: { resetOIDCSession?: boolean; silent?: boolean }) => void
  /** Manually refresh token */
  refresh: () => void
  /** Get current session state */
  currentState: () => SessionState
}

/**
 * Token session configuration parameters
 */
export interface TokenSessionParams {
  /** JWT token string */
  token: string
  /** Additional options to extend token data */
  options?: Record<string, unknown>
  /** Whether to trigger login immediately */
  initialLogin?: boolean
  /** Callback function called on auth state updates */
  onUpdate: (_state: SessionState) => void
}

/**
 * Token session instance (return value)
 */
export interface TokenSessionInstance {
  /** Trigger login */
  login: () => void
  /** Trigger logout */
  logout: () => void
  /** Get current session state */
  currentState: () => SessionState
}

/**
 * Mocked session configuration parameters
 */
export interface MockedSessionParams {
  /** Mock token data (string or object) */
  token?: string | Record<string, unknown>
  /** Whether to trigger login immediately */
  initialLogin?: boolean
  /** Callback function called on auth state updates */
  onUpdate: (_state: SessionState) => void
}

/**
 * Mocked session instance (return value)
 */
export interface MockedSessionInstance {
  /** Trigger login */
  login: () => void
  /** Trigger logout */
  logout: () => void
  /** Manually refresh token */
  refresh: () => void
  /** Get current session state */
  currentState: () => SessionState
}
