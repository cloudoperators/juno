# Proposal: [Title of the Proposal]

**Date:** 2024-10-06  
**Author(s):** Arturo Reuschenbach Puncernau
**Status:** Draft

---

## 1. Problem Statement

As the Greenhouse Dashboard is in a state of migration to the new architecture, it's important to have clear documentation of its structure.

---

## 2. Objectives & Goals

This document will:

- Explain the **Greenhouse Dashboard's architecture** in detail, including the Core System, Core Modules, and Extensions.
- Serve as the **main guide** for adding new core features, modules, or extensions to make sure everything follows the same structure.
- **Keep the whole team on the same page** by providing a shared reference for all future development.

---

## 3. Constraints & Assumptions

**Constraints:**

- **Extensions** should be integrated via Micro Frontends (MFEs), static builds, and iframes.
- **Admin plugins** should be migrated to **modules** that will be bundled with the Greenhouse Dashboard and should also be **configurable**.
- **URL state management** should be simplified to carry only the active module or extension.
- The **Dashboard** should handle all authentication logic, forwarding the necessary parameters to the extensions.

**Assumptions:**

- **Developers** are expected to know this document and follow all parts to maintain a consistent ecosystem.

## 4. Proposed Solutions

---

### 4.1 Solution

The architecture is composed of three main parts: the Core System, Core Modules, and Extensions.

```
+-----------------------------------------------------------------+
|                      Greenhouse Dashboard                       |
|                                                                 |
|  +------------------------+    +-----------------------------+  |
|  |      Core System       |    |       Core Modules          |  |
|  |                        |    |     (Interchangeable)       |  |
|  | - Extensions Loader    |    | - Clusters                  |  |
|  | - Modules Loader       |    | - Plugins                   |  |
|  | - Authentication       |    | - Secrets                   |  |
|  | - Core Functionality   |    | - Teams                     |  |
|  +------------------------+    +-----------------------------+  |
|                                                                 |
|                      +---------------------------+              |
|                      |     Extensions            |              |
|                      |  (Third-Party Plugins)    |              |
|                      |                           |              |
|                      | - Supernova               |              |
|                      | - Heureka                 |              |
|                      | - Doop                    |              |
|                      +---------------------------+              |
+-----------------------------------------------------------------+
```

** Core System**

The Core System is the backbone of the Greenhouse Dashboard. It handles all critical functionality that powers the dashboard and ensures smooth interaction between modules and extensions. The key responsibilities of the Core System include:

- **Authentication**: Manages the login, ensuring secure access to the dashboard and its modules and extensions.
- **Extension Loader**: A service that dynamically loads third-party extensions into the system. This loader ensures that extensions are properly isolated and integrated, allowing flexibility in how extensions are developed and deployed.
- **Modules Loading**: Responsible for loading and managing the Core Modules (admin tools), ensuring that they are interchangeable and configurable, and that they work cohesively within the dashboard environment.
- **Core Functionality**: Offers a set of shared utilities that can be used across different modules and extensions, such as navigation handling, notification services, URL state and user preferences.

**Core Modules**

The Core Modules consist of `interchangeable` and `configurable` components that provide essential functionality within the Greenhouse Dashboard. These modules are integral to the administration and management of key systems. While they are part of the core, they are designed to be flexible and replaceable as needed.

Existing Core Modules include:

- Clusters
- Plugins
- Secrets
- Teams

# Extensions

The Extensions section allows third-party add-ons that are fully isolated, wrapped in error boundaries, and integrated via static builds, Micro Frontends (MFEs), or iframes. These extensions are what we used to call plugins and represent the plugins definition used in the backend.

Each extension should:

- Run standalone as a Docker file.
- Have each version published in the GitHub Container Registry (GHCR).
- Be integrable in the Greenhouse Dashboard.

Current Extensions include:

- Supernova
- Heureka
- Doop

---

## 5. Discussion & Feedback

- **Team Feedback:** Concerns were raised about the need of having a docker image for each extension.
- **Team Feedback:** Concerns were raised about the need of having to publish each extension in the GHCR.

---

## 6. Recommendation

The recommended approach is to maintain a consistent setup for each module and extension, as outlined in this document.

---

## 7. Next Steps

The next step is to delve deeper and provide a more detailed description of each part of the dashboard.

---

## 8. References

- [Develop Modular Architecture for Aurora Dashboardw](https://github.com/orgs/cloudoperators/projects/4/views/9?sliceBy%5Bvalue%5D=Juno+Core&pane=issue&itemId=80084048)

---
