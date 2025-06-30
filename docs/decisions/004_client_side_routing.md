# ADR: Unified client side routing in Juno

## Context

The application requires robust client-side routing with support for:

- Configurable mounting base paths so application router can work with a parent router in the shell app.
- Optional hashed routing in case shell app don't want to mount child app on certain path or does not have client side routing at all.
- Data preloading and caching.
- URL-based state persistence.
- Support for optional, UI-level state (e.g., modals or panels) without affecting navigation hierarchy.

We evaluated several routing libraries including React Router and TanStack Router. After evaluating feature sets, flexibility, and community support, we decided to adopt **TanStack Router**.

Additionally, to integrate routing with data fetching and ensure URL-driven state management, we considered various combinations of client-side state and URL parsing utilities.

## Decision

We adopted the following architecture for client-side routing and state:

1. **Routing Library**: We use **TanStack Router** to manage client-side routing.

   - The router mounts to a `basePath`, provided via application props, defaulting to `'/'`.
   - This allows embedding the app under sub-paths without requiring changes to the router configuration.

2. **Hashed Routing Support**:

   - The router can optionally use hashed history (`#` URLs) when the prop `enableHashedRouting` is set to `true`. It defaults to `false`.
   - This supports deployments where traditional URL rewriting is not available (e.g., GitHub Pages or an External Dashboard).

   - > **Note:**  
     > TanStack Router has a known [issue/behavior](https://github.com/TanStack/router/issues/4370#issuecomment-3012344925) in **hashed routing mode** where it includes query parameters from the entire URL—not just the hash fragment—when supplying the `searchString`.  
     > If your application depends on extracting query parameters specifically from the **hash fragment**, you’ll need to handle this manually in the `parseSearch` method within your router configuration.

3. **Data Loading and Caching**:

   - We use **TanStack Query** for invoking API calls and caching their results.
   - Apollo Client is still used for the actual GraphQL operations, but TanStack Query provides better control over caching and fetching behavior during route transitions.

4. **URL State Encoding/Decoding**:

   - We utilize the `v2/encode` and `v2/decode` utilities from the `url-state-provider` package to handle query string parameters.
   - Applications may persist their state in the URL, as long as:
     - The state can be serialized by the `encode` utility.
     - The state can be correctly interpreted back after `decode` utility is applied.

5. **Route Definitions and Optional UI State**:
   - Routes are defined using TanStack Router's file-based routing to reflect the app’s core navigational paths.
   - To control **optional UI elements** such as panels, modals, or drawers (that can appear conditionally on a given page), we use **URL search parameters** rather than path parameters.
     - This ensures that opening or closing optional UI components does **not trigger full route transitions** or reload data unnecessarily.
     - It also preserves the logical page hierarchy and improves back/forward navigation behavior in the browser.

## Consequences

- **Pros**:

  - Flexible routing that supports multiple deployment environments, Shell App(with or without router), External Dashboards.
  - Improved control over API call timing and caching via TanStack Query.
  - Clear separation of concerns between routing, data loading, and state persistence.
  - Clean URL patterns that distinguish between core navigation and optional UI state.
  - Enhanced browser UX with predictable back/forward behavior for panels and modals.

- **Cons**:
  - Increases the learning curve slightly due to the use of newer libraries (TanStack Router).
  - The encode/decode contract must be strictly followed to prevent inconsistent behavior.

## Notes

- Developers must validate state objects before encoding to prevent invalid URL states.
