# Getting Started with Juno

Welcome to the Juno platform! This guide will help you get set up and start using Juno to develop your applications.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- **Node.js** (version 18 or higher)
- **pnpm** (version 8 or higher)
- **Git**

> You can install pnpm globally using:
>
> ```bash
> npm install -g pnpm
> ```

---

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/cloudoperators/juno.git
   cd juno
   ```

2. **Install Dependencies:**

   ```bash
   pnpm install
   ```

3. **Setup Husky:**

   ```bash
   pnpm prepare
   ```

4. **Available Turbo Commands:**
   - **Build:**

     ```bash
     pnpm turbo build
     ```

   - **Lint:**

     ```bash
     pnpm turbo lint
     ```

   - **Test:**

     ```bash
     pnpm turbo test
     ```

   - **Dev:**

     ```bash
     pnpm turbo dev
     ```

   - **Clean:**

     ```bash
     pnpm turbo clean
     ```

   - **Pkg:**
     To run a specific app or package, start by identifying the name in the package.json file located within the relevant app folder. Once you have the name, use it in the following command. For example, to run the exampleapp use `@cloudoperators/juno-app-example` as in the command below:

     ```bash
     pnpm pkg @cloudoperators/juno-app-example
     ```

   - **Generator:Package**
     The pnpm generate:package command is used to generate a new package in a project. When running this command, you need to provide a name for the package that starts with `@cloudoperators/juno-`.

     ```bash
     pnpm generate:package @cloudoperators/juno-NAME-OF-YOUR-PACKAGE
     ```

   - **Generator:App**
     The pnpm generate:app command is used to generate a new app in a project. When running this command, you need to provide a name for the app that starts with `@cloudoperators/juno-`.

     ```bash
     pnpm generate:app @cloudoperators/juno-NAME-OF-YOUR-PACKAGE
     ```

You can also install Turbo globally and run the commands directly:

```bash
pnpm add -g turbo
turbo build
```

Or just use `pnpx`:

```bash
pnpx turbo build
```

We emphasize using Turbo commands for most tasks to ensure consistency and efficiency. The Juno project follows a monorepo pattern, facilitating shared dependencies and streamlined development across multiple packages.
