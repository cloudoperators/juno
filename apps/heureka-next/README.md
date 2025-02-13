# Juno Heureka Next App

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

This app will eventually become a successor to the existing Heureka app.

## How to run locally?

1. Go to app directory:
   ```bash
   cd apps/heureka-next
   ```
2. If you are running the app for the first time, follow these steps. Otherwise, skip to step 3:
   1. Create `appProps.json` and change the configurations accordingly:
      ```bash
      cp appProps.template.json appProps.json
      ```
   2. Create `.env` file and change configurations accordingly:
      ```bash
      cp .env.template .env
      ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## How to update GraphQL types?

1. Go to app directory:
   ```bash
   cd apps/heureka-next
   ```
2. Update GraphQL types from the latest GraphQL schema:
   ```bash
   npm run generate:types
   ```

## How to run tests?

1. Go to app directory:
   ```bash
   cd apps/heureka-next
   ```
2. Run tests:
   ```bash
   npm run test
   ```

## Contributing

We welcome contributions from the community. Please follow our [contribution guidelines] to contribute to this project.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
