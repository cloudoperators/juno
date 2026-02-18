/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, ReactNode } from "react"
import type { AuthState, EmbeddedAuth } from "../shared/auth-contract"

type EmbeddedAuthProps = {
  auth: EmbeddedAuth
  children: ReactNode
}

type StandaloneAuthProps = {
  children: ReactNode
}

type AuthProviderProps = ({ embedded: true } & EmbeddedAuthProps) | ({ embedded?: false } & StandaloneAuthProps)

const AuthContext = createContext<AuthState | null>(null)

const EmbeddedAuthProvider = ({ auth, children }: EmbeddedAuthProps) => {
  return <AuthContext.Provider value={auth.getSnapshot()}>{children}</AuthContext.Provider>
}

export function AuthProvider(props: AuthProviderProps) {
  if (!props.embedded) return <>{props.children}</>
  return <EmbeddedAuthProvider auth={props.auth}>{props.children}</EmbeddedAuthProvider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used inside AuthProvider")
  return context
}
