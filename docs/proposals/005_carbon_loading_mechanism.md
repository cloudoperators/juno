# Proposal: Loading Mechanism and Integration for Extensions

**Date:** 2024-11-19
**Author(s):** [Arturo Reuschenbach Puncernau]  
**Status:** Under Review

---

## Problem Statement

The goal of this proposal is to consolidate all information regarding the extension loading mechanism into a single, comprehensive document. It aims to clearly outline all discussed options with when possible with a decision, eliminating any potential misunderstandings, and to establish consensus on the approach that best fits the project’s needs.

## Terminology

- **Shell App**: The main application responsible for managing core functionalities, modules, and extensions. It loads and integrates both internal and external extensions seamlessly.
- **Core System**: The essential foundational components required for the application to operate. These are **non-interchangeable** and include key functionalities such as authentication, routing, module loading, and extension management.
- **Core Modules**: Modular functionalities that integrate with the core system. Unlike the core system, these modules are **interchangeable** and can be configured as needed.
- **Internal extensions**: UI extensions that reside within the same repository as the shell application and are developed by the same team responsible for the shell app.
- **External extensions**: UI extensions that reside in separate repositories from the shell application and are developed by teams outside of the core development team.

## Requirements for the Shell App

- **Uniform Loading Mechanism**: The Shell App must support the loading and integration of both internal and external extensions. Ideally, the loading mechanism should be consistent for both types of extensions.
- **Isolated Integration**: The integration of extensions should be designed to ensure that they do not disrupt the functionality of the rest of the application. Errors within an extension should not cause the app to crash, and styles from extensions must not conflict with the app’s existing styles.
- **Independent Updates**: Extensions must be capable of being updated independently from one another. While this may require releasing a new version of the Shell App, the process should be designed to minimize dependency entanglements.
- **Seamless Communication**: The Shell application should provide a well-defined interface that ensures clear, efficient, and reliable communication between itself and its extensions.

## Requirements for the Extensions

- **Seamless Communication**: Extensions should integrate with the shell application through the well-defined interfaces, ensuring clear and efficient communication between the shell app and the extension itself.

## Option 1: Co-Located Extensions

The concept involves co-locating extension bundles within the same output as the shell application. This approach integrates the extensions directly with the shell app, allowing them to be dynamically loaded at runtime. Each extension implements a well-defined interface, ensuring seamless integration and communication with the shell application. This methodology is currently implemented in the Greenhouse Dashboard.

A manifest file defines the extensions available and the location for loading. During runtime, the shell app references this manifest to dynamically load the specified extensions. The manifest file is generated during the build process and serves as the definitive source for determining which extensions are accessible for dynamic loading.

The manifest specifies the location of each extension, offering flexibility in how extensions are managed. For example:

```json
{
  "supernova": "@cloudoperators/juno-app-supernova",
  "xyz": "extensions/xyz/index.js"
}
```

Additionally, this setup supports extensions hosted on CDNs. Versioning can be specified either directly in the URL path or through an additional attribute:

```json
{
  "xyz": "https://cdn.com/xyz"
}
```

`iFrames` are also supported by placing an extension in the extensions/xyz directory and loading it in index.js.

**Internal Extensions**: These must be built first and then bundled together with the shell application. Greenhouse uses Turbo's dependency resolution to ensure that each extension is built before the shell application built. Additionally, the extensions are included as dependencies in the shell application's package.json file, ensuring they are bundled seamlessly with the shell application.

**External Extensions**: These need to be retrieved, built, and tested during the build process. Once ready, they are added as dependencies in the shell application's package.json file, ensuring they are seamlessly bundled with the shell application.

### Diagram

```bash
                      Build Process
  ------------------------------------------------
  |                                              |
  |          +-----------------------+           |
  |          | Internal Extensions   |           |
  |          | (Built First)         |           |
  |          +-----------------------+           |
  |                                              |
  |          +-----------------------+           |
  |          | External Extensions   |           |
  |          | (Retrieved, Built,    |           |
  |          | and Tested)           |           |
  |          +-----------------------+           |
  |                                              |
  ------------------------------------------------
                      |
                      v
           +--------------------------+
           |  Generate Manifest File  |
           | (Defines Available       |
           | Extensions)              |
           +--------------------------+
                      |
                      v
     +---------------------------------------+
     | Shell Application                     |
     | - Bundled Extensions                  |
     | - References Manifest for Dynamic     |
     |   Loading at Runtime                  |
     +---------------------------------------+
                      |
                      v
        Dynamic Loading of Extensions at Runtime

```

