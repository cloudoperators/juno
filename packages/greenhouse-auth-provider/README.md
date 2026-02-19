# @cloudoperators/greenhouse-auth-provider

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

Authentication provider package for Greenhouse and its plugins. This package enables authentication state sharing between the Greenhouse shell application and embedded plugins.

## Overview

The `greenhouse-auth-provider` package provides a lightweight authentication system designed for micro-frontend architectures where plugins are loaded with their own React dependencies. It uses a snapshot-based approach to share authentication state across different React instances.

## Architecture

The package supports two modes:

- **Embedded mode**: For plugins running inside the Greenhouse shell
- **Standalone mode**: For plugins running independently

In embedded mode, the shell application creates an auth store and passes it to plugins. When auth state changes, the shell remounts plugins with updated state, ensuring consistency across different React versions.

## Installation

```bash
pnpm add @cloudoperators/greenhouse-auth-provider
```

## Usage

### Shell Application (Greenhouse)

Create an auth store in your shell application:

```tsx
import { createAuthStore } from "@cloudoperators/greenhouse-auth-provider"

// Create the auth store
const authStore = createAuthStore()

// Update auth state when user logs in
authStore.setAuthState({
  status: "authenticated",
  token: "user-jwt-token",
  userId: "user-123",
})

// Update auth state when user logs out
authStore.setAuthState({
  status: "anonymous",
})

// Pass to plugin (remove setAuthState to prevent plugins from modifying state)
const authForPlugin = {
  getSnapshot: authStore.getSnapshot,
}
```

### Plugin Application

Wrap your plugin application with the `AuthProvider`:

```tsx
import { AuthProvider, useAuth } from "@cloudoperators/greenhouse-auth-provider"

// In your plugin's mount function
function MyPlugin({ embedded, auth }) {
  return (
    <AuthProvider embedded={embedded} auth={auth}>
      <App />
    </AuthProvider>
  )
}

// Use auth in your components
function App() {
  const auth = useAuth()

  if (auth.status === "anonymous") {
    return <div>Please log in</div>
  }

  return (
    <div>
      Welcome, user {auth.userId}
      <button onClick={() => fetchData(auth.token)}>Fetch Data</button>
    </div>
  )
}
```

### Standalone Mode

> **Note:** Standalone mode is not fully implemented yet and will be added in a future release.

For plugins running independently without a shell:

```tsx
import { AuthProvider } from "@cloudoperators/greenhouse-auth-provider"

function MyPlugin() {
  return (
    <AuthProvider embedded={false}>
      <App />
    </AuthProvider>
  )
}
```

In standalone mode, the `AuthProvider` is currently a no-op wrapper. Future versions will support independent authentication handling for standalone plugins.

## API Reference

### `createAuthStore()`

Creates an authentication store for the shell application.

**Returns:** `AuthStore`

```ts
interface AuthStore {
  getSnapshot: () => AuthState
  setAuthState: (state: AuthState) => void
}
```

### `AuthProvider`

React component that provides authentication context to the plugin.

**Props:**

- `embedded: true` - Embedded mode (requires `auth` prop)
- `embedded?: false` - Standalone mode (no `auth` prop needed)
- `auth: EmbeddedAuth` - Auth store from shell (embedded mode only)
- `children: ReactNode` - Plugin components

### `useAuth()`

Hook to access authentication state in plugin components.

**Returns:** `AuthState`

```ts
type AuthState = { status: "anonymous" } | { status: "authenticated"; token: string; userId: string }
```

**Throws:** Error if used outside `AuthProvider`

### `EmbeddedAuth`

Interface for auth object passed from shell to plugin.

```ts
interface EmbeddedAuth {
  getSnapshot: () => AuthState
}
```

## How It Works

1. **Shell creates store**: The Greenhouse shell creates an `AuthStore` using `createAuthStore()`
2. **State updates**: When authentication changes, shell calls `authStore.setAuthState()`
3. **Plugin remounting**: Shell detects auth changes and remounts plugins with updated auth reference
4. **Plugin reads state**: Plugin's `AuthProvider` reads current snapshot via `auth.getSnapshot()`
5. **Components access auth**: Plugin components use `useAuth()` hook to access authentication state

This architecture avoids React version conflicts by not sharing React state or hooks across different React instances.

## TypeScript

The package is written in TypeScript and includes full type definitions.

```ts
import type { AuthState, AuthStore, EmbeddedAuth } from "@cloudoperators/greenhouse-auth-provider"
```

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines](https://github.com/cloudoperators/juno/blob/main/CONTRIBUTING.md) to contribute to this project.

## License

Licensed under the [Apache License, Version 2.0](LICENSE).
