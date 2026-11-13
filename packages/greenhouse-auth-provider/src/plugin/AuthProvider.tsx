/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import type { EmbeddedAuth } from "../shared/auth-contract"
import { AuthContext } from "./AuthContext"

type EmbeddedAuthProps = {
  auth: EmbeddedAuth
  children: ReactNode
}

type StandaloneAuthProps = {
  children: ReactNode
}

type AuthProviderProps = ({ embedded: true } & EmbeddedAuthProps) | ({ embedded?: false } & StandaloneAuthProps)

const EmbeddedAuthProvider = ({ auth, children }: EmbeddedAuthProps) => {
  // Read the snapshot on every render - the shell remounts the plugin when auth changes
  return <AuthContext.Provider value={auth.getSnapshot()}>{children}</AuthContext.Provider>
}

export function AuthProvider(props: AuthProviderProps) {
  if (!props.embedded) return <>{props.children}</>
  return <EmbeddedAuthProvider auth={props.auth}>{props.children}</EmbeddedAuthProvider>
}