### Key Concepts

- Co-located extensions are bundled together with the shell application.
- Extensions are loaded dynamically at runtime.
- A manifest file is used to define the extensions that can be loaded.
- Internal extensions are built first and bundled together with the shell application.
- External extensions are retrieved, built, tested and bundled with the shell application.
- Extensions can be hosted on CDNs.
- Extensions can be loaded in `iFrames`.

### Pros and Cons

- **Pros**:

  - **All Dependencies Resolved at Build Time**: ensures that all extensions, whether internal or external, are fully resolved during the build process. This eliminates CORS issues and prevents individual extension outages.
  - **Flexibility in Extension Locations**: supports local paths for extensions (e.g., `extensions/xyz/index.js`) for tightly integrated functionalities. Allows external extensions to be hosted on CDNs, enabling scalable and efficient delivery.
  - **Error Management**:
    - **Internal Extensions**: Errors can be addressed promptly by committing fixes rather than rolling back, as the main branch remains unaffected.
    - **External Extensions**: A specific version of an external extension is stored in the `extensions` directory. Errors can be caught during the build or resolved with a re-build. In the worst case, problematic extensions can be removed without affecting the rest of the application.
  - **Ease of Configuration**: a manifest file serves as the single source of truth for defining accessible extensions. Updates can be made to the manifest without modifying core application logic.
  - **Support for iFrames**: embedding extensions via iFrames allows for isolated execution of third-party or sandboxed extensions.
  - **Streamlined Build Process**: the manifest is generated during the build process, ensuring consistency in available extensions and simplifying integration.

- **Cons**:
  - **Dependency on Manifest File**: the system heavily relies on the accuracy of the manifest file. Errors or misconfigurations could disrupt extension loading.
  - **Build-Time Configuration**: although dynamic loading reduces deployment frequency, changes to the build process or manifest generation logic still require developer involvement.
  - **Limited Runtime Flexibility**: since dependencies are resolved at build time, adding new extensions dynamically without rebuilding the application is not feasible.

## Option 2: Remote Extensions

In this approach, extensions are hosted externally and dynamically loaded at runtime from Content Delivery Networks (CDNs) or other external sources. Each extension follows a well-defined interface, ensuring smooth integration and communication with the shell application.

A manifest file lists the extensions and their versions available for loading. At runtime, the shell application references this manifest to load the specified extensions from the CDNs. The manifest is deployed alongside the shell application and acts as the authoritative source for determining which extensions and versions are available for dynamic loading.

The manifest defines the CDN URL for each extension. Versioning can be specified either directly in the URL path or through an additional attribute. For example:

````json
{
  "xyz": "https://cdn.com/xyz/version1.0.0"
}

**Internal Extensions**: These extensions are bundled and deployed to a designated CDN. The shell application references the CDN URL from the manifest file, enabling seamless integration and dynamic loading at runtime.

**External Extensions**: These extensions should be bundled and deployed to a predefined CDN to prevent CORS issues. The shell application references the CDN URL in the manifest file, ensuring smooth integration and dynamic loading at runtime.

### Diagram

