# Decision Document: Greenhouse Dashboard (Codename: Carbon) Architecture

**Date:** 2024-10-23  
**Author:** Andreas Pfau  
**Status:** Proposal

---

## TL;DR;

- **Modular Architecture**: Support for interchangeable Core Modules and Extensions with clear interfaces.
- **Loading Mechanism**: A unified interface (`mount(containerElement, options)`) for seamless integration of colocated and remote extensions.
- **Routing**: Dedicated routes for extensions to prevent interference with the host.
- **Isolation**: Extensions must not manipulate the host or other extensions directly; failures should not impact the Dashboard.
- **Communication**: Robust communication channels between the Dashboard and extensions, as well as between extensions.
- **Security**: Implement sandboxing, CSP, CORS policies, and controlled interaction through defined interfaces.
- **Authentication**: Initial OIDC-based authentication with future flexibility for integration of different mechanisms.

---

## 1. **Overview**

This document summarizes the key proposals regarding the architecture of the **Greenhouse Dashboard** (codename: Carbon) and outlines the requirements for enhancing extensibility, flexibility, and scalability while maintaining robust security measures and efficient loading mechanisms.

---

## 2. **Key Proposals**

### 2.1 **Architecture for Extensions and Modules**

The architecture for the **Greenhouse Dashboard** is built around a modular system comprising **Core Modules** and **Extensions**. The following proposals outline the key components of this architecture:

- **Modular Design:**  
  The architecture should enable interchangeable and configurable modules and extensions, facilitating scalability and adaptability to future needs without significant architectural changes. To achieve this, clear **interfaces** and **abstractions** (e.g., an `apiWrapper`) must be established to standardize communication and interaction between modules and extensions.

- **Dashboard (Host):**  
  The **Dashboard** must implement an effective loading mechanism to support the integration of extensions seamlessly. This mechanism should accommodate both colocated and remote extensions. Additionally, the **Dashboard** will oversee essential functionalities, including authentication, module and extension loading, and shared services such as URL state management and navigation.

- **Extensions:**  
  The architecture must support a diverse range of extensions, including **internal extensions** developed specifically for the **Dashboard** and **third-party extensions**. This includes the ability to integrate various types of extensions, such as static builds and iframes, ensuring flexibility and extensibility within the system.

### 2.2 **Routing Mechanism**

- **Dashboard:**  
  Extensions should have dedicated, isolated routes that prevent interference with the host platform. Route parameters and query parameters will allow dynamic data handling within the extensions.
  - **Deep linking** support is crucial to allow users to directly access specific views in an extension.

### 2.3 **Loading Mechanism and Isolation**

- **Dashboard:**  
  The **Dashboard** will utilize a unified loading mechanism defined by a clear interface, such as `mount(containerElement, options)`. Each extension must implement and export this method, allowing seamless integration of various technologies like React, Vue, or even iframes. The `options` parameter can include application props and additional objects, such as a communication manager. This approach enables both colocated and remote applications to be dynamically loaded and rendered, as well as supporting iframes through the `mount` method. Additionally, the system will incorporate lazy loading and dynamic updates from manifests to optimize performance and resource utilization.

- **Extension Isolation:**  
  To ensure full isolation, extensions must not be allowed to manipulate the host environment in detrimental ways. This includes preventing extensions from affecting the core functionalities or state of the **Dashboard**. Additionally, if an extension encounters an error, it should fail gracefully without compromising the overall stability of the dashboard. This approach helps maintain the integrity of the system while allowing extensions to operate independently.

### 2.4 **Communication**

The **Dashboard** will establish a robust communication channel to facilitate interactions between the host platform and extensions, as well as among extensions themselves. This can be implemented through a shared communication object or agent, accessible to all extensions. Alternatively, an npm package may be developed for easier integration. A message-passing mechanism (e.g., `postMessage`) will enable two-way communication, particularly beneficial for iframe-based extensions.

Communication protocols will be designed to ensure seamless interactions among all components while maintaining the overall integrity of the system.

---

## 3. **Security Considerations**

Security is essential for loading external extensions in the **Greenhouse Dashboard**, especially with remote or iframe-based applications. The following measures will be implemented:

- **Sandboxing**: All iframe-based extensions will be sandboxed to prevent malicious scripts from impacting the host or other extensions.
- **CSP and CORS Policies**: Strict Content Security Policies (CSP) and Cross-Origin Resource Sharing (CORS) settings will ensure that only trusted domains can load extensions.
- **Controlled Interaction**: Extensions will be prevented from manipulating each other directly; interactions will occur solely through agents provided in the `options` parameter, utilizing well-defined interfaces.
- **Authentication & Authorization**: The system will initially use OIDC-based authentication, with a design that allows for future replacement or integration of different authentication mechanisms.

These measures will help ensure a secure and stable environment for the **Greenhouse Dashboard** and​ its extensions.

---

## 4. **Next Steps**

1. **Implementation Planning**: Develop a detailed implementation plan for the **Greenhouse Dashboard** architecture, including milestones and timelines.
2. **Core Module Development**: Initiate the development of core modules, focusing on authentication, loading mechanisms, and shared services.
3. **Extension Integration**: Begin integrating internal extensions into the **Dashboard** framework, followed by the evaluation and integration of third-party extensions.
4. **Infrastructure Setup**: Establish the necessary infrastructure, including the GitHub Container Registry (GHCR) and manifest APIs, to support dynamic loading and updating of extensions.
5. **Testing and Validation**: Conduct thorough testing of the architecture to ensure that it meets performance, security, and usability requirements before a full rollout.

---

## 5. **References**

- [Carbon BRD](../proposals/004_carbon_brd.md)
