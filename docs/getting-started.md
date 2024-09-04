# Getting Started with Juno

Welcome to the Juno platform! This guide will help you get set up and start using Juno to develop your applications.

## Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- **Node.js** (version 18 or higher)
- **npm** (version 6 or higher)
- **Git**

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/cloudoperators/juno.git
   cd juno
   ```

2. **Install Dependencies:**

   ```bash
   npm install -f
   ```

3. **Setup Husky:**

   ```bash
   npm run prepare
   ```

4. **Available Turbo Commands:**

   - **Build:**
     ```bash
     npm run turbo build
     ```
   - **Lint:**
     ```bash
     npm run turbo lint
     ```
   - **Test:**
     ```bash
     npm run turbo test
     ```
   - **Dev:**
     ```bash
     npm run turbo dev
     ```
   - **Clean:**
     ```bash
     npm run turbo clean
     ```
   - **App:**
     To run a specific app, start by identifying the app name in the package.json file located within the relevant app folder. Once you have the app name, use it in the following command. For example, to run the exampleapp use `@cloudoperators/juno-app-example` as in the command below:

     ```bash
     npm run app -- @cloudoperators/juno-app-example
     ```

You can also install Turbo globally and run the commands directly:

```bash
npm install -g turbo
turbo build
```

Or just use `npx`:

```bash
npx turbo build
```

We emphasize using Turbo commands for most tasks to ensure consistency and efficiency. The Juno project follows a monorepo pattern, facilitating shared dependencies and streamlined development across multiple packages.