```bash
                              +-------------------+
                              |   Shell App       |
                              +-------------------+
                                       |
                                       v
                             +---------------------+
                             |  Manifest File      |
                             +---------------------+
                                       |
                    +------------------+-------------------+
                    |                                      |
                    |                                      |
           +--------------------------------------------------------+
           |        |  Content Delivery Networks (CDNs)    |        |
           |        v                                      v        |
           |   +---------------------+      +---------------------+ |
           |   | Internal Extension  |      | External Extension  | |
           |   +---------------------+      +---------------------+ |
           +--------------------------------------------------------+
````

### Docker images

Kubernetes setup for deploying a shell app and multiple extensions as Docker images, with seamless internal communication:

1. **Shell App Deployment**
   The shell app runs as a Kubernetes Deployment or StatefulSet and is exposed via a Kubernetes Service (e.g., ClusterIP or LoadBalancer). It serves as the primary entry point for users.

2. **Extension Deployments**
   Each extension is deployed as an independent Kubernetes Deployment or Pod, with its own Service exposing its functionality.

   - Extensions expose either their bundled files or entry points (e.g., APIs or HTML for iFrame-based rendering).
   - Ports are predefined and consistently used across deployments to simplify integration.

3. **Internal Networking**
   Kubernetes’ internal DNS and networking ensure that the shell app can access extensions by their service names, avoiding external networking or CORS issues.

4. **Manifest File**
   The shell app includes a manifest file mapping extensions to their respective Kubernetes services, enabling dynamic integration at runtime.

**Diagramm**

```bash
                                    +--------------------+
                                    |  User (Browser)    |
                                    +--------------------+
                                             |
                                             v
                                    +---------------------+
                                    | Shell App (Ingress) |
                                    | Service: shell-app  |
                                    +---------------------+
                                             |
                          +------------------+------------------+
                          |                                     |
                          v                                     v
           +--------------------------+          +--------------------------+
           |    Extension XYZ (Pod)   |          |    Extension ABC (Pod)   |
           | Service: extension-xyz   |          | Service: extension-abc   |
           | Exposes: /bundle.js      |          | Exposes: /bundle.js      |
           | Exposes: /entrypoint.js  |          | Exposes: /entrypoint.js  |
           +--------------------------+          +--------------------------+
                          |                                     |
                          v                                     v
           +--------------------------+          +--------------------------+
           | Deployment: extension-xyz|          | Deployment: extension-abc|
           | Image: xyz:latest        |          | Image: abc:latest        |
           +--------------------------+          +--------------------------+
```

### Key Concepts

- Extensions are hosted externally and loaded dynamically at runtime.
- A manifest file lists the extensions and their versions available for loading.
- Internal and external extensions are bundled and deployed to a designated CDN.
- External extensions are bundled and deployed to a predefined CDN.
- The shell application references the CDN URL in the manifest file for seamless integration and dynamic loading at runtime.
- Kubernetes setup for deploying a shell app and multiple extensions as Docker images, with seamless internal communication.

### Pros and Cons

- **Pros**:

  - **Lightweight Shell App**: Keeps the shell application lightweight by utilizing resources hosted externally.
  - **Centralized Management**: A single manifest file simplifies the management of extensions by providing centralized information for runtime loading.
  - **Fault Isolation**: Faulty extensions do not affect the deployment of others, allowing independent rollbacks.
  - **Dogfooding**: Utilizing your own Docker images for extensions deployed in Kubernetes not only demonstrates confidence in your ecosystem but also validates and tests the artifacts hosted in GHCR, ensuring reliability and alignment with your offered solutions.

- **Cons**:
  - **Latency Concerns**: Using CDNs instead of Kubernetes-hosted deployments may introduce latency due to external dependencies, potentially affecting user experience.
  - **Hosting Complexity**: Developers of external extensions must manage their own hosting and deployment to a CDN, adding complexity to the development lifecycle.
  - **Network Reliability**: The shell application must handle potential network failures when retrieving extensions from external sources.
  - **CORS Challenges**: Cross-origin resource sharing (CORS) configurations may require careful setup, particularly for external extensions, potentially leading to debugging and integration complexities.
  - **Internal Extensions Hosting**: Hosting internal extensions would require setting up dedicated asset servers and deployment pipelines. Errors in an extension might necessitate redeploying the host app to update the manifest or enforcing always loading the latest version.
  - **Kubernetes Setup**: Deploying extensions in Kubernetes demands a more complex setup and ongoing maintenance, which could increase operational overhead.

## References

- [Architecture and Modularization EPIC](https://github.com/cloudoperators/juno/issues/275)
- [Modular Architecture for Aurora Dashboard](https://github.com/cloudoperators/juno/issues/386)
