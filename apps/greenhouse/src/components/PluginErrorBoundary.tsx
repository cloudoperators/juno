/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Status, Button } from "@cloudoperators/juno-ui-components"

type PluginErrorBoundaryProps = {
  /**
   * Identifies the currently-rendered plugin (its cache key). When it changes, a previously-caught
   * error is cleared automatically so navigating to a different plugin is never blocked by the
   * prior one's failure.
   */
  resetKey: string
  /** Called by the Retry action before the boundary clears its error (e.g. to drop a cached load). */
  onReset?: () => void
  children: React.ReactNode
}

type PluginErrorBoundaryState = {
  error: Error | null
  /** Incremented on retry to remount children and clear any post-mount error state. */
  retryCount: number
}

/**
 * Error boundary around a mounted plugin.
 *
 * Catches render-time and mount-time failures of a plugin (including rejected Suspense loads
 * surfaced via `use()`) so a single broken plugin renders a recoverable error state instead of
 * taking down the shell. The fallback is the ui-components `Status` component with a Retry action.
 */
export class PluginErrorBoundary extends React.Component<PluginErrorBoundaryProps, PluginErrorBoundaryState> {
  state: PluginErrorBoundaryState = { error: null, retryCount: 0 }

  static getDerivedStateFromError(error: Error): Pick<PluginErrorBoundaryState, "error"> {
    return { error }
  }

  componentDidUpdate(prevProps: PluginErrorBoundaryProps) {
    // Reset when switching to a different plugin so its error doesn't persist across navigation.
    if (this.state.error && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ error: null })
    }
  }

  handleRetry = () => {
    this.props.onReset?.()
    this.setState((s) => ({ error: null, retryCount: s.retryCount + 1 }))
  }

  render() {
    const { error } = this.state
    if (error) {
      return (
        <Status
          status="error"
          title="Failed to Load Plugin"
          body={error.message}
          details={error.stack}
          action={
            <Button size="small" onClick={this.handleRetry}>
              Retry
            </Button>
          }
        />
      )
    }
    return <React.Fragment key={this.state.retryCount}>{this.props.children}</React.Fragment>
  }
}

export default PluginErrorBoundary
