# Business Requirements Document (BRD): Carbon Architecture

## Introduction

This document outlines the requirements for hosting and loading extensions within the **Carbon** architecture. These extensions can be standalone apps, embedded iframes, or remotely hosted applications. It details the core features related to routing, loading mechanisms, communication protocols, and security measures for enabling extensibility within the **Carbon** platform.

## Business Objectives

1. **Extendability:** Enable seamless integration of third-party extensions (colocated, remote, or standalone) through standardized mechanisms.
2. **Scalability:** Manage multiple extensions simultaneously without negatively impacting performance, security, or maintainability.
3. **Flexibility:** Allow configurable extensions via manifests for unified management of loading, dependencies, and initialization.
4. **Isolation:** Ensure extensions operate independently, preventing interference with the host platform or other extensions.

## Scope

This document covers:

- Routing for extensions
- Loading mechanisms for colocated and remote apps
- Communication between the host app and extensions
- Security considerations for external extensions

---

## Key Features

### 1. Routing

**Requirements:**

- **Unique Route:** Each extension should have a dedicated route (e.g., `/app/:appId`).
- **Isolated Routing:** Extensions must not modify the host's base URL.
- **Cross Navigation:** The host should provide an interface for extensions to navigate between each other.
- **Parameter Support:** Routes should support route and query parameters (e.g., `/app/:id?foo=blah`).
- **Deep Linking:** Support direct navigation to specific states in extensions (e.g., `/app/:appId/view/:viewId`).
- **App URL State Storage:** Store and retrieve the previous URL state of an app when navigating.

---

### 2. Loading Mechanism for Extensions

**Requirements:**

- **Manifest-Driven Configuration:** A manifest file should define loading parameters, including types, URLs, and dependencies for extensions.
- **Dynamic Updates:** Support real-time changes to configurations through updated manifests.
- **Unified Mounting Interface:** Provide a consistent `mount(container, props)` interface for dynamic integration.
- **Lazy Loading:** Optimize performance by loading extensions only when needed.
- **Unmounting Mechanism:** Support unloading extensions to save memory.
- **Isolation and Error Boundaries:** Load extensions in isolated containers (e.g., ShadowRoot or iframe) and wrap them in Error Boundaries.

---

### 3. Communication

**Requirements:**

- **Client API for Communication:** Establish a `clientApi` for secure two-way communication between the host and iframe-based extensions.
- **Message Passing Mechanism:** Implement a standardized message-passing system (e.g., `postMessage`) for all extension types.
- **Event Broadcasting:** Enable extensions to broadcast and listen for events, adhering to security protocols.

---

### 4. Security Considerations

**Requirements:**

- **Sandboxing for Iframes:** Enforce restrictions for iframe-based extensions to mitigate security risks.
- **CORS and CSP:** Enforce proper CORS headers and CSP for remote extensions.
- **Authentication and Authorization:** Ensure only authenticated users can load or interact with specific extensions.
- **Dependency Security:** Specify and validate dependencies for local extensions while recognizing limitations for remote extensions.

---

## Conclusion

This document outlines key requirements for hosting and loading extensions within the **Carbon** architecture, balancing flexibility, scalability, and security. These mechanisms ensure that various types of extensions can be integrated seamlessly without compromising the platform’s integrity or user experience.
