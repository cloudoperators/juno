/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { z } from "zod"
import type { AuthStore } from "@cloudoperators/greenhouse-auth-provider"

/**
 * Types for OAuth/OIDC authentication data
 * Based on @cloudoperators/juno-oauth package
 */

// Zod schema for TokenData validation (single source of truth)
export const TokenDataSchema = z.object({
  // Standard JWT claims
  sub: z.string().optional(),
  exp: z.number().optional(),
  iat: z.number().optional(),
  iss: z.string().optional(),
  aud: z.string().optional(),
  // Custom claims
  email: z.string().optional(),
  email_verified: z.boolean().optional(),
  mail: z.string().optional(),
  name: z.string().optional(),
  preferred_username: z.string().optional(),
  login_name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  subject: z.string().optional(),
  groups: z.array(z.string()).optional(),
  nonce: z.string().optional(),
})

export type TokenData = z.infer<typeof TokenDataSchema>

// Zod schema for mockAuth prop validation
export const MockAuthSchema = z.union([
  z.boolean(),
  TokenDataSchema,
  z.string(), // For JSON strings of TokenData
])

export type MockAuthValue = z.infer<typeof MockAuthSchema>

export interface ParsedTokenData {
  loginName: string
  email: string
  firstName: string
  lastName: string
  fullName: string
  expiresAt: number
  expiresAtDate: Date
  groups?: string[]
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

export interface AuthData {
  JWT: string
  raw: TokenData
  refreshToken?: string
  parsed: ParsedTokenData
}

export interface OidcSessionState {
  auth: AuthData | null
  error: string | null
  isProcessing: boolean
  loggedIn: boolean
}

export interface OidcSessionInstance {
  login: () => void
  logout: (options?: any) => void
  refresh?: () => void
  currentState?: () => any
}

export interface AuthContextValue {
  isProcessing: boolean
  loggedIn: boolean
  error: string | null
  data: AuthData | null
  pluginAuth: AuthStore
  isDemoMode: boolean
  login: () => void
  logout: () => void
}
