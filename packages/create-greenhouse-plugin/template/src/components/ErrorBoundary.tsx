/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Status } from "@cloudoperators/juno-ui-components"

type Props = { children: React.ReactNode }
type State = { error: Error | null }

// Contain plugin runtime errors: render a Status fallback instead of letting an error unmount the
// plugin and surface in the Greenhouse shell.
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return <Status status="error" title="Something Went Wrong" body="An error occurred inside the plugin." />
    }
    return this.props.children
  }
}

export default ErrorBoundary
