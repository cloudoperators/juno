# Business Requirements Document (BRD): Carbon Architecture

## Introduction

The purpose of this document is to outline the requirements for hosting and loading extensions within the **Carbon** architecture. These extensions can take various forms, such as standalone runnable apps, embedded iframes, or remotely hosted apps (e.g., served via a CDN). This document details the core features related to routing, loading mechanisms, communication protocols, and security measures for enabling extensibility within the **Carbon** platform.

## Business Objectives

1. **Extendability:** The **Carbon** system should enable seamless integration of third-party apps (extensions) into the platform. These extensions can be colocated with the host platform, remotely hosted, or standalone apps. The system must handle various app types, including micro frontends, iframe-based apps, or static standalone applications, by providing standardized integration mechanisms.
2. **Scalability:** The **Carbon** platform must handle the loading and management of multiple extensions simultaneously, without negatively impacting performance, security, or maintainability. Whether these extensions are colocated or hosted remotely, the system should handle an increasing number of apps without compromising the overall stability of the platform.

3. **Flexibility:** The **Carbon** system should allow extensions to be configurable via a manifest or configuration file, allowing for a unified approach to manage loading, dependencies, and initialization. This configuration-driven approach ensures that local and remote extensions are managed flexibly while enabling dynamic routing, props, and parameters to be set during initialization.

4. **Isolation:** Extensions must operate in full isolation from the host platform and from other extensions. This ensures that each extension is sandboxed, preventing any interference with the host's state, routing, or security model. For iframe-based and remote extensions, communication should be securely managed via defined APIs, preserving the integrity of the **Carbon** platform.

## Scope

This document covers the following aspects of extension integration within **Carbon**:

- Routing for extensions
- Loading mechanisms for colocated and remote apps
- Communication between the host app and extensions
- Security considerations for external extensions

---

## Key Features

### 1. Routing

Routing is essential for isolating and providing direct access to each extension within the **Carbon** architecture.

#### Requirements:

- **Dedicated Route per App:** Each extension should have its own unique route, such as `/app/:appId`, which should support both local and remote navigation.
- **Isolated Routing:** Extensions should not modify or interfere with the base URL of the host app. Any internal routing within an extension must remain scoped to that extension, ensuring that changes in URL or navigation do not affect the host's routing logic.

- **Support for Route Parameters:** Routes should support parameters, allowing apps to receive specific data or inputs (e.g., `/app/:id/:tab`). These parameters should be passed to the app as props or through another mechanism (e.g., context or query parameters).

- **Deep Linking Support:** The **Carbon** system must support deep linking, allowing users to navigate directly to a specific state or view within an extension using a complete URL path (e.g., `/app/:appId/view/:viewId`).

---

### 2. Loading Mechanism for Extensions

The **Carbon** platform needs a flexible mechanism for loading and managing various types of extensions, whether they are colocated or remotely hosted.

#### Requirements:

**Unified Configuration Approach**

- **Manifest-Driven Configuration:** A manifest file or configuration source should define how each extension is loaded. The manifest includes the app’s entry points, dependencies, routes, and initialization parameters. It should specify:

  - Type of extension (colocated, remote, iframe, etc.)
  - URL or file location for remote extensions
  - Props, parameters, or API endpoints the extension will require
  - Dependency management for modules required by the extension

- **Dynamic Updates:** The **Carbon** platform must support dynamically loading new extensions via updated manifests (e.g., from an API or external source like Kubernetes), ensuring that the system can handle real-time changes to configuration.

**Types of Extensions**

1. **Colocated Extensions:**
   - **Definition:** Extensions stored locally within the host platform, either in a specific directory or bundled with the app.
   - **Standalone Apps:** Colocated extensions should be fully functional standalone apps, capable of running independently, but integrated into the platform via the manifest.
   - **Props and Parameters:** Upon initialization, these apps should receive props or parameters defined in the manifest, enabling customized behavior based on the host platform's needs.
2. **Remote Extensions:**
   - **Definition:** Extensions hosted externally, often served from a CDN or remote server.
   - **Loading via URL:** Remote extensions should be dynamically loaded based on the URL provided in the manifest, allowing for flexible integration of micro frontends or remotely hosted modules.
   - **Iframes as a Loading Mechanism:** If an extension is loaded via an iframe, it must be securely sandboxed, and communication should be facilitated through a defined API (see Communication section below).

**Standardized Mounting Interface**

- **Mount API:** The **Carbon** platform must provide a consistent mounting interface for all extension types (e.g., `mount(container, props)`). This interface should allow colocated and remote extensions to be mounted dynamically within a specific DOM container while passing the necessary props and configuration details from the manifest.
- **Lazy Loading:** The **Carbon** system should support lazy loading of extensions, allowing resources to be fetched and initialized only when needed, optimizing performance and reducing the initial load time.

---

### 3. Communication

A secure and standardized communication channel is essential for interactions between the host app and its extensions, particularly iframe-based and remote apps in **Carbon**.

#### Requirements:

- **Client API for Communication:** For iframe-based extensions, a `clientApi` or equivalent interface should be established. This API should allow two-way communication between the host app and the iframe, enabling the exchange of data, events, and state while maintaining security.
- **Message Passing Mechanism:** Implement a secure, standardized message-passing system (e.g., postMessage API) that works across all extension types—whether colocated, remote, or iframes. This system should enable event-driven communication and data exchange between the host and extensions, ensuring that only authorized messages are processed.

- **Event Broadcasting:** The **Carbon** platform should enable extensions to broadcast and listen to events, allowing for inter-app communication when necessary, but such interactions must be governed by strict security and isolation protocols.

---

### 4. Security Considerations

Security is a critical aspect of loading external extensions in **Carbon**, particularly when dealing with remote or iframe-based apps.

#### Requirements:

- **Sandboxing for Iframes:** All iframe-based extensions should be sandboxed, enforcing restrictions like `allow-scripts`, `allow-same-origin`, and other relevant flags to limit potential security risks (e.g., cross-site scripting, data leakage).
- **CORS and Content Security Policy (CSP):** For remote extensions, the platform must enforce proper CORS headers and CSP to ensure that only authorized domains are allowed to load and interact with the platform.

- **Authentication and Authorization:** Extensions must adhere to the **Carbon** platform's authentication and authorization mechanisms, ensuring that only authenticated users with appropriate permissions can load or interact with specific extensions.

- **Dependency Security:** The manifest file or configuration source must define any external dependencies required by the extension. These dependencies should be validated for security vulnerabilities before being loaded into the platform.

---

## Conclusion

This document outlines the key requirements for hosting and loading extensions within the **Carbon** architecture. The proposed mechanisms aim to balance flexibility, scalability, and security, ensuring that various types of extensions can be integrated seamlessly without compromising the platform’s integrity or user experience.
