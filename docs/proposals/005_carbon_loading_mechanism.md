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

The concept is to co-locate the extension bundles within the same output build folder as the shell application. This approach bundles the extensions together with the shell app, enabling them to be dynamically loaded at runtime.

**Internal Extensions**: have to be build first and afterwards bundled together with the shell application.

**External Extensions**: need to be retrieved at build time and stored in a designated directory

### Decision matrix

## Option 2: Remote Extensions (Loaded at Runtime from CDNs)

### Docker images

### Decision matrix

## References

- [Architecture and Modularization EPIC](https://github.com/cloudoperators/juno/issues/275)
- [Modular Architecture for Aurora Dashboard](https://github.com/cloudoperators/juno/issues/386)
-
