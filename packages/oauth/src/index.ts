/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import oidcSession from "./oidcSession"
import mockedSession from "./mockedSession"
import tokenSession from "./tokenSession"

export { oidcSession, mockedSession, tokenSession }

// Export types for consumers
export type {
  AuthData,
  ParsedTokenData,
  IdTokenData,
  SessionState,
  FlowType,
  OidcConfig,
  OidcSessionParams,
  OidcSessionInstance,
  TokenSessionParams,
  TokenSessionInstance,
  MockedSessionParams,
  MockedSessionInstance,
  TokenResponse,
  OidcStateData,
} from "./types"
