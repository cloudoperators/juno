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

## Option 1: Co-Located Extensions (Integrated at Build Time)

The concept involves co-locating extension bundles within the same output as the shell application. This approach integrates the extensions directly with the shell app, allowing them to be dynamically loaded at runtime. This methodology is currently implemented in the Greenhouse Dashboard.

A manifest file defines the extensions available for loading. During runtime, the shell app references this manifest to dynamically load the specified extensions. The manifest file is generated during the build process and serves as the definitive source for determining which extensions are accessible for dynamic loading.

**Internal Extensions**: These must be built first and then bundled together with the shell application. Greenhouse uses Turbo's dependency resolution to ensure that each extension is built before the shell application built. Additionally, the extensions are included as dependencies in the shell application's package.json file, ensuring they are bundled seamlessly with the shell application.

**External Extensions**: These need to be retrieved, built, and tested during the build process. Once ready, they are added as dependencies in the shell application's package.json file, ensuring they are seamlessly bundled with the shell application.

### Key Concepts

- Co-located extensions are bundled together with the shell application.
- Extensions are loaded dynamically at runtime.
- A manifest file is used to define the extensions that can be loaded.
- Internal extensions are built first and bundled together with the shell application.
- External extensions are retrieved at build time and stored in a designated directory.

### Pros and Cons

- ## **Pros**:
- **Cons**:
  - Any updates to the extensions require a new build of the shell application.

## Option 2: Remote Extensions (Loaded at Runtime from CDNs)

### Docker images

### Pros and Cons

## References

- [Architecture and Modularization EPIC](https://github.com/cloudoperators/juno/issues/275)
- [Modular Architecture for Aurora Dashboard](https://github.com/cloudoperators/juno/issues/386)
-
