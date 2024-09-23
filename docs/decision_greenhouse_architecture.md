# Greenhouse Architecture Design Decision

## Code Name: `Carbon`

### Overview

The **Greenhouse Dashboard** aims to build a new, flexible architecture under the code name "Carbon". This architecture is designed to be a **modulith**, a hybrid between modularity and a monolithic system. It will consist of core functionality, core modules, and third-party extensions to achieve high modularity while maintaining stability and performance.

---

## Architecture Components

1. **Core:**

   - **Description:** The Core handles critical functionalities for the dashboard to function, including loading extensions and providing basic system utilities.
   - **Key Features:**
     - Extension loader
     - Core functionality
     - Dashboard utilities

2. **Modules:**

   - **Description:** Core components developed by the core team, which can be swapped or replaced with alternatives offering the same functionality.
   - **Key Features:**
     - Interchangeable modules
     - Developed and maintained by the core team
     - Integrated seamlessly into the dashboard

3. **Extensions:**
   - **Description:** Third-party add-on components developed by external teams and integrated into the dashboard.
   - **Key Features:**
     - Must be **fully isolated** from the rest of the system to prevent interference.
     - Wrapped in an **error boundary** to catch failures and ensure the core system is unaffected.
     - Support multiple integration techniques:
       - **Static builds**
       - **Micro Frontends (MFEs)**
       - **Iframes**

---

## Key Architecture Decisions

### 1. **Separation of Core, Modules, and Extensions**

- **Decision:** The architecture separates the **Core**, **Modules**, and **Extensions** to ensure clear boundaries between internal and external functionalities.
- **Rationale:** This enables modularity and flexibility, ensuring that third-party extensions do not affect the stability of the core system.

### 2. **Fully Isolated Extensions**

- **Decision:** Extensions must be completely isolated from the core system and other modules, wrapped in an error boundary.
- **Rationale:** This prevents third-party code from causing failures or performance degradation within the core dashboard.

### 3. **Interchangeable Core Modules**

- **Decision:** Modules within the core system are designed to be interchangeable, allowing for alternative modules with the same functionality to be swapped in as needed.
- **Rationale:** Ensures flexibility and adaptability, allowing new or improved modules to be integrated into the system with minimal disruption.

### 4. **TypeScript as the Primary Language**

- **Decision:** The new system will be developed using **TypeScript**.
- **Rationale:** TypeScript offers type safety and adheres to modern JavaScript standards, reducing bugs and improving code maintainability.

### 5. **Vite and Vitest for Build and Testing**

- **Decision:** The build system will use **Vite**, and testing will be managed with **Vitest**.
- **Rationale:** Both Vite and Vitest are chosen for their speed and developer-friendly features, enhancing Developer Experience (DX) and speeding up the build/test process.

### 6. **Renaming the Legacy System**

- **Decision:** The current Greenhouse app will be renamed **Greenhouse Legacy**.
- **Rationale:** This clearly distinguishes the legacy system from the new "Carbon" architecture, reducing confusion for developers and users alike.

---

## Diagram of Proposed Architecture

```
+-----------------------------------------------------------------+
|                      Greenhouse Dashboard                       |
|                                                                 |
|  +------------------------+    +-----------------------------+  |
|  |      Core System       |    |       Core Modules          |  |
|  |                        |    |                             |  |
|  | - Extension Loader     |    | - Module A                  |  |
|  | - Core Functionality   |    | - Module B (Interchangeable)|  |
|  | - Dashboard Utilities  |    | - Module C                  |  |
|  +------------------------+    +-----------------------------+  |
|                                                                 |
|                      +---------------------------+              |
|                      |     Extensions            |              |
|                      | (External/Third-Party)    |              |
|                      |                           |              |
|                      | - Extension X (Isolated)  |              |
|                      | - Extension Y (MFE/Iframe)|              |
|                      | - Error Boundary          |              |
|                      +---------------------------+              |
+-----------------------------------------------------------------+
```

- **Core System:** The foundation of the dashboard, handling key functionalities and loading third-party extensions.
- **Core Modules:** Built-in components that can be swapped out, offering modular and customizable features.
- **Extensions:** External components that integrate into the dashboard but remain isolated to protect system stability.

---

## Conclusion

The "Carbon" architecture is designed with flexibility, modularity, and developer experience in mind. By separating core functionalities from third-party extensions and providing a clear framework for modules, this architecture will ensure a stable, performant, and highly adaptable dashboard system. The use of TypeScript, Vite, and Vitest further supports these goals by enhancing the development and testing processes.
