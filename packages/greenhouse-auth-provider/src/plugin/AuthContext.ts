/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext } from "react"
import type { AuthState } from "../shared/auth-contract"

export const AuthContext = createContext<AuthState | null>(null)
